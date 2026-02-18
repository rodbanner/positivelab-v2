import Image from "next/image";

type PveManVariant = "brand" | "teal" | "black" | "white";

interface PveManProps {
  size?: number;
  className?: string;
  opacity?: number;
  variant?: PveManVariant;
}

export function PveMan({ size = 48, className = "", opacity = 1, variant = "brand" }: PveManProps) {
  const srcs: Record<PveManVariant, string> = {
    brand: "/pveman-brand.png",
    teal: "/pveman-teal.png",
    white: "/pveman-white.png",
    black: "/pveman-black.png",
  };
  return (
    <Image
      src={srcs[variant]}
      alt="Positive Lab"
      width={size}
      height={Math.round(size * 1.7)}
      className={className}
      style={{
        opacity,
        width: size,
        height: "auto",
      }}
    />
  );
}
