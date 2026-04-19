# site

A starter site for a [pliosoft](https://pliosoft.com)-hosted business. Edit
the files below; push to `main`; the site rebuilds and goes live.

## What to edit first

1. **`src/data/site.ts`** — your business name, tagline, contact, hours,
   social links. Almost every page reads from here. Change once, updates
   everywhere.
2. **`src/styles/tokens.css`** — the color palette and type system. Two color
   variables (`--accent` and `--surface`) usually cover a rebrand.
3. **`src/pages/*.astro`** — the actual page content. One file per page; the
   filename is the URL.

## Structure

```
src/
  data/site.ts          your business info — read by every page
  data/                 add more data files here for menus, services, FAQs
  layouts/Base.astro    page chrome (head, masthead, footer)
  components/           reusable bits (masthead, footer, section heads)
  pages/                one file per route — index.astro is the homepage
  styles/tokens.css     color + type variables you can theme
public/                 static files (favicon, images) — served as-is
```

## Adding a page

Create `src/pages/<name>.astro`. Wrap it in `<Base title="...">`. Add a link
in `src/components/Masthead.astro` if you want it in the nav.

```astro
---
import Base from '../layouts/Base.astro';
---
<Base title="Services — Your Business">
  <h1>Services</h1>
  <p>What we offer.</p>
</Base>
```

## Local preview

```sh
npm install
npm run dev
```

Opens on http://localhost:4321. Saves auto-reload.

## Going live

Push to `main`. Pliosoft picks up the change within ~90 seconds. No deploy
button to click.
