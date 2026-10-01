import * as React from 'react';
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardTitle,
  ExpandableSection,
  Flex,
  FlexItem,
  Gallery,
  Grid,
  GridItem,
  Label,
  Menu,
  MenuContent,
  MenuItem,
  MenuList,
  MenuToggle,
  SearchInput,
  Select,
  SelectList,
  SelectOption,
  Stack,
  StackItem,
  Title,
  ToggleGroup,
  ToggleGroupItem,
  Tooltip,
} from '@patternfly/react-core';
import {
  BookOpenIcon,
  DownloadIcon,
  InfoCircleIcon,
  PhoneIcon,
} from '@patternfly/react-icons';
import { SearchNavTarget } from './searchPaletteData';

// ── Types ──────────────────────────────────────────────────────────────────────

interface Product {
  name: string;
  download?: boolean;
  tryIt?: boolean;
  phone?: boolean;
  docs?: boolean;
  info?: boolean;
}

interface DownloadsCategory {
  id: string;
  name: string;
  products: Product[];
}

type ViewMode = 'tile' | 'table';

// ── Static data ────────────────────────────────────────────────────────────────

const FEATURED: { title: string; detail: string }[] = [
  { title: 'Red Hat Enterprise Linux', detail: 'ISOs, kickstarts, cloud images' },
  { title: 'Red Hat OpenShift', detail: 'Installers, clients, pull secrets' },
  { title: 'Ansible Automation Platform', detail: 'Installer, bundles, collections' },
];

const CATEGORIES: DownloadsCategory[] = [
  {
    id: 'cloud',
    name: 'Cloud computing',
    products: [
      { name: 'Red Hat Advanced Cluster Management for Kubernetes', download: true, phone: true, docs: true, info: true },
      { name: 'Red Hat Advanced Cluster Security for Kubernetes', download: true, phone: true, docs: true, info: true },
      { name: 'Red Hat Edge Manager', download: true, phone: true, docs: true, info: true },
      { name: 'Red Hat OpenShift AI', download: true, tryIt: true, phone: true, docs: true, info: true },
      { name: 'Red Hat OpenShift Container Platform', download: true, phone: true, docs: true, info: true },
      { name: 'Red Hat OpenShift Dedicated', tryIt: true, phone: true, docs: true, info: true },
      { name: 'Red Hat OpenShift Platform Plus', download: true, phone: true, docs: true, info: true },
      { name: 'Red Hat OpenStack Platform', download: true, phone: true, docs: true, info: true },
      { name: 'Red Hat OpenStack Services on OpenShift', download: true, phone: true, docs: true, info: true },
      { name: 'Red Hat Quay', download: true, phone: true, docs: true, info: true },
    ],
  },
  {
    id: 'infra',
    name: 'Infrastructure and management',
    products: [
      { name: 'Red Hat Ansible Automation Platform', download: true, tryIt: true, phone: true, docs: true, info: true },
      { name: 'Red Hat Certificate System', download: true, docs: true, info: true },
      { name: 'Red Hat Directory Server', download: true, docs: true, info: true },
      { name: 'Red Hat Enterprise Linux', download: true, tryIt: true, phone: true, docs: true, info: true },
      { name: 'Red Hat Satellite', download: true, phone: true, docs: true, info: true },
    ],
  },
  {
    id: 'integration',
    name: 'Integration and automation',
    products: [
      { name: 'Red Hat Application Foundations', download: true, docs: true, info: true },
      { name: 'Red Hat Fuse', download: true, docs: true, info: true },
      { name: 'Red Hat AMQ', download: true, docs: true, info: true },
      { name: 'Red Hat 3scale API Management', download: true, docs: true, info: true },
    ],
  },
  {
    id: 'developer',
    name: 'Red Hat Developer',
    products: [
      { name: 'Red Hat Developer Hub', tryIt: true, docs: true, info: true },
      { name: 'Red Hat OpenShift Dev Spaces', tryIt: true, docs: true, info: true },
    ],
  },
  {
    id: 'runtimes',
    name: 'Runtimes',
    products: [
      { name: 'Red Hat JBoss Enterprise Application Platform', download: true, docs: true, info: true },
      { name: 'Red Hat Data Grid', download: true, docs: true, info: true },
      { name: 'Red Hat build of Quarkus', download: true, docs: true, info: true },
      { name: 'Red Hat build of Keycloak', download: true, docs: true, info: true },
    ],
  },
  {
    id: 'storage',
    name: 'Storage',
    products: [
      { name: 'Red Hat Ceph Storage', download: true, docs: true, info: true },
      { name: 'Red Hat OpenShift Data Foundation', download: true, docs: true, info: true },
      { name: 'Red Hat Hyperconverged Infrastructure', download: true, docs: true, info: true },
    ],
  },
];

