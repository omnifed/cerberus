import { css } from '@cerberus/styled-system/css'
import { vstack } from '@cerberus/styled-system/patterns'
import { type PropsWithChildren, memo } from 'react'
import MatchSideNavItem from './MatchSideNavItem'
import type { LinkProps } from 'next/link'

export type NavList = (HeadingItem | LinkItem)[]
export type NavItemType = 'heading' | 'route'

export interface HeadingItem {
  label: string
  route?: never
  tag?: never
  type: 'heading'
}

export interface LinkItem {
  label: string
  route: LinkProps<string>['href']
  tag: '' | 'new' | 'next'
  type: 'route'
}

interface SideNavProps {
  navList: NavList
}

export default memo(function SideNav(props: PropsWithChildren<SideNavProps>) {
  return (
    <div
      className={css({
        paddingInlineStart: '6',
        borderColor: 'page.border.100',
        borderRight: '1px solid',
      })}
    >
      <ul
        aria-label="Side nav"
        className={vstack({
          alignItems: 'flex-start',
          gap: '4',
          w: 'full',
        })}
      >
        {props.navList.map((item, idx) => (
          <li
            className={css({
              w: 'full',
            })}
            key={`${idx}:${item.label.toLowerCase()}`}
          >
            <MatchSideNavItem {...item} />
          </li>
        ))}
      </ul>
    </div>
  )
})
