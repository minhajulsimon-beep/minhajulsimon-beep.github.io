# Mohammed Saimon — Data Engineering Portfolio

A lightweight, responsive, dark-theme personal portfolio built in HTML, CSS, and small vanilla JavaScript. No build step, no frontend framework, no paid hosting required.

## What's included

- `index.html` — recruiter-oriented landing page, projects, expertise, approach, about, and contact
- `projects/weather.html` — documented weather engineering case study
- `projects/parcel.html` — documented parcel tracking engineering case study
- `styles.css` — responsive design system; keyboard and reduced-motion friendly
- `script.js` — mobile menu, scroll reveals, active links, email copy
- `assets/` — original vector diagrams, favicon, social preview image
- `404.html`, `robots.txt`, `sitemap.xml` — site essentials

The featured project details reflect the publicly documented repository READMEs as of November 2026. The online retail project is labeled **In progress** and the company-intelligence workflow is labeled **Prototype** rather than being presented as production work.

## Preview locally (no installation required)

Open `index.html` in a browser, or run a tiny local server:

```bash
python -m http.server 8000
```

Then visit http://localhost:8000 in your browser.

## Publish on GitHub Pages for free

### Simplest: GitHub website

1. Sign in to [GitHub](https://github.com) as **minhajulsimon-beep**.
2. Create a **public** repository named **`minhajulsimon-beep.github.io`** (the name must match your username exactly for a user site).
3. From the repository, select **Add file → Upload files**.
4. Upload the **contents** of this folder, not the parent folder. GitHub's web upload interface may handle folders differently depending on browser; if directory upload isn't available, use the Git method below to preserve `assets/` and `projects/`.
5. Commit to the repository's `main` branch.
6. Go to **Settings → Pages**, choose **Deploy from a branch**, **main**, and **/(root)**, then save.
7. When GitHub finishes publishing, open: **https://minhajulsimon-beep.github.io/**

If the target repository already exists, don't replace files without checking what's there first.

### Git command method

Create the public `minhajulsimon-beep.github.io` repository on GitHub first, then from the folder containing `index.html`:

```bash
git init
git add .
git commit -m "Add personal data engineering portfolio"
git branch -M main
git remote add origin https://github.com/minhajulsimon-beep/minhajulsimon-beep.github.io.git
git push -u origin main
```

Afterward, enable Pages under Settings → Pages as above. If your `git` setup has an existing remote or branch, review it first rather than blindly re-running commands.

## Personal details to review before publishing

- The name **Mohammed Minhajul Islam Saimon**, location **Aarhus, Denmark**, and the email address `minhajulsimon@gmail.com` are shown on the site. **Confirm you want that email publicly visible**, or replace it in `index.html` before publishing.
- GitHub username is **minhajulsimon-beep**, with working repository links in project cards.
- No LinkedIn profile URL or resume PDF was provided, so there are no invented LinkedIn links or broken resume download buttons. Add those when available.
- The online-retail repository is early-stage at the time of writing. Update that card once the full project code has been published.
- Case-study metrics are documented example output, not job performance claims or real commercial impact.

### Add a résumé PDF later

Save a resume under `assets/Mohammed-Saimon-CV.pdf` and insert a button like this in the homepage hero, near the GitHub button:

```html
<a class="button button-secondary" href="assets/Mohammed-Saimon-CV.pdf" download>Download CV ↗</a>
```

### Change email

Search `index.html` for `minhajulsimon@gmail.com` and update the `mailto` link, the copy-email button and its visible text consistently.

### Add LinkedIn

Add your real LinkedIn profile URL wherever you want a call-to-action, for example in the contact panel. Avoid adding a placeholder link to a public website.

### Use your own domain later (optional)

The default `.github.io` URL is completely free. A custom domain is optional and generally requires purchasing one.

## Accessibility and performance

- Semantic landmarks, descriptive links, skip link, accessible nav menu and copy-email status
- Keyboard focus styles and reduced-motion support
- Responsive layout at phone/tablet/desktop widths
- Locally authored vector artwork; no external JavaScript framework or analytics tracker
- Optional Google Fonts load; fallback fonts work offline

© Mohammed Minhajul Islam Saimon. Site source may be customized for the owner's use.
