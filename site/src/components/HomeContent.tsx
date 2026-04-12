"use client";

import ScrollExpandHero from "@/components/ui/scroll-expansion-hero";
import {
  AnimatedSection,
  StaggerContainer,
  StaggerItem,
} from "@/components/AnimatedSection";
import { ServiceCard } from "@/components/ServiceCard";
import { Newsletter } from "@/components/Newsletter";
import { Logo } from "@/components/Logo";
import type { Service, ServiceCategory } from "@/lib/services";
import Link from "next/link";
import Image from "next/image";
import {
  Sparkle,
  HandHeart,
  Heart,
  ArrowRight,
  CalendarBlank,
} from "@phosphor-icons/react";

const categoryLabelsMap: Record<ServiceCategory, string> = {
  massages: "Massages",
  "soins-visage": "Soins du Visage",
  "soins-corps": "Soins du Corps",
  rituels: "Rituels & Forfaits",
  hammam: "Hammam & Bien-Etre",
};

const categories: { slug: ServiceCategory; image: string }[] = [
  {
    slug: "massages",
    image: "https://picsum.photos/seed/gbp-cat-massage/800/1000",
  },
  {
    slug: "soins-visage",
    image: "https://picsum.photos/seed/gbp-cat-visage/800/1000",
  },
  {
    slug: "soins-corps",
    image: "https://picsum.photos/seed/gbp-cat-corps/800/1000",
  },
  {
    slug: "rituels",
    image: "https://picsum.photos/seed/gbp-cat-rituels/800/1000",
  },
  {
    slug: "hammam",
    image: "https://picsum.photos/seed/gbp-cat-hammam/800/1000",
  },
];

