import { Link, useRouterState } from "@tanstack/react-router";
import { WhatsAppLink } from "@/components/whatsapp-link";
import { defaultWaMessage } from "@/lib/site";

export function WaFloat() {
  const path = useRouterState({ select: (s) => s.location.pathname });
  const showWa = path !== "/solicitar" && path !== "/contacto";
  const pill =
    "inline-flex h-12 items-center rounded-full px-5 text-sm font-medium shadow-soft";

  return (
    <div className="fixed right-4 bottom-5 z-30 flex flex-col items-end gap-2 lg:hidden">
      {path === "/solicitar" ? null : (
        <Link to="/solicitar" className={`${pill} bg-green text-paper`}>
          Formulario
        </Link>
      )}
      {showWa ? (
        <WhatsAppLink
          message={defaultWaMessage}
          className={`${pill} bg-whatsapp text-paper`}
        >
          WhatsApp
        </WhatsAppLink>
      ) : null}
      {path === "/cobertura" ? null : (
        <Link to="/cobertura" className={`${pill} border border-border bg-paper text-ink`}>
          Zonas
        </Link>
      )}
      {path === "/planes" ? null : (
        <Link to="/planes" className={`${pill} bg-ink text-paper`}>
          Tabla
        </Link>
      )}
    </div>
  );
}