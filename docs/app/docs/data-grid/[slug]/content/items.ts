import dynamic from 'next/dynamic'
import { frontmatter as overviewFrontmatter } from './overview.mdx'
import { frontmatter as quickstartFrontmatter } from './quickstart.mdx'
import { frontmatter as columnsFrontmatter } from './columns.mdx'

export const items = [
  {
    id: '0.0',
    label: 'Get Started',
    href: '',
  },
  {
    id: '0.1',
    href: '/docs/data-grid/overview',
    label: 'Overview',
    slug: 'overview',
    frontmatter: overviewFrontmatter,
    Content: dynamic(() => import('./overview.mdx')),
  },
  {
    id: '0.2',
    href: '/docs/data-grid/quickstart',
    label: 'Quick Start',
    slug: 'quickstart',
    frontmatter: quickstartFrontmatter,
    Content: dynamic(() => import('./quickstart.mdx')),
  },
  {
    id: '0.3',
    href: '/docs/data-grid/columns',
    label: 'Columns',
    slug: 'columns',
    frontmatter: columnsFrontmatter,
    Content: dynamic(() => import('./columns.mdx')),
  },
]
