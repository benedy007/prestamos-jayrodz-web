import { createFileRoute } from "@tanstack/react-router";
import { LoanForm } from "@/components/loan-form";
import { Requirements } from "@/components/requirements";
import { SectionHeading } from "@/components/section-heading";
import { SiteShell } from "@/components/site-shell";
import { fraudNotice, pageHead, site } from "@/lib/site";

export const Route = createFileRoute("/solicitar")({
  head: () =>
    pageHead(
      "/solicitar",
      "Solicitar préstamo · JAYRODZ & ASOCIADOS SRL",
      "Llena la solicitud de préstamo semanal. Revisas tus datos y la envías por WhatsApp al 829-525-3411. Garante requerido.",
    ),
  component: SolicitarPage,
});

function SolicitarPage() {
  return (
    <SiteShell>
      <main className="mx-auto grid max-w-6xl gap-12 px-5 py-14 sm:px-8 lg:grid-cols-2 lg:py-20">
        <div>
          <SectionHeading
            eyebrow="Solicitud"
            title="Pide tu préstamo desde aquí."
            lede="Completa el formulario. Al enviarlo te armamos el mensaje para WhatsApp y un asesor te confirma."
          />
          <div className="mt-10">
            <LoanForm />
          </div>
        </div>

        <aside className="space-y-6 lg:pt-28">
          <img
            src="/images/asesora.jpg"
            alt="Asesora de Jayrodz"
            className="aspect-portrait w-full max-w-md rounded-xl object-cover"
          />
          <div className="rounded-xl border border-border p-6">
            <p className="text-kicker font-medium uppercase tracking-kicker text-muted">
              WhatsApp
            </p>
            <p className="mt-3 font-display text-2xl font-semibold">
              {site.phoneDisplay}
            </p>
            <p className="mt-2 text-sm text-muted">
              El mensaje se abre solo cuando llenas todos los datos y los
              revisas. Así nos llega la solicitud completa.
            </p>
          </div>
          <Requirements compact />
          <p className="text-xs text-subtle">{site.rncLine}</p>
          <p className="text-xs text-subtle">{fraudNotice}</p>
        </aside>
      </main>
    </SiteShell>
  );
}
