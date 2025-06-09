'use client'

import { focusStates } from '@cerberus-design/panda-preset'
import { css } from 'styled-system/css'
import { vstack } from 'styled-system/patterns'
import Link, { type LinkProps } from 'next/link'
import { useLayoutEffect, useRef, useState } from 'react'
import { Box } from '@/styled-system/jsx'

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
  const hasRendered = useRef<boolean>(false)
  const [links, setLinks] = useState<HeadingLink[]>([])

  useLayoutEffect(() => {
    if (hasRendered.current) return
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

    hasRendered.current = true
  }, [])

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
        {links.map((link, idx) => (
          <li key={`${link.id}-${idx}`}>
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
          </li>
        ))}
      </ul>
    </Box>
  )
}
