"use client";

import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useReducer,
  type ReactNode,
} from "react";
import { products, type Product } from "./products";

export interface CartLine {
  productId: string;
  quantity: number;
}

interface CartState {
  lines: CartLine[];
  hydrated: boolean;
}

type CartAction =
  | { type: "hydrate"; lines: CartLine[] }
  | { type: "add"; productId: string; quantity?: number }
  | { type: "remove"; productId: string }
  | { type: "setQuantity"; productId: string; quantity: number }
  | { type: "clear" };

const STORAGE_KEY = "gbp-cart-v1";

const initialState: CartState = { lines: [], hydrated: false };

function reducer(state: CartState, action: CartAction): CartState {
  switch (action.type) {
    case "hydrate":
      return { lines: action.lines, hydrated: true };
    case "add": {
      const qty = action.quantity ?? 1;
      const existing = state.lines.find((l) => l.productId === action.productId);
      const lines = existing
        ? state.lines.map((l) =>
            l.productId === action.productId
              ? { ...l, quantity: l.quantity + qty }
              : l,
          )
        : [...state.lines, { productId: action.productId, quantity: qty }];
      return { ...state, lines };
    }
    case "remove":
      return {
        ...state,
        lines: state.lines.filter((l) => l.productId !== action.productId),
      };
    case "setQuantity": {
      if (action.quantity <= 0) {
        return {
          ...state,
          lines: state.lines.filter((l) => l.productId !== action.productId),
        };
      }
      return {
        ...state,
        lines: state.lines.map((l) =>
          l.productId === action.productId
            ? { ...l, quantity: action.quantity }
            : l,
        ),
      };
    }
    case "clear":
      return { ...state, lines: [] };
  }
}

export interface CartItem extends CartLine {
  product: Product;
  lineTotal: number;
}

interface CartContextValue {
  items: CartItem[];
  totalQuantity: number;
  totalPrice: number;
  hydrated: boolean;
  add: (productId: string, quantity?: number) => void;
  remove: (productId: string) => void;
  setQuantity: (productId: string, quantity: number) => void;
  clear: () => void;
}

const CartContext = createContext<CartContextValue | null>(null);

export function CartProvider({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    try {
      const raw = window.localStorage.getItem(STORAGE_KEY);
      const lines: CartLine[] = raw ? JSON.parse(raw) : [];
      const cleaned = Array.isArray(lines)
        ? lines.filter(
            (l) =>
              l &&
              typeof l.productId === "string" &&
              typeof l.quantity === "number" &&
              products.some((p) => p.id === l.productId),
          )
        : [];
      dispatch({ type: "hydrate", lines: cleaned });
    } catch {
      dispatch({ type: "hydrate", lines: [] });
    }
  }, []);

  useEffect(() => {
    if (!state.hydrated) return;
    try {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(state.lines));
    } catch {
      /* storage unavailable — cart is in-memory only */
    }
  }, [state.lines, state.hydrated]);

  const value = useMemo<CartContextValue>(() => {
    const items: CartItem[] = state.lines
      .map((line) => {
        const product = products.find((p) => p.id === line.productId);
        if (!product) return null;
        return {
          ...line,
          product,
          lineTotal: product.price * line.quantity,
        };
      })
      .filter((x): x is CartItem => x !== null);

    return {
      items,
      totalQuantity: items.reduce((n, i) => n + i.quantity, 0),
      totalPrice: items.reduce((n, i) => n + i.lineTotal, 0),
      hydrated: state.hydrated,
      add: (productId, quantity) => dispatch({ type: "add", productId, quantity }),
      remove: (productId) => dispatch({ type: "remove", productId }),
      setQuantity: (productId, quantity) =>
        dispatch({ type: "setQuantity", productId, quantity }),
      clear: () => dispatch({ type: "clear" }),
    };
  }, [state]);

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart(): CartContextValue {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart must be used inside CartProvider");
  return ctx;
}
