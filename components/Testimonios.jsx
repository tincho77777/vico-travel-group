const TESTIMONIOS = [
  {
    nombre: "Lucía M.",
    viaje: "Luna de miel · Caribe",
    texto:
      "Nos armaron la luna de miel soñada. Atención impecable y siempre disponibles ante cualquier duda."
  },
  {
    nombre: "Federico R.",
    viaje: "Familia · Brasil",
    texto:
      "Viajamos con los chicos a Brasil y todo salió perfecto. Ahorro real y cero estrés en la organización."
  },
  {
    nombre: "Sofía & Diego",
    viaje: "Aniversario · Europa",
    texto:
      "El itinerario por Europa fue mágico. Cada detalle pensado, hoteles geniales y un acompañamiento de 10."
  }
];

export default function Testimonios() {
  return (
    <section id="testimonios" className="section bg-cream-100">
      <div className="container-x">
        <div className="max-w-2xl">
          <p className="eyebrow">Testimonios</p>
          <h2 className="section-title mt-3">Viajeros felices nos recomiendan</h2>
          <p className="section-sub">
            Historias reales de clientes que confiaron en nosotros para diseñar
            sus viajes.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
          {TESTIMONIOS.map((t) => (
            <figure
              key={t.nombre}
              className="flex h-full flex-col rounded-2xl border border-brand-900/10 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="flex items-center gap-1 text-accent-500" aria-label="5 estrellas">
                {Array.from({ length: 5 }).map((_, i) => (
                  <svg key={i} viewBox="0 0 20 20" className="h-5 w-5 fill-current">
                    <path d="M10 1.5l2.7 5.46 6.03.88-4.36 4.25 1.03 6L10 15.27 4.6 18.09l1.03-6L1.27 7.84l6.03-.88L10 1.5z" />
                  </svg>
                ))}
              </div>
              <blockquote className="mt-4 grow font-serif text-lg leading-relaxed text-brand-900/85">
                “{t.texto}”
              </blockquote>
              <figcaption className="mt-6 border-t border-brand-900/10 pt-4">
                <div className="font-semibold text-brand-900">{t.nombre}</div>
                <div className="text-sm text-brand-900/55">{t.viaje}</div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
