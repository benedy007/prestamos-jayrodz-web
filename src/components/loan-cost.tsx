import { Info } from "lucide-react";
import { cn } from "@/lib/utils";

/**
 * Costo y mora informados por Benedy (2026-10-02). Ley 358-05, art. 53.
 * Tabla oficial confirmada por Benedy: 10 semanas = 40 %, 13 semanas = 40,4 %.
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
          prestado, a pagar en 10 cuotas semanales, o 40,4% a pagar en 13 cuotas
          semanales.
        </p>
        <p>
          <strong className="font-semibold">Mora:</strong> 10% del monto atrasado por cada
          semana de atraso.
        </p>
      </div>
    </div>
  );
}
