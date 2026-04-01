'use client'

import { Box, Divider, Scrollable, Stack } from '@/styled-system/jsx'
import { ArrowUpRight, LogoGithub } from '@carbon/icons-react'
import { cerberus, For, Text } from '@cerberus-design/react'
import {
  createComputed,
  createQuery,
  createSignal,
  useQuery,
} from '@cerberus-design/signals'
import { focusStates } from '@cerberus/panda-preset'
import Link, { type LinkProps } from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useMemo } from 'react'
import { css } from 'styled-system/css'
import { vstack } from 'styled-system/patterns'

const [url, setUrl] = createSignal<string>('')

const query = createQuery(url, async (currentUrl) => {
  if (!currentUrl) return []
  const response = await fetch(currentUrl)

  if (!response.ok) {
    console.error(`Failed to fetch MDX: ${response.status}`)
    return []
  }

  // MUST parse as text(), MDX is not JSON
  const mdxText = await response.text()
  return parseHeadingsFromMDX(mdxText)
})

interface HeadingLink {
  id: string
  label: string
  path: string
  level: number // Added to track hierarchy
}

export default function OnThisPage() {
  const pathname = usePathname()
  const data = useQuery(query)

  const editPageLink = useMemo(() => {
    const base = 'https://github.com/omnifed/cerberus/blob/main/docs/app'
    const directory = pathname?.split('/').slice(0, -1).join('/') ?? 'docs/components'
    const file = pathname?.split('/').pop() || 'index'
    const githubPathname = `${directory}/%5Bslug%5D/content/${file}`
    return {
      rawUrl: `https://raw.githubusercontent.com/omnifed/cerberus/refs/heads/main/docs/app${githubPathname}.mdx`,
      editUrl: `${base}${githubPathname}.mdx`,
    }
  }, [pathname])

  const links = createComputed<HeadingLink[]>(() => {
    return Array.isArray(data) ? data : []
  })

  useEffect(() => setUrl(editPageLink.rawUrl), [editPageLink])

  return (
    <Scrollable hideScrollbar h="full" px="md" w="full">
      <Heading />

      <ul
        aria-label="Page sections"
        className={vstack({
          alignItems: 'flex-start',
          gap: 2,
        })}
      >
        <For each={links()}>
          {(link, idx) => (
            <cerberus.li
              key={`${link.id}-${idx}`}
              data-level={link.level}
              className={css({
                // Satisfies Requirement #2: Indent h3 elements
                ml: link.level === 3 ? '4' : '0',
                ms: 0,
                width: 'full',
                '& :is([data-level=3])': {
                  ms: 'sm',
                },
              })}
            >
              <Link
                aria-current={
                  typeof window !== 'undefined' && window.location.hash === link.id
                    ? 'page'
                    : undefined
                }
                href={link.id as LinkProps<string>['href']}
                className={css({
                  display: 'block',
                  rounded: 'sm',
                  textStyle: 'label-sm',
                  textWrap: 'pretty',
                  _hover: {
                    textDecorationColor: 'action.navigation.hover',
                    textDecoration: 'underline',
                  },
                  _currentPage: {
                    color: 'action.navigation.visited',
                    textDecorationColor: 'action.navigation.hover',
                    textDecoration: 'underline',
                  },
                  _focusVisible: focusStates._focusVisible,
                })}
              >
                {link.label}
              </Link>
            </cerberus.li>
          )}
        </For>

        <cerberus.li className={css({ width: 'full' })}>
          <Divider
            color="page.border.initial"
            my="md"
            orientation="horizontal"
            thickness="1px"
          />

          <cerberus.a
            href={editPageLink}
            target="_blank"
            rel="noopener noreferrer"
            css={{
              color: 'page.text.100',
              display: 'inline-flex',
              gap: 2,
              rounded: 'sm',
              textStyle: 'label-sm',
              textWrap: 'pretty',
              transitionProperty: 'color',
              transitionDuration: 'fast',
              _hover: {
                color: 'action.navigation.hover',
                textDecorationColor: 'action.navigation.hover',
                textDecoration: 'underline',
              },
            }}
          >
            <LogoGithub size="0.875rem" />
            Edit this page on Github
            <ArrowUpRight size="0.875rem" />
          </cerberus.a>
        </cerberus.li>
      </ul>
    </Scrollable>
  )
}

export function OTPFallback() {
  return (
    <Box h="full" px="md" w="full">
      <Heading />
      <Stack direction="column" gap="sm">
        <For each={Array.from({ length: 4 })}>
          {(_, index) => (
            <Text aria-busy key={index} bgColor="page.bg.100/30" rounded="sm">
              Loading...
            </Text>
          )}
        </For>
      </Stack>
    </Box>
  )
}

function parseHeadingsFromMDX(mdxContent: string): HeadingLink[] {
  const headingRegex = /^(##|###)\s+(.+)$/gm
  const links: HeadingLink[] = []
  let match

  while ((match = headingRegex.exec(mdxContent)) !== null) {
    const level = match[1].length
    const label = match[2].replace(/<[^>]+>/g, '').trim()
    const id =
      '#' +
      label
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, '-')
        .replace(/(^-|-$)/g, '')

    links.push({ id, label, path: id, level })
  }

  return links
}

function Heading() {
  return (
    <Text color="page.text.100" textStyle="headings-xs" mb="md">
      On this page
    </Text>
  )
}
