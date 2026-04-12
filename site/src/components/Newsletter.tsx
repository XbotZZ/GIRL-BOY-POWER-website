"use client";

import { motion } from "framer-motion";

export function Newsletter() {
  return (
    <section className="relative overflow-hidden bg-noir py-24 lg:py-32">
      {/* Subtle gradient blobs */}
      <div className="gradient-blob-rose pointer-events-none absolute -left-20 top-10 h-72 w-72 rounded-full blur-3xl" />
      <div className="gradient-blob-azure pointer-events-none absolute -right-20 bottom-10 h-80 w-80 rounded-full blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="mx-auto max-w-2xl text-center"
        >
          <div className="mx-auto flex w-fit items-center gap-3">
            <span className="h-px w-10 bg-rose" />
            <p className="text-xs font-medium uppercase tracking-[0.3em] text-ivory/60">
              Newsletter GBP
            </p>
            <span className="h-px w-10 bg-azure" />
          </div>
          <h2 className="mt-5 font-[var(--font-heading)] text-3xl font-light tracking-tight text-ivory md:text-5xl">
            Restez connectes a l'univers GBP
          </h2>
          <p className="mt-5 text-sm leading-relaxed text-ivory/60 md:text-base">
            Recevez en avant-premiere nos offres exclusives, nos nouveaux soins
            et nos invitations a des moments privilegies.
          </p>
          <form className="mt-10 flex flex-col gap-3 sm:flex-row sm:gap-0">
            <input
              type="email"
              placeholder="Votre adresse e-mail"
              className="flex-1 rounded-full border border-ivory/15 bg-ivory/5 px-6 py-3.5 text-sm text-ivory placeholder-ivory/40 outline-none transition-colors focus:border-rose/50 focus:ring-1 focus:ring-rose/30 sm:rounded-r-none"
            />
            <button
              type="submit"
              className="rounded-full bg-rose px-8 py-3.5 text-sm font-medium text-noir transition-all duration-200 hover:bg-rose-deep active:scale-[0.98] sm:rounded-l-none"
            >
              Je m'inscris
            </button>
          </form>
          <p className="mt-3 text-xs text-ivory/30">
            En vous inscrivant, vous acceptez notre politique de confidentialite.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
