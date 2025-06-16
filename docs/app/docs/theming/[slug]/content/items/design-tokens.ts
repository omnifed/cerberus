import Animations, {
  frontmatter as animationsFrontmatter,
} from '../animations.mdx'
import Colors, { frontmatter as colorsFrontmatter } from '../colors.mdx'

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
]
