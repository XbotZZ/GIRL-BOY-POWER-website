import {
  AnimatedSection,
  StaggerContainer,
  StaggerItem,
} from "@/components/AnimatedSection";
import { ProductCard } from "@/components/ProductCard";
import { Newsletter } from "@/components/Newsletter";
import { getProductsByUniverse } from "@/lib/products";
import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "JuliCath Bagagerie | GIRL & BOY POWER",
  description:
    "JuliCath — bagagerie de luxe intégrée à la maison GIRL & BOY POWER. Sacs de voyage, trousses, pochettes et petites maroquineries façonnées dans les cuirs les plus nobles.",
};

export default function JuliCathPage() {
  const products = getProductsByUniverse("julicath");
  const highlight = products[0];
  const rest = products.slice(1);

  return (
    <>
      <section className="relative pt-28 lg:pt-36">
        <div className="relative h-[60vh] min-h-[500px] overflow-hidden">
          <Image
            src="https://picsum.photos/seed/gbp-julicath-hero-full/1920/1100"
            alt="JuliCath Bagagerie"
            fill
            priority
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-noir/40 via-noir/20 to-noir/70" />
          <div className="absolute inset-0 flex flex-col items-center justify-center px-6 text-center text-ivory">
            <p className="text-xs font-medium uppercase tracking-[0.25em]">
              Maison de bagagerie · JuliCath
            </p>
            <h1 className="mt-4 max-w-4xl font-[var(--font-heading)] text-4xl font-light tracking-tight md:text-6xl lg:text-7xl">
              Le voyage,{" "}
              <em className="italic">façonné main</em>.
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-relaxed text-ivory/80 md:text-lg">
              Née de la fusion harmonieuse de deux prénoms, Julie et Cathy,
              JuliCath incarne une vision moderne de la bagagerie de luxe.
            </p>
          </div>
        </div>
      </section>

      <section className="py-24 lg:py-32">
        <div className="mx-auto max-w-5xl px-6 text-center lg:px-8">
          <AnimatedSection>
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-rose-deep">
              Notre savoir-faire
            </p>
            <h2 className="mt-3 font-[var(--font-heading)] text-3xl font-light italic tracking-tight text-noir md:text-4xl">
              Une exigence absolue : celle de transformer chaque déplacement en
              une <span className="not-italic text-rose-deep">expérience de
              raffinement</span>.
            </h2>
            <p className="mt-6 text-base leading-relaxed text-muted md:text-lg">
              Des courbes intemporelles de nos sacs de voyage à la finesse de
              notre petite maroquinerie, chaque pièce JuliCath est façonnée
              dans les cuirs les plus nobles. Aucun compromis entre
              l&apos;esthétique et la fonctionnalité.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {highlight && (
        <section className="bg-cream py-24 lg:py-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
              <AnimatedSection>
                <div className="relative aspect-[4/5] overflow-hidden rounded-3xl bg-sand/30">
                  <Image
                    src={highlight.image}
                    alt={highlight.name}
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                </div>
              </AnimatedSection>
              <AnimatedSection delay={0.15}>
                <p className="text-xs font-medium uppercase tracking-[0.2em] text-rose-deep">
                  Pièce signature
                </p>
                <h2 className="mt-3 font-[var(--font-heading)] text-3xl font-light tracking-tight text-noir md:text-5xl">
                  {highlight.name}
                </h2>
                <p className="mt-6 max-w-lg text-base leading-relaxed text-muted">
                  {highlight.description}
                </p>
                <div className="mt-8">
                  <ProductCard product={highlight} />
                </div>
              </AnimatedSection>
            </div>
          </div>
        </section>
      )}

      <section className="py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <AnimatedSection>
            <div className="text-center">
              <p className="text-xs font-medium uppercase tracking-[0.2em] text-rose-deep">
                La gamme
              </p>
              <h2 className="mt-2 font-[var(--font-heading)] text-3xl font-light tracking-tight text-noir md:text-5xl">
                Neuf pièces intemporelles
              </h2>
              <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-muted md:text-base">
                Du sac de voyage Julie au porte peigne Guilyann, chaque création
                JuliCath porte un prénom et raconte une part de notre histoire.
              </p>
            </div>
          </AnimatedSection>

          <StaggerContainer className="mt-14 grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3">
            {rest.map((p) => (
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
