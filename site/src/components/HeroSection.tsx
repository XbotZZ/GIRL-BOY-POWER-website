"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { CalendarBlank, ArrowRight } from "@phosphor-icons/react";

export function HeroSection() {
  return (
    <section className="relative min-h-[100dvh] overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <Image
          src="https://picsum.photos/seed/gbp-spa-hero/1920/1080"
          alt="GIRL & BOY POWER Spa & Bien-Être"
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-noir/75 via-noir/40 to-noir/20" />
        <div className="absolute inset-0 bg-gradient-to-t from-noir/40 to-transparent" />
      </div>

      {/* Floating gradient blobs (rose + azure) */}
      <div className="gradient-blob-rose pointer-events-none absolute -left-40 top-20 h-96 w-96 rounded-full blur-3xl" />
      <div className="gradient-blob-azure pointer-events-none absolute -right-32 bottom-32 h-[28rem] w-[28rem] rounded-full blur-3xl" />

      {/* Content */}
      <div className="relative z-10 flex min-h-[100dvh] items-center">
        <div className="mx-auto w-full max-w-7xl px-6 lg:px-8">
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="flex items-center gap-3"
            >
              <span className="h-px w-10 bg-rose" />
              <p className="text-xs font-medium uppercase tracking-[0.3em] text-ivory/80">
                Spa &middot; Bien-Etre &middot; Inclusif
              </p>
              <span className="h-px w-10 bg-azure" />
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.45, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="mt-6 font-[var(--font-heading)] text-5xl font-light leading-[1.05] tracking-tight text-ivory sm:text-6xl md:text-7xl lg:text-8xl"
            >
              Pour <em className="italic font-light text-rose">elles</em>,
              <br />
              pour <em className="italic font-light text-azure">eux</em>,
              <br />
              pour tous.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="mt-8 max-w-md text-base leading-relaxed text-ivory/75"
            >
              Bienvenue chez GIRL &amp; BOY POWER. Notre spa vous accueille dans
              une atmosphère chaleureuse et raffinée, pour des soins
              personnalisés et une parenthèse de pure détente.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.75, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="mt-10 flex flex-wrap gap-4"
            >
              <Link
                href="/reservation"
                className="group inline-flex items-center gap-3 rounded-full bg-ivory px-7 py-3.5 text-sm font-medium text-noir transition-all duration-200 hover:bg-rose hover:text-noir active:scale-[0.98]"
              >
                <CalendarBlank size={18} weight="light" />
                Réserver un soin
                <span className="flex h-7 w-7 items-center justify-center rounded-full bg-noir/10 transition-transform group-hover:translate-x-0.5">
                  <ArrowRight size={12} weight="bold" />
                </span>
              </Link>
              <Link
                href="/services"
                className="inline-flex items-center rounded-full border border-ivory/30 px-7 py-3.5 text-sm font-medium text-ivory transition-all duration-200 hover:border-ivory/60 hover:bg-ivory/5 active:scale-[0.98]"
              >
                Découvrir nos soins
              </Link>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Scroll hint */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        className="absolute bottom-10 left-1/2 z-10 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="h-10 w-6 rounded-full border border-ivory/30 p-1"
        >
          <div className="h-2 w-full rounded-full bg-ivory/50" />
        </motion.div>
      </motion.div>
    </section>
  );
}
