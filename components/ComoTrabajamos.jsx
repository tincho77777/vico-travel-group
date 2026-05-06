const PASOS = [
  {
    n: "01",
    titulo: "Nos contás tu viaje",
    desc: "Compartinos destino, fechas, presupuesto y preferencias por WhatsApp."
  },
  {
    n: "02",
    titulo: "Te armamos una propuesta",
    desc: "Diseñamos un itinerario a medida con vuelos, hoteles y experiencias."
  },
  {
    n: "03",
    titulo: "Ajustamos juntos",
    desc: "Refinamos cada detalle hasta que la propuesta sea perfecta para vos."
  },
  {
    n: "04",
    titulo: "Reservás y viajás",
    desc: "Confirmamos todo y te acompañamos antes, durante y después del viaje."
  }
];

export default function ComoTrabajamos() {
  return (
    <section id="como-trabajamos" className="section bg-cream-50">
      <div className="container-x">
        <div className="max-w-2xl">
          <p className="eyebrow">Cómo trabajamos</p>
          <h2 className="section-title mt-3">Un proceso simple y transparente</h2>
          <p className="section-sub">
            Sin vueltas: te asesoramos paso a paso para que viajes tranquilo.
          </p>
        </div>

        <ol className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {PASOS.map((p, i) => (
            <li
              key={p.n}
              className="relative rounded-2xl border border-brand-900/10 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="flex items-center gap-3">
                <span className="grid h-12 w-12 place-items-center rounded-full bg-brand-900 font-serif text-lg font-semibold text-cream-50">
                  {p.n}
                </span>
                {i < PASOS.length - 1 && (
                  <span className="hidden h-px flex-1 bg-gradient-to-r from-brand-900/30 to-transparent lg:block" />
                )}
              </div>
              <h3 className="mt-5 font-serif text-lg font-semibold text-brand-900">{p.titulo}</h3>
              <p className="mt-2 text-sm text-brand-900/70">{p.desc}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
