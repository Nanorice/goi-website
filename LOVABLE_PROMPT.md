# Lovable Prompt — Golden Ocean Industrial website

> **Copy everything below the line into Lovable.** It is self-contained and contains only publicly shareable facts.
>
> ⚠️ **Do NOT paste MASTERFILE.md into Lovable.** It contains pricing, margins, capital position, supplier identity and competitor analysis. An AI website builder will happily turn "we need CAD 22,000" or "our landed cost is CAD 42.52" into page copy. This file is the sanitised version — use it instead.

---
---

# PROJECT BRIEF

Build a marketing website for **Golden Ocean Industrial Co. Ltd.**, a British Columbia company supplying marine-derived HPMC empty capsule shells to Canadian natural health product manufacturers.

## Who this is for

The reader is a **procurement manager or QA/regulatory lead at a Canadian contract manufacturer** — someone who fills capsules for supplement brands. They are technical, sceptical, and evaluating whether we are a credible supplier worth putting through a qualification process. They are **not** a consumer. Nothing about this site should feel like a wellness brand or a DTC supplement company.

**The emotional job of the site:** make a cautious professional think *"this is a serious, well-run supplier — I'd take a call."* Calm competence, not enthusiasm.

## Tone

Understated, precise, confident. British/Canadian industrial B2B. No exclamation marks, no "revolutionary", no "passionate about", no growth-hack copywriting. Short declarative sentences. Every claim specific and verifiable.

---

# DESIGN DIRECTION — PRIMARY: "Deep Ocean Precision"

The brief is *marine-derived* material and *laboratory-grade* rigour. Marry those: **the depth and calm of deep water with the precision of a spec sheet.** Think a well-designed scientific instrument, not a seaweed smoothie.

### Palette

```
--abyss      #061A26   deep hero backgrounds, footer
--deep       #0C2E42   secondary dark surfaces
--tide       #14707A   primary accent — links, buttons, rules
--tide-lift  #1E9AA3   accent hover
--foam       #F4F8F9   light section background
--paper      #FFFFFF   base
--ink        #0E1E2B   headings on light
--body       #33505F   body text on light
--muted      #6B8494   captions, labels
--line       #DCE6EA   hairlines and borders
--sand       #C9A227   sparingly — a single warm highlight for emphasis marks only
```

Full dark-mode variant required via `prefers-color-scheme`. In dark mode invert to abyss backgrounds with foam text; keep `--tide` legible by lifting to `--tide-lift`.

### Typography

- **Headings:** a high-contrast display face with editorial character — **Fraunces**, **Instrument Serif**, or **Newsreader**. Tight tracking (-0.02em), sizes stepping confidently: hero 56–72px desktop, section headings 32–40px.
- **Body:** a clean neutral sans — **Inter** or **Geist**. 17–18px base, line-height 1.65, max measure 65 characters.
- **Micro-labels:** the sans at 12–13px, uppercase, letter-spacing 0.09em, in `--tide`. Use these as section eyebrows.
- Optional: a monospace (**JetBrains Mono**, **IBM Plex Mono**) for specification values and the company number — reinforces the precision idea.

⚠️ The owner works from mainland China where Google Fonts is unreliable. **Self-host fonts or use a fallback stack that degrades gracefully.** Always include a full system-font fallback.

### Layout and motion

- Generous vertical rhythm — sections breathe at 96–128px padding on desktop
- **Asymmetric editorial grid**, not centred-everything. Let headings sit left with content offset
- Hairline rules (1px `--line`) as structural dividers rather than boxes and cards everywhere
- **A subtle depth motif:** fine horizontal contour lines, like a bathymetric chart, at very low opacity in the hero background. Suggestion, not decoration. No literal wave graphics, no ocean stock photography, no bubbles
- Motion: quiet fade-and-rise on scroll (12–16px translate, 400ms, ease-out). No bounce, no parallax, no autoplay
- Fully responsive; single column below 768px

