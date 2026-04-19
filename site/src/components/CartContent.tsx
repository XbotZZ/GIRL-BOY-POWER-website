"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Minus,
  Plus,
  Trash,
  ShoppingBag,
  ArrowRight,
  CheckCircle,
} from "@phosphor-icons/react";
import { useCart } from "@/lib/cart";
import { formatPrice, universeLabels } from "@/lib/products";

export function CartContent() {
  const { items, totalPrice, totalQuantity, hydrated, setQuantity, remove, clear } =
    useCart();
  const [ordered, setOrdered] = useState(false);

  if (!hydrated) {
    return (
      <section className="flex min-h-[60vh] items-center justify-center pt-32">
        <p className="text-sm text-muted">Chargement du panier...</p>
      </section>
    );
  }

  const isEmpty = items.length === 0;

  const shipping = totalPrice > 150 || totalPrice === 0 ? 0 : 9.9;
  const totalWithShipping = totalPrice + shipping;

  if (ordered) {
    return (
      <section className="flex min-h-[70vh] items-center justify-center px-6 pt-32">
        <div className="max-w-lg text-center">
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-rose/15 text-rose-deep">
            <CheckCircle size={28} weight="light" />
          </div>
          <h1 className="mt-6 font-[var(--font-heading)] text-3xl font-light tracking-tight text-noir md:text-4xl">
            Merci pour votre demande
          </h1>
          <p className="mt-4 text-sm leading-relaxed text-muted">
            Votre commande a bien été enregistrée. Notre équipe vous contacte
            sous 24h pour confirmer les détails, le mode de livraison et le
            paiement sécurisé.
          </p>
          <Link
            href="/"
            className="mt-8 inline-flex items-center gap-3 rounded-full bg-noir px-7 py-3.5 text-sm font-medium text-ivory transition-all duration-200 hover:bg-charcoal"
          >
            Retour à l&apos;accueil
          </Link>
        </div>
      </section>
    );
  }

  return (
    <section className="pb-24 pt-32 lg:pt-40">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <p className="text-xs font-medium uppercase tracking-[0.2em] text-rose-deep">
          Mon panier
        </p>
        <h1 className="mt-3 font-[var(--font-heading)] text-4xl font-light tracking-tight text-noir md:text-5xl">
          {isEmpty ? "Votre panier est vide" : `${totalQuantity} article${totalQuantity > 1 ? "s" : ""}`}
        </h1>

        {isEmpty ? (
          <div className="mt-16 flex flex-col items-center gap-8 rounded-3xl border border-sand bg-cream/30 p-12 text-center">
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-ivory ring-1 ring-sand">
              <ShoppingBag size={24} weight="light" className="text-rose-deep" />
            </div>
            <div>
              <p className="font-[var(--font-heading)] text-xl font-medium text-noir">
                Aucun article pour le moment
              </p>
              <p className="mt-2 text-sm text-muted">
                Parcourez nos univers pour composer votre sélection.
              </p>
            </div>
            <div className="flex flex-wrap justify-center gap-3">
              <Link
                href="/parfums"
                className="rounded-full bg-noir px-6 py-3 text-sm font-medium text-ivory transition-colors hover:bg-charcoal"
              >
                Parfums
              </Link>
              <Link
                href="/soins"
                className="rounded-full border border-sand px-6 py-3 text-sm font-medium text-charcoal transition-colors hover:border-rose-deep hover:text-rose-deep"
              >
                Soins Homme &amp; Mixte
              </Link>
              <Link
                href="/julicath"
                className="rounded-full border border-sand px-6 py-3 text-sm font-medium text-charcoal transition-colors hover:border-rose-deep hover:text-rose-deep"
              >
                JuliCath
              </Link>
            </div>
          </div>
        ) : (
          <div className="mt-12 grid gap-12 lg:grid-cols-3">
            <div className="lg:col-span-2">
              <ul className="space-y-5">
                <AnimatePresence initial={false}>
                  {items.map((item) => (
                    <motion.li
                      key={item.productId}
                      layout
                      initial={{ opacity: 0, y: 12 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -8 }}
                      transition={{ type: "spring", stiffness: 200, damping: 24 }}
                      className="flex gap-5 rounded-2xl border border-sand bg-ivory p-4 sm:p-6"
                    >
                      <Link
                        href={`/produits/${item.product.id}`}
                        className="relative aspect-[4/5] h-auto w-28 shrink-0 overflow-hidden rounded-xl bg-cream sm:w-32"
                      >
                        <Image
                          src={item.product.image}
                          alt={item.product.name}
                          fill
                          className="object-cover"
                          sizes="128px"
                        />
                      </Link>
                      <div className="flex flex-1 flex-col justify-between gap-3">
                        <div>
                          <p className="text-[11px] uppercase tracking-[0.15em] text-muted">
                            {universeLabels[item.product.universe]}
                          </p>
                          <Link
                            href={`/produits/${item.product.id}`}
                            className="mt-1 block font-[var(--font-heading)] text-lg font-medium tracking-tight text-noir transition-colors hover:text-rose-deep"
                          >
                            {item.product.name}
                          </Link>
                          <p className="mt-1 text-xs text-muted">
                            Réf. {item.product.ref}
                            {item.product.volume ? ` · ${item.product.volume}` : ""}
                          </p>
                        </div>
                        <div className="flex items-center justify-between gap-4">
                          <div className="inline-flex items-center gap-2 rounded-full border border-sand bg-ivory px-1.5 py-1">
                            <button
                              onClick={() =>
                                setQuantity(item.productId, item.quantity - 1)
                              }
                              aria-label="Diminuer"
                              className="flex h-7 w-7 items-center justify-center rounded-full text-charcoal transition-colors hover:bg-cream"
                            >
                              <Minus size={12} weight="bold" />
                            </button>
                            <span className="min-w-[1.25rem] text-center text-sm font-medium text-noir">
                              {item.quantity}
                            </span>
                            <button
                              onClick={() =>
                                setQuantity(item.productId, item.quantity + 1)
                              }
                              aria-label="Augmenter"
                              className="flex h-7 w-7 items-center justify-center rounded-full text-charcoal transition-colors hover:bg-cream"
                            >
                              <Plus size={12} weight="bold" />
                            </button>
                          </div>
                          <div className="flex items-center gap-4">
                            <p className="font-[var(--font-heading)] text-base font-medium text-noir">
                              {formatPrice(item.lineTotal)}
                            </p>
                            <button
                              onClick={() => remove(item.productId)}
                              aria-label="Supprimer"
                              className="flex h-8 w-8 items-center justify-center rounded-full text-muted transition-colors hover:bg-rose/15 hover:text-rose-deep"
                            >
                              <Trash size={14} weight="light" />
                            </button>
                          </div>
                        </div>
                      </div>
                    </motion.li>
                  ))}
                </AnimatePresence>
              </ul>

              <div className="mt-6 flex justify-end">
                <button
                  onClick={clear}
                  className="text-xs uppercase tracking-[0.15em] text-muted transition-colors hover:text-rose-deep"
                >
                  Vider le panier
                </button>
              </div>
            </div>

            <aside className="lg:col-span-1">
              <div className="sticky top-28 rounded-3xl border border-sand bg-cream/40 p-8">
                <p className="text-xs font-medium uppercase tracking-[0.15em] text-rose-deep">
                  Récapitulatif
                </p>
                <h2 className="mt-2 font-[var(--font-heading)] text-2xl font-light tracking-tight text-noir">
                  Votre commande
                </h2>

                <dl className="mt-6 space-y-3 text-sm">
                  <div className="flex justify-between">
                    <dt className="text-muted">Sous-total</dt>
                    <dd className="font-medium text-noir">
                      {formatPrice(totalPrice)}
                    </dd>
                  </div>
                  <div className="flex justify-between">
                    <dt className="text-muted">Livraison</dt>
                    <dd className="font-medium text-noir">
                      {shipping === 0 ? "Offerte" : formatPrice(shipping)}
                    </dd>
                  </div>
                  <div className="flex justify-between border-t border-sand pt-3 text-base">
                    <dt className="font-medium text-noir">Total TTC</dt>
                    <dd className="font-[var(--font-heading)] text-lg font-medium text-noir">
                      {formatPrice(totalWithShipping)}
                    </dd>
                  </div>
                </dl>

                {totalPrice > 0 && totalPrice < 150 && (
                  <p className="mt-4 rounded-xl bg-ivory p-3 text-xs text-muted">
                    Livraison offerte à partir de 150 € d&apos;achat.
                  </p>
                )}

                <button
                  onClick={() => setOrdered(true)}
                  className="group mt-6 inline-flex w-full items-center justify-center gap-3 rounded-full bg-noir px-7 py-3.5 text-sm font-medium text-ivory transition-all duration-200 hover:bg-charcoal active:scale-[0.98]"
                >
                  Finaliser la commande
                  <span className="flex h-7 w-7 items-center justify-center rounded-full bg-ivory/10 transition-transform group-hover:translate-x-0.5">
                    <ArrowRight size={12} weight="bold" />
                  </span>
                </button>

                <p className="mt-4 text-center text-xs text-muted">
                  Notre équipe vous recontacte sous 24h pour finaliser le
                  paiement sécurisé et la livraison.
                </p>
              </div>
            </aside>
          </div>
        )}
      </div>
    </section>
  );
}
