# Bright School design system — "Blocks"

Chosen by Gautam on 11 Nov 2026 from three directions. The look borrows from the coding blocks children start with: ink outlines, solid block colours, hard offset shadows. It is drawn from Bright School's own subject and the previous site, not from a survey of other sites.

All values live as CSS variables in `src/styles/global.css`. Pages use the names, never raw values.

## Colour

| Token | Value | Role |
| --- | --- | --- |
| `--ink` | #17153B | Text, outlines, shadows |
| `--paper` | #FFFFFF | Page background, cards |
| `--muted` | #4D4A6B | Secondary text |
| `--purple` | #4B2FB8 | Primary buttons, final call to action |
| `--yellow` | #FFC533 | Sun, highlights, secondary buttons (always with ink text) |
| `--orange` | #B45309 | Beginner stage, "event" blocks |
| `--blue` | #1D4ED8 | Intermediate stage, "motion" blocks |
| `--violet` | #6D28D9 | Advanced stage, "looks" blocks |
| `--green` | #0B7A53 | AI track |
| `--lilac` | #E7DFFF | Tinted band (testimonials), tags |
| `--mint` | #D9F7E8 | Tinted panel (AI) |

Each stage keeps its colour everywhere it appears (cards, course pages, tags). White text is allowed on purple, orange, blue, violet, green and ink; yellow, lilac and mint always carry ink text. All pairs meet 4.5:1. No dark mode.

## Typography

| Use | Family | Weight | Size |
| --- | --- | --- | --- |
| Display (h1) | Fredoka | 700 | clamp(2.5rem, 6vw, 4.1rem), line-height 1.02 |
| Section heading (h2) | Fredoka | 700 | clamp(2rem, 4vw, 2.75rem), line-height 1.1 |
| Card heading | Fredoka | 600 | 1.5rem |
| Big numbers | Fredoka | 700 | 1.9rem to 3rem |
| Lead | DM Sans | 400 | 1.2rem |
| Body | DM Sans | 400 / 700 | 1.0625rem, line-height 1.55 |
| Small | DM Sans | 400 | 0.94rem |
| Code | DM Mono | 500 | 0.94rem |

Fonts are self-hosted through Fontsource packages; no request leaves the site.

## Spacing and layout

4px base: 4, 8, 12, 16, 24, 32, 48, 64, 80. Content width 1160px with 24px side padding (16px on phones). Sections are 80px apart on desktop, 56px on phones. Layouts are left-aligned; rows wrap instead of switching at fixed breakpoints.

## Shape and depth

- Outline: 3px solid ink on every card, button, tag and band edge.
- Radius: 14px (buttons, tags), 22px (cards), 28px (large panels).
- Shadow: hard offset only, no blur. 4px on buttons, 6px on cards, 8px on the final panel. Shadows are ink, or the stage colour on stage cards.

## Components

- **Button, primary**: purple, white text, ink outline, 5px ink shadow. Hover: moves 2px down-right and the shadow shrinks. Focus: 3px yellow ring outside a 3px ink ring.
- **Button, secondary**: yellow or white with ink text, same outline.
- **Text link**: ink, bold, underlined; purple on hover.
- **Stage card**: white, ink outline, stage-colour shadow, age in the stage colour. The whole card is one link.
- **Tag**: lilac or yellow, 10px radius, bold small text.
- **Band**: full-width strip with ink top and bottom edges (yellow for facts, lilac for testimonials).
- **Header**: logo, five links, trial button. On phones the links move into a menu.
- **Footer**: name, contact, hours, legal links.

## Imagery and icons

The hero illustration is built from real code: blocks, a Python snippet, a model result. Photos, when they arrive, sit in ink-outlined 22px frames and show real classes or real student work only, never stock children. Icons are inline stroke SVG at 2.5px; no emoji.

## Logo

The sun comes from the original 2020 logo file (`brightschool_logo.ai`); its shapes are unchanged.

- **Header mark**: the sun in `--yellow` with the ink outline, 52px wide, beside "Bright School" in Fredoka 700 ink. Component: `src/components/Sun.astro`.
- **Browser-tab icon**: the plain yellow sun on an ink rounded square (`public/favicon.svg`), because the outlined sun blurs below about 32px.
- **Plain sun**: `public/logo-sun.svg`, for social images and documents.
- Not carried over: the "Made in SG with ♥" line, the navy wordmark typeface and the original lighter yellow (#FFD741).

## Voice

Plain and specific, written to a parent. Ages, minutes and prices are stated outright. No superlatives that cannot be checked ("top 1%", "#1").
