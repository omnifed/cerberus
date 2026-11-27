import { ArrowRight, ArrowUpRight } from '@carbon/icons-react'
import { version } from '@cerberus-design/react/package.json'
import type { Route } from 'next'
import Link from 'next/link'
import { css, cx } from 'styled-system/css'
import { button } from 'styled-system/recipes'
import { FooterHorizon } from './footer-horizon'
import { CerberusLogo } from './logos/cerberus'

interface FooterLink {
  label: string
  href: string
  external?: boolean
}

const COLUMNS: { title: string; links: FooterLink[] }[] = [
  {
    title: 'Product',
    links: [
      { label: 'Components', href: '/docs/components/overview' },
      { label: 'Data Grid', href: '/docs/data-grid/overview' },
      { label: 'Signals', href: '/docs/signals/overview' },
      { label: 'Theming', href: '/docs/theming/overview' },
      { label: 'Styling', href: '/docs/styling/cerberus-factory' },
    ],
  },
  {
    title: 'Resources',
    links: [
      { label: 'Get started', href: '/docs/get-started/installation' },
      { label: 'Migrate to v2', href: '/blog/cerberus-v2-release' },
      { label: 'Blog and releases', href: '/blog' },
      { label: 'Docs for agents', href: '/docs/get-started/llms' },
      { label: 'llms.txt', href: '/llms.txt' },
    ],
  },
  {
    title: 'Community',
    links: [
      {
        label: 'GitHub',
        href: 'https://github.com/omnifed/cerberus',
        external: true,
      },
      {
        label: 'Report an issue',
        href: 'https://github.com/omnifed/cerberus/issues',
        external: true,
      },
      {
        label: 'npm',
        href: 'https://www.npmjs.com/package/@cerberus-design/react',
        external: true,
      },
      {
        label: 'JSR',
        href: 'https://jsr.io/@cerberus/panda-preset',
        external: true,
      },
      { label: 'Contributing', href: '/docs/get-started/contributing' },
    ],
  },
  {
    title: 'Trust',
    links: [
      { label: 'Accessibility', href: '/accessibility' },
      {
        label: 'License',
        href: 'https://github.com/omnifed/cerberus/blob/main/LICENSE',
        external: true,
      },
      { label: 'FAQ', href: '/docs/get-started/faq' },
    ],
  },
]

// The site is statically generated, so the year is set when it is built.
const YEAR = new Date().getFullYear()

// An underline that draws in from the left on hover and focus.
const linkStyles = css({
  backgroundImage: 'linear-gradient(currentColor, currentColor)',
  backgroundPosition: '0 100%',
  backgroundRepeat: 'no-repeat',
  backgroundSize: '0% 1px',
  color: 'page.text.200',
  pb: '0.5',
  rounded: 'xs',
  textDecoration: 'none',
  textStyle: 'body-md',
  transitionDuration: 'normal',
  transitionProperty: 'background-size, color',
  transitionTimingFunction: 'cubic-bezier(0.22, 1, 0.36, 1)',
  _hover: { backgroundSize: '100% 1px', color: 'page.text.initial' },
  _focusVisible: {
    backgroundSize: '100% 1px',
    color: 'page.text.initial',
    focusVisibleRing: 'outside',
  },
})

/** A rule that fades out at both ends instead of stopping hard at the frame. */
const softRule = css({
  backgroundImage:
    'linear-gradient(to right, transparent, token(colors.page.border.initial) 14%, token(colors.page.border.initial) 86%, transparent)',
  h: '1px',
  opacity: 0.8,
})

const fine = css({ color: 'page.text.100', textStyle: 'label-sm' })

/**
 * The site footer. The page ends on a horizon: the three-color seam and the
 * light it casts. Under it, a last word and a way in, the whole map, and the
 * fine print, set quietly.
 */
