import Link from "next/link";
import { Logo } from "./Logo";
import { FacebookLogo, InstagramLogo } from "@phosphor-icons/react/dist/ssr";

const footerLinks = {
  Parfums: [
    { href: "/parfums", label: "Toute la collection" },
    { href: "/parfums/printemps", label: "Printemps — Source d'Aurore" },
    { href: "/parfums/ete", label: "Été — Source d'Aurore" },
    { href: "/parfums/automne", label: "Automne — Souffle d'Ambre" },
    { href: "/parfums/hiver", label: "Hiver — Éclat d'Hiver" },
  ],
  "La Maison": [
    { href: "/soins", label: "Soins Homme & Mixte" },
    { href: "/julicath", label: "JuliCath Bagagerie" },
    { href: "/spa", label: "Spa & Bien-Être" },
    { href: "/about", label: "Notre histoire" },
  ],
  Pratique: [
    { href: "/panier", label: "Mon panier" },
    { href: "/reservation", label: "Réserver un soin" },
    { href: "/contact", label: "Contact" },
    { href: "#", label: "Conditions de vente" },
  ],
};

export function Footer() {
  return (
    <footer className="border-t border-sand bg-cream/40">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3">
              <Logo className="h-12 w-12" />
              <h3 className="font-[var(--font-heading)] text-base font-semibold tracking-[0.15em] text-noir">
                GIRL &amp; BOY
                <br />
                POWER
              </h3>
            </div>
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-muted">
              Maison de parfums, soins d&apos;inspiration naturelle, bagagerie
              de luxe JuliCath et spa bien-être. Inspirés par la pureté des
              Sources de la Douix, à Châtillon-sur-Seine.
            </p>
            <address className="mt-5 text-xs not-italic leading-relaxed text-muted">
              20 avenue Noël Navoizat
              <br />
              21400 Châtillon-sur-Seine
            </address>
            <div className="mt-5 flex gap-3">
              <a
                href="https://www.facebook.com/profile.php?id=61577580411047"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-sand text-charcoal transition-all hover:border-rose hover:text-rose-deep"
              >
                <FacebookLogo size={16} weight="light" />
              </a>
              <a
                href="#"
                aria-label="Instagram"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-sand text-charcoal transition-all hover:border-azure hover:text-azure-deep"
              >
                <InstagramLogo size={16} weight="light" />
              </a>
            </div>
          </div>

          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="text-xs font-medium uppercase tracking-[0.15em] text-muted">
                {title}
              </h4>
              <ul className="mt-4 space-y-3">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-charcoal transition-colors duration-200 hover:text-rose-deep"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-sand pt-8 md:flex-row">
          <p className="text-xs text-muted">
            &copy; {new Date().getFullYear()} GIRL &amp; BOY POWER. Tous droits
            réservés.
          </p>
          <div className="flex gap-6">
            <Link href="#" className="text-xs text-muted hover:text-rose-deep">
              Mentions légales
            </Link>
            <Link href="#" className="text-xs text-muted hover:text-rose-deep">
              Politique de confidentialité
            </Link>
            <Link href="#" className="text-xs text-muted hover:text-rose-deep">
              CGV
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
