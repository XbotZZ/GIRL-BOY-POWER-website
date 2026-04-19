"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Plus, Check } from "@phosphor-icons/react";
import { useState } from "react";
import { formatPrice, type Product } from "@/lib/products";
import { useCart } from "@/lib/cart";

const tagColors: Record<string, string> = {
  "Coffret duo": "bg-rose/90 text-noir",
  Coffret: "bg-rose/90 text-noir",
  "Coffret signature": "bg-noir text-ivory",
  "Pack": "bg-azure/90 text-noir",
  "Pack premium": "bg-noir text-ivory",
  "Édition limitée": "bg-noir text-ivory",
  "Accessoire premium": "bg-cream text-charcoal ring-1 ring-sand",
  "Pièce signature": "bg-noir text-ivory",
};

function productHref(product: Product): string {
  return `/produits/${product.id}`;
}

export function ProductCard({ product }: { product: Product }) {
  const { add } = useCart();
  const [added, setAdded] = useState(false);

  const tagClass = product.tag
    ? (tagColors[product.tag] ?? "bg-cream text-charcoal ring-1 ring-sand")
    : "";

  const subtitle = (() => {
    if (product.isCoffret) return product.volume ?? "Coffret";
    if (product.universe === "parfums") {
      const gender =
        product.gender === "feminin"
          ? "Féminin"
          : product.gender === "masculin"
            ? "Masculin"
            : "Mixte";
      return `${gender} · ${product.volume ?? ""}`.trim();
    }
    return product.volume ?? product.ref;
  })();

  const handleAdd = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    add(product.id);
    setAdded(true);
    setTimeout(() => setAdded(false), 1500);
  };

  return (
    <motion.article
      whileHover={{ y: -4 }}
      transition={{ type: "spring", stiffness: 300, damping: 25 }}
      className="group"
    >
      <Link href={productHref(product)} className="block">
        <div className="relative overflow-hidden rounded-2xl bg-cream p-1 ring-1 ring-sand/50">
          <div className="relative aspect-[4/5] overflow-hidden rounded-[calc(1rem-4px)] bg-sand/30">
            <Image
              src={product.image}
              alt={product.name}
              fill
              className="object-cover transition-transform duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] group-hover:scale-105"
              sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
            />
            {product.tag && (
              <span
                className={`absolute left-3 top-3 rounded-full px-3 py-1 text-[10px] font-medium uppercase tracking-[0.12em] backdrop-blur-sm ${tagClass}`}
              >
                {product.tag}
              </span>
            )}
            <button
              onClick={handleAdd}
              aria-label={`Ajouter ${product.name} au panier`}
              className="absolute bottom-3 right-3 flex h-10 w-10 items-center justify-center rounded-full bg-noir text-ivory opacity-0 shadow-lg transition-all duration-200 hover:bg-rose-deep group-hover:opacity-100 active:scale-95"
            >
              {added ? (
                <Check size={16} weight="bold" />
              ) : (
                <Plus size={16} weight="bold" />
              )}
            </button>
          </div>
        </div>

        <div className="mt-4 space-y-1.5 px-1">
          <p className="text-[11px] uppercase tracking-[0.18em] text-muted">
            {subtitle}
          </p>
          <h3 className="font-[var(--font-heading)] text-xl font-medium tracking-tight text-noir">
            {product.name}
          </h3>
          <p className="line-clamp-2 text-sm leading-relaxed text-muted">
            {product.description}
          </p>
          <div className="flex items-center justify-between pt-3">
            <span className="text-xs text-muted">{product.ref}</span>
            <p className="font-[var(--font-heading)] text-lg font-medium text-noir">
              {formatPrice(product.price)}
            </p>
          </div>
        </div>
      </Link>
    </motion.article>
  );
}