export function HomeContent({ featured }: { featured: Service[] }) {
  return (
    <ScrollExpandHero
      mediaType="image"
      mediaSrc="/GIRL-BOY-POWER-website/hero-riviere.jpg"
      bgImageSrc="https://picsum.photos/seed/gbp-spa-nature/1920/1080"
      titleLines={[
        { text: "Pour elles,", className: "text-rose italic" },
        { text: "pour eux,", className: "text-azure italic" },
        { text: "pour tous.", className: "text-ivory" },
      ]}
      tagline="Spa · Bien-Être · Inclusif"
      scrollHint="Scrollez pour decouvrir"
    >
      {/* CTA buttons after expansion */}
      <div className="flex flex-wrap justify-center gap-4 px-6 pb-8 pt-4">
        <Link
          href="/reservation"
          className="group inline-flex items-center gap-3 rounded-full bg-ivory px-7 py-3.5 text-sm font-medium text-noir transition-all duration-200 hover:bg-rose hover:text-noir active:scale-[0.98]"
        >
          <CalendarBlank size={18} weight="light" />
          Reserver un soin
          <span className="flex h-7 w-7 items-center justify-center rounded-full bg-noir/10 transition-transform group-hover:translate-x-0.5">
            <ArrowRight size={12} weight="bold" />
          </span>
        </Link>
        <Link
          href="/services"
          className="inline-flex items-center rounded-full border border-ivory/30 px-7 py-3.5 text-sm font-medium text-ivory transition-all duration-200 hover:border-ivory/60 hover:bg-ivory/5 active:scale-[0.98]"
        >
          Decouvrir nos soins
        </Link>
      </div>

      {/* Brand intro */}
      <section className="relative overflow-hidden py-24 lg:py-32">
        <div className="gradient-blob-rose pointer-events-none absolute -right-32 top-20 h-96 w-96 rounded-full blur-3xl" />
        <div className="gradient-blob-azure pointer-events-none absolute -left-32 bottom-20 h-96 w-96 rounded-full blur-3xl" />

        <div className="relative mx-auto max-w-4xl px-6 text-center lg:px-8">
          <AnimatedSection>
            <Logo className="mx-auto h-24 w-24" />
          </AnimatedSection>
          <AnimatedSection delay={0.1}>
            <h2 className="mt-8 font-[var(--font-heading)] text-3xl font-light tracking-tight text-noir md:text-5xl">
              Le bien-etre{" "}
              <em className="italic text-rose-deep">sans frontiere</em>.
            </h2>
            <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-muted md:text-lg">
              Chez GIRL &amp; BOY POWER, nous avons cree un espace ou chacun se
              sent bienvenu. Que vous soyez seul, en couple ou entre amis, notre
              spa vous propose une experience unique, mele de rituels feminins,
              masculins et mixtes.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Collections */}
      <section className="py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <AnimatedSection>
            <div className="flex items-end justify-between">
              <div>
                <p className="text-xs font-medium uppercase tracking-[0.2em] text-rose-deep">
                  Nos univers
                </p>
                <h2 className="mt-2 font-[var(--font-heading)] text-3xl font-light tracking-tight text-noir md:text-5xl">
                  Choisissez votre experience
                </h2>
              </div>
              <Link
                href="/services"
                className="hidden text-sm font-medium text-charcoal transition-colors hover:text-rose-deep md:block"
              >
                Tout voir &rarr;
              </Link>
            </div>
          </AnimatedSection>

          <StaggerContainer className="mt-12 grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-5">
            {categories.map((cat) => (
              <StaggerItem key={cat.slug}>
                <Link href={`/services/${cat.slug}`} className="group block">
                  <div className="relative aspect-[3/4] overflow-hidden rounded-2xl bg-cream">
                    <Image
                      src={cat.image}
                      alt={categoryLabelsMap[cat.slug]}
                      fill
                      className="object-cover transition-transform duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] group-hover:scale-105"
                      sizes="(max-width: 768px) 50vw, 20vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-noir/70 via-noir/20 to-transparent" />
                    <div className="absolute inset-x-0 bottom-0 p-4">
                      <h3 className="font-[var(--font-heading)] text-lg font-medium tracking-tight text-ivory">
                        {categoryLabelsMap[cat.slug]}
                      </h3>
                    </div>
                  </div>
                </Link>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Brand story */}
      <section className="relative overflow-hidden bg-cream py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
            <AnimatedSection>
              <div className="relative">
                <div className="relative aspect-[4/5] overflow-hidden rounded-3xl bg-sand/30">
                  <Image
                    src="https://picsum.photos/seed/gbp-spa-ambiance/900/1100"
                    alt="L'ambiance GIRL & BOY POWER"
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                </div>
                <div className="absolute -bottom-6 -right-6 hidden h-24 w-24 rounded-full bg-rose/20 backdrop-blur-sm md:block" />
                <div className="absolute -top-6 -left-6 hidden h-32 w-32 rounded-full bg-azure/20 backdrop-blur-sm md:block" />
              </div>
            </AnimatedSection>
            <AnimatedSection delay={0.15}>
              <p className="text-xs font-medium uppercase tracking-[0.2em] text-rose-deep">
                Notre Philosophie
              </p>
              <h2 className="mt-3 font-[var(--font-heading)] text-3xl font-light tracking-tight text-noir md:text-5xl">
                Le bien-etre,
                <br />
                un <em className="italic text-rose-deep">droit</em> pour tous.
              </h2>
              <p className="mt-6 max-w-lg text-base leading-relaxed text-muted">
                Trop longtemps, l&apos;univers du spa a ete percu comme
                exclusivement feminin. Chez GIRL &amp; BOY POWER, nous avons
                casse les codes : ici, hommes et femmes profitent des memes
                soins d&apos;exception, dans un cadre concu pour tous, sans
                jugement, sans distinction.
              </p>
              <p className="mt-4 max-w-lg text-base leading-relaxed text-muted">
                Notre equipe de professionnels passionnes vous accompagne dans
                un voyage sensoriel unique : massages experts, soins du visage
                personnalises, rituels sur-mesure et acces a notre hammam et
                sauna.
              </p>
              <Link
                href="/about"
                className="group mt-8 inline-flex items-center gap-3 rounded-full bg-noir px-7 py-3.5 text-sm font-medium text-ivory transition-all duration-200 hover:bg-charcoal active:scale-[0.98]"
              >
                Notre histoire
                <span className="flex h-7 w-7 items-center justify-center rounded-full bg-ivory/10 transition-transform group-hover:translate-x-0.5">
                  <ArrowRight size={12} weight="bold" />
                </span>
              </Link>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Featured services */}
      <section className="py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <AnimatedSection>
            <div className="text-center">
              <p className="text-xs font-medium uppercase tracking-[0.2em] text-rose-deep">
                Les coups de coeur
              </p>
              <h2 className="mt-2 font-[var(--font-heading)] text-3xl font-light tracking-tight text-noir md:text-5xl">
                Nos soins favoris
              </h2>
            </div>
          </AnimatedSection>

          <StaggerContainer className="mt-14 grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
            {featured.map((service) => (
              <StaggerItem key={service.id}>
                <ServiceCard service={service} />
              </StaggerItem>
            ))}
          </StaggerContainer>

          <AnimatedSection className="mt-14 text-center">
            <Link
              href="/services"
              className="inline-flex items-center gap-3 rounded-full border border-sand px-7 py-3.5 text-sm font-medium text-charcoal transition-all duration-200 hover:border-rose-deep hover:text-rose-deep active:scale-[0.98]"
            >
              Voir tous nos soins
              <ArrowRight size={14} weight="bold" />
            </Link>
          </AnimatedSection>
        </div>
      </section>

      {/* Values */}
      <section className="border-t border-sand py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <StaggerContainer className="grid grid-cols-1 gap-12 md:grid-cols-3">
            {[
              {
                Icon: Heart,
                title: "Inclusivite",
                desc: "Un spa pour toutes et tous, sans jugement. Nous accueillons hommes, femmes, couples, dans le respect de chacun.",
                color: "text-rose-deep",
              },
              {
                Icon: HandHeart,
                title: "Expertise",
                desc: "Une equipe de professionnels passionnes, formes aux meilleures techniques de massage et de soins esthetiques.",
                color: "text-noir",
              },
              {
                Icon: Sparkle,
                title: "Qualite Premium",
                desc: "Des produits d'exception, un cadre raffine, une attention portee a chaque detail. L'experience d'un spa de luxe.",
                color: "text-azure-deep",
              },
            ].map((value) => (
              <StaggerItem key={value.title} className="text-center">
                <div
                  className={`mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-cream ${value.color}`}
                >
                  <value.Icon size={26} weight="light" />
                </div>
                <h3 className="mt-5 font-[var(--font-heading)] text-2xl font-medium tracking-tight text-noir">
                  {value.title}
                </h3>
                <p className="mx-auto mt-3 max-w-xs text-sm leading-relaxed text-muted">
                  {value.desc}
                </p>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      <Newsletter />
    </ScrollExpandHero>
  );
}
