# Onboarding UI kit — `ui_kits/onboarding/`

A web docs UI kit modelled on **`snubh-vibe-lab/onboarding`** — the install
guide that lab members work through before their first hands-on. It's a
clean two-pane docs reader: persistent TOC on the left, scrollable content
on the right.

> Source of truth: <https://github.com/snubh-vibe-lab/onboarding>
> (`README.md`, `install_guide_mac.md`, `install_guide_windows.md`)

## What's in here

| File | Role |
|---|---|
| `index.html` | Click-thru install guide. Tab between **Claude** and **Codex** paths; tick off checklist items live. |
| `docs.css` | All docs-specific layout — left rail, step blocks, terminals, checklist rows, tabs, callouts |
| `DocsShell.jsx` | The full-height grid shell + sticky left TOC rail |
| `StepBlock.jsx` | Numbered step (green mono numeral + title + body) |
| `Terminal.jsx` | Mac-dot terminal frame around a code block; navy body, cream text |
| `Checklist.jsx` | Interactive ticked-checkbox rows — green check on click |
| `PathTabs.jsx` | Two-tab switcher with green underline on the active tab |
| `Callouts.jsx` | `<Note>` (mute, `//`) and `<Warn>` (green bar, `>`) inline asides |

## Patterns used

- **Sticky left rail** with mono section numbers and a green left-border on
  the active TOC entry.
- **Mac-window terminal frame.** Same three-dot strip as the slide system,
  paired with a mono label and cream-on-navy code.
- **Interactive checklist.** Clicking a row fills the box green and strikes
  the label. Persists in component state only — no localStorage.
- **Tab switcher.** Green underline on active tab; mono uppercase eyebrow
  + sans-serif label per tab.
- **Inline callouts.** `<Note>` is muted and rule-bordered; `<Warn>` carries
  the green left bar (same shape as the quote-slide motif).

## Not real production code

This kit is the *visual* language for member-facing docs. It's an MD-style
reading surface, not a search engine. Drop the components into a Next.js /
Astro / VitePress site and feed them real content.
