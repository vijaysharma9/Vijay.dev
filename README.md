# HireDeveloperShop Landing Website

This repository contains a static, single-page marketing website for `hiredevelopershop.com`.
The project is built with plain HTML, CSS, and JavaScript (no framework or build step).

## Project Structure

- `index.html` - Main landing page (primary source of truth).
- `index (4).html` - Duplicate copy of the landing page.
- `assets/` - Images used across sections (portfolio cards, service visuals, logos).
- `styles.css` - Older standalone stylesheet not used by the current main page.
- `robots.txt`, `sitemap.xml`, `CNAME` - SEO and hosting configuration files.

## Main Sections

The page includes:

- Hero
- About
- Services
- Tech Stack
- Why Choose Us
- Portfolio
- Pricing
- Testimonials
- Call to Action
- Contact Form

## Interactive Features

- Sticky navigation with mobile menu.
- Scroll-based reveal animations.
- Active section highlighting in navigation.
- Contact form with client-side validation and AJAX submit flow.
- Floating/sticky consultation CTA.

## Run Locally

You can open `index.html` directly in a browser, or run a local server:

```bash
python3 -m http.server 5173
```

Then open:

- `http://localhost:5173/`

## Deployment

This is a static site and can be deployed to any static hosting provider
(GitHub Pages, Netlify, Vercel static output, etc.). The included `CNAME`
file is used for custom domain mapping on compatible hosts.

## Notes

- Keep `index.html` as the primary editable file to avoid drift with `index (4).html`.
- Consider removing or archiving duplicate/legacy files once confirmed unnecessary.
- Contact form currently posts to an external FormSubmit endpoint configured in-page.

