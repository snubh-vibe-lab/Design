---
name: snubh-vibe-lab-design
description: Use this skill to generate well-branded interfaces and assets for SNUBH Vibe Lab — the AI-tooling group of mid-career clinicians at Seoul National University Bundang Hospital. Use it for production code, slide decks, throwaway prototypes, mocks, or any artifact that should look and read like the Vibe Lab. Covers colors, type, fonts, content tone, motifs (>, //, cursor block), the seven-slide layout system, and UI kit components.
user-invocable: true
---

# SNUBH Vibe Lab — Design skill

Read `README.md` first — it contains:

- Brand context (who the lab is, who it speaks to)
- Content fundamentals (Korean primary, polite `~합니다`, no emoji, when to use `>` vs `//`)
- Visual foundations (3-color palette, Inter + JetBrains Mono, layout, no shadows / gradients)
- Iconography (the system is mostly icon-free; Lucide as fallback)
- File index pointing at every other file in the skill

Then explore as needed:

- `colors_and_type.css` — copy this into any artifact for instant tokens
- `fonts/` — Inter + JetBrains Mono variable fonts (TTF)
- `assets/` — `vibe_lab_avatar.png` (square mark), `signature_lockup.html` (text fallback)
- `slides/` — sample slide HTMLs for the seven layouts (Cover, Content, Section, Stat, Quote, Two-Column, Closing)
- `ui_kits/cookbook/` and `ui_kits/onboarding/` — web UI patterns
- `SNUBH_Vibe_Lab_PPT_Prompt_v2.md` — the canonical `.pptx`-generation spec (Korean)
- `preview/` — small cards showing tokens in context

## When invoked

**If the user wants a visual artifact** (slide, mock, prototype, internal landing, README graphic):

1. Copy the assets you need out of this skill (fonts, avatar, CSS) into the new project.
2. Use `colors_and_type.css` as-is — don't reinvent tokens.
3. Stay inside the seven-shape layout system. Compose new layouts only by recombining tokens.
4. Korean is primary; English appears as eyebrows, code, technical terms.
5. Use `>` for bullets, `//` for mono labels, the green cursor at the end of a hero title (no period).
6. No emoji. No gradients, drop-shadows, or rounded cards. Quiet wins.

**If the user wants production code**: read `ui_kits/*/README.md` and the component JSX files for the closest-matching surface, copy assets in, follow the same tone rules.

**If the user invokes the skill with no instruction**: ask what they want
to build, ask 3–5 focused questions (deck topic, audience, length;
landing-page goal; etc.), then design.

## Don't

- Don't draw new SVG icons — use Lucide via CDN, or compose `>` and `//`.
- Don't redraw the signature — wait for the PDF, or use the avatar.
- Don't introduce a new color. The palette is navy / cream / green.
- Don't add a period before the cursor on hero titles.
- Don't use emoji.
