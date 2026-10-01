# HCC Downloads — User Journey

Written journey for the **Downloads** service inside Hybrid Cloud Console (HCC) AI Search. Reflects the v0.4 exploration (Jump to category, table/tile views, product search) synced from the prototype.

**Related artifacts**

| Artifact | Location |
|----------|----------|
| Screens (Figma, Red Hat org) | [HCC Downloads — Screens](https://www.figma.com/design/sdhkJPgPo3y63xUAPcSc72) |
| Flow + journey + swimlane + effort (FigJam, Red Hat org) | [HCC Downloads — User flow & journey](https://www.figma.com/board/GiBwuo1WSwWiP9i6qLnWle) |
| Visual journey (Markdown) | [user-journey-visual.md](./user-journey-visual.md) |

---

## Persona

**Platform operator / admin** who already lives in HCC. They need a Red Hat product download (ISO, installer, client, pull secret, package, or errata) without leaving console context to hunt the Customer Portal.

Goals: find the right product fast, confirm the right artifact type, start download or jump to docs/sales.

---

## Journey stages

### 1. Trigger — need a download

The user realizes they need an installable or package (e.g. RHEL ISO, OpenShift client, Ansible installer). They are already signed into HCC, often mid-task (cluster, host, or support workflow).

**Mindset:** Task-focused, low patience for a long portal browse.

### 2. Open AI Search

They click **Search or ask AI…** in the masthead. The search palette expands as a dropdown (demo places it below the masthead; production should expand inline in the masthead).

**Outcome:** Left service nav + right detail panel appear.

### 3. Arrive at Downloads

Two equally valid paths:

| Path | What happens |
|------|----------------|
| **Browse** | Select **Downloads** in the left service list |
| **Query** | Type a download-intent or product term (`download`, `linux`, `rhel`, `openshift`, `iso`, `rpm`…) — palette routes to Downloads and can highlight matching products |

**Outcome:** Downloads panel loads with Popular downloads, All Red Hat products, Software components, and Other downloads.

### 4. Orient — Popular downloads

Featured trio (RHEL, OpenShift, Ansible) gives a fast path for the most common needs. Many users stop here if their product is featured.

### 5. Explore — All Red Hat products

If not featured, users work the product catalog:

- **Search by product** — type-ahead suggestions; matching rows highlight
- **Jump to category** — moves that category to the top and collapses others (fits a constrained dropdown better than a second left Categories rail)
- **Expand / Collapse all** — restores or collapses the accordion stack
- **Tile / Table** — switch density; table is the default for scanning names + actions

Categories: Cloud computing, Infrastructure and management, Integration and automation, Red Hat Developer, Runtimes, Storage.

### 6. Act — product actions

On a product row or tile:

| Action | Intent |
|--------|--------|
| Download | Get the artifact |
| Documentation | Read how to install / use |
| Product info | Learn about the offering |
| Contact sales | Talk to sales (where available) |
| Try it free | Trial path (where labeled) |

Secondary destinations: **Software components** (RPM Package Search, Container Catalog) and **Other downloads** (Errata, JBoss Catalog).

### 7. Complete

User leaves the palette into the download, docs, or catalog destination and finishes the install/support task that triggered the journey.

---

## Happy path (summary)

1. Open Search → select or query into **Downloads**  
2. Spot product in Popular **or** Jump / Search within All products  
3. Click **Download** (or Docs)  
4. Complete install outside the palette  

## Alternate paths

- **Query-first:** Type `linux` → Downloads opens with RHEL highlighted → Download  
- **Category jump:** Jump to Storage → expand focused section → pick Ceph / ODF  
- **Discovery:** Browse Software components → Container Catalog  
- **Support:** Errata for Red Hat Products under Other downloads  

## Pain points this design addresses

| Before (portal / prior pattern) | After (v0.4 in AI Search) |
|---------------------------------|---------------------------|
| Leave console for downloads | Stay in HCC search palette |
| Second left Categories rail in a narrow panel | Jump to category select |
| Hard to find product in long list | Product search + typeahead + highlight |
| One view density | Tile and Table toggle |

## Open questions

- Exact production destinations for Download / Docs / Info / Sales deep-links  
- Whether query routing should auto-select Downloads for all product keywords or only download-intent terms  
- Inline masthead expand vs below-masthead dropdown for production  
