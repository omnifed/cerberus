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
      data-placement="bottom"
      className={grid({
        bgColor: 'page.surface.100',
        border: '1px solid',
        borderColor: PAGE_BORDER_INITIAL,
        alignItems: 'center',
        columns: 3,
        gridTemplateRows: '1fr 1fr',
        gap: '0',
        left: '1rem',
        opacity: 0,
        position: 'fixed',
        rounded: 'lg',
        right: '1rem',
        top: '1rem',
        zIndex: 'sticky',
        md: {
          gridTemplateColumns: '3.25rem 1fr 1fr',
          gridTemplateRows: '1fr',
          h: '3.75rem',
          left: 'md',
          pxi: '6',
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

          {navGHLogoContent}

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
