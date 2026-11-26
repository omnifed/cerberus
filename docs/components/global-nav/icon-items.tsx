import { css } from '@/styled-system/css'
import { LogoGithub } from '@carbon/icons-react'
import { IconButton } from '@cerberus-design/react'
import { focusStates } from '@cerberus/panda-preset'
import Link from 'next/link'
import { CerberusLogo } from '../logos/cerberus'

export function NavLogoContent() {
  return (
    <Link
      aria-label="Cerberus home"
      className={css({
        display: 'inline-flex',
        alignItems: 'center',
        h: '10',
        rounded: 'sm',
        w: '12',
        _focusVisible: focusStates._focusVisible,
      })}
      href="/"
    >
      <CerberusLogo />
    </Link>
  )
}

export function NavGHLogoContent() {
  return (
    <li>
      <IconButton
        ariaLabel="Cerberus on GitHub"
        asChild
        size="lg"
        usage="ghost"
      >
        <a
          href="https://github.com/omnifed/cerberus"
          rel="noreferrer"
          target="_blank"
        >
          <LogoGithub aria-hidden />
        </a>
      </IconButton>
    </li>
  )
}
