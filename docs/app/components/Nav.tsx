'use client'

import navData from '@/app/data/navLinks.json'
import { version } from '@cerberus-design/configs'
import { Tooltip } from '@cerberus-design/react'
import { focusStates } from '@cerberus/panda-preset'
import Link, { type LinkProps } from 'next/link'
import { usePathname } from 'next/navigation'
import { css } from 'styled-system/css'
import { Center, GridItem } from 'styled-system/jsx'
import { grid, gridItem, hstack } from 'styled-system/patterns'
import { INLINE_BLOCK, PAGE_BORDER_INITIAL } from '../utils/const'
import { ModeMenu } from './shared/mode-menu'
import { NavGHLogoContent, NavLogoContent } from './shared/nav/icon-items'
import { Search } from './shared/nav/search'
import { ThemeMenu } from './shared/theme-menu'

export function Nav() {
  const pathname = usePathname()

  return (
    <nav
      data-placement="bottom"
      className={grid({
        bgColor: 'page.surface.100',
        border: '1px solid',
        borderColor: PAGE_BORDER_INITIAL,
        alignItems: 'center',
        columns: 3,
        gridTemplateRows: '1fr 1fr',
        gap: '0',
        left: 'md',
        opacity: 0,
        position: 'sticky',
        rounded: 'lg',
        right: 'md',
        top: 'md',
        zIndex: 'sticky',
        md: {
          gridTemplateColumns: '3.25rem 1fr 20rem',
          gridTemplateRows: 'initial',
          h: '3.75rem',
          gap: 'lg',
          justifyContent: 'space-between',
          left: 'md',
          px: '6',
          w: 'calc(100% - 2rem)',
          _motionSafe: {
            animationStyle: 'slide-fade-in',
            animationDuration: 'slowest',
            animationDelay: '800ms',
            animationFillMode: 'forwards',
          },
          _motionReduce: {
            animation: 'none',
            opacity: 1,
          },
        },
      })}
    >
      <NavLogoContent />

      <GridItem gridColumnStart="2" gridColumnEnd="3">
        <Center ms="16rem">
          <Search />
        </Center>
      </GridItem>

      <section
        className={gridItem({
          gridColumnStart: 3,
          gridColumnEnd: 4,
          gridRowStart: 1,
          gridRowEnd: 2,
          paddingInlineEnd: '2',
          justifySelf: 'end',
          md: {
            gridColumnStart: 3,
            gridColumnEnd: 4,
            gridRowStart: 1,
            gridRowEnd: 2,
          },
        })}
      >
        <ul
          className={hstack({
            gap: '6',
          })}
        >
          <li>
            <p
              className={css({
                color: 'page.text.100',
                fontSize: 'sm',
                h: '1.5rem',
                pt: '1px',
              })}
            >
              {version}
            </p>
          </li>

          <NavGHLogoContent />

          <li>
            <Tooltip content="Switch mode">
              <ModeMenu />
            </Tooltip>
          </li>

          <li>
            <ThemeMenu />
          </li>
        </ul>
      </section>
    </nav>
  )
}
