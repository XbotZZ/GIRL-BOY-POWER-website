import {
  AnimatedSection,
  StaggerContainer,
  StaggerItem,
} from "@/components/AnimatedSection";
import { ProductCard } from "@/components/ProductCard";
import { Newsletter } from "@/components/Newsletter";
import {
  getProductsByUniverse,
  seasonLabels,
  seasonCollectionNames,
  type Season,
} from "@/lib/products";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "@phosphor-icons/react/dist/ssr";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Parfums — Collections saisonnières | GIRL & BOY POWER",
  description:
    "Découvrez les parfums GIRL & BOY POWER : Source d'Aurore, Souffle d'Ambre, Éclat d'Hiver. Des fragrances féminines et masculines au fil des quatre saisons.",
};

const seasons: { slug: Season; image: string; accent: string }[] = [
  {
    slug: "printemps",
    image: "https://picsum.photos/seed/gbp-season-printemps/1200/1500",
    accent: "text-rose-deep",
  },
  {
    slug: "ete",
    image: "https://picsum.photos/seed/gbp-season-ete/1200/1500",
    accent: "text-azure-deep",
  },
  {
    slug: "automne",
    image: "https://picsum.photos/seed/gbp-season-automne/1200/1500",
    accent: "text-rose-deep",
  },
  {
    slug: "hiver",
    image: "https://picsum.photos/seed/gbp-season-hiver/1200/1500",
    accent: "text-azure-deep",
  },
];

export default function ParfumsIndexPage() {
  const parfums = getProductsByUniverse("parfums");

  return (
    <>
      <section className="relative overflow-hidden pb-16 pt-32 lg:pt-40">
        <div className="gradient-blob-rose pointer-events-none absolute -left-32 top-32 h-96 w-96 rounded-full blur-3xl" />
        <div className="gradient-blob-azure pointer-events-none absolute -right-32 top-20 h-96 w-96 rounded-full blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <AnimatedSection>
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-rose-deep">
              Maison de parfums
            </p>
            <h1 className="mt-3 max-w-3xl font-[var(--font-heading)] text-4xl font-light tracking-tight text-noir md:text-6xl lg:text-7xl">
              Un parfum pour chaque{" "}
              <em className="italic text-rose-deep">saison</em>.
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted md:text-lg">
              Quatre collections, huit fragrances individuelles et leurs
              coffrets duo. Des créations féminines et masculines pensées
              comme une balade olfactive au fil de l&apos;année.
            </p>
          </AnimatedSection>
        </div>
      </section>

      <section className="py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <StaggerContainer className="space-y-6">
            {seasons.map((s, index) => (
              <StaggerItem key={s.slug}>
                <Link
                  href={`/parfums/${s.slug}`}
                  className="group block overflow-hidden rounded-3xl bg-cream ring-1 ring-sand/60 transition-all duration-300 hover:ring-rose-deep/30"
                >
                  <div
                    className={`grid items-stretch lg:grid-cols-2 ${
                      index % 2 === 1 ? "lg:[&>*:first-child]:order-2" : ""
                    }`}
                  >
                    <div className="relative aspect-[4/3] overflow-hidden lg:aspect-auto lg:min-h-[420px]">
                      <Image
                        src={s.image}
                        alt={seasonCollectionNames[s.slug]}
                        fill
                        className="object-cover transition-transform duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] group-hover:scale-105"
                        sizes="(max-width: 1024px) 100vw, 50vw"
                      />
                    </div>
                    <div className="flex flex-col justify-center p-8 lg:p-14">
                      <p
                        className={`text-xs font-medium uppercase tracking-[0.2em] ${s.accent}`}
                      >
                        {seasonLabels[s.slug]}
                      </p>
                      <h2 className="mt-3 font-[var(--font-heading)] text-3xl font-light tracking-tight text-noir md:text-4xl lg:text-5xl">
                        {seasonCollectionNames[s.slug]}
                      </h2>
                      <p className="mt-5 max-w-md text-sm leading-relaxed text-muted md:text-base">
                        {
                          {
                            printemps:
                              "Le renouveau de la nature. Rosée d'Aube et Vent Clair célèbrent la douceur des jardins en fleurs et la fraîcheur printanière.",
                            ete: "Une fragrance solaire. Lumière de Perle et Vague Azur évoquent la chaleur du sable doré et les brises marines.",
                            automne:
                              "La chaleur des feuilles dorées. Feuille d'Or et Bois Ambré déclinent la douceur de la cannelle et des bois nobles.",
                            hiver:
                              "L'élégance glacée. Rose de Givre et Bois Polaire, deux fragrances raffinées pour accompagner les nuits d'hiver.",
                          }[s.slug]
                        }
                      </p>
                      <div className="mt-8 inline-flex items-center gap-3 text-sm font-medium text-noir">
                        Découvrir
                        <span className="flex h-7 w-7 items-center justify-center rounded-full bg-noir text-ivory transition-transform duration-300 group-hover:translate-x-1">
                          <ArrowRight size={12} weight="bold" />
                        </span>
                      </div>
                    </div>
                  </div>
                </Link>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      <section className="border-t border-sand bg-cream/40 py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <AnimatedSection>
            <div className="text-center">
              <p className="text-xs font-medium uppercase tracking-[0.2em] text-rose-deep">
                Toutes les fragrances
              </p>
              <h2 className="mt-2 font-[var(--font-heading)] text-3xl font-light tracking-tight text-noir md:text-5xl">
                {parfums.length} créations signatures
              </h2>
            </div>
          </AnimatedSection>

          <StaggerContainer className="mt-14 grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {parfums.map((p) => (
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
