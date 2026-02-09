'use client'

import { RouteType } from 'next/dist/lib/load-custom-routes'
import Link, { LinkProps } from 'next/link'
import { usePathname } from 'next/navigation'
import { PropsWithChildren } from 'react'
import { css } from 'styled-system/css'

export function GlobalLink(props: PropsWithChildren<LinkProps<RouteType>>) {
  const { children, ...linkProps } = props
  const pathname = usePathname()

  const isCurrent = pathname.includes(props.href.toString())

  return (
    <Link
      aria-current={isCurrent ? 'page' : undefined}
      className={css({
        display: 'flex',
        h: 'full',
        textStyle: 'body-sm',
        transitionProperty: 'color',
        transitionDuration: 'fast',
        transitionTimingFunction: 'ease-in-out',
        _currentPage: {
          color: 'action.navigation.visited',
        },
        _hover: {
          color: 'action.navigation.hover',
        },
      })}
      {...linkProps}
    >
      {children}
    </Link>
  )
}
