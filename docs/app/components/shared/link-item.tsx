'use client'

import { css } from '@/styled-system/css'
import Link, { type LinkProps } from 'next/link'
import { usePathname } from 'next/navigation'
import type { PropsWithChildren } from 'react'

interface LinkItemProps {
  href: string
}

export function SideNavLinkItem(props: PropsWithChildren<LinkItemProps>) {
  const pathname = usePathname()

  function isCurrentPage(): boolean {
    return props.href.includes(pathname) || pathname.includes(props.href)
  }

  return (
    <Link
      aria-current={isCurrentPage() ? 'page' : undefined}
      href={props.href as LinkProps<string>['href']}
      prefetch
      className={css({
        color: 'page.text.200',
        display: 'inline-flex',
        px: 'sm',
        py: '0.75rem',
        rounded: 'sm',
        textStyle: 'label-sm',
        transitionProperty: 'background-color,color',
        transitionDuration: 'fast',
        w: 'full',
        _hover: {
          bgColor: 'action.ghost.hover',
          color: 'action.text.inverse',
        },
        _currentPage: {
          bgColor: 'action.ghost.active',
          color: 'action.text.inverse',
          _hover: {
            '&:is([aria-current="page"])': {
              bgColor: 'action.ghost.active',
              color: 'action.text.inverse',
              cursor: 'default',
            },
          },
        },
      })}
    >
      {props.children}
    </Link>
  )
}
