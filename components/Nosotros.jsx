import { buildWhatsappLink } from "@/lib/config";

export default function Nosotros() {
  return (
    <section id="nosotros" className="section bg-brand-900 text-cream-50">
      <div className="container-x grid items-center gap-12 lg:grid-cols-2">
        <div className="relative">
          <img
            src="https://images.unsplash.com/photo-1488646953014-85cb44e25828?auto=format&fit=crop&w=1200&q=80"
            alt="Equipo VICO Travel Group"
            className="rounded-3xl object-cover shadow-2xl"
          />
          <div className="absolute -bottom-6 -right-6 hidden rounded-2xl bg-cream-50 p-5 text-brand-900 shadow-xl sm:block">
            <div className="font-serif text-3xl font-semibold">+10</div>
            <div className="text-[10px] font-semibold uppercase tracking-widest text-accent-600">años creando viajes</div>
          </div>
        </div>

        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-accent-400">
            Sobre nosotros
          </p>
          <h2 className="mt-3 font-serif text-3xl font-semibold tracking-tight sm:text-4xl md:text-5xl">
            Una agencia de Mendoza con atención 100% personalizada
          </h2>
          <p className="mt-5 text-cream-50/80">
            En <strong className="text-cream-50">VICO Travel Group</strong> creemos que cada viaje es único.
            Por eso te acompañamos desde la primera consulta: escuchamos lo que
            buscas, diseñamos opciones a medida y nos encargamos de todos los
            detalles. Nuestra mejor publicidad son los viajeros felices que vuelven
            y nos recomiendan.
          </p>

          <ul className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2">
            {[
              "Atención humana, no chatbots",
              "Mejor relación calidad–precio",
              "Soporte 24/7 mientras viajas",
              "Pagos en cuotas y financiación"
            ].map((b) => (
              <li key={b} className="flex items-center gap-3 text-cream-50/90">
                <span className="grid h-6 w-6 place-items-center rounded-full bg-accent-500 text-brand-900">
                  ✓
                </span>
                {b}
              </li>
            ))}
          </ul>

          <a
            href={buildWhatsappLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-whatsapp mt-8"
          >
            Hablá con un asesor
          </a>
        </div>
      </div>
    </section>
  );
}
