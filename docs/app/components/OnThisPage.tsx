'use client'

import { focusStates } from '@cerberus-design/panda-preset'
import { css } from '@cerberus/styled-system/css'
import { vstack } from '@cerberus/styled-system/patterns'
import Link from 'next/link'
import { useLayoutEffect, useRef, useState } from 'react'

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
    <div
      className={css({
        borderLeft: '1px solid',
        borderColor: 'page.border.initial',
        h: 'fit-content',
        paddingInlineStart: '6',
      })}
    >
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
          gap: '1',
        })}
      >
        {links.map((link) => (
          <li key={link.id}>
            <Link
              aria-current={
                window.location.hash === link.id ? 'page' : undefined
              }
              href={link.id}
              className={css({
                display: 'block',
                rounded: 'sm',
                textStyle: 'body-xs',
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
    </div>
  )
}
