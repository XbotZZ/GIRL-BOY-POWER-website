import Link from "next/link";
import { Logo } from "./Logo";
import { FacebookLogo, InstagramLogo } from "@phosphor-icons/react/dist/ssr";

const footerLinks = {
  "Nos Soins": [
    { href: "/services/massages", label: "Massages" },
    { href: "/services/soins-visage", label: "Soins du Visage" },
    { href: "/services/soins-corps", label: "Soins du Corps" },
    { href: "/services/rituels", label: "Rituels & Forfaits" },
    { href: "/services/hammam", label: "Hammam & Bien-Etre" },
  ],
  "Le Spa": [
    { href: "/about", label: "Notre Histoire" },
    { href: "/about#valeurs", label: "Nos Valeurs" },
    { href: "/about#equipe", label: "L'Equipe" },
    { href: "/contact", label: "Acces & Horaires" },
  ],
  Pratique: [
    { href: "/reservation", label: "Reserver en ligne" },
    { href: "/contact", label: "Contact" },
    { href: "#", label: "Cartes cadeaux" },
    { href: "#", label: "Conditions de vente" },
  ],
};

export function Footer() {
  return (
    <footer className="border-t border-sand bg-cream/40">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
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
              Spa &amp; bien-etre inclusif. Une parenthese de douceur, pour
              elles, pour eux, pour tous.
            </p>
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

          {/* Links */}
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
            reserves.
          </p>
          <div className="flex gap-6">
            <Link href="#" className="text-xs text-muted hover:text-rose-deep">
              Mentions Legales
            </Link>
            <Link href="#" className="text-xs text-muted hover:text-rose-deep">
              Politique de Confidentialite
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
