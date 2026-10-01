# HCC Downloads demos

Interactive Cursor Canvases for the services-dropdown Downloads exploration. Open a link to view beside chat.

## Live prototypes

| | URL |
|---|---|
| **Local — baseline catalog (v0)** | [localhost:9000/HCC-AI-Search/?scenario=catalog](http://localhost:9000/HCC-AI-Search/?scenario=catalog) |
| **Local — full prototype** | [localhost:9000/HCC-AI-Search/](http://localhost:9000/HCC-AI-Search/) |
| **GitHub Pages — full prototype** | [kenrossi.github.io/HCC-AI-Search/](https://kenrossi.github.io/HCC-AI-Search/) |
| **GitHub Pages — baseline catalog (v0)** | [kenrossi.github.io/HCC-AI-Search/?scenario=catalog](https://kenrossi.github.io/HCC-AI-Search/?scenario=catalog) |
| **Standalone demo** (CDN, v0.4 design) | [kenrossi.github.io/HCC-AI-Search/demos/downloads-v04/](https://kenrossi.github.io/HCC-AI-Search/demos/downloads-v04/) |

Local URLs need `npm run start:dev`. GitHub Pages only updates after deploy.

## Cursor canvases

| Version | Demo | What it shows |
|---------|------|----------------|
| **TOC** | [downloads-demos-toc.canvas.tsx](/Users/kenrossi/.cursor/projects/Users-kenrossi-Documents-cursor-projects-RH-systemcard/canvases/downloads-demos-toc.canvas.tsx) | Index of all demos |
| **v0.4 (latest)** | [downloads-services-panel.canvas.tsx](/Users/kenrossi/.cursor/projects/Users-kenrossi-Documents-cursor-projects-RH-systemcard/canvases/downloads-services-panel.canvas.tsx) | No left Categories; **Jump to category** dropdown; all sections start open; jump brings a category to the top |
| **v0.3** | [downloads-services-panel-v0.3.canvas.tsx](/Users/kenrossi/.cursor/projects/Users-kenrossi-Documents-cursor-projects-RH-systemcard/canvases/downloads-services-panel-v0.3.canvas.tsx) | Portal-style tile/table + left Categories sidebar |
| **v0.2** | [downloads-services-panel-v0.2.canvas.tsx](/Users/kenrossi/.cursor/projects/Users-kenrossi-Documents-cursor-projects-RH-systemcard/canvases/downloads-services-panel-v0.2.canvas.tsx) | Light shell + Software components / Other downloads |
| **v0.1** | [downloads-services-panel-v0.1.canvas.tsx](/Users/kenrossi/.cursor/projects/Users-kenrossi-Documents-cursor-projects-RH-systemcard/canvases/downloads-services-panel-v0.1.canvas.tsx) | Featured trio + simple category index |
| **v0** | [downloads-services-panel-v0.canvas.tsx](/Users/kenrossi/.cursor/projects/Users-kenrossi-Documents-cursor-projects-RH-systemcard/canvases/downloads-services-panel-v0.canvas.tsx) | Baseline CatalogMenu (RHEL / OpenShift / Ansible + stars). Live: `?scenario=catalog` |

## Jump option (v0.4)

Replaces the left Categories rail with a **Jump to category** select under the product search row. Sections all start expanded. Choosing a category:

1. Keeps every section open  
2. Moves that category to the top of the stack  
3. Highlights it with the red active bar  

That fits a constrained dropdown panel better than a second left nav.

## Design sync (Red Hat org)

| Artifact | Link / path |
|----------|-------------|
| Screens (Figma) — v0.4 + earlier versions (v0–v0.3) | [HCC Downloads — Screens](https://www.figma.com/design/sdhkJPgPo3y63xUAPcSc72) |
| User flow, journey, swimlane, effort curve (FigJam) | [HCC Downloads — User flow & journey](https://www.figma.com/board/GiBwuo1WSwWiP9i6qLnWle) |
| Written journey | [user-journey.md](./user-journey.md) |
| Visual journey | [user-journey-visual.md](./user-journey-visual.md) |

> Older drafts on Ken Rossi's Starter team are superseded. Use the Red Hat org links above.
