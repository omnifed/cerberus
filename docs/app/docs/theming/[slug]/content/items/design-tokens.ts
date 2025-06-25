import Animations, {
  frontmatter as animationsFrontmatter,
} from '../animations.mdx'
import Colors, { frontmatter as colorsFrontmatter } from '../colors.mdx'
import Gradients, {
  frontmatter as gradientsFrontmatter,
} from '../gradients.mdx'
import Shadows, { frontmatter as shadowsFrontmatter } from '../shadows.mdx'
import Spacing, { frontmatter as spacingFrontmatter } from '../spacing.mdx'
import ZIndex, { frontmatter as zIndexFrontmatter } from '../z-index.mdx'

export const designTokens = [
  {
    id: '2.1',
    label: 'Design Tokens',
    href: '',
  },
  {
    id: '2.1.1',
    label: 'Animations',
    slug: 'animations',
    frontmatter: animationsFrontmatter,
    href: '/docs/theming/animations',
    meta: {
      title: 'Animations in Cerberus Design System',
      description:
        'Explore the animation design tokens available in the Cerberus Design System for a smooth user experience.',
    },
    Content: Animations,
  },
  {
    id: '2.1.2',
    label: 'Colors',
    slug: 'colors',
    frontmatter: colorsFrontmatter,
    href: '/docs/theming/colors',
    meta: {
      title: 'Colors in Cerberus Design System',
      description:
        'Explore the color design tokens available in the Cerberus Design System for a vibrant and accessible user experience.',
    },
    Content: Colors,
  },
  {
    id: '2.1.5',
    label: 'Gradients',
    slug: 'gradients',
    frontmatter: gradientsFrontmatter,
    href: '/docs/theming/gradients',
    meta: {
      title: 'Gradients in Cerberus Design System',
      description:
        'Explore the gradient design tokens available in the Cerberus Design System for a visually appealing interface.',
    },
    Content: Gradients,
  },
  {
    id: '2.1.3',
    label: 'Spacing',
    slug: 'spacing',
    frontmatter: spacingFrontmatter,
    href: '/docs/theming/spacing',
    meta: {
      title: 'Spacing in Cerberus Design System',
      description:
        'Explore the spacing design tokens available in the Cerberus Design System for a well-structured layout.',
    },
    Content: Spacing,
  },
  {
    id: '2.1.4',
    label: 'Shadows',
    slug: 'shadows',
    frontmatter: shadowsFrontmatter,
    href: '/docs/theming/shadows',
    meta: {
      title: 'Shadows in Cerberus Design System',
      description:
        'Explore the shadow design tokens available in the Cerberus Design System for creating depth and hierarchy.',
    },
    Content: Shadows,
  },
  {
    id: '2.1.6',
    label: 'Z-Index',
    slug: 'z-index',
    frontmatter: zIndexFrontmatter,
    href: '/docs/theming/z-index',
    meta: {
      title: 'Z-Index in Cerberus Design System',
      description:
        'Explore the z-index design tokens available in the Cerberus Design System for managing stacking contexts.',
    },
    Content: ZIndex,
  },
]
