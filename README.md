# SNUBH Vibe Lab — Design System

> *Quiet, specific, unmistakably ours.*
> A house style for the AI-tooling work coming out of SNUBH's Vibe Lab —
> built by clinicians, for clinicians.

---

## About the brand

**SNUBH Vibe Lab** (분당서울대학교병원 바이브 랩) is a self-organized
learning community of ~20 mid-career clinical professors at Seoul National
University Bundang Hospital. They build their own AI tools — for their own
clinics, research, education, and service work — and meet once a month on
the fourth Wednesday evening.

The identity collides two worlds:

- **Code** — monospace text, terminal prompts (`//`, `>`), a blinking cursor
- **Clinical** — ECG waveforms, calm authority, clinical specificity

The result is a design that earns its weight through typography, whitespace
and rhythm — not effects.

### Sources used to build this system

| Source | Type | URL |
|---|---|---|
| `snubh-vibe-lab/Assets` | Brand kit (fonts, logo PDF, slide template PDF, slide-prompt spec) | <https://github.com/snubh-vibe-lab/Assets> |
| `snubh-vibe-lab/.github` (profile README) | Mission, lab rules, member voice | <https://github.com/snubh-vibe-lab/.github> |
| `snubh-vibe-lab/onboarding` | Member-facing setup copy (tone, vocabulary) | <https://github.com/snubh-vibe-lab/onboarding> |
| `snubh-vibe-lab/snubh-ai-cookbook` | Public-facing project README (tone) | <https://github.com/snubh-vibe-lab/snubh-ai-cookbook> |
| `snubh-vibe-lab/monthly-workshop` | Monthly meeting decks | <https://github.com/snubh-vibe-lab/monthly-workshop> |

If you have access to those repos, browsing them will give you sharper
intuition than this document alone — the slide-prompt spec
(`SNUBH_Vibe_Lab_PPT_Prompt_v2.md` in `Assets`, mirrored here at the project
root) is the canonical source of truth for the deck system.

---

## Index — what's where in this folder

| Path | Purpose |
|---|---|
| `README.md` | This file |
| `SKILL.md` | Agent-skill front matter so Claude Code / agents can load the system |
| `colors_and_type.css` | All design tokens (colors, type, spacing, rules) — single import |
| `SNUBH_Vibe_Lab_PPT_Prompt_v2.md` | The original brand bible (Korean) for `.pptx` generation |
| `fonts/` | Inter + JetBrains Mono variable fonts (TTF) |
| `assets/` | Logos, avatars, signature lockups |
| `preview/` | Design-system preview cards (rendered into the Design System tab) |
| `slides/` | Sample slide layouts (Cover, Content, Section, Stat, Quote, Two-Column) |
| `ui_kits/web_kit.css` | Shared web patterns (topnav, hero, lists, buttons, footer) |
| `ui_kits/cookbook/` | Web landing kit modeled on the public-facing AI cookbook |
| `ui_kits/onboarding/` | Two-pane docs reader kit modeled on the member install guides |
| `preview/` | Token preview cards rendered into the Design System tab |
| `_check_*.jpg` | Sanity-check screenshots taken during build — safe to delete |

---

## Content fundamentals

The lab speaks in **two voices, woven together**: an authoritative clinical
register, and a low-stakes peer-to-peer register. Both stay quiet.

### Voice & register

- **Korean is primary.** English appears as section eyebrows, code,
  technical terms, and the occasional headline. Mixed-script paragraphs are
  normal and not visually marked — same font, same color.
- **First-person plural (`우리`).** Members address each other and outsiders
  as fellow practitioners. The README front-matter calls them "동료." Never
  "사용자," never "고객."
- **Second-person `~합니다` polite form** in instructional copy
  (onboarding, install guides). No `~해요`, no banmal, no exclamation marks.
- **Imperative-by-instruction.** Steps read as "확인하세요 / 진행하세요 /
  실행하세요" — direct but unhurried.

### Casing

- **English headlines: sentence case.** `Built by established clinicians, for the workflows they actually run.`
- **Mono eyebrows / section labels: UPPERCASE**, often spaced out with em-style gaps for short labels (`M I S S I O N  ·  2 0 2 6`). Letter-spacing handles the rest.
- **Korean: no all-caps** — Korean does not casemap. Use weight (Bold) and the green `>` caret instead.

### Punctuation & marks

- **No emoji.** Ever. The blinking cursor `▍`, the `>` caret, and the `//`
  mono-comment are the system's only iconographic marks.
- **No trailing period on hero titles.** The green cursor *is* the period.
  > ❌ `한국 의료 AI / 글로벌 확장 전략.` + cursor
  > ✅ `한국 의료 AI / 글로벌 확장 전략` + cursor
