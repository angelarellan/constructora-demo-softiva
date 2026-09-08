#!/usr/bin/env node
// Redimensiona y comprime las fotos de la galería (public/assets/) leyendo
// siempre desde assets-originals/ (fuente intacta) para que el script sea
// idempotente: se puede correr las veces que haga falta sin ir perdiendo
// calidad en cada pasada.
import { existsSync, mkdirSync, statSync } from 'node:fs'
import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'
import sharp from 'sharp'

const __dirname = dirname(fileURLToPath(import.meta.url))
const ROOT = join(__dirname, '..')
const SOURCE_DIR = join(ROOT, 'assets-originals')
const OUTPUT_DIR = join(ROOT, 'public', 'assets')
const MAX_WIDTH = 1280
const JPEG_QUALITY = 75

const GALLERY_IMAGES = [
  'construccionesrolon1.jpg',
  'construccionesrolon2.jpg',
  'construccionesrolon3.jpg',
  'construccionesrolon4.jpg',
  'construccionesrolon5.jpg',
]

const kb = (bytes) => (bytes / 1024).toFixed(1)

async function compressGallery() {
  for (const file of GALLERY_IMAGES) {
    const srcPath = join(SOURCE_DIR, file)
    if (!existsSync(srcPath)) {
      console.warn(`⚠ No se encontró ${srcPath}, se omite.`)
      continue
    }
    const outPath = join(OUTPUT_DIR, file)
    const beforeSize = statSync(srcPath).size

    await sharp(srcPath)
      .resize({ width: MAX_WIDTH, withoutEnlargement: true })
      .jpeg({ quality: JPEG_QUALITY, mozjpeg: true })
      .toFile(outPath)

    const afterSize = statSync(outPath).size
    const savings = (100 - (afterSize / beforeSize) * 100).toFixed(0)
    console.log(`${file}: ${kb(beforeSize)}KB → ${kb(afterSize)}KB (-${savings}%)`)
  }
}

async function reencodeLogo() {
  // El logo ya pesa ~12KB y tiene detalle fino (texto pequeño) que se degrada
  // fácilmente con recompresión con pérdida, así que solo se prueba un
  // reencode LOSSLESS (mismos píxeles, contenedor más eficiente) y se
  // conserva el resultado únicamente si termina pesando menos que el
  // original. Nunca se aplica compresión con pérdida sobre este archivo.
  const file = 'logorolon.webp'
  const srcPath = join(SOURCE_DIR, file)
  if (!existsSync(srcPath)) return
  const outPath = join(OUTPUT_DIR, file)
  const tmpPath = outPath + '.tmp'
  const beforeSize = statSync(srcPath).size

  await sharp(srcPath).webp({ lossless: true }).toFile(tmpPath)
  const { renameSync, unlinkSync, copyFileSync } = await import('node:fs')
  const candidateSize = statSync(tmpPath).size

  if (candidateSize < beforeSize) {
    renameSync(tmpPath, outPath)
    console.log(`${file}: ${kb(beforeSize)}KB → ${kb(candidateSize)}KB (lossless, sin cambio de calidad)`)
  } else {
    unlinkSync(tmpPath)
    copyFileSync(srcPath, outPath)
    console.log(`${file}: sin cambios (${kb(beforeSize)}KB) — el original ya es más liviano que el reencode`)
  }
}

async function main() {
  if (!existsSync(SOURCE_DIR)) {
    console.error(`No existe ${SOURCE_DIR}. Ese directorio guarda los originales sin comprimir.`)
    process.exit(1)
  }
  mkdirSync(OUTPUT_DIR, { recursive: true })
  await compressGallery()
  await reencodeLogo()
}

main()
