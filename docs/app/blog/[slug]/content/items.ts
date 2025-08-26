import type { BlogHeaderProps } from '../../components/blog-header'
import V18ReleaseNotes, {
  frontmatter as v18Frontmatter,
} from './v18-release.mdx'
import V19ReleaseNotes, {
  frontmatter as v19Frontmatter,
} from './v19-release.mdx'
import V21ReleaseNotes, {
  frontmatter as v21Frontmatter,
} from './v21-release.mdx'

export const items = [
  {
    id: '1.0.2',
    label: 'Cerberus v21 Release',
    category: 'release',
    version: 'v21',
    slug: 'v21-release',
    frontmatter: v21Frontmatter as unknown as BlogHeaderProps,
    href: '/blog/v21-release',
    meta: {
      title: 'Cerberus v21 Release Notes',
      description: 'New Features and Improvements',
      date: '2025-08-26',
      timeToRead: '4 min read',
    },
    Content: V21ReleaseNotes,
  },
  {
    id: '1.0.1',
    label: 'Cerberus v19 Release',
    category: 'release',
    version: 'v19',
    slug: 'v19-release',
    frontmatter: v19Frontmatter as unknown as BlogHeaderProps,
    href: '/blog/v19-release',
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
    slug: 'v18-release',
    frontmatter: v18Frontmatter as unknown as BlogHeaderProps,
    href: '/blog/v18-release',
    meta: {
      title: 'Cerberus v18 Release Notes',
      description: 'Introducing Cerberus PandaCSS config helpers.',
      date: '2025-03-12',
      timeToRead: '5 min read',
    },
    Content: V18ReleaseNotes,
  },
]