- **`>`** opens a bullet (action / progress / item).
- **`//`** opens a mono label (comment / metadata / file path).
- **`·` (middle dot)** separates label segments: `// MISSION · 2026`.
- **Slashes** divide compound concepts in titles: `한국 의료 AI / 글로벌 확장 전략`.
- **Trailing periods on bullet lead-ins** — `타겟 행사.` then three spaces, then the rest in regular weight.

### Vocabulary cues (from real lab copy)

| Word | Use |
|---|---|
| 동료 | Members, peers — never "users" |
| 바이브 코딩 / vibe coding | The activity. "AI가 코드를 짭니다. 우리에게는 ... 가 수십 개씩 쌓여 있습니다." |
| 솔직하게 / 솔직함 | A house value — surfaces in lab rule 3 |
| 데모, 코드, 만든 것 | Concrete-noun preference. "만든 것으로 말합니다." |
| 동료로서, 만든 것으로, 솔직하게 | The closing tagline of the org README |
| `> [도구명]` | How tools are introduced in lists |

### Tone examples — drop these in as templates

```
> 실패담은 성공담보다 가치 있음
> 설명보다 데모, 이론보다 코드
> 환자 데이터는 교수 개인이 책임집니다
```

```
// 2026.05 · WORKSHOP
한국 의료 AI / 글로벌 확장 전략
{green cursor}
중견 임상의 20여명, 월 1회, 직접 만든 도구로 말합니다.
```

```
> 타겟 행사.   매월 네 번째 주 수요일 저녁
> 참여 조건.   본인 진료에 적용 가능한 도구 한 가지
> 출석 정책.   완벽한 출석보다 꾸준한 참여
```

---

## Visual foundations

### Color

A **three-color system**, plus muted neutrals derived from each background.

- **Navy `#0E2340`** is the primary dark — cover, section dividers, quotes.
- **Cream `#F2EEE5`** is the primary light — content slides, docs.
- **Green `#1FB85C`** is the *single* accent. Use it sparingly: cursor
  block, `>` caret, the `%` on a stat. **Never on a large area.**

Neutrals split per background — `--mute-on-navy` / `--mute-on-cream`,
`--rule-on-navy` / `--rule-on-cream` — because the same grey will look
flat on one and noisy on the other.

### Type

- **Inter** for everything written — display, body, UI labels.
- **JetBrains Mono** for code, eyebrows, mac-window paths, page numbers.
- **Pretendard Variable** is the East-Asian companion to Inter — its
  metrics line up almost exactly, so mixed Korean/English runs don't
  reflow awkwardly. Apply it via OOXML `<a:ea>` in `.pptx` or via the
  `--font-sans` stack in CSS.
- **Type scale is point-based** because the source-of-truth is `.pptx` at
  13.333"×7.5". Multiply by `1.333` for screen px.

### Layout & geometry

- **16:9 slides.** 1920×1080 px / 13.333"×7.5".
- **Generous margins** — `0.6"` side, `0.5"` top/bottom.
- **Content is left-aligned** at `x = 0.6"`. Centered layouts are reserved
  for Stat and Quote variants.
- **Korean text boxes must be wider** than the equivalent English box —
  Pretendard's CJK glyphs are slightly broader than Inter's Latin.
- **No master slide grid** — each layout draws its own background, signature,
  and footer. Easier to debug.

### Backgrounds

- **Flat fills only.** Never a gradient, never a texture, never an image
  background.
- **No full-bleed photography.** When imagery is needed, it sits as a
  contained card inside the cream content area.
- **Optional very-subtle cover vignette** (≤4% white radial) at the cover
  bottom-right. If in doubt, omit.

### Borders, rules, cards

- **1pt horizontal rules** only. ~`64px` long. They live *under* a title to
  separate it from the subtitle that follows.
- **No card chrome.** Group content with whitespace and rules — not with
  rounded rectangles, drop-shadows, or coloured fills.
- **The only rounded shapes** are the macOS dots in the content-slide header
  strip, and the optional avatar.
- **Corner radius** elsewhere: `0`. Sharp corners are part of the look.

### Shadows & effects

- **No drop shadows.** `shape.shadow.inherit = False` in `.pptx`.
- **No 3-D, no bevel, no glow.**
- **No transparency tricks** beyond the optional 4% vignette and the
  signature-PNG alpha cutout.
- **No blur.**

### Animation

- **One animation in the whole system**: the green cursor blinks
  (`50% { opacity: 0 }`, 1.05s `steps(1, end)`).
- Slide transitions: hard cut — no fade, no push, no morph.
- Hover states in web UI: 60% alpha on the link colour (not a fill, not a
  new colour). Avoid hover bg-changes on text links.
