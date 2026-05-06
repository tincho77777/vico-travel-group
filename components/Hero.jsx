import { SITE, buildWhatsappLink } from "@/lib/config";
import VicoLogo from "./VicoLogo";

export default function Hero() {
  return (
    <section className="relative isolate overflow-hidden">
      {/* Imagen de fondo de viajes */}
      <div className="absolute inset-0 -z-10">
        <img
          src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=2000&q=80"
          alt="Playa paradisíaca"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-brand-900/90 via-brand-900/75 to-brand-700/55" />
      </div>

      <div className="container-x flex min-h-[88vh] flex-col items-start justify-center py-24 text-cream-50">
        <div className="animate-fade-up flex items-center gap-3">
          <VicoLogo className="h-12 w-12 ring-1 ring-cream-50/40" />
          <span className="rounded-full border border-cream-50/30 bg-white/10 px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.25em] text-cream-50 backdrop-blur">
            Agencia de viajes · Mendoza
          </span>
        </div>

        <h1 className="mt-6 max-w-3xl animate-fade-up font-serif text-4xl font-semibold leading-[1.05] tracking-tight sm:text-5xl md:text-6xl">
          Vivimos para crear{" "}
          <span className="italic text-accent-400">viajes inolvidables</span>
          <br className="hidden sm:block" /> al mejor precio.
        </h1>

        <p className="mt-5 max-w-2xl animate-fade-up text-lg text-cream-50/90 sm:text-xl">
          {SITE.tagline}. Asesoramiento personalizado para que viajes
          tranquilo, desde Mendoza al mundo.
        </p>

        <div className="mt-8 flex animate-fade-up flex-wrap items-center gap-3">
          <a
            href={buildWhatsappLink(
              "Hola VICO Travel, quiero cotizar mi viaje 🌴"
            )}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-whatsapp text-base"
          >
            <WhatsAppIcon /> Cotizá tu viaje por WhatsApp
          </a>
          <a
            href="#destinos"
            className="btn-ghost border-cream-50/30 bg-white/10 text-cream-50 hover:bg-cream-50 hover:text-brand-900"
          >
            Ver destinos
          </a>
        </div>

        <div className="mt-12 grid w-full max-w-3xl animate-fade-up grid-cols-2 gap-6 sm:grid-cols-4">
          {[
            { k: "+10", v: "Años de experiencia" },
            { k: "49.3K", v: "Seguidores en IG" },
            { k: "24/7", v: "Soporte en viaje" },
            { k: "100%", v: "A medida" }
          ].map((s) => (
            <div
              key={s.v}
              className="rounded-2xl border border-cream-50/15 bg-white/5 p-4 backdrop-blur"
            >
              <div className="font-serif text-2xl font-semibold text-cream-50">
                {s.k}
              </div>
              <div className="text-xs uppercase tracking-wider text-cream-50/75">
                {s.v}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function WhatsAppIcon() {
  return (
    <svg viewBox="0 0 32 32" className="h-5 w-5 fill-current" xmlns="http://www.w3.org/2000/svg" aria-hidden>
      <path d="M16.003 3.2C8.94 3.2 3.2 8.94 3.2 16c0 2.257.59 4.464 1.71 6.41L3.2 28.8l6.55-1.71a12.79 12.79 0 0 0 6.252 1.612h.005c7.063 0 12.803-5.74 12.803-12.802 0-3.42-1.331-6.635-3.749-9.054A12.71 12.71 0 0 0 16.003 3.2zm0 23.448h-.004a10.63 10.63 0 0 1-5.418-1.484l-.388-.23-4.024 1.054 1.073-3.92-.253-.402a10.61 10.61 0 0 1-1.628-5.666c.002-5.872 4.778-10.648 10.646-10.648 2.844 0 5.516 1.108 7.527 3.122a10.58 10.58 0 0 1 3.118 7.532c-.003 5.872-4.78 10.642-10.65 10.642zm5.838-7.97c-.32-.16-1.893-.934-2.187-1.04-.293-.107-.507-.16-.72.16-.214.32-.826 1.04-1.012 1.253-.187.214-.373.24-.693.08-.32-.16-1.351-.498-2.574-1.589-.952-.85-1.594-1.898-1.78-2.218-.187-.32-.02-.493.14-.652.144-.144.32-.373.48-.56.16-.187.214-.32.32-.534.107-.214.054-.4-.026-.56-.08-.16-.72-1.737-.987-2.378-.26-.625-.524-.54-.72-.55l-.613-.011c-.214 0-.56.08-.853.4-.293.32-1.12 1.094-1.12 2.667 0 1.573 1.146 3.094 1.306 3.307.16.214 2.255 3.443 5.464 4.83.764.33 1.36.527 1.825.674.766.244 1.464.21 2.016.128.615-.092 1.893-.774 2.16-1.521.267-.748.267-1.388.187-1.521-.08-.134-.293-.214-.613-.374z" />
    </svg>
  );
}
