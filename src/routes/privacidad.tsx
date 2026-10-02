import { createFileRoute } from "@tanstack/react-router";
import { SectionHeading } from "@/components/section-heading";
import { SiteShell } from "@/components/site-shell";
import { fraudNotice, pageHead, site } from "@/lib/site";

const description =
  "Jayrodz usa la cédula solo para depurar el crédito. No pedimos depósitos, claves ni códigos.";

export const Route = createFileRoute("/privacidad")({
  head: () =>
    pageHead("/privacidad", "Privacidad · JAYRODZ & ASOCIADOS SRL", description),
  component: PrivacidadPage,
});

function PrivacidadPage() {
  return (
    <SiteShell>
      <main className="mx-auto max-w-3xl px-5 py-14 sm:px-8">
        <SectionHeading
          eyebrow="Privacidad"
          title="Tu información se queda en tu caso."
          lede={site.rncLine}
        />
        <div className="mt-8 space-y-4 text-sm leading-relaxed text-muted">
          <p>
            La cédula la pedimos solo para depurar el crédito. No la usamos para
            otra cosa y no la publicamos.
          </p>
          <p>
            El teléfono, la dirección, el trabajo y las referencias sirven para
            evaluarte y coordinar el pago. El mensaje se arma en tu teléfono y
            se envía por WhatsApp a {site.phoneDisplay}.
          </p>
          <p>{fraudNotice}</p>
          <p>La aprobación está sujeta a evaluación.</p>
        </div>
      </main>
    </SiteShell>
  );
}
