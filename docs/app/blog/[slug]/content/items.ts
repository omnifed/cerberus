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
import V22ReleaseNotes, {
  frontmatter as v22Frontmatter,
} from './v22-release.mdx'
import V23ReleaseNotes, {
  frontmatter as v23Frontmatter,
} from './v23-release.mdx'
import V24ReleaseNotes, {
  frontmatter as v24Frontmatter,
} from './v24-release.mdx'
import V25ReleaseNotes, {
  frontmatter as v25Frontmatter,
} from './v25-release.mdx'

export const items = [
  {
    id: '1.0.7',
    label: 'Cerberus v25 Release',
    category: 'release',
    version: 'v25',
    slug: 'v25-release',
    frontmatter: v25Frontmatter as unknown as BlogHeaderProps,
    href: '/blog/v25-release',
    meta: {
      title: 'Cerberus v25 Release Notes',
      description: 'Ecosystem upgrade.',
      date: '2026-012-01',
      timeToRead: '5 min read',
    },
    Content: V25ReleaseNotes,
  },
  {
    id: '1.0.5',
    label: 'Cerberus v24 Release',
    category: 'release',
    version: 'v24',
    slug: 'v24-release',
    frontmatter: v24Frontmatter as unknown as BlogHeaderProps,
    href: '/blog/v24-release',
    meta: {
      title: 'Cerberus v24 Release Notes',
      description: 'Fine tuning & customization options.',
      date: '2025-03-12',
      timeToRead: '5 min read',
    },
    Content: V24ReleaseNotes,
  },
  {
    id: '1.0.4',
    label: 'Cerberus v23 Release',
    category: 'release',
    version: 'v23',
    slug: 'v23-release',
    frontmatter: v23Frontmatter as unknown as BlogHeaderProps,
    href: '/blog/v23-release',
    meta: {
      title: 'Cerberus v23 Release Notes',
      description:
        'Powerful Utility Components for Enhanced Developer Experience',
      date: '2025-01-28',
      timeToRead: '4 min read',
    },
    Content: V23ReleaseNotes,
  },
  {
    id: '1.0.3',
    label: 'Cerberus v22 Release',
    category: 'release',
    version: 'v22',
    slug: 'v22-release',
    frontmatter: v22Frontmatter as unknown as BlogHeaderProps,
    href: '/blog/v22-release',
    meta: {
      title: 'Cerberus v22 Release Notes',
      description: 'Powerful New Components and Enhanced User Experience',
      date: '2025-01-21',
      timeToRead: '5 min read',
    },
    Content: V22ReleaseNotes,
  },
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
