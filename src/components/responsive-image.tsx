import { srcSet, type ImageSet } from "@/lib/images";
import { cn } from "@/lib/utils";

export function ResponsiveImage({
  set,
  mobile,
  alt,
  sizes,
  className,
  priority = false,
}: {
  set: ImageSet;
  /** Recorte alternativo para pantallas < 640 px (dirección de arte). */
  mobile?: ImageSet;
  alt: string;
  sizes: string;
  className?: string;
  /** true solo para la imagen LCP de la página: carga inmediata y prioridad alta. */
  priority?: boolean;
}) {
  const fallbackWidth = set.widths[Math.min(1, set.widths.length - 1)];
  return (
    <picture className="contents">
      {mobile?.avif ? (
        <source
          media="(max-width: 639px)"
          type="image/avif"
          srcSet={srcSet(mobile, "avif")}
          sizes="100vw"
          width={mobile.width}
          height={mobile.height}
        />
      ) : null}
      {mobile ? (
        <source
          media="(max-width: 639px)"
          type="image/webp"
          srcSet={srcSet(mobile, "webp")}
          sizes="100vw"
          width={mobile.width}
          height={mobile.height}
        />
      ) : null}
      {set.avif ? <source type="image/avif" srcSet={srcSet(set, "avif")} sizes={sizes} /> : null}
      <img
        src={`/images/${set.name}-${fallbackWidth}.webp`}
        srcSet={srcSet(set, "webp")}
        sizes={sizes}
        width={set.width}
        height={set.height}
        alt={alt}
        loading={priority ? "eager" : "lazy"}
        decoding={priority ? "sync" : "async"}
        fetchPriority={priority ? "high" : "auto"}
        className={cn(className)}
      />
    </picture>
  );
}
