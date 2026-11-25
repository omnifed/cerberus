import { ArrowRight } from '@carbon/icons-react'
import Link from 'next/link'
import { css, cx } from 'styled-system/css'
import { button } from 'styled-system/recipes'
import { InstallLine } from './descent/install-line'

const REGISTRIES = [
  {
    label: 'npm',
    href: 'https://www.npmjs.com/package/@cerberus-design/react',
  },
  { label: 'JSR', href: 'https://jsr.io/@cerberus/panda-preset' },
  { label: 'GitHub', href: 'https://github.com/omnifed/cerberus' },
]

/** The page's close: install it, or start the guide. */
export function HomeClose() {
  return (
    <section
      aria-labelledby="home-close-heading"
      className={css({
        bgColor: 'page.surface.100',
        borderBlock: '1px solid',
        borderColor: 'page.border.initial',
      })}
    >
      <div
        className={css({
          display: 'grid',
          gap: '2xl',
          mx: 'auto',
          maxW: '90rem',
          px: 'md',
          py: '4xl',
          md: { px: 'xl' },
          lg: {
            alignItems: 'end',
            gridTemplateColumns: 'minmax(0, 1fr) minmax(0, 1fr)',
            px: '2xl',
          },
        })}
      >
        <div className={css({ display: 'flex', flexDir: 'column', gap: 'md' })}>
          <h2
            id="home-close-heading"
            className={css({
              color: 'page.text.initial',
              textStyle: 'display-sm',
              textWrap: 'balance',
            })}
          >
            Start your descent.
          </h2>
          <p
            className={css({
              color: 'page.text.200',
              maxW: '52ch',
              textStyle: 'body-lg',
            })}
          >
            Install the components, point Panda at the preset, and hand your
            agents the same guides you read.
          </p>
        </div>

        <div className={css({ display: 'flex', flexDir: 'column', gap: 'md' })}>
          <InstallLine command="npm install @cerberus-design/react" />
          <div
            className={css({
              alignItems: 'center',
              display: 'flex',
              flexWrap: 'wrap',
              gap: 'lg',
            })}
          >
            <Link
              className={cx(button({ shape: 'sharp' }), css({ gap: 'sm' }))}
              href="/docs/get-started/installation"
            >
              Read the install guide
              <ArrowRight aria-hidden />
            </Link>
            <ul
              aria-label="Find Cerberus on"
              className={css({ display: 'flex', gap: 'md' })}
            >
              {REGISTRIES.map((r) => (
                <li key={r.label}>
                  <a
                    href={r.href}
                    rel="noreferrer"
                    target="_blank"
                    className={css({
                      color: 'action.navigation.initial',
                      rounded: 'xs',
                      textDecoration: 'underline',
                      textStyle: 'label-md',
                      textUnderlineOffset: '0.2em',
                      _hover: { color: 'action.navigation.hover' },
                      _focusVisible: { focusVisibleRing: 'outside' },
                    })}
                  >
                    {r.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
