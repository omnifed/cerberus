'use client'

import { useMemo } from 'react'
import Link from 'next/link'
import { css } from '@cerberus/styled-system/css'
import { grid, gridItem, hstack } from '@cerberus/styled-system/patterns'
import navData from '@/app/data/navLinks.json'
import { LogoGithub } from '@cerberus-design/icons'
import { Show, useThemeContext } from '@cerberus-design/react'
import { version } from '@cerberus-design/configs'
import { AnimatingSunIcon } from './icons/AnimatingSunIcon'
import { AnimatingMoonIcon } from './icons/AnimatingMoonIcon'
import { usePathname } from 'next/navigation'
import { focusStates } from '@cerberus-design/panda-preset'

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
      href="/"
      className={css({
        pxi: '2',
        rounded: 'sm',
        textStyle: 'body-xl',
        _active: {
          color: 'neutral.text.initial',
        },
        _focusVisible: focusStates._focusVisible,
      })}
    >
      <strong>Cerberus </strong>
      Design System
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
        display: 'inline-block',
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
  const { mode, updateMode } = useThemeContext()
  const ariaLabel = useMemo(() => {
    return mode === 'light' ? 'Switch to dark mode' : 'Switch to light mode'
  }, [mode])

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
        zIndex: 'sticky',
        _lightMode: {
          bgColor: 'rgba(255, 255, 255, 0.5)',
        },
        _darkMode: {
          bgColor: 'rgba(19, 0, 36, 0.3);',
        },
        md: {
          gridTemplateRows: '1fr',
          pxi: '6',
          py: '6',
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
            borderColor: 'neutral.border.initial',
            gap: '0',
            w: 'full',
            '& li:nth-child(2)': {
              borderColor: 'neutral.border.initial',
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
                  display: 'inline-block',
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
                href={item.href}
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
                color: 'neutral.text.100',
                h: '1.5rem',
                pt: '1px',
                textStyle: 'body-xs',
              })}
            >
              {version}
            </p>
          </li>
          {navGHLogoContent}
          <li
            className={css({
              h: '1.5rem',
            })}
          >
            <button
              className={css({
                rounded: 'sm',
                _focusVisible: focusStates._focusVisible,
              })}
              aria-label={ariaLabel}
              onClick={updateMode}
            >
              <Show when={mode === 'light'} fallback={<AnimatingMoonIcon />}>
                <AnimatingSunIcon />
              </Show>
            </button>
          </li>
        </ul>
      </section>
    </nav>
  )
}
