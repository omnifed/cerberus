import Background, {
  frontmatter as backgroundFrontmatter,
} from '../background.mdx'
import Border, { frontmatter as borderFrontmatter } from '../border.mdx'
import Effects, { frontmatter as effectsFrontmatter } from '../effects.mdx'
import Spacing, { frontmatter as spacingFrontmatter } from '../spacing.mdx'
import TextGradient, {
  frontmatter as textGradientFrontmatter,
} from '../text-gradient.mdx'
import Transitions, {
  frontmatter as transitionsFrontmatter,
} from '../transitions.mdx'
import ZIndex, { frontmatter as zIndexFrontmatter } from '../z-index.mdx'

export const styleProps = [
  {
    id: '3.1',
    label: 'Style Props',
    href: '',
  },
  {
    id: '3.2',
    label: 'Background',
    slug: 'background',
    frontmatter: backgroundFrontmatter,
    href: '/docs/styling/background',
    meta: {
      title: 'Background Styles in Cerberus Design System',
      description:
        'Learn how to apply background styles to components in the Cerberus Design System.',
    },
    Content: Background,
  },
  {
    id: '3.3',
    label: 'Border',
    slug: 'border',
    frontmatter: borderFrontmatter,
    href: '/docs/styling/border',
    meta: {
      title: 'Border Styles in Cerberus Design System',
      description:
        'Learn how to apply border styles to components in the Cerberus Design System.',
    },
    Content: Border,
  },
  {
    id: '3.4',
    label: 'Effects',
    slug: 'effects',
    frontmatter: effectsFrontmatter,
    href: '/docs/styling/effects',
    meta: {
      title: 'Effects Styles in Cerberus Design System',
      description:
        'Learn how to apply effects styles to components in the Cerberus Design System.',
    },
    Content: Effects,
  },
  {
    id: '3.5',
    label: 'Spacing',
    slug: 'spacing',
    frontmatter: spacingFrontmatter,
    href: '/docs/styling/spacing',
    meta: {
      title: 'Spacing Styles in Cerberus Design System',
      description:
        'Learn how to apply spacing styles to components in the Cerberus Design System.',
    },
    Content: Spacing,
  },
  {
    id: '3.6',
    label: 'Text Gradient',
    slug: 'text-gradient',
    frontmatter: textGradientFrontmatter,
    href: '/docs/styling/text-gradient',
    meta: {
      title: 'Text Gradient Styles in Cerberus Design System',
      description:
        'Learn how to apply text gradient styles to components in the Cerberus Design System.',
    },
    Content: TextGradient,
  },
  {
    id: '3.7',
    label: 'Transitions',
    slug: 'transitions',
    frontmatter: transitionsFrontmatter,
    href: '/docs/styling/transitions',
    meta: {
      title: 'Transitions Styles in Cerberus Design System',
      description:
        'Learn how to apply transition styles to components in the Cerberus Design System.',
    },
    Content: Transitions,
  },
  {
    id: '3.8',
    label: 'Z-Index',
    slug: 'z-index',
    frontmatter: zIndexFrontmatter,
    href: '/docs/styling/z-index',
    meta: {
      title: 'Z-Index Styles in Cerberus Design System',
      description:
        'Learn how to apply z-index styles to components in the Cerberus Design System.',
    },
    Content: ZIndex,
  },
]
