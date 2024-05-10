'use client'

import { css } from '@/styled-system/css'
import { usePathname } from 'next/navigation'
import type { HeadingItem, LinkItem } from './SideNav'
import Link from 'next/link'

export default function MatchSideNavItem(props: HeadingItem | LinkItem) {
  const pathname = usePathname()

  switch (props.type) {
    case 'heading':
      return (
        <p
          className={css({
            color: 'neutral.text.100',
            textStyle: 'h6',
            textTransform: 'uppercase',
          })}
        >
          {props.label}
        </p>
      )
    case 'route':
      return (
        <Link
          aria-current={pathname === props.route ? 'page' : undefined}
          className={css({
            display: 'block',
            transition: 'color 250ms ease-in-out',
            w: 'full',
            _hover: {
              color: 'action.navigation.hover',
            },
            _currentPage: {
              color: 'action.navigation.visited',
              borderRight: '2px solid',
              borderColor: 'action.navigation.visited',
            },
          })}
          href={props.route}
          prefetch
        >
          {props.label}
        </Link>
      )
    default:
      return null
  }
}
