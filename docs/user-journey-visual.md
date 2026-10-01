# HCC Downloads — Visualized user journey

Companion visual to [user-journey.md](./user-journey.md). Same journey as stages; this page is for scanning and sharing.

---

## Journey map (stages × experience)

```mermaid
flowchart LR
  subgraph trigger ["1. Trigger"]
    need(["Need a download"])
  end

  subgraph entry ["2. Entry"]
    openSearch["Open AI Search"]
    arrive{Browse or query}
  end

  subgraph orient ["3. Orient"]
    panel["Downloads panel"]
    popular["Popular downloads"]
  end

  subgraph explore ["4. Explore"]
    jump["Jump to category"]
    search["Product search"]
    view["Tile or Table"]
  end

  subgraph act ["5. Act"]
    actions["Download / Docs / Info / Sales"]
    other["Software or Other cards"]
  end

  subgraph doneStage ["6. Done"]
    complete(["Complete outside palette"])
  end

  need --> openSearch --> arrive
  arrive -->|"Select Downloads"| panel
  arrive -->|"Type download intent"| panel
  panel --> popular --> jump & search & view
  jump & search & view --> actions & other --> complete

  style trigger fill:#C2E5FF,stroke:#3DADFF
  style entry fill:#DCCCFF,stroke:#874FFF
  style orient fill:#FFECBD,stroke:#FFC943
  style explore fill:#FFE0C2,stroke:#FF9E42
  style act fill:#CDF4D3,stroke:#66D575
  style doneStage fill:#CDF4D3,stroke:#66D575
```

---

## Swimlane — what the user does vs what the UI does

| Stage | User does | UI responds |
|-------|-----------|-------------|
| Trigger | Needs ISO / installer / package | — |
| Entry | Clicks Search or types a query | Palette opens; Downloads selected or routed |
| Orient | Scans Popular trio | Featured RHEL / OpenShift / Ansible cards |
| Explore | Jumps, searches, or toggles view | Category reorder + collapse; typeahead; highlight; tile/table |
| Act | Chooses Download / Docs / Info / Sales / card | Navigates to destination |
| Done | Installs or reads outside palette | Palette dismisses or stays until closed |

---

## Emotion / effort curve (qualitative)

```text
Effort
  ^
  |     open search
  |        *
  |       / \\        jump / search
  |      /   \\         *
  |     /     \\       / \\
  |    /       *-----*   \\____ download
  |   *                         *
  | need                      done
  +----------------------------------> Time
        Entry   Orient  Explore   Act
```

Peak effort is finding the right product in a long catalog. Jump + product search are meant to flatten that middle hump. Popular downloads skip Explore for common cases.

---

## Critical path (one line)

**Need download → Search → Downloads → Find product (Popular / Jump / Search) → Download → Install**

---

## FigJam (Red Hat org — combined)

[HCC Downloads — User flow & journey](https://www.figma.com/board/GiBwuo1WSwWiP9i6qLnWle) includes:

- User flow (decision / interaction path)
- Staged journey map (Trigger → Done)
- Swimlane — User vs UI
- Emotion / effort curve
