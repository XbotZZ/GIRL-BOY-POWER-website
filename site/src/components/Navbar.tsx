"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { List, X, CalendarBlank } from "@phosphor-icons/react";
import { Logo } from "./Logo";

const navLinks = [
  { href: "/", label: "Accueil" },
  { href: "/services", label: "Nos Soins" },
  { href: "/services/massages", label: "Massages" },
  { href: "/services/rituels", label: "Rituels" },
  { href: "/services/hammam", label: "Hammam" },
  { href: "/about", label: "Le Spa" },
  { href: "/contact", label: "Contact" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

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
            {/* Logo */}
            <Link href="/" className="flex items-center gap-3">
              <Logo className="h-11 w-11" />
              <span className="hidden font-[var(--font-heading)] text-base font-semibold tracking-[0.15em] text-noir sm:block">
                GIRL &amp; BOY POWER
              </span>
            </Link>

            {/* Desktop links */}
            <div className="hidden items-center gap-8 lg:flex">
              {navLinks.slice(1, 6).map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm font-medium text-charcoal transition-colors duration-200 hover:text-rose-deep"
                >
                  {link.label}
                </Link>
              ))}
            </div>

            {/* Reservation CTA */}
            <Link
              href="/reservation"
              className="hidden items-center gap-2 rounded-full bg-noir px-5 py-2.5 text-sm font-medium text-ivory transition-all duration-200 hover:bg-charcoal active:scale-[0.98] lg:inline-flex"
            >
              <CalendarBlank size={16} weight="light" />
              Reserver
            </Link>

            {/* Mobile toggle */}
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
      </nav>

      {/* Mobile overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-ivory/95 backdrop-blur-2xl lg:hidden"
          >
            <div className="flex h-full flex-col items-center justify-center gap-6">
              {navLinks.map((link, i) => (
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
                  delay: navLinks.length * 0.06,
                  type: "spring",
                  stiffness: 100,
                  damping: 20,
                }}
                className="mt-4"
              >
                <Link
                  href="/reservation"
                  onClick={() => setIsOpen(false)}
                  className="inline-flex items-center gap-2 rounded-full bg-noir px-8 py-3.5 text-sm font-medium text-ivory"
                >
                  <CalendarBlank size={16} weight="light" />
                  Reserver
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
