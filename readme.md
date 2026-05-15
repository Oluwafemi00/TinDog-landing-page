# TinDog — App Landing Page 🐾

> A polished, responsive app landing page with animated carousel, scroll-triggered animations, SVG phone mockup, pricing cards, newsletter form, and a dark design system — built without Bootstrap or any CSS framework.

![HTML](https://img.shields.io/badge/HTML5-E34F26?style=flat&logo=html5&logoColor=white)
![CSS](https://img.shields.io/badge/CSS3-1572B6?style=flat&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat&logo=javascript&logoColor=black)
![No Framework](https://img.shields.io/badge/framework-none-brightgreen)
![No Dependencies](https://img.shields.io/badge/dependencies-none-brightgreen)

---

## Overview

TinDog is a fictional dog-matching app landing page — rebuilt from a Bootstrap prototype into a fully custom, framework-free design. It demonstrates how to build a multi-section marketing website with a sticky nav, hero section, feature grid, testimonial carousel, pricing tiers, and footer — all in clean vanilla HTML, CSS, and JS.

---

## Sections

| Section                   | Details                                                                               |
| ------------------------- | ------------------------------------------------------------------------------------- |
| **Sticky Frosted Nav**    | Fixed, blur-backdrop navigation with mobile hamburger toggle                          |
| **Hero**                  | Gradient headline, app store buttons, stat strip (5M+ users, 40+ countries)           |
| **SVG Phone Mockup**      | Fully hand-coded SVG phone with dog profile card, like/pass buttons, and session dots |
| **Feature Grid**          | 6 feature cards with hover underline animation                                        |
| **Testimonials Carousel** | Auto-advancing, touch-swipeable, dot-navigated carousel (no library)                  |
| **Press Logos**           | Text-based press mentions (TechCrunch, Mashable, etc.) — no image assets              |
| **Pricing**               | 3-tier pricing cards with featured tier highlight                                     |
| **Footer**                | 4-column layout with newsletter email form                                            |
| **Scroll Animations**     | `IntersectionObserver`-based `fade-up` with staggered `--d` CSS variable delays       |

---

## Technical Highlights

- **Zero dependencies** — no jQuery, no Bootstrap, no Swiper; everything built from scratch
- **Custom carousel** built with CSS `translateX` on a flex container, driven by JS index state; supports both dot navigation and touch swipe
- **Touch swipe detection** — `touchstart` / `touchend` delta comparison for mobile carousel control
- **SVG phone mockup** — entire phone illustration (body, screen, dog face, UI elements) written as hand-coded SVG; zero image files
- **`IntersectionObserver`** for scroll animations — elements get `.visible` class when they enter the viewport; `transition-delay` set via inline `--d` CSS custom property for stagger
- **Syne + DM Sans** — bold display font for headings, lightweight sans for body
- **CSS radial gradient mesh** in the hero — three layered `radial-gradient` overlays create atmospheric depth without any image

---

## Project Structure

```
tindog.html      ← Complete app: HTML + embedded CSS + embedded JS
```

Rebuilt from a multi-file Bootstrap project into a single maintainable file — demonstrates understanding of when file separation adds vs reduces clarity.

---

## Design Decisions

- **Deep charcoal + coral** (`#FF4757`) — distinct from generic blue SaaS sites; energetic and app-appropriate
- **All stat numbers visible in hero** — users see "5M+", "40+", "98%" before scrolling once — maximises first impression
- **Text-based press logos** — avoids copyright issues with real logos while still conveying credibility
- **SVG dog card inside phone mockup** — shows UX thinking; visitors understand the app concept without a real screenshot

---

## Run Locally

```bash
open tindog.html
```

---

## What This Demonstrates

- Building a complete multi-section marketing page without any CSS framework
- Custom carousel implementation (touch, keyboard, auto-advance, dot navigation)
- `IntersectionObserver` for performant, staggered scroll animations
- SVG as a versatile design tool for creating mockups and illustrations in code
