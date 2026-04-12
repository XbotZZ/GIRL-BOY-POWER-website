"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle, ArrowRight } from "@phosphor-icons/react";
import { services, categoryLabels, type ServiceCategory } from "@/lib/services";

const categoryOrder: ServiceCategory[] = [
  "massages",
  "soins-visage",
  "soins-corps",
  "rituels",
  "hammam",
];

export function ReservationForm({
  defaultServiceId,
}: {
  defaultServiceId?: string;
}) {
  const [submitted, setSubmitted] = useState(false);
  const [selectedService, setSelectedService] = useState(defaultServiceId ?? "");

  const selected = services.find((s) => s.id === selectedService);

  if (submitted) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.96 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ type: "spring", stiffness: 110, damping: 18 }}
        className="rounded-3xl border border-sand bg-cream/40 p-12 text-center"
      >
        <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-rose/20 text-rose-deep">
          <CheckCircle size={36} weight="light" />
        </div>
        <h3 className="mt-6 font-[var(--font-heading)] text-2xl font-light tracking-tight text-noir md:text-3xl">
          Demande reçue
        </h3>
        <p className="mx-auto mt-3 max-w-md text-sm leading-relaxed text-muted">
          Merci pour votre demande de réservation. Notre équipe vous contactera
          dans les plus brefs délais pour confirmer votre rendez-vous.
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
      className="space-y-8"
    >
      {/* Service selection */}
      <div className="space-y-3">
        <label className="text-xs font-medium uppercase tracking-[0.15em] text-rose-deep">
          1. Choisissez votre soin
        </label>
        <select
          required
          value={selectedService}
          onChange={(e) => setSelectedService(e.target.value)}
          className="w-full rounded-xl border border-sand bg-ivory px-4 py-3.5 text-sm text-noir outline-none transition-colors focus:border-rose-deep focus:ring-1 focus:ring-rose-deep/30"
        >
          <option value="">— Sélectionner un soin —</option>
          {categoryOrder.map((cat) => (
            <optgroup key={cat} label={categoryLabels[cat]}>
              {services
                .filter((s) => s.category === cat)
                .map((s) => (
                  <option key={s.id} value={s.id}>
                    {s.name} — {s.duration} — {s.price}€
                  </option>
                ))}
            </optgroup>
          ))}
        </select>

        <AnimatePresence mode="wait">
          {selected && (
            <motion.div
              key={selected.id}
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.25 }}
              className="rounded-xl border border-rose/30 bg-rose/5 p-4 text-sm"
            >
              <p className="font-medium text-noir">{selected.name}</p>
              <p className="mt-1 text-muted">{selected.description}</p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Date and time */}
      <div className="space-y-3">
        <label className="text-xs font-medium uppercase tracking-[0.15em] text-rose-deep">
          2. Date et heure souhaitées
        </label>
        <div className="grid gap-4 sm:grid-cols-2">
          <input
            type="date"
            required
            className="w-full rounded-xl border border-sand bg-ivory px-4 py-3.5 text-sm text-noir outline-none transition-colors focus:border-rose-deep focus:ring-1 focus:ring-rose-deep/30"
          />
          <select
            required
            className="w-full rounded-xl border border-sand bg-ivory px-4 py-3.5 text-sm text-noir outline-none transition-colors focus:border-rose-deep focus:ring-1 focus:ring-rose-deep/30"
            defaultValue=""
          >
            <option value="">— Créneau horaire —</option>
            <option>10h00 — 12h00</option>
            <option>12h00 — 14h00</option>
            <option>14h00 — 16h00</option>
            <option>16h00 — 18h00</option>
            <option>18h00 — 20h00</option>
          </select>
        </div>
      </div>

      {/* Personal info */}
      <div className="space-y-3">
        <label className="text-xs font-medium uppercase tracking-[0.15em] text-rose-deep">
          3. Vos coordonnées
        </label>
        <div className="grid gap-4 sm:grid-cols-2">
          <input
            type="text"
            required
            placeholder="Prénom"
            className="w-full rounded-xl border border-sand bg-ivory px-4 py-3.5 text-sm text-noir outline-none transition-colors placeholder:text-muted/50 focus:border-rose-deep focus:ring-1 focus:ring-rose-deep/30"
          />
          <input
            type="text"
            required
            placeholder="Nom"
            className="w-full rounded-xl border border-sand bg-ivory px-4 py-3.5 text-sm text-noir outline-none transition-colors placeholder:text-muted/50 focus:border-rose-deep focus:ring-1 focus:ring-rose-deep/30"
          />
          <input
            type="email"
            required
            placeholder="Email"
            className="w-full rounded-xl border border-sand bg-ivory px-4 py-3.5 text-sm text-noir outline-none transition-colors placeholder:text-muted/50 focus:border-rose-deep focus:ring-1 focus:ring-rose-deep/30"
          />
          <input
            type="tel"
            required
            placeholder="Téléphone"
            className="w-full rounded-xl border border-sand bg-ivory px-4 py-3.5 text-sm text-noir outline-none transition-colors placeholder:text-muted/50 focus:border-rose-deep focus:ring-1 focus:ring-rose-deep/30"
          />
        </div>
      </div>

      {/* Notes */}
      <div className="space-y-3">
        <label className="text-xs font-medium uppercase tracking-[0.15em] text-rose-deep">
          4. Une demande particulière ?
        </label>
        <textarea
          rows={4}
          placeholder="Allergies, préférences, occasion spéciale..."
          className="w-full resize-none rounded-xl border border-sand bg-ivory px-4 py-3.5 text-sm text-noir outline-none transition-colors placeholder:text-muted/50 focus:border-rose-deep focus:ring-1 focus:ring-rose-deep/30"
        />
      </div>

      <button
        type="submit"
        className="group inline-flex items-center gap-3 rounded-full bg-noir px-8 py-4 text-sm font-medium text-ivory transition-all duration-200 hover:bg-charcoal active:scale-[0.98]"
      >
        Envoyer ma demande
        <span className="flex h-7 w-7 items-center justify-center rounded-full bg-ivory/10 transition-transform group-hover:translate-x-0.5">
          <ArrowRight size={12} weight="bold" />
        </span>
      </button>
      <p className="text-xs text-muted/70">
        Réservation à confirmer par notre équipe sous 24h. Aucun paiement
        n&apos;est prélevé à cette étape.
      </p>
    </form>
  );
}