- Press states: drop to 40% alpha. No scale, no translate.

### Iconography motifs (used in place of icons)

- **`>` caret** — opens a bullet / action / decision. Green. Mono.
- **`//`** — opens a metadata label (mono, muted).
- **Cursor block (`▍`)** — closes a hero title once. Green, ~`0.14"` wide,
  height ≈ cap-height of the title.
- **ECG waveform** — appears inside the signature lockup only. Do not
  redraw it in slide bodies.
- **macOS window dots** — the only colored dots in the system. Header strip
  of content slides, never decorative.

### Layout variants ("the seven shapes")

1. **Cover (navy)** — eyebrow, hero title with cursor, subtitle, footer.
2. **Section (navy)** — eyebrow only (e.g. `// 02 · METHODS`) + one-line title.
3. **Content (cream)** — mac header strip, eyebrow, title, rule, lead, bullets.
4. **Two-column (cream)** — two `>` bullet lists side-by-side.
5. **Stat (cream)** — one giant number + short context label.
6. **Quote (navy)** — large quote with green left bar, source in mono.
7. **Closing (navy)** — cover skeleton with optional avatar + contact mono.

### Don'ts (from the original spec)

- No gradients, drop-shadows, 3-D effects.
- No large color bars or ribbons except on Cover/Section.
- No emoji — `>` and `//` do that job.
- No decorative thick underlines under titles — only a thin 1pt rule.
- No cursor block *and* a period on the same hero title.
- Don't redraw the signature as SVG — always use the PNG asset.

---

## Iconography

The system **is mostly icon-free.** Three motifs do almost all the work:

1. **`>` caret** for any list / action / bullet — green, mono, weight Bold.
2. **`//`** for mono labels and file-path-style strings.
3. **macOS window dots** — red `#FF5F57`, yellow `#FEBC2E`, green `#28C840`
   — on the content-slide header strip only.

When a real icon is *unavoidable* (an app's toolbar, an empty-state
illustration), we use **[Lucide](https://lucide.dev)** at 1.5px stroke, in
the muted-on-current-background colour. Lucide's stroke style matches the
quiet, line-only register of the rest of the system; **load it from the CDN
rather than copying SVGs into the repo**:

```html
<script src="https://unpkg.com/lucide@latest/dist/umd/lucide.min.js"></script>
```

> ⚠️ **Substitution flag.** The brand kit did not ship an icon set of its
> own. Lucide is the recommended stand-in. If the lab publishes a curated
> set later, swap this paragraph.

### Logos

The brand kit ships:

- **A square logomark** — `assets/vibe_lab_avatar.png` (486×504, "VL" on navy with green cursor). Use for app icons, small UI marks, the closing-slide avatar.
- **A horizontal signature lockup** — `assets/signature_on_cream.png` and `assets/signature_on_navy.png`. The wordmark `vibe.lab` wrapped in `{ }` curly braces, with an ECG waveform rule and the subtitle "SNUBH · ESTABLISHED CLINICIANS". Use in the top-right of every slide.

> The **`assets/signature_lockup.html`** page previews both variants side-by-side.
>
> Drop the asset into a slide at:
> - Position: `left = 11.13"`, `top = 0.45"`, `width = 1.6"` (height auto)
> - On navy slides: `signature_on_navy.png`
> - On cream slides: `signature_on_cream.png`
>
> The original brand kit ships a 2-page PDF where each variant lives on its
> own page and is rotated 90° CCW. The PDF couldn't be imported automatically,
> so the variants above were derived from the cream-bg PNG the lab provided:
> the navy version is generated by recolouring (cream → navy, dark ink →
> cream, accent green preserved, muted greys mapped to `--mute-on-navy`).

### Emoji & Unicode

- **Emoji** — never. Quiet by default.
- **Unicode** — the cursor block uses U+258F (`▍`) only as a fallback
  glyph; CSS draws the real one with a `<i>` element. `·` (U+00B7) is used
  as a separator in mono labels.

---

## Quick start for an artifact

```html
<link rel="stylesheet" href="colors_and_type.css">
<body class="vl-body">
  <p class="vl-eyebrow">// 2026.05 · WORKSHOP</p>
  <h1 class="vl-h1">한국 의료 AI / 글로벌 확장 전략<i class="vl-cursor"></i></h1>
  <hr class="vl-rule">
  <p class="vl-lead">중견 임상의 20여명, 월 1회, 직접 만든 도구로 말합니다.</p>
</body>
```

That's the whole vocabulary you need to start. Read `SKILL.md` next if
you're an agent loading this as a skill.# Design
