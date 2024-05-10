'use client'

import { css } from '@/styled-system/css'
import { usePathname } from 'next/navigation'
import type { HeadingItem, LinkItem } from './SideNav'

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
        <a
          aria-current={pathname === props.route ? 'page' : undefined}
          className={css({
            display: 'block',
            w: 'full',
            _currentPage: {
              color: 'action.navigation.visited',
              borderRight: '2px solid',
              borderColor: 'action.navigation.visited',
            },
          })}
          href={props.route}
        >
          {props.label}
        </a>
      )
    default:
      return null
  }
}
