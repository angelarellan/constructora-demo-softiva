import { SITE } from '../data/site'

function WhatsAppFloating() {
  return (
    <a
      href={SITE.whatsapp.urlWithMessage}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chatear por WhatsApp con Construcciones Rolón (se abre en una pestaña nueva)"
      className="group fixed bottom-5 right-5 z-50 flex h-16 w-16 items-center justify-center animate-wa-bounce"
    >
      <span
        className="absolute inset-0 rounded-full bg-[#25D366] animate-pulse-ring"
        aria-hidden="true"
      />
      <span className="relative flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-card transition-transform group-hover:scale-105">
        <svg
          viewBox="0 0 32 32"
          className="h-8 w-8"
          fill="currentColor"
          aria-hidden="true"
        >
          <path d="M16.004 3C9.377 3 4 8.373 4 15c0 2.386.7 4.61 1.91 6.48L4 29l7.71-1.87A11.94 11.94 0 0 0 16.004 27C22.63 27 28 21.627 28 15S22.63 3 16.004 3Zm0 21.75a9.7 9.7 0 0 1-4.95-1.36l-.355-.21-4.575 1.11 1.13-4.46-.232-.365A9.68 9.68 0 0 1 5.75 15c0-5.653 4.6-10.25 10.254-10.25S26.25 9.347 26.25 15 21.657 24.75 16.004 24.75Zm5.62-7.66c-.307-.154-1.816-.897-2.098-1-.281-.103-.486-.154-.69.154-.204.307-.79 1-.968 1.205-.178.205-.357.23-.663.077-.307-.154-1.295-.477-2.467-1.523-.912-.813-1.528-1.818-1.707-2.125-.178-.307-.019-.473.135-.626.138-.138.307-.358.46-.537.154-.18.204-.307.307-.512.102-.205.05-.384-.026-.538-.077-.154-.69-1.662-.945-2.277-.249-.6-.502-.518-.69-.528l-.588-.01c-.204 0-.537.077-.818.384-.281.307-1.073 1.05-1.073 2.56 0 1.51 1.098 2.97 1.252 3.175.154.205 2.16 3.298 5.234 4.625.732.316 1.303.505 1.748.647.734.234 1.402.2 1.93.121.589-.088 1.816-.743 2.072-1.46.256-.717.256-1.332.18-1.46-.077-.128-.281-.205-.588-.359Z" />
        </svg>
      </span>
    </a>
  )
}

export default WhatsAppFloating
