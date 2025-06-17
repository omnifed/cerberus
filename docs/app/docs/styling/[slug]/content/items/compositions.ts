import TextStyles, {
  frontmatter as textStylesFrontmatter,
} from '../text-styles.mdx'
import AnimationStyles, {
  frontmatter as animationStylesFrontmatter,
} from '../animation-styles.mdx'

export const compositions = [
  {
    id: '2.1',
    label: 'Compositions',
    href: '',
  },
  {
    id: '2.3',
    label: 'Animation Styles',
    slug: 'animation-styles',
    frontmatter: animationStylesFrontmatter,
    href: '/docs/styling/animation-styles',
    meta: {
      title: 'Animation Styles in Cerberus Design System',
      description:
        'Learn how to use animation styles in the Cerberus Design System to enhance user experience.',
    },
    Content: AnimationStyles,
  },
  {
    id: '2.2',
    label: 'Text Styles',
    slug: 'text-styles',
    frontmatter: textStylesFrontmatter,
    href: '/docs/styling/text-styles',
    meta: {
      title: 'Text Styles in Cerberus Design System',
      description:
        'Explore the text styles available in the Cerberus Design System and how to use them effectively.',
    },
    Content: TextStyles,
  },
]