const SOFTWARE: { title: string; detail: string }[] = [
  {
    title: 'RPM Package Search',
    detail:
      'Search the full Red Hat library for specific software packages, dependencies, and architecture-specific binaries.',
  },
  {
    title: 'Red Hat Container Catalog',
    detail: 'Secure your supply chain with certified container images and real-time security health ratings.',
  },
];

const OTHER_DOWNLOADS: { title: string; detail: string }[] = [
  {
    title: 'Errata for Red Hat Products',
    detail:
      'Access security patches, bug fixes, and feature enhancements. Filter by severity to prioritize your maintenance.',
  },
  {
    title: 'Red Hat JBoss Catalog',
    detail: 'Access certified, enterprise-grade Java middleware for building and integrating applications.',
  },
];

// ── Sub-components ─────────────────────────────────────────────────────────────

const ProductActionButtons: React.FC<{ product: Product }> = ({ product }) => (
  <Flex spaceItems={{ default: 'spaceItemsXs' }}>
    {product.download && (
      <FlexItem>
        <Tooltip content="Download">
          <Button variant="plain" size="sm" aria-label={`Download ${product.name}`}>
            <DownloadIcon />
          </Button>
        </Tooltip>
      </FlexItem>
    )}
    {product.docs && (
      <FlexItem>
        <Tooltip content="Documentation">
          <Button variant="plain" size="sm" aria-label={`Documentation for ${product.name}`}>
            <BookOpenIcon />
          </Button>
        </Tooltip>
      </FlexItem>
    )}
    {product.info && (
      <FlexItem>
        <Tooltip content="Product info">
          <Button variant="plain" size="sm" aria-label={`Product info for ${product.name}`}>
            <InfoCircleIcon />
          </Button>
        </Tooltip>
      </FlexItem>
    )}
    {product.phone && (
      <FlexItem>
        <Tooltip content="Contact sales">
          <Button variant="plain" size="sm" aria-label={`Contact sales for ${product.name}`}>
            <PhoneIcon />
          </Button>
        </Tooltip>
      </FlexItem>
    )}
  </Flex>
);

const ProductTableRow: React.FC<{ product: Product; highlighted?: boolean }> = ({ product, highlighted }) => (
  <div className={`ai-search-downloads__row${highlighted ? ' ai-search-downloads__row--highlighted' : ''}`}>
    <Flex alignItems={{ default: 'alignItemsCenter' }} spaceItems={{ default: 'spaceItemsSm' }}>
      <FlexItem>
        <Button variant="link" isInline>
          {product.name}
        </Button>
      </FlexItem>
      {product.tryIt && (
        <FlexItem>
          <Label isCompact variant="outline" color="blue">
            Try it free
          </Label>
        </FlexItem>
      )}
    </Flex>
    <ProductActionButtons product={product} />
  </div>
);

const ProductTileCard: React.FC<{ product: Product }> = ({ product }) => (
  <Card isCompact>
    <CardTitle>
      <Button variant="link" isInline>
        {product.name}
      </Button>
    </CardTitle>
    <CardBody>{product.tryIt && <Label isCompact variant="outline" color="blue">Try it free</Label>}</CardBody>
    <CardFooter>
      <ProductActionButtons product={product} />
    </CardFooter>
  </Card>
);

const InfoCard: React.FC<{ title: string; detail: string }> = ({ title, detail }) => (
  <Card isCompact>
    <CardTitle>{title}</CardTitle>
    <CardBody>{detail}</CardBody>
    <CardFooter>
      <Button variant="link" isInline>
        View →
      </Button>
    </CardFooter>
  </Card>
);

// ── Props ──────────────────────────────────────────────────────────────────────

export interface DownloadsServiceDetailProps {
  /** Query from the main AI search bar — used to highlight matching products. */
  externalQuery?: string;
  onNavigate: (nav?: SearchNavTarget) => void;
}

// ── Main component ─────────────────────────────────────────────────────────────

