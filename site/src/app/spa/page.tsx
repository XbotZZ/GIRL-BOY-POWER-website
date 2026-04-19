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
import { ArrowRight, CalendarBlank, MapPin, Clock } from "@phosphor-icons/react/dist/ssr";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Spa & Bien-Être | GIRL & BOY POWER",
  description:
    "Le spa GIRL & BOY POWER à Châtillon-sur-Seine : massages, soins du visage, rituels et hammam. Un cocon inclusif pour elles, pour eux, pour tous.",
};

const categories: { slug: ServiceCategory; image: string }[] = [
  { slug: "massages", image: "https://picsum.photos/seed/gbp-cat-massage/1200/800" },
  { slug: "soins-visage", image: "https://picsum.photos/seed/gbp-cat-visage/1200/800" },
  { slug: "soins-corps", image: "https://picsum.photos/seed/gbp-cat-corps/1200/800" },
  { slug: "rituels", image: "https://picsum.photos/seed/gbp-cat-rituels/1200/800" },
  { slug: "hammam", image: "https://picsum.photos/seed/gbp-cat-hammam/1200/800" },
];

export default function SpaPage() {
  return (
    <>
      <section className="relative overflow-hidden pb-16 pt-32 lg:pt-40">
        <div className="gradient-blob-rose pointer-events-none absolute -left-32 top-32 h-96 w-96 rounded-full blur-3xl" />
        <div className="gradient-blob-azure pointer-events-none absolute -right-32 top-20 h-96 w-96 rounded-full blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <AnimatedSection>
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-rose-deep">
              Spa &amp; Bien-Être · Châtillon-sur-Seine
            </p>
            <h1 className="mt-3 max-w-3xl font-[var(--font-heading)] text-4xl font-light tracking-tight text-noir md:text-6xl lg:text-7xl">
              Une parenthèse,{" "}
              <em className="italic text-rose-deep">pour tous</em>.
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted md:text-lg">
              Au 20 avenue Noël Navoizat, notre spa accueille hommes et femmes
              pour des rituels d&apos;exception. Massages experts, soins du
              visage personnalisés, rituels orientaux et hammam traditionnel —
              tous puisant leur inspiration dans les Sources de la Douix.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/reservation"
                className="group inline-flex items-center gap-3 rounded-full bg-noir px-7 py-3.5 text-sm font-medium text-ivory transition-all duration-200 hover:bg-charcoal active:scale-[0.98]"
              >
                <CalendarBlank size={16} weight="light" />
                Réserver un soin
                <span className="flex h-7 w-7 items-center justify-center rounded-full bg-ivory/10 transition-transform group-hover:translate-x-0.5">
                  <ArrowRight size={12} weight="bold" />
                </span>
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>

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

      <section className="py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-12 rounded-3xl bg-noir p-10 text-ivory md:grid-cols-2 lg:p-16">
            <div>
              <p className="text-xs font-medium uppercase tracking-[0.2em] text-rose">
                Venir au spa
              </p>
              <h2 className="mt-3 font-[var(--font-heading)] text-3xl font-light tracking-tight md:text-4xl">
                Châtillon-sur-Seine
              </h2>
              <div className="mt-8 space-y-5 text-sm">
                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-ivory/10">
                    <MapPin size={16} weight="light" />
                  </div>
                  <div>
                    <p className="font-medium text-ivory">Adresse</p>
                    <p className="mt-1 text-ivory/70">
                      20 avenue Noël Navoizat
                      <br />
                      21400 Châtillon-sur-Seine
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-ivory/10">
                    <Clock size={16} weight="light" />
                  </div>
                  <div>
                    <p className="font-medium text-ivory">Horaires</p>
                    <p className="mt-1 text-ivory/70">
                      Lundi — Samedi : 10h — 19h
                      <br />
                      Dimanche : sur rendez-vous
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col justify-end gap-4">
              <p className="text-sm leading-relaxed text-ivory/70">
                Réservez votre créneau en ligne. Notre équipe confirme chaque
                rendez-vous sous 24h.
              </p>
              <Link
                href="/reservation"
                className="group inline-flex items-center justify-center gap-3 rounded-full bg-ivory px-7 py-3.5 text-sm font-medium text-noir transition-all duration-200 hover:bg-rose active:scale-[0.98]"
              >
                <CalendarBlank size={16} weight="light" />
                Réserver maintenant
                <span className="flex h-7 w-7 items-center justify-center rounded-full bg-noir/10 transition-transform group-hover:translate-x-0.5">
                  <ArrowRight size={12} weight="bold" />
                </span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Newsletter />
    </>
  );
}
