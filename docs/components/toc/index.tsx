import { Doc } from '@/lib/docs-content'
import { TocLayout } from './layout'
import { LinksList } from './links-list'

interface TableOfContentsProps {
  items: Doc['toc']
  /**
   * Tracks the current nesting depth.
   * Defaults to 0 for the top-level headings (H2).
   */
  level?: number
}

export function TableOfContents({ items, level = 0 }: TableOfContentsProps) {
  if (!items?.length) return null
  return (
    <TocLayout>
      <LinksList items={items} level={level} />
    </TocLayout>
  )
}
