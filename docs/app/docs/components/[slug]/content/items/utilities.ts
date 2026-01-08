import ClientOnly, {
  frontmatter as clientOnlyFrontmatter,
} from '../client-only.mdx'
import DownloadTrigger, {
  frontmatter as downloadTriggerFrontmatter,
} from '../download-trigger.mdx'
import EnvironmentProvider, {
  frontmatter as environmentProviderFrontmatter,
} from '../environment.mdx'
import FeatureFlags, {
  frontmatter as featureFlagsFrontmatter,
} from '../feature-flags.mdx'
import FocusTrap, {
  frontmatter as focusTrapFrontmatter,
} from '../focus-trap.mdx'
import For, { frontmatter as forFrontmatter } from '../for.mdx'
import FormatByte, {
  frontmatter as formatByteFrontmatter,
} from '../format-byte.mdx'
import FormatNumber, {
  frontmatter as formatNumberFrontmatter,
} from '../format-number.mdx'
import FormatRelativeTime, {
  frontmatter as formatRelativeTimeFrontmatter,
} from '../format-relative-time.mdx'
import Frame, { frontmatter as frameFrontmatter } from '../frame.mdx'
import Highlight, {
  frontmatter as highlightFrontmatter,
} from '../highlight.mdx'
import JsonTreeView, {
  frontmatter as jsonTreeViewFrontmatter,
} from '../json-tree-view.mdx'
import Locale, { frontmatter as localeFrontmatter } from '../locale.mdx'
import LocalStorageDocs, {
  frontmatter as localStorageFrontmatter,
} from '../local-storage.mdx'
import Portal, { frontmatter as portalFrontmatter } from '../portal.mdx'
import Presence, { frontmatter as presenceFrontmatter } from '../presence.mdx'
import Show, { frontmatter as ShowFrontmatter } from '../show.mdx'
import SplitProps, {
  frontmatter as splitPropsFrontmatter,
} from '../split-props.mdx'
import Theme, { frontmatter as themeFrontmatter } from '../theme.mdx'

