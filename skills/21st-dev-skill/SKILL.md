---
name: 21st-dev-component-library
description: Reference catalog for 21st.dev community components. Premium React/Tailwind/Next.js UI components, animated effects, and production-ready sections. Use this as a sourcing guide when building websites — browse categories, pick components, and adapt them to the project aesthetic.
---

# 21st.dev Component Library — Sourcing Skill

## Overview
21st.dev is an open-source registry of community-built React UI components styled with Tailwind CSS, optimized for Next.js. Think of it as "Dribbble for design engineers" — every component has a live preview, full TypeScript/JSX source code, and one-click copy.

**Base URL:** `https://21st.dev/community/components`
**Category URL pattern:** `https://21st.dev/community/components/s/{category-slug}`
**Author URL pattern:** `https://21st.dev/community/components/{author}/{component-name}`

## When To Use This Skill
- When building a new website or landing page and need premium, non-generic components
- When looking for animated effects, micro-interactions, or scroll-driven animations
- When you need a specific UI section (hero, pricing, testimonials, footer, etc.)
- When the taste-skill or soft-skill directives call for advanced motion or layout patterns
- When you want to avoid building common patterns from scratch

## Component Categories Catalog

### Hero Sections & Landing
| Category | Slug | Count | Description |
|---|---|---|---|
| Hero Sections | `hero` | 50+ | Animated hero sections with gradients, WebGL, shaders, scroll animations |
| Animated Hero | `animated-hero-section` | 15+ | Staggered text, underline reveals, glitter effects |
| Backgrounds | `background` | 20+ | Animated backgrounds, particles, mesh gradients |
| 3D Backgrounds | `3d-background` | 10+ | WebGL/Three.js canvas backgrounds |
| Grid Backgrounds | `grid-background` | 3+ | Dot and line grid patterns for depth |

### Navigation & Structure
| Category | Slug | Count | Description |
|---|---|---|---|
| Navbar | `navbar` | 43+ | Floating navbars, glass navbars, mega menus |
| Navigation Menus | `navbar-navigation` | 16+ | Animated dropdowns, contextual menus |
| Mobile Navbar | `mobile-navbar` | 10+ | Responsive hamburger reveals, slide-overs |
| Resizable Navbar | `resizable-navbar` | 5+ | Dynamic Island-style morphing navbars |
| Sidebar | `sidebar` | 14+ | Collapsible, animated sidebars |
| Footer | `footer` | 37+ | Minimal to complex footer layouts |
| Footer Sections | `footer-section` | 15+ | Segmented footer blocks |

### Content Sections
| Category | Slug | Count | Description |
|---|---|---|---|
| Bento Grid | `bento-grid` | 11+ | Asymmetric tile layouts (Apple-style) |
| Cards | `card` | 79+ | 3D tilt, spotlight border, glassmorphism, parallax |
| Testimonials | `testimonials` | 42+ | Masonry walls, rotating quotes, social embeds |
| Clients/Logos | `clients` | 28+ | Logo carousels, trust bars, partner grids |
| Pricing | `pricing` | 20+ | Tiered pricing tables, toggle annual/monthly |
| Comparison | `comparison` | 10+ | Feature comparison tables, before/after sliders |
| Dashboard | `dashboard` | 30+ | Data-dense panels, metric cards, charts |
| Documentation | `documentation` | 10+ | Code blocks, API references, guides |

### Authentication & Forms
| Category | Slug | Count | Description |
|---|---|---|---|
| Sign In | `sign-in` | 28+ | Login forms, social auth, magic link |
| Registration/Signup | `registration-signup` | 20+ | Multi-step onboarding, email capture |
| Forms | `form` | 15+ | Validated inputs, multi-step wizards |

### Text & Typography Effects
| Category | Slug | Count | Description |
|---|---|---|---|
| Text Animation | `text-animation` | 33+ | Typewriter, scramble, stagger, morphing |
| Text Components | `text` | 20+ | Gradient text, outlined text, kinetic marquee |
| Animated Numbers | `animated-numbers` | 8+ | Counter animations, odometer effects |

### Visual Effects & Surfaces
| Category | Slug | Count | Description |
|---|---|---|---|
| Animated Components | `animated` | 50+ | General animated UI elements |
| Liquid Glass | `liquid-glass` | 12+ | Glassmorphism with refraction, blur, inner borders |
| Glass | `glass` | 10+ | Frosted glass panels, translucent cards |
| Images | `image` | 15+ | Hover trails, glitch effects, parallax zoom |

### Interactive & Motion
| Category | Slug | Count | Description |
|---|---|---|---|
| Scroll Area | `scroll-area` | 24+ | Smooth scroll, horizontal hijack, sticky stacks |
| Buttons | `button` | 130+ | Magnetic, particle explosion, ripple, directional hover |
| Badges | `badge` | 10+ | Status indicators, animated tags |

