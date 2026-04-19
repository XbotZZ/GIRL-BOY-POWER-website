"use client";

import { useState } from "react";
import { Check, ShoppingBag, Minus, Plus } from "@phosphor-icons/react";
import { useCart } from "@/lib/cart";

export function AddToCartButton({ productId }: { productId: string }) {
  const { add } = useCart();
  const [quantity, setQuantity] = useState(1);
  const [added, setAdded] = useState(false);

  const handleAdd = () => {
    add(productId, quantity);
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  return (
    <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
      <div className="inline-flex items-center gap-3 rounded-full border border-sand bg-ivory px-2 py-1.5">
        <button
          onClick={() => setQuantity((q) => Math.max(1, q - 1))}
          aria-label="Diminuer la quantité"
          className="flex h-8 w-8 items-center justify-center rounded-full text-charcoal transition-colors hover:bg-cream"
        >
          <Minus size={14} weight="bold" />
        </button>
        <span className="min-w-[1.5rem] text-center text-sm font-medium text-noir">
          {quantity}
        </span>
        <button
          onClick={() => setQuantity((q) => q + 1)}
          aria-label="Augmenter la quantité"
          className="flex h-8 w-8 items-center justify-center rounded-full text-charcoal transition-colors hover:bg-cream"
        >
          <Plus size={14} weight="bold" />
        </button>
      </div>

      <button
        onClick={handleAdd}
        className="group inline-flex items-center justify-center gap-3 rounded-full bg-noir px-7 py-3.5 text-sm font-medium text-ivory transition-all duration-200 hover:bg-charcoal active:scale-[0.98]"
      >
        {added ? (
          <>
            <Check size={16} weight="bold" />
            Ajouté au panier
          </>
        ) : (
          <>
            <ShoppingBag size={16} weight="light" />
            Ajouter au panier
          </>
        )}
      </button>
    </div>
  );
}
