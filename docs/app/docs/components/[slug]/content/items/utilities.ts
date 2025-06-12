import FeatureFlags, {
  frontmatter as featureFlagsFrontmatter,
} from '../feature-flags.mdx'
import For, { frontmatter as forFrontmatter } from '../for.mdx'
import LocalStorageDocs, {
  frontmatter as localStorageFrontmatter,
} from '../local-storage.mdx'
import Portal, { frontmatter as portalFrontmatter } from '../portal.mdx'

export const utilities = [
  {
    id: '1.4',
    label: 'Utilities',
    href: '',
  },
  {
    id: '1.4.1',
    label: 'Feature Flags',
    slug: 'feature-flags',
    href: '/docs/components/feature-flags',
    frontmatter: featureFlagsFrontmatter,
    meta: {
      title: 'Feature Flags in Cerberus Design System',
      description:
        'Learn how to use feature flags in the Cerberus Design System to control feature availability.',
    },
    Content: FeatureFlags,
  },
  {
    id: '1.4.2',
    label: 'For',
    slug: 'for',
    href: '/docs/components/for',
    frontmatter: forFrontmatter,
    meta: {
      title: 'For Component in Cerberus Design System',
      description:
        'Discover how to use the For component in the Cerberus Design System for rendering lists and collections.',
    },
    Content: For,
  },
  {
    id: '1.4.3',
    label: 'Local Storage',
    slug: 'local-storage',
    href: '/docs/components/local-storage',
    frontmatter: localStorageFrontmatter,
    meta: {
      title: 'Local Storage in Cerberus Design System',
      description:
        'Learn how to use local storage in the Cerberus Design System for persisting data across sessions.',
    },
    Content: LocalStorageDocs,
  },
  {
    id: '1.4.4',
    label: 'Portal',
    slug: 'portal',
    href: '/docs/components/portal',
    frontmatter: portalFrontmatter,
    meta: {
      title: 'Portal Component in Cerberus Design System',
      description:
        'Explore the Portal component in the Cerberus Design System for rendering content outside the main DOM hierarchy.',
    },
    Content: Portal,
  },
]
