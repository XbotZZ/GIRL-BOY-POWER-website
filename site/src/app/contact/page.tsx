import { AnimatedSection } from "@/components/AnimatedSection";
import { ContactForm } from "@/components/ContactForm";
import { Newsletter } from "@/components/Newsletter";
import {
  Envelope,
  Phone,
  MapPin,
  Clock,
  FacebookLogo,
  InstagramLogo,
} from "@phosphor-icons/react/dist/ssr";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact | GIRL & BOY POWER",
  description:
    "Contactez le spa GIRL & BOY POWER. Réservation, conseils, bons cadeaux, événements — notre équipe est à votre écoute.",
};

export default function ContactPage() {
  return (
    <>
      <section className="relative overflow-hidden pb-24 pt-32 lg:pt-40">
        <div className="gradient-blob-rose pointer-events-none absolute -left-32 top-32 h-96 w-96 rounded-full blur-3xl" />
        <div className="gradient-blob-azure pointer-events-none absolute -right-32 top-20 h-96 w-96 rounded-full blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <AnimatedSection>
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-rose-deep">
              Contact
            </p>
            <h1 className="mt-3 font-[var(--font-heading)] text-4xl font-light tracking-tight text-noir md:text-6xl lg:text-7xl">
              Parlons{" "}
              <em className="italic text-rose-deep">ensemble</em>.
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted md:text-lg">
              Une question sur un soin, un bon cadeau à offrir, une envie de
              privatiser le spa ? Notre équipe est à votre écoute.
            </p>
          </AnimatedSection>

          <div className="mt-16 grid gap-16 lg:grid-cols-5">
            {/* Contact info */}
            <AnimatedSection className="space-y-8 lg:col-span-2">
              <div className="flex items-start gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-rose/15 text-rose-deep">
                  <Envelope size={18} weight="light" />
                </div>
                <div>
                  <h3 className="text-sm font-medium text-noir">Email</h3>
                  <p className="mt-1 text-sm text-muted">
                    contact@girlandboypower.fr
                  </p>
                  <p className="text-xs text-muted/70">
                    Réponse sous 24h en jours ouvrés
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-azure/15 text-azure-deep">
                  <Phone size={18} weight="light" />
                </div>
                <div>
                  <h3 className="text-sm font-medium text-noir">Téléphone</h3>
                  <p className="mt-1 text-sm text-muted">+33 1 86 47 29 03</p>
                  <p className="text-xs text-muted/70">
                    Du lundi au dimanche, sur les horaires d&apos;ouverture
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-rose/15 text-rose-deep">
                  <MapPin size={18} weight="light" />
                </div>
                <div>
                  <h3 className="text-sm font-medium text-noir">Adresse</h3>
                  <p className="mt-1 text-sm text-muted">
                    17 Rue du Faubourg Saint-Honoré
                    <br />
                    75008 Paris, France
                  </p>
                  <p className="text-xs text-muted/70">
                    Métro Concorde · Parking Concorde à 200m
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-azure/15 text-azure-deep">
                  <Clock size={18} weight="light" />
                </div>
                <div>
                  <h3 className="text-sm font-medium text-noir">
                    Horaires d&apos;ouverture
                  </h3>
                  <div className="mt-2 space-y-1 text-sm text-muted">
                    <p>Lundi — Vendredi : 10h — 20h</p>
                    <p>Samedi : 10h — 20h</p>
                    <p>Dimanche : 11h — 18h</p>
                  </div>
                </div>
              </div>

              {/* Social */}
              <div className="border-t border-sand pt-6">
                <p className="text-xs font-medium uppercase tracking-[0.15em] text-rose-deep">
                  Suivez-nous
                </p>
                <div className="mt-4 flex gap-3">
                  <a
                    href="https://www.facebook.com/profile.php?id=61577580411047"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Facebook GBP"
                    className="flex h-11 w-11 items-center justify-center rounded-full border border-sand text-charcoal transition-colors hover:border-rose-deep hover:text-rose-deep"
                  >
                    <FacebookLogo size={18} weight="light" />
                  </a>
                  <a
                    href="#"
                    aria-label="Instagram GBP"
                    className="flex h-11 w-11 items-center justify-center rounded-full border border-sand text-charcoal transition-colors hover:border-rose-deep hover:text-rose-deep"
                  >
                    <InstagramLogo size={18} weight="light" />
                  </a>
                </div>
              </div>

              {/* FAQ teaser */}
              <div className="rounded-2xl border border-sand bg-cream/40 p-6">
                <h3 className="font-[var(--font-heading)] text-base font-medium text-noir">
                  Questions fréquentes
                </h3>
                <div className="mt-4 space-y-3">
                  {[
                    {
                      q: "Comment annuler ou modifier ma réservation ?",
                      a: "Vous pouvez annuler ou modifier gratuitement votre rendez-vous jusqu'à 24h avant le créneau, en nous contactant par téléphone ou email.",
                    },
                    {
                      q: "Proposez-vous des bons cadeaux ?",
                      a: "Oui, nos bons cadeaux sont disponibles pour tous nos soins et rituels. Nous vous l'envoyons par email ou courrier dans un coffret.",
                    },
                    {
                      q: "Puis-je privatiser le spa ?",
                      a: "Absolument. Nous proposons des privatisations pour anniversaires, EVJF/EVG, ou événements d'entreprise. Contactez-nous pour un devis personnalisé.",
                    },
                    {
                      q: "Le spa est-il accessible aux PMR ?",
                      a: "Oui, le spa est entièrement accessible aux personnes à mobilité réduite. Cabine et hammam adaptés.",
                    },
                  ].map((item) => (
                    <details key={item.q} className="group">
                      <summary className="cursor-pointer text-sm text-charcoal transition-colors hover:text-rose-deep">
                        {item.q}
                      </summary>
                      <p className="mt-2 text-sm leading-relaxed text-muted">
                        {item.a}
                      </p>
                    </details>
                  ))}
                </div>
              </div>
            </AnimatedSection>

            {/* Contact form */}
            <AnimatedSection delay={0.1} className="lg:col-span-3">
              <div className="rounded-3xl border border-sand bg-cream/30 p-8 lg:p-10">
                <h2 className="font-[var(--font-heading)] text-xl font-medium tracking-tight text-noir">
                  Envoyez-nous un message
                </h2>
                <p className="mt-2 text-sm text-muted">
                  Pour réserver un soin, utilisez plutôt notre{" "}
                  <a
                    href="/reservation"
                    className="text-rose-deep underline-offset-4 hover:underline"
                  >
                    formulaire de réservation
                  </a>
                  .
                </p>
                <ContactForm />
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      <Newsletter />
    </>
  );
}
