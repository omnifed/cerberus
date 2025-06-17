import Overview, { frontmatter as overviewFrontmatter } from '../overview.mdx'
import Composition from '../composition.mdx'
import Testing from '../testing.mdx'

export const concepts = [
  {
    id: '1.1',
    label: 'Concepts',
    href: '',
  },
  {
    id: '1.1.1',
    label: 'Overview',
    slug: 'overview',
    href: '/docs/components/overview',
    frontmatter: overviewFrontmatter,
    meta: {
      title: 'Overview of Cerberus Design System',
      description:
        'Get an overview of the Cerberus Design System, its components, and how to use them effectively.',
    },
    Content: Overview,
  },
  {
    id: '1.1.2',
    label: 'Composition',
    slug: 'composition',
    href: '/docs/components/composition',
    meta: {
      title: 'Composition in Cerberus Design System',
      description:
        'Learn about the composition of components in the Cerberus Design System, including how to combine them effectively.',
    },
    Content: Composition,
  },
  {
    id: '1.1.3',
    label: 'Testing',
    slug: 'testing',
    href: '/docs/components/testing',
    meta: {
      title: 'Testing Components in Cerberus Design System',
      description:
        'Understand how to test components in the Cerberus Design System, ensuring reliability and performance.',
    },
    Content: Testing,
  },
]
