"use client";

import { useState } from "react";
import { motion } from "framer-motion";

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  if (submitted) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ type: "spring", stiffness: 100, damping: 20 }}
        className="mt-8 rounded-2xl bg-cream p-8 text-center"
      >
        <h3 className="font-[var(--font-heading)] text-lg font-medium text-noir">
          Message envoyé
        </h3>
        <p className="mt-2 text-sm text-muted">
          Merci pour votre message. Notre équipe reviendra vers vous sous 24h.
        </p>
      </motion.div>
    );
  }

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        setSubmitted(true);
      }}
      className="mt-8 space-y-5"
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <div className="space-y-2">
          <label className="text-xs font-medium uppercase tracking-[0.1em] text-rose-deep">
            Prénom
          </label>
          <input
            type="text"
            required
            className="w-full rounded-xl border border-sand bg-ivory px-4 py-3 text-sm text-noir outline-none transition-colors placeholder:text-muted/50 focus:border-rose-deep focus:ring-1 focus:ring-rose-deep/30"
            placeholder="Votre prénom"
          />
        </div>
        <div className="space-y-2">
          <label className="text-xs font-medium uppercase tracking-[0.1em] text-rose-deep">
            Nom
          </label>
          <input
            type="text"
            required
            className="w-full rounded-xl border border-sand bg-ivory px-4 py-3 text-sm text-noir outline-none transition-colors placeholder:text-muted/50 focus:border-rose-deep focus:ring-1 focus:ring-rose-deep/30"
            placeholder="Votre nom"
          />
        </div>
      </div>

      <div className="space-y-2">
        <label className="text-xs font-medium uppercase tracking-[0.1em] text-rose-deep">
          Email
        </label>
        <input
          type="email"
          required
          className="w-full rounded-xl border border-sand bg-ivory px-4 py-3 text-sm text-noir outline-none transition-colors placeholder:text-muted/50 focus:border-rose-deep focus:ring-1 focus:ring-rose-deep/30"
          placeholder="votre@email.com"
        />
      </div>

      <div className="space-y-2">
        <label className="text-xs font-medium uppercase tracking-[0.1em] text-rose-deep">
          Objet
        </label>
        <select className="w-full rounded-xl border border-sand bg-ivory px-4 py-3 text-sm text-noir outline-none transition-colors focus:border-rose-deep focus:ring-1 focus:ring-rose-deep/30">
          <option value="">Choisir un sujet</option>
          <option value="reservation">Question sur une réservation</option>
          <option value="soin">Conseil sur un soin</option>
          <option value="cadeau">Bons cadeaux</option>
          <option value="evenement">Événement / Privatisation</option>
          <option value="presse">Presse / Médias</option>
          <option value="autre">Autre</option>
        </select>
      </div>

      <div className="space-y-2">
        <label className="text-xs font-medium uppercase tracking-[0.1em] text-rose-deep">
          Message
        </label>
        <textarea
          required
          rows={5}
          className="w-full resize-none rounded-xl border border-sand bg-ivory px-4 py-3 text-sm text-noir outline-none transition-colors placeholder:text-muted/50 focus:border-rose-deep focus:ring-1 focus:ring-rose-deep/30"
          placeholder="Dites-nous tout..."
        />
      </div>

      <button
        type="submit"
        className="w-full rounded-full bg-noir px-8 py-3.5 text-sm font-medium text-ivory transition-all duration-200 hover:bg-charcoal active:scale-[0.98] sm:w-auto"
      >
        Envoyer le message
      </button>
    </form>
  );
}
