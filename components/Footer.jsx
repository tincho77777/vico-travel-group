import { SITE, buildWhatsappLink } from "@/lib/config";
import VicoLogo from "./VicoLogo";

export default function Footer() {
  return (
    <footer id="contacto" className="bg-brand-900 text-cream-50/85">
      <div className="container-x grid gap-10 py-16 lg:grid-cols-4">
        <div className="lg:col-span-2">
          <div className="flex items-center gap-3">
            <VicoLogo className="h-12 w-12 ring-1 ring-cream-50/20" />
            <div>
              <div className="font-serif text-xl font-semibold text-cream-50">
                {SITE.brand}
              </div>
              <div className="text-xs uppercase tracking-[0.25em] text-accent-400">
                {SITE.tagline}
              </div>
            </div>
          </div>
          <p className="mt-5 max-w-md text-sm text-cream-50/70">
            Agencia de viajes en {SITE.city}. Diseñamos experiencias a medida
            con asesoramiento personalizado, antes, durante y después de tu
            viaje.
          </p>
          <p className="mt-3 text-xs uppercase tracking-widest text-cream-50/50">
            {SITE.legajo}
          </p>
        </div>

        <div>
          <h4 className="text-xs font-semibold uppercase tracking-[0.25em] text-accent-400">
            Contacto
          </h4>
          <ul className="mt-4 space-y-2 text-sm">
            <li>
              <a
                href={buildWhatsappLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-cream-50"
              >
                WhatsApp:{" "}
                <strong className="text-cream-50">{SITE.whatsappDisplay}</strong>
              </a>
            </li>
            <li>{SITE.email}</li>
            <li>{SITE.address}</li>
            <li>
              <a
                href={SITE.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 hover:text-cream-50"
              >
                <InstagramIcon /> {SITE.instagramHandle}
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="text-xs font-semibold uppercase tracking-[0.25em] text-accent-400">
            Navegación
          </h4>
          <ul className="mt-4 grid grid-cols-1 gap-2 text-sm">
            <li><a href="#destinos" className="hover:text-cream-50">Destinos</a></li>
            <li><a href="#como-trabajamos" className="hover:text-cream-50">Cómo trabajamos</a></li>
            <li><a href="#cotizar" className="hover:text-cream-50">Cotizar</a></li>
            <li><a href="#testimonios" className="hover:text-cream-50">Testimonios</a></li>
            <li><a href="#nosotros" className="hover:text-cream-50">Nosotros</a></li>
          </ul>
        </div>
      </div>

      <div className="border-t border-cream-50/10">
        <div className="container-x flex flex-col items-center justify-between gap-3 py-6 text-xs text-cream-50/50 sm:flex-row">
          <p>© {new Date().getFullYear()} {SITE.brand}. Todos los derechos reservados.</p>
          <p>Hecho con ♥ en Mendoza</p>
        </div>
      </div>
    </footer>
  );
}

function InstagramIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4 fill-current" aria-hidden>
      <path d="M12 2.2c3.2 0 3.584.012 4.85.07 1.17.054 1.805.249 2.227.413.56.218.96.477 1.382.9.422.422.682.822.9 1.382.164.422.36 1.057.412 2.227.058 1.265.07 1.645.07 4.85s-.012 3.585-.07 4.85c-.054 1.17-.249 1.805-.413 2.227a3.73 3.73 0 0 1-.9 1.382 3.73 3.73 0 0 1-1.382.9c-.422.164-1.057.36-2.227.412-1.265.058-1.645.07-4.85.07s-3.585-.012-4.85-.07c-1.17-.054-1.805-.249-2.227-.413a3.73 3.73 0 0 1-1.382-.9 3.73 3.73 0 0 1-.9-1.382c-.164-.422-.36-1.057-.412-2.227C2.212 15.585 2.2 15.205 2.2 12s.012-3.585.07-4.85c.054-1.17.249-1.805.413-2.227.218-.56.477-.96.9-1.382.422-.422.822-.682 1.382-.9.422-.164 1.057-.36 2.227-.412C8.415 2.212 8.795 2.2 12 2.2zm0 1.8c-3.15 0-3.51.012-4.74.068-1.07.05-1.65.227-2.04.378-.51.198-.876.435-1.26.819a3.39 3.39 0 0 0-.819 1.26c-.151.39-.328.97-.378 2.04C2.712 9.49 2.7 9.85 2.7 13s.012 3.51.068 4.74c.05 1.07.227 1.65.378 2.04.198.51.435.876.819 1.26.384.384.75.621 1.26.819.39.151.97.328 2.04.378 1.23.056 1.59.068 4.74.068s3.51-.012 4.74-.068c1.07-.05 1.65-.227 2.04-.378.51-.198.876-.435 1.26-.819.384-.384.621-.75.819-1.26.151-.39.328-.97.378-2.04.056-1.23.068-1.59.068-4.74s-.012-3.51-.068-4.74c-.05-1.07-.227-1.65-.378-2.04a3.39 3.39 0 0 0-.819-1.26 3.39 3.39 0 0 0-1.26-.819c-.39-.151-.97-.328-2.04-.378C15.51 4.012 15.15 4 12 4zm0 3.06a4.94 4.94 0 1 1 0 9.88 4.94 4.94 0 0 1 0-9.88zm0 1.8a3.14 3.14 0 1 0 0 6.28 3.14 3.14 0 0 0 0-6.28zm5.13-2.13a1.16 1.16 0 1 1 0 2.32 1.16 1.16 0 0 1 0-2.32z" />
    </svg>
  );
}
