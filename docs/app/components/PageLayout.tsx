import type { PropsWithChildren } from 'react'
import { grid, gridItem, scrollable } from 'styled-system/patterns'
import { markdown } from '../styles/markdown'
import { cx } from 'styled-system/css'
import OnThisPage from './OnThisPage'

const PAGE_MINUS_HEADER = '100dvh'

interface PageLayoutProps {}

export function PageLayout(props: PropsWithChildren<PageLayoutProps>) {
  return (
    <div
      className={grid({
        columns: 12,
        h: PAGE_MINUS_HEADER,
        overflowX: 'hidden',
        position: 'relative',
      })}
    >
      {props.children}
    </div>
  )
}

export function PageSideNav(props: PropsWithChildren<PageLayoutProps>) {
  return (
    <div
      className={cx(
        scrollable(),
        gridItem({
          h: PAGE_MINUS_HEADER,
          position: 'fixed',
          top: 0,
          left: 0,
          pt: '6rem',
          transform: 'translateX(-100%)',
          width: '12.5rem',
          md: {
            gridColumnStart: 1,
            gridColumnEnd: 3,
            h: 'initial',
            left: 'initial',
            pb: '4',
            position: 'initial',
            top: 'initial',
            transform: 'none',
            width: 'initial',
          },
        }),
      )}
    >
      {props.children}
    </div>
  )
}

export function PageMainContent(props: PropsWithChildren<PageLayoutProps>) {
  return (
    <div
      className={cx(
        scrollable({
          hideScrollbar: true,
        }),
        gridItem({
          gridColumnStart: 1,
          gridColumnEnd: 13,
          paddingBlockStart: '6rem',
          paddingBlockEnd: '9rem',
          md: {
            gridColumnStart: 3,
            gridColumnEnd: 11,
            pxi: '4',
          },
        }),
      )}
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
        pt: '6rem',
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

// Tabbed Layouts

export function TabPageContent(props: PropsWithChildren<PageLayoutProps>) {
  return (
    <div
      className={cx(
        scrollable(),
        gridItem({
          gridColumnStart: 1,
          gridColumnEnd: 13,
          py: '9rem',
          md: {
            gridColumnStart: 3,
            paddingInlineStart: '6',
            paddingInlineEnd: '8',
          },
        }),
      )}
    >
      {props.children}
    </div>
  )
}

export function TabPageContentSections(
  props: PropsWithChildren<PageLayoutProps>,
) {
  return (
    <div
      className={grid({
        columns: 12,
        position: 'relative',
      })}
    >
      {props.children}
    </div>
  )
}

export function TabPageDocContent(props: PropsWithChildren<PageLayoutProps>) {
  return (
    <div
      className={gridItem({
        gridColumnStart: 1,
        gridColumnEnd: 13,
        md: {
          gridColumnEnd: 11,
        },
      })}
    >
      <div className={markdown}>{props.children}</div>
    </div>
  )
}

export function TabPageOnThisPageContent(
  props: PropsWithChildren<PageLayoutProps>,
) {
  return (
    <div
      className={gridItem({
        display: 'none',
        gridColumnStart: 11,
        gridColumnEnd: 13,
        py: '20',
        md: {
          display: 'grid',
        },
      })}
    >
      {props.children}
    </div>
  )
}

export function TabPageContentLayout(
  props: PropsWithChildren<PageLayoutProps>,
) {
  return (
    <TabPageContentSections>
      <TabPageDocContent>{props.children}</TabPageDocContent>
      <TabPageOnThisPageContent>
        <OnThisPage />
      </TabPageOnThisPageContent>
    </TabPageContentSections>
  )
}
