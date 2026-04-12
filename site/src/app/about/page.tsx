import {
  AnimatedSection,
  StaggerContainer,
  StaggerItem,
} from "@/components/AnimatedSection";
import { Newsletter } from "@/components/Newsletter";
import { Logo } from "@/components/Logo";
import Image from "next/image";
import Link from "next/link";
import {
  Heart,
  HandHeart,
  Sparkle,
  ArrowRight,
} from "@phosphor-icons/react/dist/ssr";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Notre Histoire | GIRL & BOY POWER",
  description:
    "GIRL & BOY POWER, le premier spa pleinement inclusif. Découvrez notre histoire, notre équipe et notre vision du bien-être pour toutes et tous.",
};

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden pb-16 pt-32 lg:pt-40">
        <div className="gradient-blob-rose pointer-events-none absolute -left-24 top-32 h-80 w-80 rounded-full blur-3xl" />
        <div className="gradient-blob-azure pointer-events-none absolute -right-24 top-40 h-96 w-96 rounded-full blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
            <AnimatedSection>
              <p className="text-xs font-medium uppercase tracking-[0.2em] text-rose-deep">
                Notre histoire
              </p>
              <h1 className="mt-3 font-[var(--font-heading)] text-4xl font-light tracking-tight text-noir md:text-5xl lg:text-6xl">
                Née d&apos;une conviction.
                <br />
                Le bien-être,{" "}
                <em className="italic text-rose-deep">pour tous</em>.
              </h1>
              <p className="mt-6 max-w-lg text-base leading-relaxed text-muted">
                GIRL &amp; BOY POWER est née de la conviction qu&apos;un spa de
                qualité ne devrait exclure personne. Ni par le genre, ni par
                les codes, ni par les habitudes. Nous avons créé un lieu où
                hommes et femmes profitent des mêmes soins d&apos;exception, sans
                jugement, sans distinction.
              </p>
              <p className="mt-4 max-w-lg text-base leading-relaxed text-muted">
                Notre équipe de thérapeutes passionnés vous accueille dans un
                cadre raffiné, dédié à la détente, à l&apos;écoute et à la
                reconnexion à soi.
              </p>
            </AnimatedSection>
            <AnimatedSection delay={0.15}>
              <div className="relative">
                <div className="relative aspect-[4/5] overflow-hidden rounded-3xl bg-cream">
                  <Image
                    src="https://picsum.photos/seed/gbp-about-team/900/1100"
                    alt="L'équipe GIRL & BOY POWER"
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                </div>
                <div className="absolute -bottom-6 -right-6 hidden h-24 w-24 rounded-full bg-rose/30 backdrop-blur-sm md:block" />
                <div className="absolute -top-6 -left-6 hidden h-32 w-32 rounded-full bg-azure/30 backdrop-blur-sm md:block" />
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Manifesto */}
      <section className="border-t border-sand bg-cream/50 py-24 lg:py-32">
        <div className="mx-auto max-w-3xl px-6 text-center lg:px-8">
          <AnimatedSection>
            <Logo className="mx-auto h-20 w-20" />
          </AnimatedSection>
          <AnimatedSection delay={0.1}>
            <p className="mt-8 text-xs font-medium uppercase tracking-[0.2em] text-rose-deep">
              Manifeste
            </p>
            <h2 className="mt-3 font-[var(--font-heading)] text-3xl font-light italic leading-tight tracking-tight text-noir md:text-4xl lg:text-5xl">
              &ldquo;Le bien-être n&apos;a pas de genre.
              <br />
              Il n&apos;a pas de codes.
              <br />
              Il a juste besoin d&apos;un{" "}
              <span className="not-italic text-rose-deep">lieu</span>.&rdquo;
            </h2>
            <p className="mt-8 text-sm uppercase tracking-[0.2em] text-muted">
              — L&apos;équipe GBP
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <AnimatedSection>
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-rose-deep">
              Parcours
            </p>
            <h2 className="mt-2 font-[var(--font-heading)] text-3xl font-light tracking-tight text-noir md:text-4xl">
              Les étapes clés
            </h2>
          </AnimatedSection>

          <StaggerContainer className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
            {[
              {
                year: "2023",
                title: "L'idée",
                desc: "Le projet d'un spa pleinement inclusif prend forme. Premiers repérages à la recherche du lieu idéal.",
              },
              {
                year: "2024",
                title: "Le lieu",
                desc: "Acquisition d'un espace de 350 m² et début des travaux. Conception du parcours bien-être avec des architectes spécialisés.",
              },
              {
                year: "2025",
                title: "L'équipe",
                desc: "Recrutement de notre équipe : 8 thérapeutes diplômés, formés aux techniques orientales et européennes.",
              },
              {
                year: "2026",
                title: "L'ouverture",
                desc: "Ouverture officielle du spa GIRL & BOY POWER. Plus de 20 soins, hammam, sauna et cabine duo.",
              },
            ].map((item) => (
              <StaggerItem key={item.year}>
                <div className="border-t border-sand pt-6">
                  <p className="font-[var(--font-heading)] text-3xl font-light text-rose-deep">
                    {item.year}
                  </p>
                  <h3 className="mt-2 font-[var(--font-heading)] text-lg font-medium tracking-tight text-noir">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">
                    {item.desc}
                  </p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Values */}
      <section
        id="valeurs"
        className="border-t border-sand bg-cream/50 py-24 lg:py-32"
      >
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <AnimatedSection>
            <div className="text-center">
              <p className="text-xs font-medium uppercase tracking-[0.2em] text-rose-deep">
                Ce qui nous anime
              </p>
              <h2 className="mt-2 font-[var(--font-heading)] text-3xl font-light tracking-tight text-noir md:text-5xl">
                Nos valeurs fondatrices
              </h2>
            </div>
          </AnimatedSection>

          <StaggerContainer className="mt-16 grid grid-cols-1 gap-12 md:grid-cols-3">
            {[
              {
                Icon: Heart,
                title: "Inclusivité radicale",
                desc: "Nous accueillons toutes les identités, tous les corps, tous les âges. Notre spa est un espace neutre, bienveillant, sans jugement. Le bien-être est un droit, pas un privilège genré.",
                color: "text-rose-deep",
                bg: "bg-rose/15",
              },
              {
                Icon: HandHeart,
                title: "Expertise sensorielle",
                desc: "Nos thérapeutes sont diplômés et formés en continu. Chaque protocole est pensé pour offrir un véritable voyage sensoriel : odeurs, textures, gestes, ambiance. L'expérience d'un spa de luxe.",
                color: "text-noir",
                bg: "bg-cream",
              },
              {
                Icon: Sparkle,
                title: "Qualité premium",
                desc: "Produits d'exception, linge de soin haut de gamme, ambiance feutrée. Nous sélectionnons les meilleurs partenaires pour vous offrir une parenthèse réellement unique.",
                color: "text-azure-deep",
                bg: "bg-azure/15",
              },
            ].map((value) => (
              <StaggerItem key={value.title}>
                <div className="rounded-3xl border border-sand bg-ivory p-8 lg:p-10">
                  <div
                    className={`flex h-14 w-14 items-center justify-center rounded-full ${value.bg} ${value.color}`}
                  >
                    <value.Icon size={26} weight="light" />
                  </div>
                  <h3 className="mt-6 font-[var(--font-heading)] text-2xl font-medium tracking-tight text-noir">
                    {value.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted">
                    {value.desc}
                  </p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* The space */}
      <section className="py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
            <AnimatedSection>
              <p className="text-xs font-medium uppercase tracking-[0.2em] text-rose-deep">
                Le lieu
              </p>
              <h2 className="mt-3 font-[var(--font-heading)] text-3xl font-light tracking-tight text-noir md:text-5xl">
                Un cocon de{" "}
                <em className="italic text-azure-deep">350 m&sup2;</em>
              </h2>
              <p className="mt-6 max-w-lg text-base leading-relaxed text-muted">
                Notre spa s&apos;étend sur 350 m² pensés comme un parcours
                sensoriel. Six cabines individuelles, une cabine duo privative,
                un hammam traditionnel, un sauna finlandais et un espace de
                relaxation avec tisanerie.
              </p>
              <ul className="mt-8 space-y-3 text-sm text-charcoal">
                {[
                  "6 cabines de soin individuelles",
                  "1 cabine duo privative avec bain à remous",
                  "Hammam traditionnel chauffé à 45°C",
                  "Sauna finlandais en bois noble",
                  "Espace tisanerie & lounge",
                  "Vestiaires privatifs et douches sensorielles",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3">
                    <span className="h-px w-6 bg-rose-deep" />
                    {item}
                  </li>
                ))}
              </ul>
              <Link
                href="/reservation"
                className="group mt-10 inline-flex items-center gap-3 rounded-full bg-noir px-7 py-3.5 text-sm font-medium text-ivory transition-all duration-200 hover:bg-charcoal active:scale-[0.98]"
              >
                Réserver ma visite
                <span className="flex h-7 w-7 items-center justify-center rounded-full bg-ivory/10 transition-transform group-hover:translate-x-0.5">
                  <ArrowRight size={12} weight="bold" />
                </span>
              </Link>
            </AnimatedSection>
            <AnimatedSection delay={0.15}>
              <div className="grid grid-cols-2 gap-4">
                <div className="relative aspect-[3/4] overflow-hidden rounded-2xl bg-cream">
                  <Image
                    src="https://picsum.photos/seed/gbp-place-1/600/800"
                    alt="Cabine de soin"
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 50vw, 25vw"
                  />
                </div>
                <div className="relative mt-12 aspect-[3/4] overflow-hidden rounded-2xl bg-cream">
                  <Image
                    src="https://picsum.photos/seed/gbp-place-2/600/800"
                    alt="Hammam"
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 50vw, 25vw"
                  />
                </div>
                <div className="relative aspect-[3/4] overflow-hidden rounded-2xl bg-cream">
                  <Image
                    src="https://picsum.photos/seed/gbp-place-3/600/800"
                    alt="Espace lounge"
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 50vw, 25vw"
                  />
                </div>
                <div className="relative mt-12 aspect-[3/4] overflow-hidden rounded-2xl bg-cream">
                  <Image
                    src="https://picsum.photos/seed/gbp-place-4/600/800"
                    alt="Cabine duo"
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 50vw, 25vw"
                  />
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      <Newsletter />
    </>
  );
}
