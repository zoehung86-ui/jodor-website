# CLAUDE.md — Jo D'or Website

You are working on the website for **Jo D'or**, a fine jewelry brand.
Read this file fully before making any change. These are binding constraints, not suggestions.

---

## What this project is

A hand-coded **static site** (plain HTML + CSS, no framework), deployed on Netlify.
Files: `index.html`, `about.html`, shared `style.css`, `img/` folder. Email capture via an embedded Mailchimp form.
Currently a **pre-launch waitlist site** — the product is not yet for sale.

Keep it simple. No build tools, no frameworks, no localStorage/sessionStorage. Vanilla HTML/CSS, minimal JS only if essential.

---

## 🔴 Hard red lines (never cross these)

1. **Honesty about the product.** The hero piece (LPD-01, a pink tourmaline pendant in 14K gold) is **still in production** — it is in CAD/casting, not finished, and no stones have been bought. **Never write copy that implies it physically exists, is finished, or has been worn.** Use future/intent tense ("each stone *will be* chosen by hand"). Any concept render or AI image must be labeled "**Concept · In the making**". The brand's entire promise is *proof / honesty* — protect it.
2. **Credential discipline.** Founder copy must NOT give a year count (write "years", never "nearly ten years"). Write "**GIA diamond training**" (never "GG" / "Graduate Gemologist"). Write "**designed at** a renowned LA fine jewelry house" — never "senior designer", never borrow seniority, never name former employers.
3. **Never become a second-rate Sophie Bille Brahe.** SBB is a mood-board only. Borrow philosophy (restraint, whitespace), never its surface (cool Nordic palette, pearl/astronomy world).
4. **No discount / sale / urgency language.** No "10% off", no "Last Call", no countdowns. Quiet confidence only. This is calm luxury, not DTC commerce.
5. **No hard selling, no hype words, no emoji** in customer-facing copy.

---

## Brand voice

Warm, quiet, weighted — **a whisper, not a shout.** Short sentences. Lots of breathing room.
Language of "**proof of transformation / already become**" — NEVER "manifestation" or energy-coaching register.
Bilingual: English + Traditional Chinese (繁體中文). The bilingual pairing is a core differentiator — treat Chinese as first-class, not an afterthought. Chinese serif fallback: Noto Serif TC.

---

## Locked taglines (use verbatim; do not rewrite)

- Headline: **Golden Touches, Infinite Joy.** / 金色的觸動，無限的喜悅
- Brand core: **for the woman she's become** / 獻給已然成為的女人  *(use "the", not "every")*
- Website tagline: **Jewelry for your story, not just your style.**
- Hero piece line: **The light you pass on.**

---

## Design tokens (locked)

```css
:root{
  --earth:#4E4237;   /* primary text, dark grounds */
  --leather:#8D7865; /* secondary, eyebrows */
  --sand:#DAD2C5;    /* dividers, mid-tone */
  --stone:#EDEAE3;   /* light grounds */
  --ivory:#FAF8F4;   /* main background, reverse-out on dark */
  --gold:#C9A86A;    /* USE SPARINGLY — accent / icon detail only */
}
```

**Typography**
- Display / headlines: **Cormorant Garamond** (Light/Regular). *(Ivy Mode via Adobe Fonts is the brand display face if her Adobe embed is present — prefer it for select headlines.)*
- Chinese: **Noto Serif TC** (Light/Regular).
- Eyebrows / body / buttons: **Poppins** (Light & Medium). Eyebrows & buttons uppercase, generous tracking (~0.28–0.32em).

**Aesthetic**
- Calm luxury, soft minimalism. Generous whitespace. One idea per section. Slow pacing.
- **Signature element: the gold dot** (the solid dot from the logo that replaces the apostrophe — a gemstone / golden touch). It is the ONE place gold appears. Don't scatter gold elsewhere.
- Match SBB-level restraint: when in doubt, remove, don't add.

---

## Navigation strategy (adopted)

Primary navigation axis = the **three emotional chapters / life stages**, NOT product types (rings/earrings/necklaces).
- Chapter 1 · **解 Liberation** — The Release (entry / letting go)
- Chapter 2 · **Flow Your Heart** — The Return (reconnection)  *(Chinese name not finalized)*
- Chapter 3 · **Angel Number Talisman** — The Confirmation (alignment / repeat-purchase)

The hero piece (**The Light You Pass On**) stands *outside and above* the three chapters — the completed arc.
Think "Universe", not "shelf". A product-type filter, if ever added, is a subordinate utility, never the main nav.

---

## Quality floor (always)

- Responsive: verify layout at **1440px** (desktop) and **390px** (mobile).
- Accessible: visible keyboard focus states; sufficient text contrast.
- Respect `prefers-reduced-motion`. Motion should be minimal and calm.
- Use the CSS variables above — never hard-code hex values that duplicate a token.

---

## How to work with me (Zoe)

- I write my own brand copy. When you draft copy, mark it as a draft for my approval.
- Identify the problem, make ONE clear recommendation, flag it as reversible. Don't give me long lists of open options.
- Before any visual change, tell me what you'll change and why, in plain language.
- The product gates everything. If a task pushes the site to imply finished product we don't have, stop and flag it.
