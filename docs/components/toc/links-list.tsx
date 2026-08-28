import { Doc } from '@/lib/docs-content'
import { Box, Stack } from 'styled-system/jsx'
import { TocLink } from './link'

interface TableOfContentsProps {
  items: Doc['toc']
  /**
   * Tracks the current nesting depth.
   * Defaults to 0 for the top-level headings (H2).
   */
  level?: number
}

export function LinksList({ items, level = 0 }: TableOfContentsProps) {
  if (!items?.length) return null

  return (
    <Stack
      aria-label="Table of contents"
      as="ul"
      gap="2"
      // Apply left padding only if it is a nested child (level > 0)
      pl={level > 0 ? '4' : '0'}
      // Add a subtle border to visualize the nesting depth
      borderLeft={level > 0 ? '1px solid' : 'none'}
      borderColor="page.border.initial/50"
    >
      {items.map((item) => (
        <Box as="li" key={item.title} w="full">
          <TocLink url={item.url}>{item.title}</TocLink>
          {/* Recursively render child headings (H3, H4, etc.) */}
          {item.items && item.items.length > 0 && (
            <Box mt="2">
              <LinksList items={item.items} level={level + 1} />
            </Box>
          )}
        </Box>
      ))}
    </Stack>
  )
}