export function SiteFooter() {
  return (
    <footer
      data-world-cover
      className={css({
        bgColor: 'page.surface.initial',
        color: 'page.text.initial',
        isolation: 'isolate',
        overflow: 'hidden',
        pos: 'relative',
      })}
    >
      <FooterHorizon />

      <div
        className={css({
          mx: 'auto',
          maxW: '90rem',
          pos: 'relative',
          px: 'md',
          md: { px: 'xl' },
          lg: { px: '4xl' },
        })}
      >
        <div
          className={css({
            alignItems: 'end',
            display: 'grid',
            gap: '2xl',
            gridTemplateColumns: 'minmax(0, 1fr)',
            pb: '3xl',
            pt: '4xl',
            lg: {
              gridTemplateColumns: 'minmax(0, 7fr) minmax(0, 5fr)',
              pb: '4xl',
              pt: '32',
            },
          })}
        >
          <p
            className={css({
              fontSize: 'clamp(2.25rem, 1rem + 3.4vw, 4.5rem)',
              fontWeight: 'semibold',
              letterSpacing: '-0.035em',
              lineHeight: '1.02',
              maxW: '16ch',
              textWrap: 'balance',
            })}
          >
            Built in the open, for every mind on the team.
          </p>
          <div
            className={css({ display: 'flex', flexDir: 'column', gap: 'lg' })}
          >
            <p
              className={css({
                color: 'page.text.200',
                maxW: '36ch',
                textStyle: 'body-md',
                textWrap: 'pretty',
              })}
            >
              Designers, developers and agents, on one workflow. Start with the
              React package, or point your agent at{' '}
              <a className={linkStyles} href="/llms.txt">
                /llms.txt
              </a>
              .
            </p>
            <div
              className={css({ display: 'flex', flexWrap: 'wrap', gap: 'md' })}
            >
              <Link
                className={cx(
                  button({ shape: 'sharp', size: 'lg' }),
                  css({ gap: 'sm' }),
                )}
                href="/docs/get-started/installation"
              >
                Get started
                <ArrowRight aria-hidden />
              </Link>
              <a
                className={cx(
                  button({ shape: 'sharp', size: 'lg', usage: 'ghost' }),
                  css({ gap: 'sm' }),
                )}
                href="https://github.com/omnifed/cerberus"
                rel="noreferrer"
                target="_blank"
              >
                Star on GitHub
                <ArrowUpRight aria-hidden />
              </a>
            </div>
          </div>
        </div>

        <div aria-hidden className={softRule} />

        <div
          className={css({
            display: 'grid',
            gap: '2xl',
            gridTemplateColumns: 'repeat(2, minmax(0, 1fr))',
            py: '3xl',
            md: { gridTemplateColumns: 'repeat(4, minmax(0, 1fr))' },
            lg: {
              gridTemplateColumns: 'minmax(0, 4fr) repeat(4, minmax(0, 2fr))',
              py: '4xl',
            },
          })}
        >
          <div
            className={css({
              display: 'flex',
              flexDir: 'column',
              gap: 'md',
              gridColumn: '1 / -1',
              lg: { gridColumn: 'auto', pr: '2xl' },
            })}
          >
            <Link
              href="/"
              aria-label="Cerberus home"
              className={css({
                display: 'inline-flex',
                rounded: 'sm',
                w: '10',
                _focusVisible: { focusVisibleRing: 'outside' },
              })}
            >
              <CerberusLogo />
            </Link>
            <p
              className={css({
                color: 'page.text.200',
                maxW: '30ch',
                textStyle: 'body-sm',
              })}
            >
              One workflow for designers, developers and agents to ship product.
            </p>
          </div>

          {COLUMNS.map((column) => (
            <nav key={column.title} aria-labelledby={`footer-${column.title}`}>
              <h2
                id={`footer-${column.title}`}
                className={css({
                  color: 'page.text.100',
                  mb: 'md',
                  textStyle: 'label-sm',
                })}
              >
                {column.title}
              </h2>
              <ul
                className={css({
                  display: 'flex',
                  flexDir: 'column',
                  gap: 'sm',
                })}
              >
                {column.links.map((link) => (
                  <li key={link.label}>
                    {link.external ? (
                      <a
                        className={linkStyles}
                        href={link.href}
                        rel="noreferrer"
                        target="_blank"
                      >
                        {link.label}
                      </a>
                    ) : (
                      <Link className={linkStyles} href={link.href as Route}>
                        {link.label}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>

        <div aria-hidden className={softRule} />

        <div
          className={css({
            alignItems: 'center',
            display: 'flex',
            flexWrap: 'wrap',
            gap: 'md',
            justifyContent: 'space-between',
            py: 'xl',
          })}
        >
          <a
            href="https://omnifederal.com"
            rel="noreferrer"
            target="_blank"
            className={cx(
              fine,
              css({
                alignItems: 'center',
                display: 'inline-flex',
                gap: 'sm',
                rounded: 'xs',
                _focusVisible: { focusVisibleRing: 'outside' },
              }),
            )}
          >
            <span>© {YEAR} Omnifederal, LLC</span>
            <img
              alt=""
              className={css({
                h: '5',
                w: 'auto',
                _dark: { display: 'none' },
                _system: { _osDark: { display: 'none' } },
              })}
              decoding="async"
              height={190}
              loading="lazy"
              src="/brand/omnifederal-logo-dark.webp"
              width={768}
            />
            <img
              alt=""
              className={css({
                display: 'none',
                h: '5',
                w: 'auto',
                _dark: { display: 'block' },
                _system: { _osDark: { display: 'block' } },
              })}
              decoding="async"
              height={220}
              loading="lazy"
              src="/brand/omnifederal-logo-light.webp"
              width={768}
            />
          </a>
          <p className={cx(fine, css({ fontStyle: 'italic' }))}>
            Built by demons of the Underworld
          </p>
          <p
            className={cx(
              fine,
              css({
                alignItems: 'center',
                display: 'inline-flex',
                fontVariantNumeric: 'tabular-nums',
                gap: 'sm',
              }),
            )}
          >
            <span
              aria-hidden
              className={css({
                bgColor: 'success.bg.initial',
                h: '1.5',
                rounded: 'full',
                w: '1.5',
              })}
            />
            v{version} · Section 508 compliant
          </p>
        </div>
      </div>
    </footer>
  )
}
