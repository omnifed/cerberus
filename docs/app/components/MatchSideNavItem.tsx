'use client'

import { css } from '@cerberus/styled-system/css'
import { usePathname } from 'next/navigation'
import type { HeadingItem, LinkItem } from './SideNav'
import Link from 'next/link'
import { ACTION_NAV_HOVER } from '../utils/const'
import { focusStates } from '@cerberus-design/panda-preset'
import { Show } from '@cerberus-design/react'
import { hstack } from '@cerberus/styled-system/patterns'

export default function MatchSideNavItem(props: HeadingItem | LinkItem) {
  const pathname = usePathname()

  switch (props.type) {
    case 'heading':
      return (
        <p
          className={css({
            color: 'page.text.initial',
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
          className={hstack({
            justify: 'space-between',
            paddingInlineEnd: '6',
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
          <Show when={Boolean(props.tag)}>
            <Show
              when={props.tag === 'new'}
              fallback={
                <span
                  className={css({
                    border: '1px solid',
                    borderColor: 'info.border.initial',
                    color: 'info.text.initial',
                    display: 'inline-block',
                    fontWeight: '600',
                    lineHeight: 'initial',
                    pxi: '1',
                    rounded: 'sm',
                    textStyle: 'body-xs',
                    textTransform: 'uppercase',
                    userSelect: 'none',
                  })}
                >
                  {props.tag}
                </span>
              }
            >
              <span
                className={css({
                  bgGradient: 'to-r',
                  gradientFrom: 'warning.border.initial',
                  gradientTo: 'info.border.initial',
                  color: 'page.surface.initial',
                  display: 'inline-block',
                  fontWeight: '600',
                  lineHeight: 'initial',
                  pxi: '1',
                  rounded: 'sm',
                  textStyle: 'body-xs',
                  textTransform: 'uppercase',
                  userSelect: 'none',
                })}
              >
                {props.tag}
              </span>
            </Show>
          </Show>
        </Link>
      )
    default:
      return null
  }
}
