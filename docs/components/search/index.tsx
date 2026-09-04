'use client'

import { Suspense } from 'react'
import Link from 'next/link'
import { Box, VStack } from '@/styled-system/jsx'
import { Input, Text, Show } from '@cerberus-design/react'
import {
  createQuery,
  useQuery,
  useSignal,
  createEffect,
  onCleanup,
} from '@cerberus-design/signals'

let pagefindInstance: any = null

// 1. Define the Query Factory outside the component
const searchDocs = createQuery(async (searchTerm: string) => {
  if (!searchTerm) return []

  if (!pagefindInstance && typeof window !== 'undefined') {
    try {
      // Bypass Turbopack's AST parser to load the static index at runtime
      const bypassBundler = new Function('url', 'return import(url)')
      pagefindInstance = await bypassBundler('/pagefind/pagefind.js')
      await pagefindInstance.options({})
    } catch (e) {
      console.warn('Pagefind index not found. Run a build to generate search data.')
      return []
    }
  }

  const search = await pagefindInstance.search(searchTerm)
  const topResults = await Promise.all(
    search.results.slice(0, 5).map((r: any) => r.data()),
  )

  return topResults
}, 'queryPagefindSearch')

// 2. Suspense-wrapped Results Component
function SearchResults({ query }: { query: string }) {
  // Pulls directly from the O(1) Cerberus cache, automatically suspending if fetching
  const results = useQuery(searchDocs(query))

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

// 3. Main Search Component
export function Search() {
  const [input, setInput, getInput] = useSignal<string>('')
  const [debouncedQuery, setDebouncedQuery] = useSignal<string>('')

  // Auto-tracking effect for the debounce timer
  createEffect(() => {
    const currentInput = getInput()

    const timer = setTimeout(() => {
      setDebouncedQuery(currentInput)
    }, 200)

    onCleanup(() => clearTimeout(timer))
  })

  return (
    <Box position="relative" w="full" maxW="400px">
      <Input
        placeholder="Search documentation..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />

      <Show when={input !== ''}>
        <Box
          position="absolute"
          top="100%"
          left="0"
          w="full"
          bg="page.surface.100"
          border="1px solid"
          borderColor="page.border.initial"
          zIndex="dropdown"
          mt="2"
          rounded="md"
          shadow="md"
          overflow="hidden"
        >
          {debouncedQuery === '' ? (
            <Text p="4" textStyle="body-sm" color="page.text.100">
              Searching...
            </Text>
          ) : (
            <Suspense
              fallback={
                <Text p="4" textStyle="body-sm" color="page.text.100">
                  Searching...
                </Text>
              }
            >
              <SearchResults query={debouncedQuery} />
            </Suspense>
          )}
        </Box>
      </Show>
    </Box>
  )
}
