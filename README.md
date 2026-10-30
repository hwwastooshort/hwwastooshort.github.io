# hwwastooshort.github.io

Persönliche Website von Harvey Wirth, gebaut mit [Astro](https://astro.build) und veröffentlicht über GitHub Pages.

## Entwicklung

```sh
npm install
npm run dev      # http://localhost:4321
npm run build    # statischer Build nach dist/
```

## Inhalte pflegen

| Was | Wo |
|---|---|
| Name, Intro, Kontaktlinks | `src/data/site.ts` |
| Lebenslauf und Kenntnisse | `src/data/cv.ts` |
| Projekte | `src/content/projects.json` |
| Blogposts | `src/content/blog/de/*.md` und `src/content/blog/en/*.md` (Übersetzung = gleicher Dateiname) |
| Über-mich-Text | `src/views/About.astro` |
| UI-Texte (Navigation usw.) | `src/i18n/ui.ts` |

Blogposts mit `draft: true` erscheinen nur lokal.

## Deployment

Jeder Push auf `main` baut die Seite über `.github/workflows/deploy.yml` und veröffentlicht sie unter https://harveywirth.de.
