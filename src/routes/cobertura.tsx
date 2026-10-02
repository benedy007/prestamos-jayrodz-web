import { createFileRoute, Link } from "@tanstack/react-router";
import { ResponsiveImage } from "@/components/responsive-image";
import { halfColumnSizes, images } from "@/lib/images";
import { MapPin } from "lucide-react";
import { SectionHeading } from "@/components/section-heading";
import { SiteShell } from "@/components/site-shell";
import { Button } from "@/components/ui/button";
import { WhatsAppLink } from "@/components/whatsapp-link";
import { cities, coverageWaMessage, pageHead } from "@/lib/site";

export const Route = createFileRoute("/cobertura")({
  head: () =>
    pageHead(
      "/cobertura",
      "Localidades · JAYRODZ & ASOCIADOS SRL",
      "Cobertura de préstamos semanales de Jayrodz en 19 localidades de República Dominicana. Donde dice solo centro, no cubrimos las afueras.",
    ),
  component: CoberturaPage,
});

function CoberturaPage() {
  return (
    <SiteShell>
      <main>
        <section className="relative overflow-hidden">
          <ResponsiveImage
            set={images.pueblo}
            mobile={images.puebloMovil}
            sizes="100vw"
            priority
            alt="Pueblo dominicano"
            className="absolute inset-0 size-full object-cover"
          />
          <div className="absolute inset-0 bg-ink/60" />
          <div className="relative mx-auto max-w-6xl px-5 py-24 sm:px-8">
            <SectionHeading
              as="h1"
              invert
              eyebrow="Cobertura"
              title="Estamos cerca de ti."
              lede="Atendemos en estas localidades. Donde dice solo centro, no cubrimos las afueras."
            />
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-5 py-16 sm:px-8">
          <ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {cities.map((city) => (
              <li
                key={city.name}
                className="flex items-start gap-3 rounded-xl border border-border bg-paper px-4 py-4"
              >
                <MapPin className="mt-0.5 size-4 shrink-0 text-green" />
                <span>
                  <span className="block font-medium">{city.name}</span>
                  {city.centroOnly ? (
                    <span className="block text-sm text-muted">Solo centro</span>
                  ) : (
                    <span className="block text-sm text-muted">Cobertura local</span>
                  )}
                  <span className="mt-1 block text-sm text-muted">
                    Te confirmamos el día de visita por WhatsApp.
                  </span>
                  <span className="mt-2 flex flex-wrap gap-3 text-sm">
                    <a
                      href={`/solicitar?ciudad=${encodeURIComponent(city.name)}`}
                      className="font-medium text-green"
                    >
                      Solicitar
                    </a>
                    <WhatsAppLink
                      message={coverageWaMessage(city.name)}
                      className="font-medium text-green"
                    >
                      WhatsApp
                    </WhatsAppLink>
                  </span>
                </span>
              </li>
            ))}
          </ul>
          <p className="mt-10 max-w-2xl text-sm text-muted">
            ¿Tu pueblo no aparece? Escríbenos igual. Si no llegamos, te lo
            decimos claro.
          </p>
          <Button asChild className="mt-6">
            <Link to="/solicitar">Solicitar en mi ciudad</Link>
          </Button>
        </section>

        <section className="border-t border-border">
          <div className="mx-auto grid max-w-6xl gap-8 px-5 py-16 sm:px-8 lg:grid-cols-2">
            <ResponsiveImage
              set={images.local}
              sizes={halfColumnSizes}
              alt="Oficina local de Jayrodz"
              className="aspect-wide w-full rounded-xl object-cover"
            />
            <div className="flex flex-col justify-center">
              <h2 className="font-display text-section font-semibold tracking-display">
                Atención de persona a persona.
              </h2>
              <p className="mt-4 text-muted">
                No somos un banco lejano. Somos JAYRODZ & ASOCIADOS SRL: te
                escuchamos, evaluamos y te damos una cuota que puedas pagar.
              </p>
            </div>
          </div>
        </section>
      </main>
    </SiteShell>
  );
}
