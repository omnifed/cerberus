'use client'

import { useCallback, useMemo, type MouseEvent } from 'react'
import Link, { type LinkProps } from 'next/link'
import { css } from 'styled-system/css'
import { grid, gridItem, hstack } from 'styled-system/patterns'
import navData from '@/app/data/navLinks.json'
import {
  IconButton,
  Show,
  Tooltip,
  useThemeContext,
  type ColorModes,
} from '@cerberus-design/react'
import { version } from '@cerberus-design/configs'
import { AnimatingSunIcon } from './icons/AnimatingSunIcon'
import { AnimatingMoonIcon } from './icons/AnimatingMoonIcon'
import { usePathname } from 'next/navigation'
import { focusStates } from '@cerberus-design/panda-preset'
import { INLINE_BLOCK, PAGE_BORDER_INITIAL } from '../utils/const'
import { getCodeTheme, getColorMode } from '../utils/colors'
import { AnimatingSystemIcon } from './icons/AnimatingSystemIcon'
import { NavGHLogoContent, NavLogoContent } from './shared/nav/icon-items'
import { ThemeMenu } from './shared/theme-menu'

export function Nav() {
  const pathname = usePathname()
  const { mode, theme, updateMode } = useThemeContext()
  const ariaLabel = useMemo(() => {
    switch (mode) {
      case 'light':
        return 'Switch to dark mode'
      case 'dark':
        return 'Switch to system mode'
      default:
        return 'Switch to light mode'
    }
  }, [mode])

  const handleUpdateMode = useCallback(
    (e: MouseEvent<HTMLButtonElement>) => {
      const currentMode = e.currentTarget.value as ColorModes
      const newMode = getColorMode(currentMode)
      updateMode(newMode)
      document.documentElement.dataset.codeTheme = getCodeTheme(newMode, theme)
    },
    [updateMode, theme],
  )

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
          gridTemplateColumns: '3.25rem 1fr 1fr',
          gridTemplateRows: '1fr',
          h: '3.75rem',
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

      <section
        className={gridItem({
          gridColumnStart: 1,
          gridColumnEnd: 4,
          gridRowStart: 2,
          gridRowEnd: 3,
          md: {
            gridColumnStart: 2,
            gridColumnEnd: 3,
            gridRowStart: 'initial',
            gridRowEnd: 'initial',
          },
        })}
      >
        <nav
          className={hstack({
            border: '1px solid',
            borderColor: PAGE_BORDER_INITIAL,
            listStyle: 'none',
            gap: '1px',
            w: 'full',
            md: {
              border: 'none',
              gap: 'initial',
              px: 'lg',
              w: 'auto',
            },
          })}
        >
          {navData.map((item) => (
            <li
              className={css({
                overflow: 'hidden',
                textAlign: 'center',
                w: {
                  base: '1/2',
                  md: 'auto',
                },
              })}
              key={item.id}
            >
              <Link
                aria-current={
                  pathname.includes(item.label.toLowerCase())
                    ? 'page'
                    : undefined
                }
                className={css({
                  display: INLINE_BLOCK,
                  fontSize: 'sm',
                  px: 'lg',
                  py: 'md',
                  transition: 'color 250ms ease-in-out',
                  w: 'full',
                  _hover: {
                    color: 'action.navigation.hover',
                  },
                  _currentPage: {
                    color: 'action.navigation.visited',
                    _focusVisible: focusStates._focusVisible,
                  },
                })}
                href={item.href as LinkProps<string>['href']}
                prefetch
              >
                {item.label}
              </Link>
            </li>
          ))}
        </nav>
      </section>

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
            <Tooltip content={ariaLabel}>
              <IconButton
                ariaLabel={ariaLabel}
                onClick={handleUpdateMode}
                value={mode}
              >
                <Show
                  when={mode === 'system'}
                  fallback={
                    <Show
                      when={mode === 'light'}
                      fallback={<AnimatingMoonIcon />}
                    >
                      <AnimatingSunIcon />
                    </Show>
                  }
                >
                  <AnimatingSystemIcon />
                </Show>
              </IconButton>
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
