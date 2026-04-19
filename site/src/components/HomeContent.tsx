"use client";

import ScrollExpandHero from "@/components/ui/scroll-expansion-hero";
import {
  AnimatedSection,
  StaggerContainer,
  StaggerItem,
} from "@/components/AnimatedSection";
import { ProductCard } from "@/components/ProductCard";
import { Newsletter } from "@/components/Newsletter";
import { Logo } from "@/components/Logo";
import type { Product } from "@/lib/products";
import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  Drop,
  Leaf,
  Handbag,
  SpinnerBall,
  Sparkle,
  MapPin,
} from "@phosphor-icons/react";

const universes = [
  {
    href: "/parfums",
    Icon: Drop,
    title: "Parfums",
    subtitle: "4 collections saisonnières",
    desc: "Source d'Aurore, Souffle d'Ambre, Éclat d'Hiver — des fragrances féminines et masculines pensées comme une balade au fil des saisons.",
    image: "https://picsum.photos/seed/gbp-universe-parfums/1200/1500",
    color: "text-rose-deep",
  },
  {
    href: "/soins",
    Icon: Leaf,
    title: "Soins Homme & Mixte",
    subtitle: "Inspirés des Sources de la Douix",
    desc: "Rituels de rasage, soins visage, baumes et packs signatures. Une nouvelle collection 2026–2027 portée par la pureté des sources bourguignonnes.",
    image: "https://picsum.photos/seed/gbp-universe-soins/1200/1500",
    color: "text-azure-deep",
  },
  {
    href: "/julicath",
    Icon: Handbag,
    title: "JuliCath Bagagerie",
    subtitle: "Maroquinerie de luxe",
    desc: "Née de la rencontre de Julie et Cathy, notre maison de bagagerie façonne des pièces d'exception dans les cuirs les plus nobles.",
    image: "https://picsum.photos/seed/gbp-universe-julicath/1200/1500",
    color: "text-noir",
  },
  {
    href: "/spa",
    Icon: SpinnerBall,
    title: "Spa & Bien-Être",
    subtitle: "Châtillon-sur-Seine",
    desc: "Massages, soins du visage, hammam et rituels d'inspiration naturelle. Un cocon dédié à la reconnexion à soi, pour elles, pour eux, pour tous.",
    image: "https://picsum.photos/seed/gbp-universe-spa/1200/1500",
    color: "text-rose-deep",
  },
];