### Absolutely avoid
Stock photography of pills, labs, or people in white coats. Gradient blobs. Glassmorphism. Emoji. Rounded pill-shaped everything. Chatbot widgets. Cookie-banner clutter. Anything that reads as a 2021 SaaS template.

---

# ALTERNATIVE DIRECTIONS

If the primary doesn't land, try one of these instead — same content, different skin:

**B — "Technical Datasheet."** Near-white, structural, almost brutalist in its clarity. Monospace labels throughout, visible grid lines, tabular data treated as the hero element. Single accent colour. Reads like a well-set specification document. Very credible to a QA reader.

**C — "Nordic Apothecary."** Warm off-white (#FAF8F5), muted sage and clay, a humanist serif, lots of air. Softer and more natural-materials; leans into the marine/plant-derived story. Risk: can drift consumer — keep it restrained.

---

# PAGE STRUCTURE AND EXACT COPY

⚠️ **Use this copy verbatim. Do not invent, embellish or add claims.** Every sentence here has been checked against what the company can actually evidence. Marketing language you add may be legally unsupportable.

## Navigation
Logo/wordmark left: **Golden Ocean Industrial**
Links right: Products · Quality · Why us · Request a quote

## 1. Hero

**Eyebrow:** Empty capsule shells · British Columbia, Canada

**Heading:** Marine-derived HPMC capsule shells for Canadian manufacturers

**Body:** Golden Ocean Industrial supplies vegetarian hypromellose (HPMC) empty capsule shells to natural health product manufacturers across Canada — sizes 1, 0 and 00, in transparent and coloured. A Canadian company, invoicing in Canadian dollars, handling the import so you don't have to.

**Primary button:** Request a quote → anchors to the form
**Secondary:** sales@goldenoceanindustrial.com (mailto link)

## 2. Products

**Eyebrow:** Product range
**Heading:** Vegetarian HPMC capsules, made from seaweed polysaccharide

**Intro:** Our capsules are manufactured from hypromellose with a marine-derived gelling agent — containing no gelatin, no animal derivatives and no titanium dioxide in the transparent range. Suitable for vegetarian, vegan and halal formulations.

**Table** — three rows, treat this as a designed element rather than a default HTML table:

| Size | Format | Composition |
|---|---|---|
| Size 00 | Transparent · Coloured | HPMC + marine polysaccharide |
| Size 0 | Transparent · Coloured | HPMC + marine polysaccharide |
| Size 1 | Transparent · Coloured | HPMC + marine polysaccharide |

**Footnote:** Shelf life of four years under recommended storage conditions, supported by 48-month stability data. Full specifications, certificates of analysis and technical documentation are provided on request to support your supplier qualification.

## 3. Quality and certification

**Eyebrow:** Quality & certification
**Heading:** Manufactured to internationally recognised standards

**Intro:** Our manufacturing partner operates under the following certifications and registrations. Current certificates are supplied with your qualification pack.

**Five certification tiles.** Render each as a typographic mark — the certification name set in the display face, with a caption beneath. **Build each tile so an image can be dropped in later to replace the text mark** (the logo files are not yet licensed for our use, so text only for now):

| Mark | Caption |
|---|---|
| BRCGS | Global food safety standard |
| NSF | Good manufacturing practice |
| FDA | Facility registration |
| HALAL | JAKIM certified |
| NON-GMO | Verified statement |

**Required disclaimer below the tiles, in small muted text — do not remove:**
Certifications listed are held by our manufacturing partner in respect of its production facility. Copies are available on request.

## 4. Why us

**Eyebrow:** Why Golden Ocean
**Heading:** A Canadian supplier, without the import burden

**Intro:** Most manufacturers we speak to are single-sourced on capsules. We exist to be a qualified second source — so a delay or a price movement upstream doesn't become a production problem.

**Four points.** Use restrained line-art icons (1.6px stroke, `--tide`) or numerals — no filled illustrations:

1. **Documented and auditable** — Specifications, certificates of analysis and certification records provided upfront to support your QA qualification process.
2. **We carry the import** — Customs clearance, documentation and delivery to your facility are handled by us. You place a domestic order and receive domestic goods.
3. **Invoiced in Canadian dollars** — No currency exposure, no international payment handling and no overseas counterparty risk on your side of the transaction.
4. **Plant-based by default** — No gelatin and no animal derivatives — suitable for vegetarian, vegan and halal formulations without reformulating your capsule shell.

## 5. Quote form

**Eyebrow:** Request a quote
**Heading:** Tell us what you need

**Intro:** Send us the sizes and volumes you're working with and we'll come back with pricing and lead times. If it's useful, we can send samples to support your qualification work in parallel.

**Fields:**
- Name *(required)*
- Company *(required)*
- Email *(required)*
- Phone
- Delivery province *(select: British Columbia, Alberta, Saskatchewan, Manitoba, Ontario, Quebec, New Brunswick, Nova Scotia, Prince Edward Island, Newfoundland and Labrador, Outside Canada)*
- Size required *(select: Size 00, Size 0, Size 1, Multiple sizes, Not sure yet)*
- Approximate quantity *(text, placeholder: "e.g. 3,000,000 pieces per order, or annual usage")* — hint text: "A rough figure is fine — it helps us quote accurately."
- Message *(textarea, placeholder: "Anything else that would help us respond usefully — timelines, transparent or coloured, qualification requirements.")*
- Include a hidden honeypot field named `_gotcha` for spam filtering
- Submit button: **Send enquiry**

Form posts to Formspree — leave the action as `https://formspree.io/f/YOUR_FORM_ID` for the owner to replace. Show a clear success state after submission.

## 6. Footer

**Golden Ocean Industrial Co. Ltd.**
Incorporated in British Columbia, Canada
Company No. BC1591256

sales@goldenoceanindustrial.com
goldenoceanindustrial.com

Supplier qualification packs and samples available on request.

*(Set the company number in the monospace face if one is used — it reads as verifiable, which is the point of including it.)*

---

# TECHNICAL REQUIREMENTS

- Single-page site, anchor navigation, sticky header
- React + Tailwind
- Full light and dark mode via `prefers-color-scheme`
- WCAG AA contrast minimum; visible focus states; skip-to-content link; semantic landmarks
- Fast: no heavy libraries, no icon fonts, inline SVG icons only
- Meta title, description and Open Graph tags
- Favicon: a simple mark — suggested concept is an ellipse (capsule, viewed end-on) above two contour lines (water), in `--tide` on white. Keep it geometric

---

# CRITICAL CONTENT RULES — DO NOT BREAK THESE

These are legal and compliance constraints, not stylistic preferences.

1. **Do not add any Kosher claim.** The certificate has expired.
2. **Do not add any ethylene oxide (ETO) or "ETO-free" claim.** The supporting test is out of date.
3. **Do not add customer names, testimonials, "trusted by" logos, review counts, or any claim about years in business, volumes shipped, or number of clients.** The company has none of these and inventing them is fraud.
4. **Do not reference titanium dioxide, E171, or any regulatory ban.** No such restriction exists in Canada and citing one signals the writer doesn't know the market.
5. **Do not name the manufacturer** or state its country of origin beyond what appears above.
6. **Do not use real certification logos** (BRCGS, NSF, FDA marks) — they are licensed to the certificate holder, not to this company. Typographic treatment only.
7. **Do not add statistics, market-size figures or percentages** unless they appear verbatim in this brief.
8. **Do not add a blog, news section, careers page, or team/about page with named people.**

If a section feels thin, **leave it thin.** Restraint reads as confidence to this audience. Inventing content to fill space is the one failure mode that would actively damage this business.
