import { items as componentsItems } from '@/app/docs/components/[slug]/content/items'
import { getBlogPosts } from '@/lib/blog-content'
import {
  Doc,
  getDataGridDocs,
  getGetStartedDocs,
  getSignalsDocs,
  getStylingDocs,
  getThemingDocs,
} from '@/lib/docs-content'
import { version } from '@cerberus-design/react/package.json'

const blogPosts = getBlogPosts()
const getStartedItems = getGetStartedDocs()
const dataGridItems = getDataGridDocs()
const signalsItems = getSignalsDocs()
const stylingItems = getStylingDocs()
const themingItems = getThemingDocs()

function createChildrenFromItems(items: Doc[]): DocumentSet[] {
  return items.map((item) => ({
    title: item.title,
    href: `/docs/${item.category}/${item.slug}`,
  }))
}

interface DocumentSet {
  title: string
  type?: 'section' | 'sub-section'
  href?: string
  children?: DocumentSet[]
}
type Items = typeof componentsItems

export const GET = async () => {
  const documentSets: DocumentSet[] = [
    {
      title: 'Docs',
      type: 'section',
      children: [
        {
          title: 'Get Started',
          type: 'sub-section',
          children: createChildrenFromItems(getStartedItems),
        },
        {
          title: 'Components',
          type: 'sub-section',
          children: formatItemsToDocSet(componentsItems),
        },
        {
          title: 'Data Grid',
          type: 'sub-section',
          children: createChildrenFromItems(dataGridItems),
        },
        {
          title: 'Signals',
          type: 'sub-section',
          children: createChildrenFromItems(signalsItems),
        },
        {
          title: 'Styling',
          type: 'sub-section',
          children: createChildrenFromItems(stylingItems),
        },
        {
          title: 'Theming',
          type: 'sub-section',
          children: createChildrenFromItems(themingItems),
        },
      ],
    },
    {
      title: 'Blog',
      type: 'section',
      children: blogPosts.map((item) => ({
        title: item.title,
        href: `/blog/${item.slug}`,
      })),
    },
  ]

  function formatItemsToDocSet(items: Items): DocumentSet[] {
    return items
      .map((item) => {
        if (!item.href) return null
        return {
          title: item.label,
          href: item.href,
        }
      })
      .filter(Boolean) as DocumentSet[]
  }

  function createContentUrl(href: string): string {
    const splitUrl = href.split('/')
    const isBlog = href.includes('/blog/')
    const path = isBlog ? `/llms${href}.txt` : `/llms/${splitUrl[2]}/${splitUrl[3]}.txt`
    return path
  }

  function generateContent(sets: DocumentSet[]): string {
    return sets
      .map((set) => {
        if (set.type === 'section') {
          const sectionContent = `## ${set.title}`
          const childrenContent = set.children ? generateContent(set.children) : ''
          return `${sectionContent}\n${childrenContent}`
        }

        if (set.type === 'sub-section') {
          const sectionContent = `### ${set.title}`
          const childrenContent = set.children ? generateContent(set.children) : ''
          return `${sectionContent}\n${childrenContent}`
        }

        const childrenContent = set.children ? generateContent(set.children) : ''
        const currentContent = set.href
          ? `- [${set.title}](${createContentUrl(set.href)})`
          : ''

        return `${currentContent}\n${childrenContent}`.trim()
      })
      .filter(Boolean)
      .join('\n')
  }

  const content = TEMPLATE.replace('%DOCUMENT_SETS%', generateContent(documentSets))

  return new Response(content, {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  })
}

const TEMPLATE = `
# Cerberus UI Platform Documentation

@doc-version: ${version}
@doc-version-notes: Some features may have extended or refined behavior in minor or patch releases

Full documenation: /llms-full.txt

%DOCUMENT_SETS%
`