export function HomeContent({
  featuredParfums,
  featuredSoins,
}: {
  featuredParfums: Product[];
  featuredSoins: Product[];
}) {
  return (
    <ScrollExpandHero
      mediaType="element"
      mediaElement={<Logo className="w-2/3 h-2/3 max-w-[280px] max-h-[280px]" />}
      bgImageSrc="/GIRL-BOY-POWER-website/hero-riviere.jpg"
      titleLines={[
        { text: "Maison de parfums,", className: "text-rose italic" },
        { text: "soins & bagagerie", className: "text-azure italic" },
        { text: "de luxe.", className: "text-ivory" },
      ]}
      tagline="Parfums · Soins · JuliCath · Spa"
      scrollHint="Scrollez pour découvrir"
    >
      <div className="flex flex-wrap justify-center gap-4 px-6 pb-8 pt-4">
        <Link
          href="/parfums"
          className="group inline-flex items-center gap-3 rounded-full bg-ivory px-7 py-3.5 text-sm font-medium text-noir transition-all duration-200 hover:bg-rose hover:text-noir active:scale-[0.98]"
        >
          <Sparkle size={18} weight="light" />
          Découvrir nos parfums
          <span className="flex h-7 w-7 items-center justify-center rounded-full bg-noir/10 transition-transform group-hover:translate-x-0.5">
            <ArrowRight size={12} weight="bold" />
          </span>
        </Link>
        <Link
          href="/reservation"
          className="inline-flex items-center rounded-full border border-ivory/30 px-7 py-3.5 text-sm font-medium text-ivory transition-all duration-200 hover:border-ivory/60 hover:bg-ivory/5 active:scale-[0.98]"
        >
          Réserver au spa
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
            <p className="mt-6 text-xs font-medium uppercase tracking-[0.2em] text-rose-deep">
              Châtillon-sur-Seine · Bourgogne
            </p>
            <h2 className="mt-4 font-[var(--font-heading)] text-3xl font-light tracking-tight text-noir md:text-5xl">
              Une maison,
              <br />
              <em className="italic text-rose-deep">quatre univers</em>.
            </h2>
            <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-muted md:text-lg">
              GIRL &amp; BOY POWER réunit sous un même nom des parfums
              saisonniers, des soins masculins et mixtes d&apos;inspiration
              naturelle, la bagagerie de luxe JuliCath et un spa bien-être
              pleinement inclusif. Le tout inspiré par la pureté des Sources
              de la Douix.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Universes */}
      <section className="bg-cream/40 py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <AnimatedSection>
            <div className="flex items-end justify-between">
              <div>
                <p className="text-xs font-medium uppercase tracking-[0.2em] text-rose-deep">
                  Nos univers
                </p>
                <h2 className="mt-2 font-[var(--font-heading)] text-3xl font-light tracking-tight text-noir md:text-5xl">
                  Choisissez votre entrée en matière
                </h2>
              </div>
            </div>
          </AnimatedSection>

          <StaggerContainer className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2">
            {universes.map((u) => (
              <StaggerItem key={u.href}>
                <Link
                  href={u.href}
                  className="group relative block overflow-hidden rounded-3xl bg-ivory ring-1 ring-sand/60 transition-all duration-300 hover:ring-rose-deep/30"
                >
                  <div className="relative aspect-[5/4] overflow-hidden">
                    <Image
                      src={u.image}
                      alt={u.title}
                      fill
                      className="object-cover transition-transform duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] group-hover:scale-105"
                      sizes="(max-width: 1024px) 100vw, 50vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-noir/60 via-noir/5 to-transparent" />
                  </div>
                  <div className="p-8 lg:p-10">
                    <div
                      className={`flex h-12 w-12 items-center justify-center rounded-full bg-cream ${u.color}`}
                    >
                      <u.Icon size={22} weight="light" />
                    </div>
                    <p className="mt-5 text-xs font-medium uppercase tracking-[0.18em] text-muted">
                      {u.subtitle}
                    </p>
                    <h3 className="mt-2 font-[var(--font-heading)] text-2xl font-light tracking-tight text-noir md:text-3xl">
                      {u.title}
                    </h3>
                    <p className="mt-3 max-w-md text-sm leading-relaxed text-muted">
                      {u.desc}
                    </p>
                    <div className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-noir">
                      Explorer
                      <span className="flex h-7 w-7 items-center justify-center rounded-full bg-noir text-ivory transition-transform duration-300 group-hover:translate-x-1">
                        <ArrowRight size={12} weight="bold" />
                      </span>
                    </div>
                  </div>
                </Link>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Featured parfums */}
      <section className="py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <AnimatedSection>
            <div className="flex flex-col items-start justify-between gap-4 md:flex-row md:items-end">
              <div>
                <p className="text-xs font-medium uppercase tracking-[0.2em] text-rose-deep">
                  Collection Parfums
                </p>
                <h2 className="mt-2 font-[var(--font-heading)] text-3xl font-light tracking-tight text-noir md:text-5xl">
                  Au fil des <em className="italic text-rose-deep">saisons</em>
                </h2>
              </div>
              <Link
                href="/parfums"
                className="text-sm font-medium text-charcoal transition-colors hover:text-rose-deep"
              >
                Voir la collection &rarr;
              </Link>
            </div>
          </AnimatedSection>

          <StaggerContainer className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {featuredParfums.map((p) => (
              <StaggerItem key={p.id}>
                <ProductCard product={p} />
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Soins banner */}
      <section className="relative overflow-hidden bg-noir py-24 text-ivory lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
            <AnimatedSection>
              <p className="text-xs font-medium uppercase tracking-[0.2em] text-rose">
                Soins Homme &amp; Mixte
              </p>
              <h2 className="mt-3 font-[var(--font-heading)] text-3xl font-light tracking-tight md:text-5xl">
                La puissance tranquille des{" "}
                <em className="italic text-rose">Sources de la Douix</em>.
              </h2>
              <p className="mt-6 max-w-lg text-base leading-relaxed text-ivory/70">
                Inspirés par la pureté de l&apos;eau vive qui jaillit au cœur
                de Châtillon-sur-Seine, nos soins rassemblent le meilleur des
                actifs naturels : huile d&apos;argan, aloe vera, charbon actif,
                acide hyaluronique végétal. Des rituels pensés pour tous les
                types de peau, accessibles à l&apos;unité ou en packs.
              </p>
              <Link
                href="/soins"
                className="group mt-8 inline-flex items-center gap-3 rounded-full bg-ivory px-7 py-3.5 text-sm font-medium text-noir transition-all duration-200 hover:bg-rose active:scale-[0.98]"
              >
                Découvrir la collection
                <span className="flex h-7 w-7 items-center justify-center rounded-full bg-noir/10 transition-transform group-hover:translate-x-0.5">
                  <ArrowRight size={12} weight="bold" />
                </span>
              </Link>
            </AnimatedSection>
            <AnimatedSection delay={0.15}>
              <div className="grid grid-cols-2 gap-6">
                {featuredSoins.slice(0, 4).map((p) => (
                  <div
                    key={p.id}
                    className="relative aspect-square overflow-hidden rounded-2xl bg-charcoal"
                  >
                    <Image
                      src={p.image}
                      alt={p.name}
                      fill
                      className="object-cover"
                      sizes="(max-width: 1024px) 50vw, 25vw"
                    />
                    <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-noir to-transparent p-3">
                      <p className="text-xs font-medium text-ivory">
                        {p.name}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* JuliCath teaser */}
      <section className="relative overflow-hidden bg-cream py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
            <AnimatedSection>
              <div className="relative aspect-[4/5] overflow-hidden rounded-3xl bg-sand/30">
                <Image
                  src="https://picsum.photos/seed/gbp-julicath-hero/900/1100"
                  alt="JuliCath Bagagerie"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </AnimatedSection>
            <AnimatedSection delay={0.15}>
              <p className="text-xs font-medium uppercase tracking-[0.2em] text-rose-deep">
                JuliCath Bagagerie
              </p>
              <h2 className="mt-3 font-[var(--font-heading)] text-3xl font-light tracking-tight text-noir md:text-5xl">
                Le voyage,{" "}
                <em className="italic text-rose-deep">façonné main</em>.
              </h2>
              <p className="mt-6 max-w-lg text-base leading-relaxed text-muted">
                Née de la fusion harmonieuse de deux prénoms, Julie et Cathy,
                la maison JuliCath incarne une vision moderne de la bagagerie
                de luxe. Neuf pièces intemporelles — du sac de voyage Julie au
                porte peigne Guilyann — façonnées dans les cuirs les plus
                nobles.
              </p>
              <Link
                href="/julicath"
                className="group mt-8 inline-flex items-center gap-3 rounded-full bg-noir px-7 py-3.5 text-sm font-medium text-ivory transition-all duration-200 hover:bg-charcoal active:scale-[0.98]"
              >
                Découvrir JuliCath
                <span className="flex h-7 w-7 items-center justify-center rounded-full bg-ivory/10 transition-transform group-hover:translate-x-0.5">
                  <ArrowRight size={12} weight="bold" />
                </span>
              </Link>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Spa strip */}
      <section className="border-t border-sand py-24 lg:py-32">
        <div className="mx-auto max-w-5xl px-6 text-center lg:px-8">
          <AnimatedSection>
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-rose/15 text-rose-deep">
              <MapPin size={22} weight="light" />
            </div>
            <p className="mt-6 text-xs font-medium uppercase tracking-[0.2em] text-rose-deep">
              Spa &amp; Bien-Être
            </p>
            <h2 className="mt-2 font-[var(--font-heading)] text-3xl font-light tracking-tight text-noir md:text-5xl">
              Rendez-vous{" "}
              <em className="italic text-azure-deep">au 20 avenue Noël Navoizat</em>
              .
            </h2>
            <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-muted">
              Notre spa de Châtillon-sur-Seine vous accueille pour des
              massages, soins du visage, rituels orientaux et hammam. Une
              parenthèse de douceur, pour elles, pour eux, pour tous.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Link
                href="/spa"
                className="inline-flex items-center gap-3 rounded-full bg-noir px-7 py-3.5 text-sm font-medium text-ivory transition-all duration-200 hover:bg-charcoal active:scale-[0.98]"
              >
                La carte des soins
              </Link>
              <Link
                href="/reservation"
                className="inline-flex items-center gap-3 rounded-full border border-sand px-7 py-3.5 text-sm font-medium text-charcoal transition-all duration-200 hover:border-rose-deep hover:text-rose-deep"
              >
                Réserver un créneau
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <Newsletter />
    </ScrollExpandHero>
  );
}
