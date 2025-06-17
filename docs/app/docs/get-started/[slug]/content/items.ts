import Installation, {
  frontmatter as installationFrontmatter,
} from './installation.mdx'
import Faq, { frontmatter as faqFrontmatter } from './faq.mdx'
import Contributing, {
  frontmatter as contributingFrontmatter,
} from './contributing.mdx'

export const items = [
  {
    id: '1.1',
    label: 'Overview',
    href: '',
  },
  {
    id: '1.2',
    label: 'Installation',
    slug: 'installation',
    frontmatter: installationFrontmatter,
    href: '/docs/get-started/installation',
    meta: {
      title: 'Installation Guide for Cerberus Design System',
      description:
        'Follow the steps to install the Cerberus Design System in your project.',
    },
    Content: Installation,
  },
  {
    id: '1.3',
    label: 'FAQ',
    slug: 'faq',
    href: '/docs/get-started/faq',
    frontmatter: faqFrontmatter,
    meta: {
      title: 'Frequently Asked Questions about Cerberus Design System',
      description:
        'Find answers to common questions about the Cerberus Design System, including usage, components, and theming.',
    },
    Content: Faq,
  },
  {
    id: '1.4',
    label: 'Contributing',
    slug: 'contributing',
    frontmatter: contributingFrontmatter,
    href: '/docs/get-started/contributing',
    meta: {
      title: 'Contributing to Cerberus Design System',
      description:
        'Learn how to contribute to the Cerberus Design System, including guidelines for code contributions, documentation, and more.',
    },
    Content: Contributing,
  },
]
