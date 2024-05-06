'use client'

import { useMemo } from 'react'
import Link from 'next/link'
import { css } from '@/styled-system/css'
import { hstack } from '@/styled-system/patterns'
import navData from '@/app/data/navLinks.json'
import { LogoGithub } from '@cerberus-design/icons'
import { useThemeContext } from '../context/theme'

export function Nav() {
  const { mode, updateMode } = useThemeContext()
  const ariaLabel = useMemo(() => {
    return mode === 'light' ? 'Switch to dark mode' : 'Switch to light mode'
  }, [mode])

  return (
    <nav
      className={hstack({
        flexWrap: 'wrap',
        gap: '0',
        justify: 'center',
        md: {
          pxi: '6',
          py: '6',
          justifyContent: 'space-between',
        },
      })}
    >
      <div
        className={css({
          pxi: '4',
          py: '6',
          textAlign: 'center',
          w: 'full',
          md: {
            py: '4',
            w: 'auto',
          },
        })}
      >
        <Link
          href="/"
          className={css({
            textStyle: 'body-xl',
          })}
        >
          <strong>Cerberus </strong>
          Design System
        </Link>
      </div>

      <ul
        className={hstack({
          border: '1px solid',
          borderColor: 'neutral.border.initial',
          justify: 'space-evenly',
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

      <ul
        className={hstack({
          display: 'none',
          md: {
            display: 'flex',
          },
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
        <li>
          <button aria-label={ariaLabel} onClick={updateMode}>
            Theme
          </button>
        </li>
      </ul>
    </nav>
  )
}
