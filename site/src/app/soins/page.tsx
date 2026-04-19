import {
  AnimatedSection,
  StaggerContainer,
  StaggerItem,
} from "@/components/AnimatedSection";
import { ProductCard } from "@/components/ProductCard";
import { Newsletter } from "@/components/Newsletter";
import { getProductsByUniverse } from "@/lib/products";
import Image from "next/image";
import { Drop, Leaf, ShieldCheck, Sparkle } from "@phosphor-icons/react/dist/ssr";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Soins Homme & Mixte | GIRL & BOY POWER",
  description:
    "Nouvelle collection 2026-2027 inspirée des Sources de la Douix. Rituels de rasage, soins visage, baumes et packs signatures — disponibles à l'unité ou en coffrets.",
};

const pillars = [
  {
    Icon: Leaf,
    title: "Naturalité exigeante",
    desc: "Huile d'argan, aloe vera, charbon actif, beurre de karité bio, acide hyaluronique végétal.",
  },
  {
    Icon: Drop,
    title: "Inspiration Sources de la Douix",
    desc: "La pureté d'une eau vive qui jaillit au cœur de Châtillon-sur-Seine, signature naturelle de la maison.",
  },
  {
    Icon: Sparkle,
    title: "Efficacité & sensorialité",
    desc: "Des textures pensées pour le plaisir quotidien, sans compromis sur les actifs.",
  },
  {
    Icon: ShieldCheck,
    title: "Soin pour tous",
    desc: "Des rituels accessibles à chaque peau et à chaque identité, hommes comme femmes.",
  },
];

export default function SoinsIndexPage() {
  const all = getProductsByUniverse("soins");
  const individuals = all.filter((p) => !p.isCoffret);
  const packs = all.filter((p) => p.isCoffret);

  return (
    <>
      <section className="relative pt-28 lg:pt-36">
        <div className="relative h-[55vh] min-h-[460px] overflow-hidden">
          <Image
            src="https://picsum.photos/seed/gbp-soins-hero/1920/1000"
            alt="Soins Homme & Mixte"
            fill
            priority
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-noir/40 via-noir/10 to-noir/70" />
          <div className="absolute inset-0 flex flex-col items-center justify-center px-6 text-center text-ivory">
            <p className="text-xs font-medium uppercase tracking-[0.25em]">
              Nouvelle collection 2026 · 2027
            </p>
            <h1 className="mt-4 max-w-4xl font-[var(--font-heading)] text-4xl font-light tracking-tight md:text-6xl lg:text-7xl">
              Soins Homme &amp; Mixte,{" "}
              <em className="italic">inspirés des sources</em>.
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-relaxed text-ivory/80 md:text-lg">
              Fidèles à notre identité, nos créations puisent leur inspiration
              dans la pureté et l&apos;authenticité des Sources de la Douix.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <AnimatedSection>
            <div className="text-center">
              <p className="text-xs font-medium uppercase tracking-[0.2em] text-rose-deep">
                Notre mission
              </p>
              <h2 className="mt-2 font-[var(--font-heading)] text-3xl font-light tracking-tight text-noir md:text-5xl">
                Des rituels accessibles à tous
              </h2>
            </div>
          </AnimatedSection>

          <StaggerContainer className="mt-14 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {pillars.map((p) => (
              <StaggerItem key={p.title}>
                <div className="rounded-3xl border border-sand bg-ivory p-8">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-cream text-rose-deep">
                    <p.Icon size={22} weight="light" />
                  </div>
                  <h3 className="mt-5 font-[var(--font-heading)] text-lg font-medium tracking-tight text-noir">
                    {p.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">
                    {p.desc}
                  </p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      <section id="rituels" className="bg-cream/40 py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <AnimatedSection>
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-rose-deep">
              À l&apos;unité
            </p>
            <h2 className="mt-2 font-[var(--font-heading)] text-3xl font-light tracking-tight text-noir md:text-4xl">
              Nos rituels de soin
            </h2>
            <p className="mt-4 max-w-2xl text-sm leading-relaxed text-muted md:text-base">
              Huiles, gels, crèmes, baumes, savon, rasoir de précision —
              l&apos;essentiel pour composer votre rituel sur mesure.
            </p>
          </AnimatedSection>

          <StaggerContainer className="mt-12 grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {individuals.map((p) => (
              <StaggerItem key={p.id}>
                <ProductCard product={p} />
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      <section id="packs" className="py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <AnimatedSection>
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-rose-deep">
              Packs &amp; coffrets
            </p>
            <h2 className="mt-2 font-[var(--font-heading)] text-3xl font-light tracking-tight text-noir md:text-4xl">
              Composer le rituel parfait
            </h2>
            <p className="mt-4 max-w-2xl text-sm leading-relaxed text-muted md:text-base">
              Des ensembles pensés pour offrir ou s&apos;offrir. Du pack
              découverte au Coffret des Origines, création signature en édition
              limitée.
            </p>
          </AnimatedSection>

          <StaggerContainer className="mt-12 grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3">
            {packs.map((p) => (
              <StaggerItem key={p.id}>
                <ProductCard product={p} />
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      <Newsletter />
    </>
  );
}