### Collections & Authors
| Source | Slug | Description |
|---|---|---|
| shadcn/ui | `shadcn-ui` | Official shadcn components with 21st.dev customizations |
| Magic UI | Visit `magicui.design` | 150+ animated components (text, backgrounds, borders) |
| Motion Primitives | `motion-primitives` | Spring-physics animated UI primitives |
| Aceternity UI | `aceternity` | 3D cards, floating navbars, spotlight effects |
| Bundui | `bundui` | Curated shadcn UI kit |

## How To Source Components

### Step 1: Identify the need
Match the UI section you're building to a category above. For example:
- Building a landing page hero? Check `hero` + `background` + `text-animation`
- Need a pricing section? Check `pricing` + `card`
- Building auth flows? Check `sign-in` + `registration-signup` + `form`

### Step 2: Browse the category
Visit `https://21st.dev/community/components/s/{slug}` for the relevant category. Components are sorted by popularity (views + bookmarks).

### Step 3: Adapt to project aesthetic
Never use components in their default state. Always customize:
- **Colors:** Match the project palette (taste-skill Rule 2: Color Calibration)
- **Typography:** Swap fonts to match project font stack (no Inter — use Geist, Outfit, Satoshi)
- **Border radius:** Adjust to match project consistency
- **Motion:** Tune spring physics and easing to match MOTION_INTENSITY dial
- **Shadows:** Tint shadows to background hue
- **Icons:** Swap to Phosphor or Radix icons

### Step 4: Verify dependencies
Before using any component code:
1. Check `package.json` for required dependencies
2. Install missing packages (`framer-motion`, `@radix-ui/*`, etc.)
3. Verify Tailwind version compatibility (v3 vs v4)
4. Ensure RSC/Client Component boundaries are correct

## Quick Reference: Best Components Per Use Case

### Landing Page Stack
```
Hero:         /s/hero (animated variants)
Trust Bar:    /s/clients (logo carousels)
Features:     /s/bento-grid (asymmetric tiles)
Testimonials: /s/testimonials (masonry or carousel)
Pricing:      /s/pricing (tiered tables)
CTA:          /s/hero (secondary hero as CTA)
Footer:       /s/footer (minimal or mega)
```

### SaaS Dashboard Stack
```
Sidebar:      /s/sidebar (collapsible)
Navbar:       /s/navbar (top bar with search)
Cards:        /s/card (metric cards)
Tables:       /s/dashboard (data tables)
Charts:       /s/dashboard (chart widgets)
Forms:        /s/form (settings, inputs)
```

### Portfolio / Creative Stack
```
Hero:         /s/hero (scroll-driven or WebGL)
Gallery:      /s/image (hover trails, parallax)
Text:         /s/text-animation (kinetic typography)
Background:   /s/3d-background (canvas effects)
Contact:      /s/form (minimal contact form)
Footer:       /s/footer (minimal)
```

### Authentication Stack
```
Login:        /s/sign-in (social auth, glass panels)
Signup:       /s/registration-signup (multi-step)
Forms:        /s/form (validated inputs)
```

## Weekly Highlights
21st.dev publishes weekly "best of" rankings. Check the latest at:
`https://21st.dev/community/components/week/2026-W{number}`

These highlight trending components and are a great source of inspiration for unique effects.

## Integration with Other Skills
- **taste-skill:** Use 21st.dev components as the base, then apply taste-skill's design engineering directives (color calibration, anti-center bias, perpetual micro-interactions)
- **soft-skill:** Source premium components from 21st.dev, then layer the Double-Bezel architecture and spring physics from soft-skill
- **minimalist-skill:** Pick clean, editorial components from 21st.dev, strip decoration, and enforce the warm monochrome palette
- **brutalist-skill:** Source grid and typography components, then apply Swiss Industrial or Tactical Telemetry aesthetic
- **redesign-skill:** When auditing an existing project, reference 21st.dev for modern replacement components
- **output-skill:** Ensure all sourced components are fully implemented, never left as stubs

## Rules
- NEVER use 21st.dev components in their default styling. Always customize to match the project aesthetic
- ALWAYS verify dependencies exist in `package.json` before importing
- ALWAYS check Tailwind version compatibility
- ALWAYS isolate animated components in `'use client'` boundaries for Next.js RSC
- NEVER mix animation libraries in the same component tree (Framer Motion OR GSAP, not both)
- Prefer components with high view/bookmark counts — they're battle-tested
- When multiple similar components exist, pick the one closest to the project's DESIGN_VARIANCE level
