import {
  AnimatedSection,
  StaggerContainer,
  StaggerItem,
} from "@/components/AnimatedSection";
import { ServiceCard } from "@/components/ServiceCard";
import { Newsletter } from "@/components/Newsletter";
import {
  services,
  categoryLabels,
  categoryDescriptions,
  type ServiceCategory,
} from "@/lib/services";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "@phosphor-icons/react/dist/ssr";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Nos Soins | GIRL & BOY POWER",
  description:
    "Découvrez l'ensemble des soins du spa GIRL & BOY POWER : massages, soins du visage, soins du corps, rituels et hammam.",
};

const categories: { slug: ServiceCategory; image: string }[] = [
  { slug: "massages", image: "https://picsum.photos/seed/gbp-cat-massage/1200/800" },
  { slug: "soins-visage", image: "https://picsum.photos/seed/gbp-cat-visage/1200/800" },
  { slug: "soins-corps", image: "https://picsum.photos/seed/gbp-cat-corps/1200/800" },
  { slug: "rituels", image: "https://picsum.photos/seed/gbp-cat-rituels/1200/800" },
  { slug: "hammam", image: "https://picsum.photos/seed/gbp-cat-hammam/1200/800" },
];

export default function ServicesIndexPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden pb-16 pt-32 lg:pt-40">
        <div className="gradient-blob-rose pointer-events-none absolute -left-32 top-32 h-96 w-96 rounded-full blur-3xl" />
        <div className="gradient-blob-azure pointer-events-none absolute -right-32 top-20 h-96 w-96 rounded-full blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <AnimatedSection>
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-rose-deep">
              Notre carte
            </p>
            <h1 className="mt-3 max-w-3xl font-[var(--font-heading)] text-4xl font-light tracking-tight text-noir md:text-6xl lg:text-7xl">
              Tous nos <em className="italic text-rose-deep">soins</em>,
              <br />
              une seule <em className="italic text-azure-deep">parenthèse</em>.
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted md:text-lg">
              Massages experts, soins du visage personnalisés, rituels
              orientaux, hammam traditionnel. Naviguez entre nos cinq univers
              pour trouver le soin qui vous correspond.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Category cards */}
      <section className="py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <StaggerContainer className="space-y-6">
            {categories.map((cat, index) => (
              <StaggerItem key={cat.slug}>
                <Link
                  href={`/services/${cat.slug}`}
                  className="group block overflow-hidden rounded-3xl bg-cream ring-1 ring-sand/60 transition-all duration-300 hover:ring-rose-deep/30"
                >
                  <div
                    className={`grid items-stretch lg:grid-cols-2 ${
                      index % 2 === 1 ? "lg:[&>*:first-child]:order-2" : ""
                    }`}
                  >
                    <div className="relative aspect-[4/3] overflow-hidden lg:aspect-auto lg:min-h-[360px]">
                      <Image
                        src={cat.image}
                        alt={categoryLabels[cat.slug]}
                        fill
                        className="object-cover transition-transform duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] group-hover:scale-105"
                        sizes="(max-width: 1024px) 100vw, 50vw"
                      />
                    </div>
                    <div className="flex flex-col justify-center p-8 lg:p-14">
                      <p className="text-xs font-medium uppercase tracking-[0.2em] text-rose-deep">
                        Univers {String(index + 1).padStart(2, "0")}
                      </p>
                      <h2 className="mt-3 font-[var(--font-heading)] text-3xl font-light tracking-tight text-noir md:text-4xl lg:text-5xl">
                        {categoryLabels[cat.slug]}
                      </h2>
                      <p className="mt-5 max-w-md text-sm leading-relaxed text-muted md:text-base">
                        {categoryDescriptions[cat.slug]}
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

      {/* All services grid */}
      <section className="border-t border-sand bg-cream/40 py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <AnimatedSection>
            <div className="text-center">
              <p className="text-xs font-medium uppercase tracking-[0.2em] text-rose-deep">
                Toute la carte
              </p>
              <h2 className="mt-2 font-[var(--font-heading)] text-3xl font-light tracking-tight text-noir md:text-5xl">
                {services.length} soins d&apos;exception
              </h2>
            </div>
          </AnimatedSection>

          <StaggerContainer className="mt-14 grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {services.map((service) => (
              <StaggerItem key={service.id}>
                <ServiceCard service={service} />
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      <Newsletter />
    </>
  );
}
