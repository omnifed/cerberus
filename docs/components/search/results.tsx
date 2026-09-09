'use client'

import { cerberus, HStack, Square, Stack } from '@/styled-system/jsx'
import { Document, Hashtag } from '@carbon/icons-react'
import { DialogCloseTrigger, For, Show, Tag, Text } from '@cerberus-design/react'
import { createQuery, useQuery } from '@cerberus-design/signals'
import Link, { LinkProps } from 'next/link'
import { Fragment } from 'react/jsx-runtime'

export const StyledLink = cerberus(Link, {
  base: {
    px: 'md',
    py: 'sm',
    rounded: 'sm',
    transition: 'colors',
    _highlighted: {
      bgColor: 'action.ghost.hover',
    },
    _hover: {
      bgColor: 'action.ghost.hover',
    },
  },
})

type Props = {
  query: string
  activeFilter: string
}

export function SearchResults({ query, activeFilter }: Props) {
  const results = useQuery(querySearch({ searchTerm: query, activeFilter }))

  if (results.length === 0) {
    return (
      <Text p="md" textStyle="body-sm" color="page.text.100">
        No results found for "{query}"
      </Text>
    )
  }

  return (
    <Stack gap="md" py="sm">
      <For each={results}>
        {(res: any, index: number) => (
          <Fragment key={`${res.meta.title}-${index}`}>
            <DialogCloseTrigger asChild>
              <StyledLink data-search-item href={cleanURL(res.url)}>
                <HStack gap="sm" w="full">
                  <Document />
                  <Text textStyle="label-md">{res.meta.title}</Text>
                  <Show when={res.meta.category}>
                    <Tag size="sm" usage="outlined">
                      {res.meta.category}
                    </Tag>
                  </Show>
                </HStack>
              </StyledLink>
            </DialogCloseTrigger>

            <Show when={res.sub_results.length}>
              {() => (
                <Stack
                  borderLeft="1px solid"
                  borderLeftColor="page.border.100"
                  gap="sm"
                  ms="1.35rem"
                  mt="-0.5rem"
                  ps="xs"
                >
                  <For each={res.sub_results}>
                    {(sub: any, index: number) => (
                      <DialogCloseTrigger key={`${sub.title}-${index}`} asChild>
                        <StyledLink
                          data-search-item
                          href={cleanURL(sub.url)}
                          userSelect="none"
                        >
                          <HStack gap="sm" w="full">
                            <Square flexShrink="0" size="4">
                              <Hashtag />
                            </Square>
                            <Stack gap="xs">
                              <Text textStyle="label-sm">{sub.title}</Text>
                              <Text
                                as="span"
                                color="page.text.100"
                                lineClamp="1"
                                lineHeight="1.4"
                                overflow="hidden"
                                textStyle="xs"
                                text-overflow="ellipsis"
                                css={{
                                  '& mark': {
                                    bgColor: 'info.surface.100',
                                    color: 'info.text.initial',
                                    fontWeight: 'semibold',
                                    px: 'sm',
                                    rounded: 'sm',
                                  },
                                }}
                                dangerouslySetInnerHTML={{ __html: sub.excerpt }}
                              />
                            </Stack>
                          </HStack>
                        </StyledLink>
                      </DialogCloseTrigger>
                    )}
                  </For>
                </Stack>
              )}
            </Show>
          </Fragment>
        )}
      </For>
    </Stack>
  )
}

// Factory

let pagefindInstance: any = null

const querySearch = createQuery(
  async (args: { searchTerm: string; activeFilter: string }) => {
    const { searchTerm, activeFilter } = args
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

    const formattedFilter = !activeFilter ? 'all' : activeFilter
    const options =
      formattedFilter === 'all' ? {} : { filters: { section: formattedFilter } }

    const search = await pagefindInstance.debouncedSearch(searchTerm)
    const topResults = await Promise.all(
      search.results.slice(0, 5).map((r: any) => r.data()),
    )

    console.log({ topResults, searchTerm, options })

    return topResults
  },
  'querySearch',
)

function cleanURL(url: string): LinkProps<any>['href'] {
  return url.replace('.html', '')
}
