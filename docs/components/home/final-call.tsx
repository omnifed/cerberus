import { ArrowRight } from '@carbon/icons-react'
import Link from 'next/link'
import { css, cx } from 'styled-system/css'
import { button } from 'styled-system/recipes'
import { pool } from './beat'
import { InstallLine } from './install-line'
import { RevealHeading } from './reveal-heading'
import { container, fine, lead, textLink } from './styles'

/**
 * The close. The three streams have converged into one beam behind the
 * words, and there is one thing to do.
 */
export function FinalCall() {
  return (
    <section
      id="start"
      aria-labelledby="final-heading"
      data-pose="final"
      data-hud="Start"
      className={css({
        display: 'grid',
        gridTemplateRows: '1fr 1fr',
        minH: '100svh',
        pos: 'relative',
        '& > *': { pos: 'relative', zIndex: '1' },
        // Feather the ribbons into the footer's surface instead of cutting them off.
        _after: {
          bgGradient: 'to-b',
          bottom: '0',
          content: '""',
          gradientFrom: 'transparent',
          gradientTo: 'page.surface.initial',
          h: '40',
          insetInline: '0',
          pointerEvents: 'none',
          pos: 'absolute',
        },
      })}
    >
      {/* The beam converges on the line between these halves: the claim above, the action below. */}
      <div
        className={cx(
          container,
          css({
            alignItems: 'center',
            display: 'flex',
            flexDir: 'column',
            justifyContent: 'flex-end',
            pb: 'xl',
            pt: '4xl',
            textAlign: 'center',
          }),
        )}
      >
        <div className={css({ isolation: 'isolate', pos: 'relative' })}>
          <span aria-hidden className={cx(pool, css({ inset: '-18% -10%' }))} />
          <RevealHeading
            id="final-heading"
            className={css({
              color: 'page.text.initial',
              fontSize: 'clamp(3.25rem, 0.6rem + 10vw, min(13rem, 19svh))',
              fontWeight: 'bold',
              letterSpacing: '-0.055em',
              lineHeight: '0.86',
              textWrap: 'balance',
            })}
          >
            {'Three minds.\nOne workflow.'}
          </RevealHeading>
        </div>
      </div>
      <div
        className={cx(
          container,
          css({
            alignItems: 'center',
            display: 'flex',
            flexDir: 'column',
            gap: 'xl',
            pb: '3xl',
            pt: '2xl',
            textAlign: 'center',
          }),
        )}
      >
        <div
          className={css({
            isolation: 'isolate',
            maxW: '40rem',
            pos: 'relative',
          })}
        >
          <span aria-hidden className={cx(pool, css({ inset: '-60% -16%' }))} />
          <p
            className={cx(
              lead,
              css({ color: 'page.text.initial', mx: 'auto' }),
            )}
          >
            Install Cerberus today, and your designers, developers and agents
            share one language from the first prototype to the release.
          </p>
        </div>
        <div
          className={css({
            alignItems: 'stretch',
            display: 'flex',
            flexDir: 'column',
            gap: 'md',
            maxW: '44rem',
            w: 'full',
            sm: { alignItems: 'center', flexDir: 'row' },
          })}
        >
          <Link
            className={cx(
              button({ shape: 'sharp', size: 'lg' }),
              css({ flexShrink: 0, gap: 'sm' }),
            )}
            href="/docs/get-started/installation"
          >
            Get started
            <ArrowRight aria-hidden />
          </Link>
          <div className={css({ flex: '1', minW: '0' })}>
            <InstallLine command="npm install @cerberus-design/react" />
          </div>
        </div>
        <ul
          className={cx(
            fine,
            css({
              color: 'page.text.initial',
              columnGap: 'lg',
              display: 'flex',
              flexWrap: 'wrap',
              justifyContent: 'center',
              rowGap: 'sm',
            }),
          )}
        >
          <li>
            Agents:{' '}
            <a className={textLink} href="/llms.txt">
              /llms.txt
            </a>
          </li>
          <li>
            <a
              className={textLink}
              href="https://github.com/omnifed/cerberus"
              rel="noreferrer"
              target="_blank"
            >
              Star on GitHub
            </a>
          </li>
          <li>
            <Link className={textLink} href="/blog/cerberus-v2-release">
              What’s new in v2
            </Link>
          </li>
        </ul>
      </div>
    </section>
  )
}
