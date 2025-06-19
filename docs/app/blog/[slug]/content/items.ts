import type { BlogHeaderProps } from '../../components/blog-header'
import V18ReleaseNotes, {
  frontmatter as v18Frontmatter,
} from './v18-release.mdx'
import V19ReleaseNotes, {
  frontmatter as v19Frontmatter,
} from './v19-release.mdx'

export const items = [
  {
    id: '1.0.1',
    label: 'Cerberus v19 Release',
    category: 'release',
    version: 'v19',
    slug: 'v19-release-notes',
    frontmatter: v19Frontmatter as unknown as BlogHeaderProps,
    href: '/blog/v19-release-notes',
    meta: {
      title: 'Cerberus v19 Release Notes',
      description: 'Introducing new features and improvements in Cerberus.',
      date: '2025-04-15',
      timeToRead: '6 min read',
    },
    Content: V19ReleaseNotes,
  },
  {
    id: '1.0.0',
    label: 'Cerberus v18 Release',
    category: 'release',
    version: 'v18',
    slug: 'v18-release-notes',
    frontmatter: v18Frontmatter as unknown as BlogHeaderProps,
    href: '/blog/v18-release-notes',
    meta: {
      title: 'Cerberus v18 Release Notes',
      description: 'Introducing Cerberus PandaCSS config helpers.',
      date: '2025-03-12',
      timeToRead: '5 min read',
    },
    Content: V18ReleaseNotes,
  },
]
