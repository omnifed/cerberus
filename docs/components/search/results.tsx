'use client'

import { cerberus, Square, Stack } from '@/styled-system/jsx'
import { Document, Hashtag } from '@carbon/icons-react'
import { For, Show, Tag, Text } from '@cerberus-design/react'
import { useQuery } from '@cerberus-design/signals'
import Link, { LinkProps } from 'next/link'
import { Fragment } from 'react/jsx-runtime'
import { querySearch } from './factories'
import { ResultRow } from './result-row'

export const StyledLink = cerberus(Link, {
  base: {
    px: 'md',
    py: 'sm',
    rounded: 'sm',
    transition: 'colors',
    _highlighted: {
      bgColor: 'action.ghost.hover',
      '& :is([data-scope=clipboard][data-part=control])': {
        visibility: 'visible',
      },
    },
    _hover: {
      bgColor: 'action.ghost.hover',
      '& :is([data-scope=clipboard][data-part=control])': {
        visibility: 'visible',
      },
    },
    '& :is([data-scope=clipboard][data-part=control])': {
      visibility: 'hidden',
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
            <ResultRow href={cleanURL(res.url)}>
              <Document />
              <Text textStyle="label-md">{res.meta.title}</Text>
              <Show when={res.meta.category}>
                <Tag size="sm" usage="outlined">
                  {res.meta.category}
                </Tag>
              </Show>
            </ResultRow>

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
                      <ResultRow
                        key={`${sub.title}-${index}`}
                        href={cleanURL(sub.url)}
                        linkProps={{ userSelect: 'none' }}
                      >
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
                      </ResultRow>
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

function cleanURL(url: string): LinkProps<any>['href'] {
  return url.replace('.html', '')
}
