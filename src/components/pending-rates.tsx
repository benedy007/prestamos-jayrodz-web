import { cn } from "@/lib/utils";

/**
 * TODO(Benedy): el código no tiene tasa de interés ni cargo por mora. La Ley
 * 358-05 (art. 53) pide informarlos en servicios a crédito. Reemplazar este
 * marcador con las cifras reales que confirme Benedy (y su abogado).
 * NO inventar valores.
 */
export function PendingRates({ className }: { className?: string }) {
  return (
    <p
      data-todo="tasa-mora"
      className={cn(
        "rounded-lg border-2 border-dashed border-gold bg-gold/10 p-3 text-sm text-ink",
        className,
      )}
    >
      <strong>TODO (Benedy):</strong> falta indicar la tasa de interés (mensual y anual), el cargo
      por mora o atraso y cómo se aplica cada cuota. Completar con datos reales antes de publicar.
    </p>
  );
}
