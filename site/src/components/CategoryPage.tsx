import { ServiceCard } from "@/components/ServiceCard";
import {
  AnimatedSection,
  StaggerContainer,
  StaggerItem,
} from "@/components/AnimatedSection";
import { Newsletter } from "@/components/Newsletter";
import type { Service } from "@/lib/services";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "@phosphor-icons/react/dist/ssr";

interface CategoryPageProps {
  title: string;
  description: string;
  services: Service[];
  heroImage: string;
}

export function CategoryPage({
  title,
  description,
  services,
  heroImage,
}: CategoryPageProps) {
  return (
    <>
      {/* Category Hero */}
      <section className="relative min-h-[60dvh] overflow-hidden pt-24">
        <div className="absolute inset-0">
          <Image
            src={heroImage}
            alt={title}
            fill
            className="object-cover"
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-ivory via-ivory/70 to-ivory/30" />
        </div>

        <div className="gradient-blob-rose pointer-events-none absolute -left-24 top-32 h-72 w-72 rounded-full blur-3xl" />
        <div className="gradient-blob-azure pointer-events-none absolute -right-24 top-40 h-80 w-80 rounded-full blur-3xl" />

        <div className="relative z-10 flex min-h-[60dvh] items-end pb-16">
          <div className="mx-auto w-full max-w-7xl px-6 lg:px-8">
            <AnimatedSection>
              <Link
                href="/services"
                className="text-xs font-medium uppercase tracking-[0.2em] text-charcoal/70 transition-colors hover:text-rose-deep"
              >
                &larr; Tous nos soins
              </Link>
              <h1 className="mt-4 font-[var(--font-heading)] text-5xl font-light tracking-tight text-noir md:text-6xl lg:text-7xl">
                {title}
              </h1>
              <p className="mt-5 max-w-2xl text-base leading-relaxed text-charcoal">
                {description}
              </p>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Services grid */}
      <section className="py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <StaggerContainer className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <StaggerItem key={service.id}>
                <ServiceCard service={service} />
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* CTA Reservation */}
      <section className="border-t border-sand bg-cream/50 py-20">
        <div className="mx-auto max-w-3xl px-6 text-center lg:px-8">
          <AnimatedSection>
            <h2 className="font-[var(--font-heading)] text-3xl font-light tracking-tight text-noir md:text-4xl">
              Pret pour un moment d'exception ?
            </h2>
            <p className="mt-4 text-base leading-relaxed text-muted">
              Reservez votre soin en quelques clics. Notre equipe vous accueille
              7 jours sur 7 dans un cadre raffine et chaleureux.
            </p>
            <Link
              href="/reservation"
              className="mt-8 inline-flex items-center gap-3 rounded-full bg-noir px-7 py-3.5 text-sm font-medium text-ivory transition-all duration-200 hover:bg-charcoal active:scale-[0.98]"
            >
              Reserver maintenant
              <span className="flex h-7 w-7 items-center justify-center rounded-full bg-ivory/10">
                <ArrowRight size={12} weight="bold" />
              </span>
            </Link>
          </AnimatedSection>
        </div>
      </section>

      <Newsletter />
    </>
  );
}
