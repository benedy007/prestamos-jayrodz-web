import { createFileRoute } from "@tanstack/react-router";
import { SectionHeading } from "@/components/section-heading";
import { SiteShell } from "@/components/site-shell";
import { WhatsAppLink } from "@/components/whatsapp-link";
import { fraudNotice, pageHead, privacyWaMessage, site } from "@/lib/site";

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
          as="h1"
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
          <p>
            Al enviar la solicitud nos autorizas, de forma expresa, a tratar tus
            datos personales y a consultar tu historial en un buró de crédito
            solo para evaluar el préstamo (Ley 172-13 de protección de datos).
            Sin esa autorización no podemos evaluar la solicitud.
          </p>
          <p>
            Mientras llenas el formulario, los datos se guardan temporalmente
            en este navegador (no en un servidor de la web) para que no los
            pierdas si cambias de pantalla. Se borran al enviar la solicitud por
            WhatsApp o al cerrar la pestaña.
          </p>
          <p>
            Para evaluar tu solicitud consultamos tu historial crediticio a
            través de nuestro sistema {site.creditSystem}, conectado a un buró de
            crédito.
          </p>
          <p>
            Conservamos tus datos mientras el préstamo esté vigente, es decir,
            mientras exista la deuda.
          </p>
          <p>
            Puedes pedir acceso, corrección o eliminación de tus datos
            escribiéndonos por WhatsApp al{" "}
            <WhatsAppLink
              message={privacyWaMessage}
              className="font-medium text-green underline underline-offset-2"
            >
              {site.phoneDisplay}
            </WhatsAppLink>
            . Te respondemos por el mismo medio.
          </p>
          <p>{fraudNotice}</p>
          <p>La aprobación está sujeta a evaluación.</p>
        </div>
      </main>
    </SiteShell>
  );
}
