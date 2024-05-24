'use client'

import { css } from '@cerberus-design/styled-system/css'
import { usePathname } from 'next/navigation'
import type { HeadingItem, LinkItem } from './SideNav'
import Link from 'next/link'
import { ACTION_NAV_HOVER } from '../utils/const'
import { focusStates } from '@cerberus-design/panda-preset'

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
              color: ACTION_NAV_HOVER,
            },
            _currentPage: {
              color: `action.navigation.hover`,
              borderRight: '2px solid',
              borderColor: `action.navigation.hover`,
            },
            _focusVisible: focusStates._focusVisible,
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
