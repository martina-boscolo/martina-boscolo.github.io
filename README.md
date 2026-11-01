# Martina Boscolo B. — Portfolio

Personal portfolio: **https://martina-boscolo.github.io/**

An independent repository with a minimal static website. HTML, CSS and vanilla JavaScript; no package installation or build step.

## Preview

Open `index.html` directly in your browser, or run:

```sh
python3 -m http.server 8000
```

Then visit http://localhost:8000.

## Edit

- `index.html`: biography, experience, education and project cards. Projects are included directly in the page and do not depend on the GitHub API or JavaScript.
- `css/styles.css`: responsive layout, peach/slate palette, hover effects and slow SVG waves.
- `js/scripts.js`: mobile navigation, current year and subtle scroll reveals. Animations respect reduced-motion preferences; content remains available without JavaScript.
- `images/`: original photographs, retained from the previous portfolio. The cover uses `sea2.jpg`.

The Projects section links to [Fitness Tracker / CYCLEK](https://github.com/martina-boscolo/Fitness_Tracker_WebApp) and [Machine Learning](https://github.com/martina-boscolo/Machine_Learning_HW). Add more `project-card` articles to `#projects` to feature other work.

## GitHub Pages

In **Settings → Pages**, select **Deploy from a branch**, **main**, and **/ (root)**. The `.nojekyll` file allows direct static publishing. Local asset paths are relative and also work under a project subdirectory.

## Attribution

This portfolio was redesigned from Martina’s previous portfolio, originally based on [Ryan Fitzgerald’s Dev Portfolio](https://github.com/RyanFitzgerald/devportfolio). The original [MIT notice](LICENSE.md) is retained. This repository is independent of the original fork.
