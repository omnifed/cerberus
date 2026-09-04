import { css } from '@/styled-system/css'
import { gridItem } from '@/styled-system/patterns'
import { LogoGithub } from '@carbon/icons-react'
import { cerberus } from '@cerberus-design/react'
import { focusStates } from '@cerberus/panda-preset'
import Link from 'next/link'
import { CerberusLogo } from '../logos/cerberus'

export function NavLogoContent() {
  return (
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
        className={css({
          display: 'inline-block',
          pxi: '2',
          rounded: 'sm',
          w: '3.25rem',
          _focusVisible: focusStates._focusVisible,
        })}
        href="/"
      >
        <CerberusLogo />
      </Link>
    </section>
  )
}

export function NavGHLogoContent() {
  return (
    <cerberus.li
      css={{
        h: '1.5rem',
      }}
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
    </cerberus.li>
  )
}
