'use client'

import { cerberus, HStack, Square, Stack } from '@/styled-system/jsx'
import { Document, Hashtag } from '@carbon/icons-react'
import { For, Show, Text } from '@cerberus-design/react'
import { createQuery, useQuery } from '@cerberus-design/signals'
import Link from 'next/link'
import { Fragment } from 'react/jsx-runtime'

export const StyledLink = cerberus(Link)

type Props = {
  query: string
}

export function SearchResults({ query }: Props) {
  const results = useQuery(querySearch(query))

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
            <StyledLink
              href={res.url}
              px="md"
              py="sm"
              rounded="sm"
              transition="colors"
              _hover={{
                bgColor: 'page.bg.initial',
              }}
            >
              <HStack gap="sm" w="full">
                <Document />
                <Text textStyle="label-md">{res.meta.title}</Text>
              </HStack>
            </StyledLink>
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
                      <StyledLink
                        key={`${sub.title}-${index}`}
                        href={sub.url}
                        px="md"
                        py="sm"
                        rounded="sm"
                        transition="colors"
                        userSelect="none"
                        _hover={{
                          bgColor: 'page.bg.initial',
                        }}
                      >
                        <HStack gap="sm" w="full">
                          <Square flexShrink="0" size="4">
                            <Hashtag />
                          </Square>
                          <Stack>
                            <Text textStyle="label-sm">{sub.title}</Text>
                            <Text
                              as="span"
                              color="page.text.100"
                              lineClamp="1"
                              overflow="hidden"
                              textStyle="xs"
                              text-overflow="ellipsis"
                              css={{
                                '& mark': {
                                  bgColor: 'warning.surface.100',
                                  color: 'warning.text.initial',
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
