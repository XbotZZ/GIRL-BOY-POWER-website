import Image from "next/image";

interface LogoProps {
  className?: string;
  variant?: "default" | "light";
}

export function Logo({ className = "" }: LogoProps) {
  return (
    <Image
      src="/GIRL-BOY-POWER-website/logo-gbp.png"
      alt="GIRL & BOY POWER - Spa & Bien-Être"
      width={512}
      height={512}
      className={className}
      style={{ objectFit: "contain" }}
    />
  );
}
