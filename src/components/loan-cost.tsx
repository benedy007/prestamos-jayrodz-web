import { Info } from "lucide-react";
import { cn } from "@/lib/utils";

/**
 * Costo y mora informados por Benedy (2026-10-02). Ley 358-05, art. 53.
 * OJO: la tabla de 13 semanas de `src/lib/site.ts` da 40,4 % (no 40 %);
 * pendiente de que Benedy decida si se ajusta la tabla o este texto.
 */
export function LoanCost({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "flex gap-3 rounded-xl border border-border-strong bg-paper-2 p-4 text-sm leading-relaxed text-ink",
        className,
      )}
    >
      <Info className="mt-0.5 size-5 shrink-0 text-green" aria-hidden="true" />
      <div className="space-y-1">
        <p>
          <strong className="font-semibold">Costo del préstamo:</strong> 40% del monto
          prestado, pagadero en 10 o 13 cuotas semanales.
        </p>
        <p>
          <strong className="font-semibold">Mora:</strong> 10% del monto atrasado por cada
          semana de atraso.
        </p>
      </div>
    </div>
  );
}