export const DownloadsServiceDetail: React.FunctionComponent<DownloadsServiceDetailProps> = ({
  externalQuery = '',
  onNavigate: _onNavigate,
}) => {
  const [view, setView] = React.useState<ViewMode>('table');
  const [jumpOpen, setJumpOpen] = React.useState(false);
  const [jumpId, setJumpId] = React.useState('');
  const [productQuery, setProductQuery] = React.useState('');
  const [showTypeahead, setShowTypeahead] = React.useState(false);
  const [expanded, setExpanded] = React.useState<Record<string, boolean>>(
    () => Object.fromEntries(CATEGORIES.map((c) => [c.id, true])),
  );
  const categoryRefs = React.useRef<Record<string, HTMLDivElement | null>>({});

  const allExpanded = CATEGORIES.every((c) => expanded[c.id]);
  const toggleAllLabel = allExpanded && !jumpId ? 'Collapse all' : 'Expand all';

  const toggleCat = (id: string) => {
    setExpanded((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const jumpTo = (id: string) => {
    setJumpId(id);
    if (id) {
      setExpanded(Object.fromEntries(CATEGORIES.map((c) => [c.id, c.id === id])));
      setTimeout(() => {
        categoryRefs.current[id]?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }, 350);
    } else {
      setExpanded(Object.fromEntries(CATEGORIES.map((c) => [c.id, true])));
    }
  };

  const toggleAll = () => {
    const shouldExpand = !allExpanded || Boolean(jumpId);
    setJumpId('');
    setExpanded(Object.fromEntries(CATEGORIES.map((c) => [c.id, shouldExpand])));
  };

  const orderedCats = CATEGORIES;

  const filterProducts = (products: Product[]) => {
    const q = productQuery.trim().toLowerCase();
    return q ? products.filter((p) => p.name.toLowerCase().includes(q)) : products;
  };

  const isHighlighted = (name: string) => {
    const nameLower = name.toLowerCase();
    const ext = externalQuery.trim().toLowerCase();
    if (ext.length >= 3 && nameLower.includes(ext)) return true;
    const q = productQuery.trim().toLowerCase();
    return q.length >= 3 && nameLower.includes(q);
  };

  const typeaheadMatches = React.useMemo(() => {
    const q = productQuery.trim().toLowerCase();
    if (!q) return [];
    return CATEGORIES.flatMap((cat) =>
      cat.products
        .filter((p) => p.name.toLowerCase().includes(q))
        .map((p) => ({ name: p.name, category: cat.name })),
    ).slice(0, 8);
  }, [productQuery]);

  const jumpedCategory = jumpId ? CATEGORIES.find((c) => c.id === jumpId) : undefined;

  return (
    <Stack hasGutter>
      {/* ── Popular downloads ─────────────────────────────────── */}
      <StackItem>
        <Stack hasGutter>
          <StackItem>
            <span className="ai-search-downloads__section-label">Popular downloads</span>
          </StackItem>
          <StackItem>
            <Grid hasGutter>
              {FEATURED.map((item) => (
                <GridItem key={item.title} span={4}>
                  <Card isCompact>
                    <CardTitle>
                      <Button variant="link" isInline>
                        {item.title}
                      </Button>
                    </CardTitle>
                    <CardBody>{item.detail}</CardBody>
                  </Card>
                </GridItem>
              ))}
            </Grid>
          </StackItem>
        </Stack>
      </StackItem>

      {/* ── All Red Hat products ──────────────────────────────── */}
      <StackItem>
        <Stack hasGutter>
          {/* Header + view toggle */}
          <StackItem>
            <Flex
              alignItems={{ default: 'alignItemsCenter' }}
              justifyContent={{ default: 'justifyContentSpaceBetween' }}
              flexWrap={{ default: 'nowrap' }}
            >
              <FlexItem>
                <Title headingLevel="h3" size="lg">
                  All Red Hat products
                </Title>
              </FlexItem>
              <FlexItem>
                <ToggleGroup aria-label="Product view" isCompact>
                  <ToggleGroupItem
                    text="Tile"
                    buttonId="dl-view-tile"
                    isSelected={view === 'tile'}
                    onChange={(_e, selected) => {
                      if (selected) setView('tile');
                    }}
                  />
                  <ToggleGroupItem
                    text="Table"
                    buttonId="dl-view-table"
                    isSelected={view === 'table'}
                    onChange={(_e, selected) => {
                      if (selected) setView('table');
                    }}
                  />
                </ToggleGroup>
              </FlexItem>
            </Flex>
          </StackItem>

          {/* Product search + type-ahead */}
          <StackItem>
            <SearchInput
              value={productQuery}
              onChange={(_e, val) => {
                setProductQuery(val);
                setShowTypeahead(true);
              }}
              onClear={() => {
                setProductQuery('');
                setShowTypeahead(false);
              }}
              placeholder="Search by product name, version, or keyword…"
              aria-label="Search Red Hat products"
            />
            {showTypeahead && typeaheadMatches.length > 0 && (
              <Menu isPlain className="ai-search-downloads__typeahead" aria-label="Product suggestions">
                <MenuContent>
                  <MenuList>
                    {typeaheadMatches.map((m) => (
                      <MenuItem
                        key={m.name}
                        description={m.category}
                        onClick={() => {
                          setProductQuery(m.name);
                          setShowTypeahead(false);
                        }}
                      >
                        {m.name}
                      </MenuItem>
                    ))}
                  </MenuList>
                </MenuContent>
              </Menu>
            )}
          </StackItem>

          {/* Jump + expand controls */}
          <StackItem>
            <Flex
              alignItems={{ default: 'alignItemsCenter' }}
              spaceItems={{ default: 'spaceItemsMd' }}
              flexWrap={{ default: 'wrap' }}
            >
              <FlexItem>
                <Flex alignItems={{ default: 'alignItemsCenter' }} spaceItems={{ default: 'spaceItemsSm' }}>
                  <FlexItem>
                    <span className="ai-search-downloads__jump-label">Jump to category</span>
                  </FlexItem>
                  <FlexItem>
                    <Select
                      isOpen={jumpOpen}
                      onOpenChange={(open) => setJumpOpen(open)}
                      popperProps={{ appendTo: () => document.body, enableFlip: true }}
                      toggle={(ref) => (
                        <MenuToggle
                          ref={ref}
                          onClick={() => setJumpOpen(!jumpOpen)}
                          isExpanded={jumpOpen}
                          style={{ minWidth: '220px' }}
                        >
                          {jumpedCategory?.name ?? 'Select a category…'}
                        </MenuToggle>
                      )}
                      onSelect={(_e, val) => {
                        jumpTo(val as string);
                        setJumpOpen(false);
                      }}
                      selected={jumpId || undefined}
                    >
                      <SelectList>
                        <SelectOption value="">All categories</SelectOption>
                        {CATEGORIES.map((cat) => (
                          <SelectOption key={cat.id} value={cat.id}>
                            {cat.name}
                          </SelectOption>
                        ))}
                      </SelectList>
                    </Select>
                  </FlexItem>
                </Flex>
              </FlexItem>
              <FlexItem>
                <Button variant="link" isInline onClick={toggleAll}>
                  {toggleAllLabel}
                </Button>
              </FlexItem>
              {jumpId && (
                <FlexItem>
                  <span className="ai-search-downloads__jump-hint">
                    Showing: <strong>{CATEGORIES.find((c) => c.id === jumpId)?.name}</strong>
                  </span>
                </FlexItem>
              )}
            </Flex>
          </StackItem>

          {/* Category accordion sections */}
          <StackItem>
            {orderedCats.map((cat) => {
              const products = filterProducts(cat.products);
              if (productQuery.trim() && products.length === 0) return null;
              const focused = jumpId === cat.id;
              return (
                <div
                  key={cat.id}
                  ref={(el) => { categoryRefs.current[cat.id] = el; }}
                  className={`ai-search-downloads__category${focused ? ' ai-search-downloads__category--focused' : ''}`}
                >
                  <ExpandableSection
                    toggleContent={cat.name}
                    isExpanded={expanded[cat.id]}
                    onToggle={() => toggleCat(cat.id)}
                    displaySize="lg"
                  >
                    {view === 'table' ? (
                      <div>
                        <div className="ai-search-downloads__table-header">
                          <span>Product name</span>
                          <span>Actions</span>
                        </div>
                        {products.map((p) => (
                          <ProductTableRow key={p.name} product={p} highlighted={isHighlighted(p.name)} />
                        ))}
                      </div>
                    ) : (
                      <Gallery hasGutter minWidths={{ default: '14rem' }}>
                        {products.map((p) => (
                          <ProductTileCard key={p.name} product={p} />
                        ))}
                      </Gallery>
                    )}
                  </ExpandableSection>
                </div>
              );
            })}
          </StackItem>
        </Stack>
      </StackItem>

      {/* ── Software components + Other downloads ─────────────── */}
      <StackItem>
        <Grid hasGutter>
          <GridItem span={6}>
            <Stack hasGutter>
              <StackItem>
                <Title headingLevel="h4" size="md">
                  Software components
                </Title>
              </StackItem>
              {SOFTWARE.map((item) => (
                <StackItem key={item.title}>
                  <InfoCard title={item.title} detail={item.detail} />
                </StackItem>
              ))}
            </Stack>
          </GridItem>
          <GridItem span={6}>
            <Stack hasGutter>
              <StackItem>
                <Title headingLevel="h4" size="md">
                  Other downloads
                </Title>
              </StackItem>
              {OTHER_DOWNLOADS.map((item) => (
                <StackItem key={item.title}>
                  <InfoCard title={item.title} detail={item.detail} />
                </StackItem>
              ))}
            </Stack>
          </GridItem>
        </Grid>
      </StackItem>
    </Stack>
  );
};
