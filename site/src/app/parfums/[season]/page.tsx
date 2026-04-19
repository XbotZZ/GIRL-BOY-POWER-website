import {
  AnimatedSection,
  StaggerContainer,
  StaggerItem,
} from "@/components/AnimatedSection";
import { ProductCard } from "@/components/ProductCard";
import { Newsletter } from "@/components/Newsletter";
import {
  getProductsBySeason,
  seasonLabels,
  seasonCollectionNames,
  type Season,
} from "@/lib/products";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, ArrowLeft } from "@phosphor-icons/react/dist/ssr";
import { notFound } from "next/navigation";
import type { Metadata } from "next";

const seasons: Season[] = ["printemps", "ete", "automne", "hiver"];

const seasonContent: Record<
  Season,
  { intro: string; image: string; mood: string; accent: string }
> = {
  printemps: {
    intro:
      "Avec l'arrivée du printemps, la nature s'éveille. Rosée d'Aube et Vent Clair célèbrent le renouveau : rose, jasmin, accords verts et bois clairs capturent la douceur des premières journées ensoleillées.",
    image: "https://picsum.photos/seed/gbp-printemps-hero/1920/900",
    mood: "Printemps · Source d'Aurore",
    accent: "text-rose-deep",
  },
  ete: {
    intro:
      "Une fragrance solaire et gourmande. Lumière de Perle et Vague Azur évoquent la chaleur du sable doré, les fleurs tropicales et la fraîcheur des brises marines.",
    image: "https://picsum.photos/seed/gbp-ete-hero/1920/900",
    mood: "Été · Source d'Aurore",
    accent: "text-azure-deep",
  },
  automne: {
    intro:
      "L'atmosphère cosy des feuilles dorées. Feuille d'Or et Bois Ambré révèlent la douceur de la cannelle, l'élégance des agrumes épicés et la profondeur des bois nobles.",
    image: "https://picsum.photos/seed/gbp-automne-hero/1920/900",
    mood: "Automne · Souffle d'Ambre",
    accent: "text-rose-deep",
  },
  hiver: {
    intro:
      "L'élégance glacée des paysages givrés. Rose de Givre et Bois Polaire, deux fragrances raffinées : l'une poudrée et lumineuse, l'autre boisée et intense.",
    image: "https://picsum.photos/seed/gbp-hiver-hero/1920/900",
    mood: "Hiver · Éclat d'Hiver",
    accent: "text-azure-deep",
  },
};

export function generateStaticParams() {
  return seasons.map((season) => ({ season }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ season: string }>;
}): Promise<Metadata> {
  const { season } = await params;
  if (!seasons.includes(season as Season)) {
    return { title: "Collection introuvable" };
  }
  const s = season as Season;
  return {
    title: `${seasonCollectionNames[s]} | GIRL & BOY POWER`,
    description: seasonContent[s].intro,
  };
}

export default async function ParfumSeasonPage({
  params,
}: {
  params: Promise<{ season: string }>;
}) {
  const { season } = await params;
  if (!seasons.includes(season as Season)) notFound();
  const s = season as Season;
  const content = seasonContent[s];
  const parfums = getProductsBySeason(s);
  const individuals = parfums.filter((p) => !p.isCoffret);
  const coffrets = parfums.filter((p) => p.isCoffret);

  return (
    <>
      <section className="relative pt-28 lg:pt-36">
        <div className="relative h-[50vh] min-h-[420px] overflow-hidden">
          <Image
            src={content.image}
            alt={seasonCollectionNames[s]}
            fill
            priority
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-noir/30 via-noir/10 to-noir/60" />
          <div className="absolute inset-0 flex flex-col items-center justify-center px-6 text-center text-ivory">
            <p className="text-xs font-medium uppercase tracking-[0.25em]">
              {content.mood}
            </p>
            <h1 className="mt-4 font-[var(--font-heading)] text-4xl font-light tracking-tight md:text-6xl lg:text-7xl">
              {seasonCollectionNames[s]}
            </h1>
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-28">
        <div className="mx-auto max-w-3xl px-6 text-center lg:px-8">
          <AnimatedSection>
            <p
              className={`text-xs font-medium uppercase tracking-[0.2em] ${content.accent}`}
            >
              {seasonLabels[s]}
            </p>
            <h2 className="mt-3 font-[var(--font-heading)] text-3xl font-light italic tracking-tight text-noir md:text-4xl">
              {content.intro}
            </h2>
          </AnimatedSection>
        </div>
      </section>

      <section className="bg-cream/40 py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <AnimatedSection>
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-rose-deep">
              Les fragrances
            </p>
            <h2 className="mt-2 font-[var(--font-heading)] text-3xl font-light tracking-tight text-noir md:text-4xl">
              Pour elles, pour eux
            </h2>
          </AnimatedSection>

          <StaggerContainer className="mt-12 grid grid-cols-1 gap-10 sm:grid-cols-2">
            {individuals.map((p) => (
              <StaggerItem key={p.id}>
                <ProductCard product={p} />
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {coffrets.length > 0 && (
        <section className="py-20 lg:py-28">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <AnimatedSection>
              <p className="text-xs font-medium uppercase tracking-[0.2em] text-rose-deep">
                Coffret duo
              </p>
              <h2 className="mt-2 font-[var(--font-heading)] text-3xl font-light tracking-tight text-noir md:text-4xl">
                À offrir ou à se faire offrir
              </h2>
            </AnimatedSection>

            <StaggerContainer className="mt-12 grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3">
              {coffrets.map((p) => (
                <StaggerItem key={p.id}>
                  <ProductCard product={p} />
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </section>
      )}

      <section className="border-t border-sand py-16">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 text-sm lg:flex-row lg:px-8">
          <Link
            href="/parfums"
            className="inline-flex items-center gap-2 text-charcoal transition-colors hover:text-rose-deep"
          >
            <ArrowLeft size={14} weight="bold" />
            Toutes les collections
          </Link>
          <div className="flex gap-4">
            {seasons
              .filter((x) => x !== s)
              .map((other) => (
                <Link
                  key={other}
                  href={`/parfums/${other}`}
                  className="inline-flex items-center gap-2 rounded-full border border-sand px-5 py-2 text-xs font-medium uppercase tracking-[0.15em] text-charcoal transition-colors hover:border-rose-deep hover:text-rose-deep"
                >
                  {seasonLabels[other]}
                  <ArrowRight size={10} weight="bold" />
                </Link>
              ))}
          </div>
        </div>
      </section>

      <Newsletter />
    </>
  );
}
