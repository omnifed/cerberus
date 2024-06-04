import { css } from '@cerberus/styled-system/css'
import { vstack } from '@cerberus/styled-system/patterns'
import { type PropsWithChildren, memo } from 'react'
import MatchSideNavItem from './MatchSideNavItem'

export type NavList = (HeadingItem | LinkItem)[]
type SideNavType = 'heading' | 'route'

interface SideNavItem {
  id: string
  label: string
  type: SideNavType
}

export interface HeadingItem extends SideNavItem {
  type: 'heading'
}

export interface LinkItem extends SideNavItem {
  route: string
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
        borderColor: 'neutral.border.100',
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
        {props.navList.map((item) => (
          <li
            className={css({
              w: 'full',
            })}
            key={item.id}
          >
            <MatchSideNavItem {...item} />
          </li>
        ))}
      </ul>
    </div>
  )
})