export const utilities = [
  {
    id: '1.4',
    label: 'Utilities',
    href: '',
  },
  {
    id: '1.4.1a',
    label: 'Client Only',
    slug: 'client-only',
    href: '/docs/components/client-only',
    frontmatter: clientOnlyFrontmatter,
    meta: {
      title: 'ClientOnly in Cerberus Design System',
      description:
        'Learn how to render on the client in the Cerberus Design System to control feature availability.',
    },
    Content: ClientOnly,
  },
  {
    id: '1.4.1b',
    label: 'Download Trigger',
    slug: 'download-trigger',
    href: '/docs/components/download-trigger',
    frontmatter: downloadTriggerFrontmatter,
    meta: {
      title: 'Download Trigger in Cerberus Design System',
      description:
        'Learn how to trigger downloads in the Cerberus Design System.',
    },
    Content: DownloadTrigger,
  },
  {
    id: '1.4.1c',
    label: 'Environment',
    slug: 'environment',
    href: '/docs/components/environment',
    frontmatter: environmentProviderFrontmatter,
    meta: {
      title: 'Environment Provider in Cerberus Design System',
      description:
        'Learn how to trigger downloads in the Cerberus Design System.',
    },
    Content: EnvironmentProvider,
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
    id: '1.4.1d',
    label: 'Focus Trap',
    slug: 'focus-trap',
    href: '/docs/components/focus-trap',
    frontmatter: focusTrapFrontmatter,
    meta: {
      title: 'Focus Trap in Cerberus Design System',
      description:
        'Learn how to use Focus Trap in the Cerberus Design System to control feature availability.',
    },
    Content: FocusTrap,
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
    id: '1.4.3e',
    label: 'Format Byte',
    slug: 'format-byte',
    href: '/docs/components/format-byte',
    frontmatter: formatByteFrontmatter,
    meta: {
      title: 'Format Byte Component in Cerberus Design System',
      description:
        'Learn how to use the Format Byte component in the Cerberus Design System for formatting byte values.',
    },
    Content: FormatByte,
  },
  {
    id: '1.4.4f',
    label: 'Format Number',
    slug: 'format-number',
    href: '/docs/components/format-number',
    frontmatter: formatNumberFrontmatter,
    meta: {
      title: 'Format Number Component in Cerberus Design System',
      description:
        'Learn how to use the Format Number component in the Cerberus Design System for formatting numeric values.',
    },
    Content: FormatNumber,
  },
  {
    id: '1.4.5g',
    label: 'Format Relative Time',
    slug: 'format-relative-time',
    href: '/docs/components/format-relative-time',
    frontmatter: formatRelativeTimeFrontmatter,
    meta: {
      title: 'Format Relative Time Component in Cerberus Design System',
      description:
        'Learn how to use the Format Relative Time component in the Cerberus Design System for formatting relative time values.',
    },
    Content: FormatRelativeTime,
  },
  {
    id: '1.4.5h',
    label: 'Frame',
    slug: 'frame',
    href: '/docs/components/frame',
    frontmatter: frameFrontmatter,
    meta: {
      title: 'Frame Component in Cerberus Design System',
      description:
        'Learn how to use the Frame component in the Cerberus Design System for rendering content in an iframe.',
    },
    Content: Frame,
  },
  {
    id: '1.4.5i',
    label: 'Highlight',
    slug: 'highlight',
    href: '/docs/components/highlight',
    frontmatter: highlightFrontmatter,
    meta: {
      title: 'Highlight Component in Cerberus Design System',
      description:
        'Learn how to use the Highlight component in the Cerberus Design System for highlighting text.',
    },
    Content: Highlight,
  },
  {
    id: '1.4.5j',
    label: 'JSON Tree View',
    slug: 'json-tree-view',
    href: '/docs/components/json-tree-view',
    frontmatter: jsonTreeViewFrontmatter,
    meta: {
      title: 'JSON Tree View Component in Cerberus Design System',
      description:
        'Learn how to use the JSON Tree View component in the Cerberus Design System for displaying JSON data in a tree structure.',
    },
    Content: JsonTreeView,
  },
  {
    id: '1.4.5k',
    label: 'Locale',
    slug: 'locale',
    href: '/docs/components/locale',
    frontmatter: localeFrontmatter,
    meta: {
      title: 'Locale Component in Cerberus Design System',
      description:
        'Learn how to use the Locale component in the Cerberus Design System for setting the locale for your app.',
    },
    Content: Locale,
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
  {
    id: '1.4.5l',
    label: 'Presence',
    slug: 'presence',
    href: '/docs/components/presence',
    frontmatter: presenceFrontmatter,
    meta: {
      title: 'Presence Component in Cerberus Design System',
      description:
        'Learn how to use the Presence component in the Cerberus Design System for controlling the visibility of content.',
    },
    Content: Presence,
  },
  {
    id: '1.4.6',
    label: 'Show',
    slug: 'show',
    href: '/docs/components/show',
    frontmatter: ShowFrontmatter,
    meta: {
      title: 'Show Component in Cerberus Design System',
      description:
        'Understand how to use the Show component in the Cerberus Design System for conditional rendering.',
    },
    Content: Show,
  },
  {
    id: '1.4.6',
    label: 'splitProps',
    slug: 'split-props',
    href: '/docs/components/split-props',
    frontmatter: splitPropsFrontmatter,
    meta: {
      title: 'Split Props in Cerberus Design System',
      description:
        'Learn how to use the Split Props utility in the Cerberus Design System for managing component properties.',
    },
    Content: SplitProps,
  },
  {
    id: '1.4.7',
    label: 'Theme',
    slug: 'theme',
    href: '/docs/components/theme',
    frontmatter: themeFrontmatter,
    meta: {
      title: 'Theme in Cerberus Design System',
      description:
        'Discover how to use the Theme utility in the Cerberus Design System for consistent styling.',
    },
    Content: Theme,
  },
]
