# Cookbook UI kit — `ui_kits/cookbook/`

A web UI kit modelled on **`snubh-vibe-lab/snubh-ai-cookbook`** — the public-facing
collection of validated clinical-AI prompts, workflows, tools, case studies, and
evaluation protocols. The real repo is currently a single MIT-licensed README
with the structure laid out (planned public release September 2026); this kit
imagines what the docs site looks like once the cookbook lands.

> Source of truth: <https://github.com/snubh-vibe-lab/snubh-ai-cookbook>

## What's in here

| File | Role |
|---|---|
| `index.html` | Click-thru landing — TopNav · Hero · Structure grid · Featured recipes · Lab rules · Footer |
| `TopNav.jsx` | Brand mark + section nav (mono uppercase) |
| `Hero.jsx` | Eyebrow + giant Inter-Bold title with green cursor + lead + two CTA buttons |
| `SpecList.jsx` | The `>` caret bullet list pattern |
| `RepoGrid.jsx` | Auto-fit grid of repo-folder "cards" (no card chrome — title + rule + text) |
| `PromptRecipe.jsx` | A recipe entry: meta · title · summary · code block · tag row |
| `FootStrip.jsx` | Mono uppercase footer strip with org tag + links |

## Patterns used

- **No card chrome.** Sections, recipes and grid cells are separated by 1px
  horizontal rules and whitespace, not by rounded rectangles.
- **Buttons are sharp.** `vl-btn` uses 1px border + flat fill; primary inverts
  colour on hover (no shadow, no scale).
- **Code blocks are navy.** Cream-on-navy mono, no syntax highlighting.
- **The cursor blinks** on the hero title — the only animation on the page.
- **Mono labels open with `//`.** Sentence titles never carry a trailing
  period; the green cursor closes the headline.

## Not real production code

This kit recreates the *visual* language. The components are intentionally
small and mostly cosmetic — no router, no MDX, no real search. Drop into a
new app and replace the dummy content.
