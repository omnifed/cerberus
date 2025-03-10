import { vstack } from '@cerberus-design/styled-system/patterns'
import { css } from 'styled-system/css'
import Link from 'next/link'
import PawIcon from './components/icons/paw-icon'
import { button } from '@cerberus-design/styled-system/recipes'

export default function NotFound() {
  return (
    <div
      className={vstack({
        justify: 'center',
        h: '100dvh',
        pxi: '6',
        textAlign: 'center',
      })}
    >
      <span
        className={css({
          color: 'page.surface.100',
          maxW: '12rem',
          mb: 6,
          w: '1/3',
          lg: {
            mb: 10,
          },
        })}
      >
        <PawIcon />
      </span>

      <h2
        className={css({
          textStyle: 'h1',
        })}
      >
        Away from post
      </h2>
      <p
        className={css({
          color: 'page.text.100',
          maxW: '66ch',
          pb: 8,
          textWrap: 'pretty',
        })}
      >
        We couldn&apos;t find Cerberus...or the page you are trying to reach.
      </p>

      <Link className={button()} href="/">
        Return from whence you came
      </Link>
    </div>
  )
}
