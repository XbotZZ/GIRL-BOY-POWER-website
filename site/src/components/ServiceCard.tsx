"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Clock } from "@phosphor-icons/react";
import type { Service } from "@/lib/services";

const tagColors: Record<string, string> = {
  "Best-seller": "bg-rose/90 text-noir",
  Signature: "bg-noir text-ivory",
  "Pour Lui": "bg-azure/90 text-noir",
  "En Couple": "bg-rose/90 text-noir",
  Authentique: "bg-cream text-charcoal ring-1 ring-sand",
  "Pour debuter": "bg-cream text-charcoal ring-1 ring-sand",
};

export function ServiceCard({ service }: { service: Service }) {
  const tagClass = service.tag
    ? tagColors[service.tag] ?? "bg-cream text-charcoal ring-1 ring-sand"
    : "";

  return (
    <motion.article
      whileHover={{ y: -4 }}
      transition={{ type: "spring", stiffness: 300, damping: 25 }}
      className="group cursor-pointer"
    >
      <div className="relative overflow-hidden rounded-2xl bg-cream p-1 ring-1 ring-sand/50">
        <div className="relative aspect-[4/5] overflow-hidden rounded-[calc(1rem-4px)] bg-sand/30">
          <Image
            src={service.image}
            alt={service.name}
            fill
            className="object-cover transition-transform duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
          />
          {service.tag && (
            <span
              className={`absolute left-3 top-3 rounded-full px-3 py-1 text-[10px] font-medium uppercase tracking-[0.12em] backdrop-blur-sm ${tagClass}`}
            >
              {service.tag}
            </span>
          )}
        </div>
      </div>

      <div className="mt-4 space-y-1.5 px-1">
        <h3 className="font-[var(--font-heading)] text-xl font-medium tracking-tight text-noir">
          {service.name}
        </h3>
        <p className="line-clamp-2 text-sm leading-relaxed text-muted">
          {service.description}
        </p>
        <div className="flex items-center justify-between pt-3">
          <div className="flex items-center gap-1.5 text-xs text-muted">
            <Clock size={14} weight="light" />
            <span>{service.duration}</span>
          </div>
          <p className="font-[var(--font-heading)] text-lg font-medium text-noir">
            {service.price}&nbsp;&euro;
          </p>
        </div>
      </div>
    </motion.article>
  );
}
