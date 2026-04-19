"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { List, X, ShoppingBag, CaretDown } from "@phosphor-icons/react";
import { Logo } from "./Logo";
import { useCart } from "@/lib/cart";

const parfumsLinks = [
  { href: "/parfums", label: "Toute la collection" },
  { href: "/parfums/printemps", label: "Printemps — Source d'Aurore" },
  { href: "/parfums/ete", label: "Été — Source d'Aurore" },
  { href: "/parfums/automne", label: "Automne — Souffle d'Ambre" },
  { href: "/parfums/hiver", label: "Hiver — Éclat d'Hiver" },
];

const soinsLinks = [
  { href: "/soins", label: "Tous nos soins" },
  { href: "/soins#rituels", label: "Rituels & rasage" },
  { href: "/soins#packs", label: "Packs & coffrets" },
];

const primaryLinks = [
  { href: "/parfums", label: "Parfums", dropdown: parfumsLinks },
  { href: "/soins", label: "Soins", dropdown: soinsLinks },
  { href: "/julicath", label: "JuliCath" },
  { href: "/spa", label: "Spa" },
  { href: "/about", label: "Maison" },
  { href: "/contact", label: "Contact" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const { totalQuantity, hydrated } = useCart();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <nav className="fixed inset-x-0 top-0 z-50">
        <div className="mx-auto mt-4 max-w-7xl px-4">
          <div
            className={`flex items-center justify-between rounded-full px-4 py-2.5 ring-1 backdrop-blur-xl transition-all duration-500 lg:px-6 ${
              scrolled
                ? "bg-ivory/85 shadow-[0_8px_32px_rgba(26,18,20,0.08)] ring-sand/60"
                : "bg-ivory/40 ring-ivory/20"
            }`}
          >
            <Link href="/" className="flex items-center gap-3">
              <Logo className="h-11 w-11" />
              <span className="hidden font-[var(--font-heading)] text-base font-semibold tracking-[0.15em] text-noir sm:block">
                GIRL &amp; BOY POWER
              </span>
            </Link>

            <div className="hidden items-center gap-7 lg:flex">
              {primaryLinks.map((link) =>
                link.dropdown ? (
                  <div
                    key={link.href}
                    className="relative"
                    onMouseEnter={() => setOpenDropdown(link.href)}
                    onMouseLeave={() => setOpenDropdown(null)}
                  >
                    <Link
                      href={link.href}
                      className="flex items-center gap-1 text-sm font-medium text-charcoal transition-colors duration-200 hover:text-rose-deep"
                    >
                      {link.label}
                      <CaretDown size={10} weight="bold" />
                    </Link>
                    <AnimatePresence>
                      {openDropdown === link.href && (
                        <motion.div
                          initial={{ opacity: 0, y: 6 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 6 }}
                          transition={{ duration: 0.15 }}
                          className="absolute left-1/2 top-full -translate-x-1/2 pt-4"
                        >
                          <div className="min-w-[260px] overflow-hidden rounded-2xl bg-ivory p-2 shadow-[0_20px_60px_rgba(26,18,20,0.12)] ring-1 ring-sand/60">
                            {link.dropdown.map((d) => (
                              <Link
                                key={d.href}
                                href={d.href}
                                className="block rounded-xl px-4 py-2.5 text-sm text-charcoal transition-colors hover:bg-cream hover:text-rose-deep"
                              >
                                {d.label}
                              </Link>
                            ))}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ) : (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="text-sm font-medium text-charcoal transition-colors duration-200 hover:text-rose-deep"
                  >
                    {link.label}
                  </Link>
                ),
              )}
            </div>

            <div className="flex items-center gap-2">
              <Link
                href="/panier"
                aria-label="Panier"
                className="relative flex h-10 w-10 items-center justify-center rounded-full text-charcoal transition-colors hover:bg-sand/50 hover:text-rose-deep"
              >
                <ShoppingBag size={20} weight="light" />
                {hydrated && totalQuantity > 0 && (
                  <span className="absolute -right-1 -top-1 flex h-5 min-w-[20px] items-center justify-center rounded-full bg-rose-deep px-1 text-[10px] font-semibold text-ivory">
                    {totalQuantity}
                  </span>
                )}
              </Link>

              <button
                onClick={() => setIsOpen(!isOpen)}
                className="flex h-10 w-10 items-center justify-center rounded-full transition-colors hover:bg-sand/50 lg:hidden"
                aria-label="Menu"
              >
                <AnimatePresence mode="wait">
                  {isOpen ? (
                    <motion.div
                      key="close"
                      initial={{ rotate: -90, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: 90, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <X size={20} weight="light" />
                    </motion.div>
                  ) : (
                    <motion.div
                      key="open"
                      initial={{ rotate: 90, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: -90, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <List size={20} weight="light" />
                    </motion.div>
                  )}
                </AnimatePresence>
              </button>
            </div>
          </div>
        </div>
      </nav>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 overflow-y-auto bg-ivory/95 backdrop-blur-2xl lg:hidden"
          >
            <div className="flex min-h-full flex-col items-center justify-center gap-6 py-24">
              {primaryLinks.map((link, i) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 12 }}
                  transition={{
                    delay: i * 0.06,
                    type: "spring",
                    stiffness: 100,
                    damping: 20,
                  }}
                >
                  <Link
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className="font-[var(--font-heading)] text-3xl font-light tracking-tight text-noir transition-colors hover:text-rose-deep"
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  delay: primaryLinks.length * 0.06,
                  type: "spring",
                  stiffness: 100,
                  damping: 20,
                }}
                className="mt-4"
              >
                <Link
                  href="/panier"
                  onClick={() => setIsOpen(false)}
                  className="inline-flex items-center gap-2 rounded-full bg-noir px-8 py-3.5 text-sm font-medium text-ivory"
                >
                  <ShoppingBag size={16} weight="light" />
                  Mon panier{hydrated && totalQuantity > 0 ? ` (${totalQuantity})` : ""}
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
