# Zaapi — landing page rebuild

Three pages built to close a specific, measured gap: Zaapi's ads name a customer
problem and earn a 7% click rate, and every one of them lands on a homepage that
names a product category instead. Click-to-lead on Google sits at 0.59% against a
2–5% benchmark; Meta landing-page submissions sit at 2.31% against 10%+.

| Page      | What it fixes                                                                                                                                                                                     |
| --------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `/`       | The message gap. The fold carries the ad's own best-performing line, and the interactive tour lets people see the product without signing up.                                                       |
| `/signup` | Google sign up added at the top. Six fields cut to four. "How many agents do you have" removed — a sales question inside a product sign up. Submit button verified inside the first scroll on a phone. |
| `/demo`   | The lead is captured on form submit, before the calendar. Anyone who fills the form and never picks a slot is still a lead.                                                                          |

## Stack

Next.js 16 (App Router) · TypeScript · Tailwind v4 · statically prerendered.
Forms post to a no-op handler with a real success state — no backend required.

```bash
npm install
npm run dev -- -p 3001
```

## Decisions worth knowing

**One conversion action per page.** The old homepage offered a free trial, a demo
booking and a live chat at once, so nobody was given a single clear thing to do.
Here the primary action is the trial; the secondary is an in-page anchor to the
tour, which commits the visitor to nothing. There is no chat widget. `/demo`
carries no nav and no competing call to action.

**Marketplaces lead the channel strip.** Shopee, Lazada, TikTok Shop and LINE get
the visual weight, with the messaging channels below them. respond.io and
sleekflow.io both lead with WhatsApp and bury LINE in an integration wall; around
70% of Zaapi's customers sell on marketplaces. That ground is unclaimed.

**Nothing is invented.** The proof block ships with visibly marked placeholders
rather than fabricated customer counts, logos or quotes — those numbers come out
of the CRM. Channel and partner marks are set typographically with in-house
glyphs rather than reproducing third-party logo files.

**The product tour embed is the supplied snippet, unmodified.** React does not
execute a `<script>` tag rendered inside JSX, so the `<div>` is injected verbatim
and the identical script `src` is loaded through `next/script`. See
`src/components/home/product-tour.tsx`.

## Responsive verification

Checked with headless Chromium at 375 / 390 / 412 / 430 / 768 / 1024 / 1280 /
1440 / 1920, across every interactive state (demo step 2, the skip-the-calendar
path, sign-up success, mobile menu open):

- Sign-up submit button bottom edge at **538px** — inside the first viewport on a
  390px-wide phone (664px visible) and on an iPhone SE (553px visible).
- Demo submit button bottom edge at **514px**.
- No horizontal overflow at any width, in any state.
- Form inputs are 16px on mobile so iOS Safari does not zoom the viewport on
  focus.
- Tap targets ≥ 44px, except inline links inside sentences, which WCAG 2.5.8
  exempts.

## Not in this repo

The assessment deck is gitignored. It contains Zaapi's ad spend, cost per lead
and account-level performance, and this repository is public.
