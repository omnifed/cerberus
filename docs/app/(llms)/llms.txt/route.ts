import { BASE_URL } from '@/lib/constants'
import { version } from '@cerberus-design/configs'
import { items as blogItems } from '@/app/blog/[slug]/content/items'
import { items as getStartedItems } from '@/app/docs/get-started/[slug]/content/items'
import { items as componentsItems } from '@/app/docs/components/[slug]/content/items'
import { items as stylingItems } from '@/app/docs/styling/[slug]/content/items'
import { items as themingItems } from '@/app/docs/theming/[slug]/content/items'

interface DocumentSet {
  title: string
  type?: 'section' | 'sub-section'
  href?: string
  children?: DocumentSet[]
}
type Items =
  | typeof getStartedItems
  | typeof blogItems
  | typeof componentsItems
  | typeof stylingItems
  | typeof themingItems

export const dynamic = 'force-static'

export const GET = async () => {
  const documentSets: DocumentSet[] = [
    {
      title: 'Docs',
      type: 'section',
      children: [
        {
          title: 'Get Started',
          type: 'sub-section',
          children: formatItemsToDocSet(getStartedItems),
        },
        {
          title: 'Components',
          type: 'sub-section',
          children: formatItemsToDocSet(componentsItems),
        },
        {
          title: 'Styling',
          type: 'sub-section',
          children: formatItemsToDocSet(stylingItems),
        },
        {
          title: 'Theming',
          type: 'sub-section',
          children: formatItemsToDocSet(themingItems),
        },
      ],
    },
    {
      title: 'Blog',
      type: 'section',
      children: formatItemsToDocSet(blogItems),
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

  function generateContent(sets: DocumentSet[]): string {
    return sets
      .map((set) => {
        if (set.type === 'section') {
          const sectionContent = `## ${set.title}`
          const childrenContent = set.children
            ? generateContent(set.children)
            : ''
          return `${sectionContent}\n${childrenContent}`
        }

        if (set.type === 'sub-section') {
          const sectionContent = `### ${set.title}`
          const childrenContent = set.children
            ? generateContent(set.children)
            : ''
          return `${sectionContent}\n${childrenContent}`
        }

        const childrenContent = set.children
          ? generateContent(set.children)
          : ''
        const currentContent = set.href
          ? `- [${set.title}](${BASE_URL}/${set.href})`
          : ''

        return `${currentContent}\n${childrenContent}`.trim()
      })
      .filter(Boolean) // Remove empty strings
      .join('\n')
  }

  const content = TEMPLATE.replace(
    '%DOCUMENT_SETS%',
    generateContent(documentSets),
  )

  return new Response(content)
}

const TEMPLATE = `
# Cerberus Design System Documentation

@doc-version: ${version}
@doc-version-notes: Some features may have extended or refined behavior in minor or patch releases

%DOCUMENT_SETS%
`
