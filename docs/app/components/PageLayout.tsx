import type { PropsWithChildren } from 'react'
import { grid, gridItem } from '@/styled-system/patterns'
import { markdown } from '../styles/markdown'

interface PageLayoutProps {}

export function PageLayout(props: PropsWithChildren<PageLayoutProps>) {
  return (
    <div
      className={grid({
        columns: 12,
        overflowX: 'hidden',
        position: 'relative',
        pt: '12',
        md: {
          overflowX: 'initial',
        },
      })}
    >
      {props.children}
    </div>
  )
}

export function PageSideNav(props: PropsWithChildren<PageLayoutProps>) {
  return (
    <div
      className={gridItem({
        h: '100dvh',
        position: 'fixed',
        top: 0,
        left: 0,
        transform: 'translateX(-100%)',
        width: '12.5rem',
        md: {
          gridColumnStart: 1,
          gridColumnEnd: 3,
          h: 'initial',
          left: 'initial',
          position: 'initial',
          top: 'initial',
          transform: 'none',
          width: 'initial',
        },
      })}
    >
      {props.children}
    </div>
  )
}

export function PageMainContent(props: PropsWithChildren<PageLayoutProps>) {
  return (
    <div
      className={gridItem({
        gridColumnStart: 1,
        gridColumnEnd: 13,
        md: {
          gridColumnStart: 3,
          gridColumnEnd: 11,
          pxi: '4',
        },
      })}
    >
      <div className={markdown}>{props.children}</div>
    </div>
  )
}

export function PageSections(props: PropsWithChildren<PageLayoutProps>) {
  return (
    <div
      className={gridItem({
        display: 'none',
        md: {
          display: 'block',
          gridColumnStart: 11,
          gridColumnEnd: 13,
        },
      })}
    >
      {props.children}
    </div>
  )
}
