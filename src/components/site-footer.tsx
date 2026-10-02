import { Link } from "@tanstack/react-router";
import { Mark } from "@/components/mark";
import { WhatsAppLink } from "@/components/whatsapp-link";
import {
  cities,
  defaultWaMessage,
  fraudNotice,
  navItems,
  site,
} from "@/lib/site";

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-ink text-paper">
      <div className="mx-auto grid max-w-6xl gap-12 px-5 py-16 sm:px-8 md:grid-cols-4">
        <div className="md:col-span-2">
          <div className="flex items-center gap-3">
            <Mark className="size-14" />
            <span>
              <span className="block font-display text-2xl font-semibold tracking-display">
                {site.legal}
              </span>
              <span className="text-sm text-gold">{site.tagline}</span>
            </span>
          </div>
          <p className="mt-4 max-w-sm text-sm leading-relaxed text-paper/70">
            Préstamos semanales rápidos, fáciles y sin complicaciones. Paga
            cómodo, semana a semana, en {cities.length} localidades de la
            República Dominicana.
          </p>
          <p className="mt-3 text-sm text-paper/80">{site.rncLine}</p>
        </div>

        <div>
          <p className="text-xs font-medium uppercase tracking-kicker text-paper/50">
            Sitio
          </p>
          <ul className="mt-4 space-y-2 text-sm text-paper/80">
            {navItems.map((item) => (
              <li key={item.to}>
                <Link to={item.to} className="hover:text-paper">
                  {item.label}
                </Link>
              </li>
            ))}
            <li>
              <Link to="/solicitar" className="hover:text-paper">
                Llenar formulario
              </Link>
            </li>
            <li>
              <Link to="/preguntas" className="hover:text-paper">
                Preguntas
              </Link>
            </li>
            <li>
              <Link to="/privacidad" className="hover:text-paper">
                Privacidad
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <p className="text-xs font-medium uppercase tracking-kicker text-paper/50">
            Contacto
          </p>
          <ul className="mt-4 space-y-2 text-sm text-paper/80">
            <li>
              <a href={site.phoneHref} className="hover:text-paper">
                {site.phoneDisplay}
              </a>
            </li>
            <li>
              <WhatsAppLink
                message={defaultWaMessage}
                className="hover:text-paper"
              >
                WhatsApp
              </WhatsAppLink>
            </li>
            <li>
              <a
                href={site.instagramHref}
                target="_blank"
                rel="noreferrer"
                className="hover:text-paper"
              >
                {site.instagram}
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-paper/10">
        <div className="mx-auto flex max-w-6xl flex-col gap-2 px-5 py-5 text-xs text-paper/55 sm:px-8">
          <p>{fraudNotice}</p>
          <div className="flex flex-col gap-2 sm:flex-row sm:justify-between">
            <p>{site.slogan}</p>
            <p>La aprobación está sujeta a evaluación.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}