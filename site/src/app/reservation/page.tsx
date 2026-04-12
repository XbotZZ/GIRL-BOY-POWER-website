import { AnimatedSection } from "@/components/AnimatedSection";
import { ReservationForm } from "@/components/ReservationForm";
import {
  CalendarBlank,
  Clock,
  HandHeart,
  Sparkle,
} from "@phosphor-icons/react/dist/ssr";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Reservation | GIRL & BOY POWER",
  description:
    "Réservez votre soin au spa GIRL & BOY POWER. Massages, soins du visage, hammam, rituels — choisissez votre expérience en quelques clics.",
};

export default function ReservationPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden pb-12 pt-32 lg:pt-40">
        <div className="gradient-blob-rose pointer-events-none absolute -left-32 top-32 h-96 w-96 rounded-full blur-3xl" />
        <div className="gradient-blob-azure pointer-events-none absolute -right-32 top-20 h-96 w-96 rounded-full blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <AnimatedSection>
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-rose-deep">
              Réservation
            </p>
            <h1 className="mt-3 max-w-3xl font-[var(--font-heading)] text-4xl font-light tracking-tight text-noir md:text-6xl lg:text-7xl">
              Offrez-vous un{" "}
              <em className="italic text-rose-deep">moment</em> rien qu&apos;à
              vous.
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted md:text-lg">
              Sélectionnez votre soin, votre créneau, et laissez-nous vous
              accompagner. Notre équipe confirme votre rendez-vous sous 24h.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Form + sidebar */}
      <section className="pb-24 pt-8 lg:pb-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-5 lg:gap-16">
            {/* Form */}
            <AnimatedSection className="lg:col-span-3">
              <div className="rounded-3xl border border-sand bg-cream/30 p-8 lg:p-12">
                <h2 className="font-[var(--font-heading)] text-2xl font-medium tracking-tight text-noir">
                  Demande de réservation
                </h2>
                <p className="mt-2 text-sm text-muted">
                  Remplissez ce formulaire en 4 étapes. C&apos;est rapide.
                </p>
                <div className="mt-8">
                  <ReservationForm />
                </div>
              </div>
            </AnimatedSection>

            {/* Sidebar */}
            <AnimatedSection delay={0.1} className="space-y-6 lg:col-span-2">
              <div className="rounded-3xl bg-noir p-8 text-ivory lg:p-10">
                <p className="text-xs font-medium uppercase tracking-[0.2em] text-rose">
                  Pourquoi réserver
                </p>
                <h3 className="mt-3 font-[var(--font-heading)] text-2xl font-light tracking-tight">
                  L&apos;expérience GBP
                </h3>
                <ul className="mt-8 space-y-6">
                  {[
                    {
                      Icon: Sparkle,
                      title: "Cadre raffiné",
                      desc: "Cabines individuelles, hammam, sauna, espace de relaxation.",
                    },
                    {
                      Icon: HandHeart,
                      title: "Équipe certifiée",
                      desc: "Thérapeutes diplômés, formés aux meilleures techniques.",
                    },
                    {
                      Icon: CalendarBlank,
                      title: "Flexibilité",
                      desc: "Modification ou annulation gratuite jusqu'à 24h avant le rendez-vous.",
                    },
                  ].map((item) => (
                    <li key={item.title} className="flex gap-4">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-ivory/10">
                        <item.Icon size={18} weight="light" />
                      </div>
                      <div>
                        <p className="text-sm font-medium text-ivory">
                          {item.title}
                        </p>
                        <p className="mt-1 text-sm text-ivory/60">
                          {item.desc}
                        </p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="rounded-3xl border border-sand bg-cream/40 p-8 lg:p-10">
                <div className="flex items-center gap-3">
                  <Clock size={18} weight="light" className="text-rose-deep" />
                  <p className="text-xs font-medium uppercase tracking-[0.15em] text-rose-deep">
                    Horaires
                  </p>
                </div>
                <div className="mt-4 space-y-2 text-sm text-charcoal">
                  <div className="flex justify-between">
                    <span>Lundi — Vendredi</span>
                    <span className="text-muted">10h — 20h</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Samedi</span>
                    <span className="text-muted">10h — 20h</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Dimanche</span>
                    <span className="text-muted">11h — 18h</span>
                  </div>
                </div>
                <p className="mt-6 border-t border-sand pt-4 text-xs text-muted">
                  Une question avant de réserver ? Appelez-nous au{" "}
                  <span className="text-noir">+33 1 86 47 29 03</span>
                </p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>
    </>
  );
}
