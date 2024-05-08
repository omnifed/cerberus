'use client'

import { useMemo } from 'react'
import Link from 'next/link'
import { css } from '@/styled-system/css'
import { grid, gridItem, hstack } from '@/styled-system/patterns'
import navData from '@/app/data/navLinks.json'
import { LogoGithub } from '@cerberus-design/icons'
import { useThemeContext } from '@cerberus-design/react'
import { AnimatingSunIcon } from './icons/AnimatingSunIcon'
import { AnimatingMoonIcon } from './icons/AnimatingMoonIcon'

export function Nav() {
  const { mode, updateMode } = useThemeContext()
  const ariaLabel = useMemo(() => {
    return mode === 'light' ? 'Switch to dark mode' : 'Switch to light mode'
  }, [mode])

  return (
    <nav
      className={grid({
        alignItems: 'center',
        columns: 3,
        gridTemplateRows: '1fr 1fr',
        gap: '0',
        md: {
          gridTemplateRows: '1fr',
          pxi: '6',
          py: '6',
        },
      })}
    >
      <section
        className={gridItem({
          gridColumnStart: 1,
          gridColumnEnd: 2,
        })}
      >
        <Link
          href="/"
          className={css({
            pxi: '2',
            textStyle: 'body-xl',
          })}
        >
          <strong>Cerberus </strong>
          Design System
        </Link>
      </section>

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
            md: {
              border: 'none',
              w: 'auto',
            },
            '& li:nth-child(2)': {
              borderColor: 'neutral.border.initial',
              borderLeft: '1px solid',
              borderRight: '1px solid',
              md: {
                border: 'none',
              },
            },
          })}
        >
          {navData.map((item) => (
            <li
              className={css({
                textAlign: 'center',
                w: 'calc(100% / 3)',
              })}
              key={item.id}
            >
              <Link
                className={css({
                  display: 'inline-block',
                  p: '4',
                  w: 'full',
                })}
                href={item.href}
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
            gap: '4',
          })}
        >
          <li>
            <a
              aria-label="View Github repo"
              href="https://github.com/omnifed/cerberus"
              rel="noreferrer"
              target="_blank"
            >
              <LogoGithub aria-hidden size="1.5rem" />
            </a>
          </li>
          <li
            className={css({
              h: '1.5rem',
            })}
          >
            <button aria-label={ariaLabel} onClick={updateMode}>
              {mode === 'light' ? <AnimatingSunIcon /> : <AnimatingMoonIcon />}
            </button>
          </li>
        </ul>
      </section>
    </nav>
  )
}
