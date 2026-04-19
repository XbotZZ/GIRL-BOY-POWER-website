import {
  AnimatedSection,
  StaggerContainer,
  StaggerItem,
} from "@/components/AnimatedSection";
import { ProductCard } from "@/components/ProductCard";
import { AddToCartButton } from "@/components/AddToCartButton";
import {
  products,
  getProductById,
  formatPrice,
  seasonCollectionNames,
  universeLabels,
} from "@/lib/products";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, Leaf, Drop } from "@phosphor-icons/react/dist/ssr";
import type { Metadata } from "next";

export function generateStaticParams() {
  return products.map((p) => ({ id: p.id }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}): Promise<Metadata> {
  const { id } = await params;
  const product = getProductById(id);
  if (!product) return { title: "Produit introuvable" };
  return {
    title: `${product.name} | GIRL & BOY POWER`,
    description: product.description,
  };
}

const backLinks: Record<string, { href: string; label: string }> = {
  parfums: { href: "/parfums", label: "Retour aux parfums" },
  soins: { href: "/soins", label: "Retour aux soins" },
  julicath: { href: "/julicath", label: "Retour à JuliCath" },
  spa: { href: "/spa", label: "Retour au spa" },
};

export default async function ProductPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const product = getProductById(id);
  if (!product) notFound();

  const related = products
    .filter((p) => p.universe === product.universe && p.id !== product.id)
    .slice(0, 3);

  const back = backLinks[product.universe];

  return (
    <>
      <section className="pt-28 lg:pt-36">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <Link
            href={back.href}
            className="inline-flex items-center gap-2 text-sm text-charcoal transition-colors hover:text-rose-deep"
          >
            <ArrowLeft size={14} weight="bold" />
            {back.label}
          </Link>

          <div className="mt-8 grid gap-12 lg:grid-cols-2 lg:gap-16">
            <AnimatedSection>
              <div className="relative aspect-[4/5] overflow-hidden rounded-3xl bg-cream ring-1 ring-sand/60">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  priority
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                {product.tag && (
                  <span className="absolute left-4 top-4 rounded-full bg-ivory px-3 py-1 text-[11px] font-medium uppercase tracking-[0.15em] text-noir ring-1 ring-sand">
                    {product.tag}
                  </span>
                )}
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.1}>
              <p className="text-xs font-medium uppercase tracking-[0.2em] text-rose-deep">
                {product.season
                  ? seasonCollectionNames[product.season]
                  : universeLabels[product.universe]}
              </p>
              <h1 className="mt-3 font-[var(--font-heading)] text-4xl font-light tracking-tight text-noir md:text-5xl">
                {product.name}
              </h1>
              <p className="mt-4 text-sm uppercase tracking-[0.15em] text-muted">
                Réf. {product.ref}
                {product.volume ? ` · ${product.volume}` : ""}
                {product.gender
                  ? ` · ${
                      product.gender === "feminin"
                        ? "Féminin"
                        : product.gender === "masculin"
                          ? "Masculin"
                          : "Mixte"
                    }`
                  : ""}
              </p>

              <p className="mt-6 text-base leading-relaxed text-charcoal">
                {product.description}
              </p>

              <p className="mt-8 font-[var(--font-heading)] text-3xl font-medium text-noir">
                {formatPrice(product.price)}
              </p>

              <div className="mt-8">
                <AddToCartButton productId={product.id} />
              </div>

              {product.notes && product.notes.length > 0 && (
                <div className="mt-10 rounded-2xl border border-sand bg-cream/40 p-6">
                  <div className="flex items-center gap-2">
                    <Drop size={16} weight="light" className="text-rose-deep" />
                    <p className="text-xs font-medium uppercase tracking-[0.15em] text-rose-deep">
                      Notes olfactives
                    </p>
                  </div>
                  <ul className="mt-4 space-y-2 text-sm text-charcoal">
                    {product.notes.map((note) => (
                      <li key={note} className="flex items-center gap-3">
                        <span className="h-px w-6 bg-rose-deep" />
                        {note}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {product.ingredients && product.ingredients.length > 0 && (
                <div className="mt-6 rounded-2xl border border-sand bg-cream/40 p-6">
                  <div className="flex items-center gap-2">
                    <Leaf size={16} weight="light" className="text-azure-deep" />
                    <p className="text-xs font-medium uppercase tracking-[0.15em] text-azure-deep">
                      {product.universe === "soins"
                        ? "Actifs clés"
                        : "Composition"}
                    </p>
                  </div>
                  <ul className="mt-4 space-y-2 text-sm text-charcoal">
                    {product.ingredients.map((ing) => (
                      <li key={ing} className="flex items-center gap-3">
                        <span className="h-px w-6 bg-azure-deep" />
                        {ing}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </AnimatedSection>
          </div>
        </div>
      </section>

      {related.length > 0 && (
        <section className="mt-24 border-t border-sand bg-cream/40 py-20 lg:mt-32 lg:py-28">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <AnimatedSection>
              <p className="text-xs font-medium uppercase tracking-[0.2em] text-rose-deep">
                Dans le même univers
              </p>
              <h2 className="mt-2 font-[var(--font-heading)] text-3xl font-light tracking-tight text-noir md:text-4xl">
                À découvrir aussi
              </h2>
            </AnimatedSection>

            <StaggerContainer className="mt-12 grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3">
              {related.map((p) => (
                <StaggerItem key={p.id}>
                  <ProductCard product={p} />
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </section>
      )}
    </>
  );
}
