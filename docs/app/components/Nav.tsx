'use client'

import { useCallback, useMemo, type MouseEvent } from 'react'
import Link, { type LinkProps } from 'next/link'
import { css, cx } from 'styled-system/css'
import { grid, gridItem, hstack } from 'styled-system/patterns'
import navData from '@/app/data/navLinks.json'
import { LogoGithub } from '@carbon/icons-react'
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
import { button } from 'styled-system/recipes'
import { DogIcon } from './icons/DogIcon'
import { FireIcon } from './icons/FireIcon'
import { getTheme, injectTheme, type ThemeName } from 'styled-system/themes'
import { INLINE_BLOCK, PAGE_BORDER_INITIAL } from '../utils/const'
import { getCodeTheme, getColorMode } from '../utils/colors'
import { AnimatingSystemIcon } from './icons/AnimatingSystemIcon'
import CerberusLogo from './cerberus-logo'

const navLogoContent = (
  <section
    className={gridItem({
      gridColumnStart: 1,
      gridColumnEnd: 3,
      md: {
        gridColumnStart: 1,
        gridColumnEnd: 2,
      },
    })}
  >
    <Link
      aria-label="Go to homepage"
      href="/"
      className={css({
        display: 'inline-block',
        pxi: '2',
        rounded: 'sm',
        w: '3.25rem',
        _focusVisible: focusStates._focusVisible,
      })}
    >
      <CerberusLogo />
    </Link>
  </section>
)
const navGHLogoContent = (
  <li
    className={css({
      h: '1.5rem',
    })}
  >
    <a
      aria-label="View Github repo"
      className={css({
        display: INLINE_BLOCK,
        rounded: 'sm',
        _focusVisible: focusStates._focusVisible,
      })}
      href="https://github.com/omnifed/cerberus"
      rel="noreferrer"
      target="_blank"
    >
      <LogoGithub aria-hidden size="1.5rem" />
    </a>
  </li>
)

export function Nav() {
  const pathname = usePathname()
  const { mode, theme, updateMode, updateTheme } = useThemeContext()
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

  const handleUpdateTheme = useCallback(
    async (e: MouseEvent<HTMLButtonElement>) => {
      const currentTheme = e.currentTarget.value
      const newTheme = currentTheme === 'cerberus' ? 'acheron' : 'cerberus'
      updateTheme(newTheme)
      document.documentElement.dataset.codeTheme = getCodeTheme(mode, newTheme)
      const pandaTheme = await getTheme(newTheme as ThemeName)
      injectTheme(document.documentElement, pandaTheme)
    },
    [updateTheme, mode],
  )

  return (
    <nav
      className={grid({
        backdropFilter: 'blur(20px)',
        backdropBlur: 'md',
        alignItems: 'center',
        columns: 3,
        gridTemplateRows: '1fr 1fr',
        gap: '0',
        position: 'fixed',
        top: '0',
        w: 'full',
        zIndex: 'banner',
        _lightMode: {
          bgColor: 'rgba(255, 255, 255, 0.3)',
        },
        _darkMode: {
          bgColor: 'page.backdrop.initial',
        },
        md: {
          gridTemplateRows: '1fr',
          h: '3.75rem',
          pxi: '6',
        },
      })}
    >
      {navLogoContent}

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
        <ul
          className={hstack({
            border: '1px solid',
            borderColor: PAGE_BORDER_INITIAL,
            gap: '0',
            w: 'full',
            '& li:nth-child(2)': {
              borderColor: PAGE_BORDER_INITIAL,
              borderLeft: '1px solid',
              borderRight: '1px solid',
              md: {
                border: 'none',
              },
            },
            md: {
              border: 'none',
              w: 'auto',
            },
          })}
        >
          {navData.map((item) => (
            <li
              className={css({
                overflow: 'hidden',
                textAlign: 'center',
                w: 'calc(100% / 3)',
              })}
              key={item.id}
            >
              <Link
                aria-current={pathname.includes(item.href) ? 'page' : undefined}
                className={css({
                  display: INLINE_BLOCK,
                  p: '4',
                  position: 'relative',
                  transition: 'color 250ms ease-in-out',
                  w: 'full',
                  _hover: {
                    color: 'action.navigation.hover',
                  },
                  _after: {
                    bg: 'transparent',
                    bottom: '0',
                    content: '""',
                    h: '4px',
                    left: '0',
                    position: 'absolute',
                    transition: 'transform 250ms ease-in-out',
                    transform: 'translate3d(0, 4px, 0)',
                    w: 'full',
                  },
                  _currentPage: {
                    color: 'action.navigation.visited',
                    _after: {
                      bgGradient: 'to-l',
                      gradientFrom: 'action.navigation.initial',
                      gradientTo: 'action.navigation.visited',
                      bottom: '0',
                      content: '""',
                      h: '4px',
                      left: '0',
                      position: 'absolute',
                      transform: 'translate3d(0, 0, 0)',
                      w: 'full',
                    },
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
        </ul>
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
                h: '1.5rem',
                pt: '1px',
                textStyle: 'body-xs',
              })}
            >
              {version}
            </p>
          </li>

          {navGHLogoContent}

          <li>
            <Tooltip content={ariaLabel} asChild>
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
            <button
              className={cx(
                css({
                  bgColor: 'page.bg.100',
                  border: '1px solid',
                  borderColor: PAGE_BORDER_INITIAL,
                  fontWeight: 500,
                  h: '2.275rem',
                  rounded: 'sm',
                  textStyle: 'label-sm',
                  textTransform: 'capitalize',
                  _hover: {
                    bgColor: 'page.bg.200',
                  },
                }),
                button({
                  palette: 'secondaryAction',
                  shape: 'rounded',
                  size: 'sm',
                  usage: 'outlined',
                }),
              )}
              onClick={handleUpdateTheme}
              value={theme}
            >
              <Show when={theme === 'cerberus'} fallback={<FireIcon />}>
                <DogIcon />
              </Show>
              {theme}
            </button>
          </li>
        </ul>
      </section>
    </nav>
  )
}
