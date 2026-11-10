# Agent handoff: Downloads v1 - Simple list

Use this folder as the start point for the isolated Downloads simple-list review.

External issue and design links are intentionally omitted. Use links supplied separately by the project owner.

## Scope

This is only for the static Downloads menu shown inside the global search palette service list.

Include:

- The `Downloads` service selected in the search palette.
- The `Product downloads` group.
- The five static product rows listed in `downloadsSimpleList.ts`.
- The `Browse all Downloads` link.
- The surrounding Platforms/Services selector only as context.

Exclude:

- Dashboard widgets below the console home header.
- Search facets or table/tile download catalog variants.
- SJ upstream merge work.
- Any unrelated prototype explorations or non-Downloads work.

## Expected product list

1. Red Hat Enterprise Linux - Installation media, images, and architecture choices
2. Red Hat OpenShift - Clients and tools for your OpenShift environment
3. Red Hat Ansible Automation Platform - Installation bundles and automation software
4. Application Services - Application runtimes, releases, and updates
5. Red Hat Satellite - Satellite installation and management software

## Validation

Open the console home, activate the global search palette with an empty query, select `Downloads` in Services, and compare the result to `reference.png`.
