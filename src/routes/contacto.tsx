import { createFileRoute } from "@tanstack/react-router";
import { Clock, Instagram, MapPin, Phone } from "lucide-react";
import { SectionHeading } from "@/components/section-heading";
import { SiteShell } from "@/components/site-shell";
import { LoanForm } from "@/components/loan-form";
import { WhatsAppLink } from "@/components/whatsapp-link";
import {
  cities,
  defaultWaMessage,
  pageHead,
  site,
} from "@/lib/site";

export const Route = createFileRoute("/contacto")({
  head: () =>
    pageHead(
      "/contacto",
      "Contacto · JAYRODZ & ASOCIADOS SRL",
      "Escríbele a Jayrodz por WhatsApp 829-525-3411 o Instagram @prestamos.jayrodz. Préstamos semanales en República Dominicana.",
    ),
  component: ContactoPage,
});

function ContactoPage() {
  return (
    <SiteShell>
      <main className="mx-auto grid max-w-6xl gap-12 px-5 py-14 sm:px-8 lg:grid-cols-2 lg:py-20">
        <div>
          <SectionHeading
            eyebrow="Contacto"
            title="Escríbenos. Te respondemos."
            lede="WhatsApp es el camino más rápido. También puedes llenar la solicitud y te llega el mensaje armado."
          />

          <ul className="mt-10 space-y-5">
            <li>
              <WhatsAppLink
                message={defaultWaMessage}
                className="flex items-start gap-4 hover:opacity-80"
              >
                <span className="flex size-10 items-center justify-center rounded-sm bg-paper-2 text-green">
                  <Phone className="size-4" />
                </span>
                <span>
                  <span className="block text-kicker font-medium uppercase tracking-kicker text-muted">
                    WhatsApp
                  </span>
                  <span className="text-ink">{site.phoneDisplay}</span>
                </span>
              </WhatsAppLink>
            </li>
            <li>
              <a
                href={site.instagramHref}
                target="_blank"
                rel="noreferrer"
                className="flex items-start gap-4 hover:opacity-80"
              >
                <span className="flex size-10 items-center justify-center rounded-sm bg-paper-2 text-green">
                  <Instagram className="size-4" />
                </span>
                <span>
                  <span className="block text-kicker font-medium uppercase tracking-kicker text-muted">
                    Instagram
                  </span>
                  <span className="text-ink">{site.instagram}</span>
                </span>
              </a>
            </li>
            <li className="flex items-start gap-4">
              <span className="flex size-10 items-center justify-center rounded-sm bg-paper-2 text-green">
                <MapPin className="size-4" />
              </span>
              <span>
                <span className="block text-kicker font-medium uppercase tracking-kicker text-muted">
                  Cobertura
                </span>
                <span className="text-ink">
                  {cities.length} localidades en República Dominicana
                </span>
              </span>
            </li>
            <li className="flex items-start gap-4">
              <span className="flex size-10 items-center justify-center rounded-sm bg-paper-2 text-green">
                <Clock className="size-4" />
              </span>
              <span>
                <span className="block text-kicker font-medium uppercase tracking-kicker text-muted">
                  Atención
                </span>
                <span className="text-ink">Lunes a sábado · WhatsApp todo el día</span>
              </span>
            </li>
          </ul>

          <p className="mt-6 text-sm text-muted">{site.rncLine}</p>
          <img
            src="/images/local.jpg"
            alt="Local de atención Jayrodz"
            className="mt-10 aspect-wide w-full rounded-xl object-cover"
          />
        </div>

        <div>
          <LoanForm />
        </div>
      </main>
    </SiteShell>
  );
}
