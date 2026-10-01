# Downloads v0.4 — AI Search dropdown demo

Standalone design-exploration demo. **No build step.** Open `index.html` directly in a browser or serve via GitHub Pages.

## What it shows

- Mock HCC masthead with collapsed search button
- Clicking "Search or ask AI…" opens the palette inline below the masthead
- Typing `linux` or `download` triggers the **Downloads** service in the left nav and highlights matching products (e.g. Red Hat Enterprise Linux) in the right panel
- **Jump to category** dropdown pulls the selected category to the top and collapses all others
- Product search with type-ahead suggestions

## Separation from the main prototype

This demo is **design exploration only** and lives entirely in `demos/downloads-v04/`.  
It has no dependency on the main app (`src/`) and does not share code with it.

The production integration — adding Downloads to the AI Search palette in the real prototype — is tracked in the main codebase under `src/app/SearchPalette/`.

## Build note (recorded for production)

In production, the search bar should **expand inline** within the masthead on click, not drop a separate field below it. The current demo uses a below-masthead dropdown for clarity in this exploration context.

## View live

Once pushed, the demo is accessible at:
```
https://kenrossi.github.io/HCC-AI-Search/demos/downloads-v04/
```
