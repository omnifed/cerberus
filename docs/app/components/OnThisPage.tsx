'use client'

import { focusStates } from '@cerberus/panda-preset'
import { css } from 'styled-system/css'
import { vstack } from 'styled-system/patterns'
import Link, { type LinkProps } from 'next/link'
import { useLayoutEffect, useMemo, useState } from 'react'
import { Box, Divider } from '@/styled-system/jsx'
import { usePathname } from 'next/navigation'
import { cerberus, For } from '@cerberus-design/react'
import { ArrowUpRight, LogoGithub } from '@carbon/icons-react'

interface OverrideHeading {
  href: string
}

interface NodeOverride {
  href: {
    nodeValue: string
  }
}

interface HeadingLink {
  id: string
  label: string
  path: string
}

export default function OnThisPage() {
  const pathname = usePathname()
  const [links, setLinks] = useState<HeadingLink[]>([])

  const editPageLink = useMemo(() => {
    const base = 'https://github.com/omnifed/cerberus/blob/main/docs/app'
    const directory =
      pathname?.split('/').slice(0, -1).join('/') ?? 'docs/components'
    const file = pathname?.split('/').pop() || 'index'
    const githubPathname = `${directory}/%5Bslug%5D/content/${file}`
    return `${base}${githubPathname}.mdx`
  }, [pathname])

  useLayoutEffect(() => {
    if (pathname) {
      // Clear the existing links
      setLinks([])

      // Find all headings with the class 'heading' in the document
      // and extract their href attributes and text content
      // This assumes that the headings are rendered in the document
      // and have the class 'heading' applied to them.
      // Note: This will only work if the headings are rendered in the document
      // and not in a separate component that is not mounted yet.
      const nodeList = document.querySelectorAll('a.heading')

      for (let i = 0; i < nodeList.length; i++) {
        const heading = nodeList[i]
        const overrideHeading = heading as unknown as OverrideHeading
        const attributes = heading.attributes as unknown as NodeOverride
        setLinks((prevLinks) => [
          ...prevLinks,
          {
            id: attributes.href.nodeValue ?? '#',
            label: heading.textContent ?? '',
            path: overrideHeading.href,
          },
        ])
      }
    }
  }, [pathname])

  return (
    <Box h="fit-content" px="md" w="full">
      <p
        className={css({
          color: 'page.text.100',
          textStyle: 'h6',
          mb: '4',
        })}
      >
        On this page
      </p>

      <ul
        aria-label="Page sections"
        className={vstack({
          alignItems: 'flex-start',
          gap: 2,
        })}
      >
        <For each={links}>
          {(link, idx) => (
            <cerberus.li key={`${link.id}-${idx}`}>
              <Link
                aria-current={
                  window.location.hash === link.id ? 'page' : undefined
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

        <cerberus.li>
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
    </Box>
  )
}
