import { cn } from "@/lib/utils";

export function Mark({ className }: { className?: string }) {
  return (
    <img
      src="/images/logo.png"
      alt="JAYRODZ & ASOCIADOS SRL"
      className={cn("size-12 object-contain", className)}
    />
  );
}
