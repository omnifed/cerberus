'use client'

import { focusStates } from '@cerberus-design/panda-preset'
import { css } from 'styled-system/css'
import { vstack } from 'styled-system/patterns'
import Link, { type LinkProps } from 'next/link'
import { useLayoutEffect, useRef, useState } from 'react'
import { Box } from '@/styled-system/jsx'
import { usePathname } from 'next/navigation'

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
  const prevPathname = useRef<string | null>(null)
  const [links, setLinks] = useState<HeadingLink[]>([])

  useLayoutEffect(() => {
    if (pathname) {
      // Check if the pathname has changed
      if (prevPathname.current === pathname) {
        return
      }

      // Update the previous pathname
      prevPathname.current = pathname
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
