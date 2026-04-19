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
  Drop,
} from "@phosphor-icons/react/dist/ssr";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "La Maison | GIRL & BOY POWER",
  description:
    "GIRL & BOY POWER — maison de parfums, soins, bagagerie JuliCath et spa bien-être à Châtillon-sur-Seine, inspirée par la pureté des Sources de la Douix.",
};

export default function AboutPage() {
  return (
    <>
      <section className="relative overflow-hidden pb-16 pt-32 lg:pt-40">
        <div className="gradient-blob-rose pointer-events-none absolute -left-24 top-32 h-80 w-80 rounded-full blur-3xl" />
        <div className="gradient-blob-azure pointer-events-none absolute -right-24 top-40 h-96 w-96 rounded-full blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
            <AnimatedSection>
              <p className="text-xs font-medium uppercase tracking-[0.2em] text-rose-deep">
                La Maison
              </p>
              <h1 className="mt-3 font-[var(--font-heading)] text-4xl font-light tracking-tight text-noir md:text-5xl lg:text-6xl">
                Une maison,{" "}
                <em className="italic text-rose-deep">quatre univers</em>,
                <br />
                une seule{" "}
                <em className="italic text-azure-deep">source</em>.
              </h1>
              <p className="mt-6 max-w-lg text-base leading-relaxed text-muted">
                GIRL &amp; BOY POWER est née à Châtillon-sur-Seine, au cœur de
                la Bourgogne, d&apos;une envie simple : réunir sous un même nom
                ce qui fait la beauté du quotidien. Des parfums qui racontent
                les saisons, des soins d&apos;inspiration naturelle, la
                bagagerie de luxe JuliCath et un spa pleinement inclusif.
              </p>
              <p className="mt-4 max-w-lg text-base leading-relaxed text-muted">
                Notre signature : la pureté des Sources de la Douix, cette eau
                vive qui jaillit à deux pas de notre maison et irrigue chacune
                de nos créations.
              </p>
            </AnimatedSection>
            <AnimatedSection delay={0.15}>
              <div className="relative">
                <div className="relative aspect-[4/5] overflow-hidden rounded-3xl bg-cream">
                  <Image
                    src="https://picsum.photos/seed/gbp-about-douix/900/1100"
                    alt="Les Sources de la Douix"
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
              &ldquo;Le parfum, le soin, le voyage
              <br />
              et la détente n&apos;ont pas de{" "}
              <span className="not-italic text-rose-deep">genre</span>.
              <br />
              Ils ont juste besoin d&apos;une{" "}
              <span className="not-italic text-azure-deep">source</span>.&rdquo;
            </h2>
            <p className="mt-8 text-sm uppercase tracking-[0.2em] text-muted">
              — L&apos;équipe GBP
            </p>
          </AnimatedSection>
        </div>
      </section>

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
                desc: "Le projet d'une maison réunissant parfums, soins, bagagerie et spa prend forme à Châtillon-sur-Seine.",
              },
              {
                year: "2024",
                title: "Le lieu",
                desc: "Installation au 20 avenue Noël Navoizat. Les premières créations de parfum et les rituels de soin voient le jour.",
              },
              {
                year: "2025",
                title: "JuliCath",
                desc: "La bagagerie de luxe JuliCath rejoint la maison. Neuf pièces intemporelles, façonnées dans les cuirs les plus nobles.",
              },
              {
                year: "2026",
                title: "Nouvelle collection",
                desc: "Lancement de la collection Soins Homme & Mixte 2026-2027 et ouverture du spa bien-être.",
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
                desc: "Parfums, soins et spa accueillent toutes les identités, tous les corps, tous les âges. Le plaisir sensoriel est un droit, pas un privilège genré.",
                color: "text-rose-deep",
                bg: "bg-rose/15",
              },
              {
                Icon: Drop,
                title: "Sources de la Douix",
                desc: "Notre signature naturelle. La pureté d'une eau vive bourguignonne inspire chacune de nos créations, de l'eau parfumée aux soins du visage.",
                color: "text-azure-deep",
                bg: "bg-azure/15",
              },
              {
                Icon: Sparkle,
                title: "Qualité premium",
                desc: "Cuirs nobles, matières précieuses, actifs choisis. Chaque pièce JuliCath, chaque flacon, chaque soin est pensé comme une création d'exception.",
                color: "text-noir",
                bg: "bg-cream",
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

      <section className="py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
            <AnimatedSection>
              <p className="text-xs font-medium uppercase tracking-[0.2em] text-rose-deep">
                Nous trouver
              </p>
              <h2 className="mt-3 font-[var(--font-heading)] text-3xl font-light tracking-tight text-noir md:text-5xl">
                20 avenue{" "}
                <em className="italic text-azure-deep">Noël Navoizat</em>
              </h2>
              <p className="mt-6 max-w-lg text-base leading-relaxed text-muted">
                Notre maison est installée à Châtillon-sur-Seine, dans le
                département de la Côte-d&apos;Or. L&apos;écrin dans lequel
                sont présentées nos collections de parfums, les soins Homme
                &amp; Mixte, la bagagerie JuliCath et où vous attend le spa
                bien-être.
              </p>
              <ul className="mt-8 space-y-3 text-sm text-charcoal">
                {[
                  "Showroom parfums, soins & bagagerie",
                  "6 cabines de soin individuelles",
                  "Cabine duo privative",
                  "Hammam traditionnel",
                  "Sauna finlandais",
                  "Espace tisanerie & lounge",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3">
                    <span className="h-px w-6 bg-rose-deep" />
                    {item}
                  </li>
                ))}
              </ul>
              <div className="mt-10 flex flex-wrap gap-4">
                <Link
                  href="/reservation"
                  className="group inline-flex items-center gap-3 rounded-full bg-noir px-7 py-3.5 text-sm font-medium text-ivory transition-all duration-200 hover:bg-charcoal active:scale-[0.98]"
                >
                  Réserver ma visite
                  <span className="flex h-7 w-7 items-center justify-center rounded-full bg-ivory/10 transition-transform group-hover:translate-x-0.5">
                    <ArrowRight size={12} weight="bold" />
                  </span>
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-3 rounded-full border border-sand px-7 py-3.5 text-sm font-medium text-charcoal transition-all duration-200 hover:border-rose-deep hover:text-rose-deep"
                >
                  Nous contacter
                </Link>
              </div>
            </AnimatedSection>
            <AnimatedSection delay={0.15}>
              <div className="grid grid-cols-2 gap-4">
                <div className="relative aspect-[3/4] overflow-hidden rounded-2xl bg-cream">
                  <Image
                    src="https://picsum.photos/seed/gbp-place-1/600/800"
                    alt="Showroom parfums"
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 50vw, 25vw"
                  />
                </div>
                <div className="relative mt-12 aspect-[3/4] overflow-hidden rounded-2xl bg-cream">
                  <Image
                    src="https://picsum.photos/seed/gbp-place-2/600/800"
                    alt="Espace soins"
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 50vw, 25vw"
                  />
                </div>
                <div className="relative aspect-[3/4] overflow-hidden rounded-2xl bg-cream">
                  <Image
                    src="https://picsum.photos/seed/gbp-place-3/600/800"
                    alt="Corner JuliCath"
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 50vw, 25vw"
                  />
                </div>
                <div className="relative mt-12 aspect-[3/4] overflow-hidden rounded-2xl bg-cream">
                  <Image
                    src="https://picsum.photos/seed/gbp-place-4/600/800"
                    alt="Cabine de soin"
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

      <section className="border-t border-sand bg-cream/40 py-20">
        <div className="mx-auto max-w-5xl px-6 text-center lg:px-8">
          <AnimatedSection>
            <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-rose/15 text-rose-deep">
              <HandHeart size={22} weight="light" />
            </div>
            <p className="mt-5 text-sm leading-relaxed text-muted">
              Les créatrices JuliCath, Julie et Cathy, rejointes par
              l&apos;équipe GBP, partagent une même vision : que le
              raffinement soit accessible, assumé, vivant. Pour elles, pour
              eux, pour tous.
            </p>
          </AnimatedSection>
        </div>
      </section>

      <Newsletter />
    </>
  );
}
