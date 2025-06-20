import { css } from '@/styled-system/css'
import { gridItem } from '@/styled-system/patterns'
import Link from 'next/link'
import CerberusLogo from '../../cerberus-logo'
import { focusStates } from '@cerberus-design/panda-preset'
import { INLINE_BLOCK } from '@/app/utils/const'
import { LogoGithub } from '@carbon/icons-react'
import { cerberus } from '@cerberus-design/react'

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
const navGHLogoContent = (
  <cerberus.li
    css={{
      h: '1.5rem',
    }}
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
  </cerberus.li>
)

export function NavLogoContent() {
  return navLogoContent
}
export function NavGHLogoContent() {
  return navGHLogoContent
}
