import { buildWhatsappLink } from "@/lib/config";

const DESTINOS = [
  {
    nombre: "Brasil",
    descripcion:
      "Playas tropicales, samba y sol. Río, Buzios, Florianópolis y más.",
    img: "https://images.unsplash.com/photo-1483729558449-99ef09a8c325?auto=format&fit=crop&w=1200&q=80"
  },
  {
    nombre: "Caribe",
    descripcion:
      "Aguas turquesa y resorts all inclusive en Punta Cana, Cancún y Cuba.",
    img: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80"
  },
  {
    nombre: "Europa",
    descripcion:
      "Circuitos clásicos por España, Italia, Francia y Portugal a tu medida.",
    img: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=1200&q=80"
  },
  {
    nombre: "Mendoza",
    descripcion:
      "Vino, cordillera y aventura. Escapadas, alta montaña y bodegas.",
    img: "https://images.unsplash.com/photo-1505765050516-f72dcac9c60e?auto=format&fit=crop&w=1200&q=80"
  }
];

export default function Destinos() {
  return (
    <section id="destinos" className="section bg-cream-100">
      <div className="container-x">
        <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
          <div>
            <p className="eyebrow">Destinos destacados</p>
            <h2 className="section-title mt-3">Inspirate y elegí tu próximo viaje</h2>
            <p className="section-sub">
              Diseñamos cada itinerario según tu estilo, presupuesto y fechas.
            </p>
          </div>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {DESTINOS.map((d) => (
            <article key={d.nombre} className="card group flex flex-col">
              <div className="relative h-56 overflow-hidden">
                <img
                  src={d.img}
                  alt={d.nombre}
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-900/70 via-brand-900/10 to-transparent" />
                <h3 className="absolute bottom-3 left-4 font-serif text-xl font-semibold text-cream-50 drop-shadow">
                  {d.nombre}
                </h3>
              </div>
              <div className="flex flex-1 flex-col gap-4 p-5">
                <p className="text-sm text-brand-900/70">{d.descripcion}</p>
                <a
                  href={buildWhatsappLink(
                    `Hola VICO Travel, me interesa cotizar un viaje a ${d.nombre}.`
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-auto inline-flex w-full items-center justify-center rounded-full bg-brand-900 px-4 py-2.5 text-sm font-semibold text-cream-50 transition hover:bg-brand-700"
                >
                  Consultar
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
