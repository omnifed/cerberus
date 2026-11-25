'use client'

import { Tooltip } from '@cerberus-design/react'
import { version } from '@cerberus-design/react/package.json'
import { type LinkProps } from 'next/link'
import { css } from 'styled-system/css'
import { HStack } from 'styled-system/jsx'
import { grid, hstack } from 'styled-system/patterns'
import { APP_BAR_LINKS } from '../app-bar/links'
import { Search } from '../search'
import { FeatureLink } from './feature-link'
import { NavGHLogoContent, NavLogoContent } from './icon-items'
import { ModeMenu } from './mode-menu'
import { ThemeMenu } from './theme-menu'

const GET_STARTED_PATH = APP_BAR_LINKS.find(
  (link) => link.group === 'get-started',
)?.href as LinkProps<string>['href']

export function GlobalNav() {
  return (
    <header
      className={css({
        pos: 'sticky',
        top: '0',
        w: 'full',
        zIndex: 'sticky',
      })}
    >
      <nav
        aria-label="Main"
        className={grid({
          alignItems: 'center',
          backdropFilter: 'blur(2px)',
          bgColor: 'page.surface.100',
          boxShadow: 'sm',
          columnGap: 'md',
          gridTemplateColumns: 'auto minmax(0, 1fr) auto',
          h: 'var(--nav-height)',
          px: 'md',
          w: 'full',
          _motionSafe: {
            animationStyle: 'slide-fade-in',
            animationDuration: 'slow',
          },
          md: {
            columnGap: 'lg',
            px: 'lg',
          },
          lg: {
            columnGap: '2xl',
            gridTemplateColumns:
              'minmax(0, 1fr) minmax(0, 27.3rem) minmax(0, 1fr)',
            px: '2xl',
          },
        })}
      >
        <HStack gap="md">
          <NavLogoContent />
          <ul
            className={hstack({
              gap: 'lg',
              px: 'xs',
              md: { px: 'md' },
            })}
          >
            <li>
              <FeatureLink href={GET_STARTED_PATH}>Docs</FeatureLink>
            </li>
            <li>
              <FeatureLink href="/blog">Blog</FeatureLink>
            </li>
          </ul>
        </HStack>

        <HStack justify="center" minW="0">
          <Search />
        </HStack>

        <ul
          className={hstack({
            gap: 'sm',
            justifySelf: 'end',
          })}
        >
          <li
            className={css({
              color: 'page.text.200',
              display: 'none',
              fontVariantNumeric: 'tabular-nums',
              textStyle: 'label-sm',
              md: { display: 'block', pe: 'xs' },
            })}
          >
            <span className={css({ srOnly: true })}>Current version </span>v
            {version}
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
      </nav>
    </header>
  )
}
