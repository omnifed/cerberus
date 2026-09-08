'use client'

import { Tooltip } from '@cerberus-design/react'
import { version } from '@cerberus-design/react/package.json'
import { type LinkProps } from 'next/link'
import { css } from 'styled-system/css'
import { Center, GridItem, HStack } from 'styled-system/jsx'
import { grid, gridItem, hstack } from 'styled-system/patterns'
import { APP_BAR_LINKS } from '../app-bar/links'
import { Search } from '../search'
import { FeatureLink } from './feature-link'
import { NavGHLogoContent, NavLogoContent } from './icon-items'
import { ModeMenu } from './mode-menu'
import { ThemeMenu } from './theme-menu'

const GET_STARTED_PATH = APP_BAR_LINKS.find((link) => link.group === 'get-started')
  ?.href as LinkProps<string>['href']

export function GlobalNav() {
  return (
    <nav
      data-placement="bottom"
      className={grid({
        bgColor: 'page.surface.100',
        border: '1px solid',
        borderColor: 'page.border.initial',
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
          gridTemplateColumns: '20rem 1fr 20rem',
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
      <GridItem gridColumnStart="1" gridColumnEnd="2">
        <HStack gap="lg">
          <NavLogoContent />
          <FeatureLink href={GET_STARTED_PATH}>Docs</FeatureLink>
          <FeatureLink href="/blog">Blog</FeatureLink>
        </HStack>
      </GridItem>

      <GridItem gridColumnStart="2" gridColumnEnd="3">
        <Center>
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
