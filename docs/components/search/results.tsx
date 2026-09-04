'use client'

import { Box, VStack } from '@/styled-system/jsx'
import { Text } from '@cerberus-design/react'
import { createQuery, useQuery } from '@cerberus-design/signals'
import Link from 'next/link'

type Props = {
  query: string
}

export function SearchResults({ query }: Props) {
  const results = useQuery(querySearch(query))

  if (results.length === 0) {
    return (
      <Text p="4" textStyle="body-sm" color="page.text.100">
        No results found for "{query}"
      </Text>
    )
  }

  return (
    <VStack w="full" gap="2" p="2">
      {results.map((res: any, i: number) => (
        <Link
          key={i}
          href={res.url}
          className="block w-full p-2 hover:bg-page.surface.200 rounded-md transition-colors"
        >
          <Text fontWeight="semibold">{res.meta.title}</Text>
          <Box
            textStyle="body-sm"
            color="page.text.100"
            // Style Pagefind's injected <mark> tags to match Cerberus warning tokens
            css={{
              '& mark': {
                bgColor: 'warning.bg.initial',
                color: 'warning.text.initial',
                fontWeight: 'bold',
                px: '1',
                rounded: 'sm',
              },
            }}
            dangerouslySetInnerHTML={{ __html: res.excerpt }}
          />
        </Link>
      ))}
    </VStack>
  )
}

// Factory

let pagefindInstance: any = null

const querySearch = createQuery(async (searchTerm: string) => {
  if (!searchTerm) return []

  if (!pagefindInstance && typeof window !== 'undefined') {
    try {
      // Bypass Turbopack's AST parser to load the static index at runtime
      const bypassBundler = new Function('url', 'return import(url)')
      pagefindInstance = await bypassBundler('/pagefind/pagefind.js')
      await pagefindInstance.options({})
    } catch {
      console.warn('Pagefind index not found. Run a build to generate search data.')
      return []
    }
  }

  const search = await pagefindInstance.search(searchTerm)
  const topResults = await Promise.all(
    search.results.slice(0, 5).map((r: any) => r.data()),
  )

  return topResults
}, 'querySearch')
