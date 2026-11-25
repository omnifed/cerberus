import { version } from '@cerberus-design/react/package.json'
import type { Route } from 'next'
import Link from 'next/link'
import { css } from 'styled-system/css'
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

const linkStyles = css({
  color: 'page.text.200',
  rounded: 'xs',
  textStyle: 'body-sm',
  textDecoration: 'none',
  _hover: {
    color: 'page.text.initial',
    textDecoration: 'underline',
    textUnderlineOffset: '0.2em',
  },
  _focusVisible: { focusVisibleRing: 'outside' },
})

/** The site footer: navigation, ownership, and the fine print. */
// The site is statically generated, so the year is set when it is built.
const YEAR = new Date().getFullYear()

export function SiteFooter() {
  return (
    <footer
      className={css({
        bgColor: 'page.surface.initial',
        borderTop: '1px solid',
        borderColor: 'page.border.initial',
      })}
    >
      <div
        className={css({
          mx: 'auto',
          maxW: '90rem',
          px: 'md',
          pt: '3xl',
          md: { px: 'xl' },
          lg: { px: '2xl' },
        })}
      >
        <div
          className={css({
            display: 'grid',
            gap: '2xl',
            gridTemplateColumns: 'repeat(2, minmax(0, 1fr))',
            lg: {
              gridTemplateColumns: 'minmax(0, 1.6fr) repeat(4, minmax(0, 1fr))',
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
                w: '12',
                _focusVisible: { focusVisibleRing: 'outside' },
              })}
            >
              <CerberusLogo />
            </Link>
            <p
              className={css({
                color: 'page.text.initial',
                textStyle: 'heading-xs',
              })}
            >
              Cerberus UI Platform
            </p>
            <p
              className={css({
                color: 'page.text.200',
                maxW: '32ch',
                textStyle: 'body-sm',
              })}
            >
              Improving React development for humans and agents.
            </p>
            <a
              href="https://omnifederal.com"
              rel="noreferrer"
              target="_blank"
              className={css({
                alignItems: 'center',
                color: 'page.text.100',
                display: 'inline-flex',
                gap: 'sm',
                mt: 'sm',
                rounded: 'xs',
                textStyle: 'label-sm',
                w: 'fit',
                _focusVisible: { focusVisibleRing: 'outside' },
              })}
            >
              Maintained by
              <img
                alt="Omnifederal"
                className={css({
                  h: '6',
                  w: 'auto',
                  _dark: { display: 'none' },
                  _system: { _osDark: { display: 'none' } },
                })}
                decoding="async"
                height={190}
                src="/brand/omnifederal-logo-dark.webp"
                width={768}
              />
              <img
                alt="Omnifederal"
                className={css({
                  display: 'none',
                  h: '6',
                  w: 'auto',
                  _dark: { display: 'block' },
                  _system: { _osDark: { display: 'block' } },
                })}
                decoding="async"
                height={220}
                src="/brand/omnifederal-logo-light.webp"
                width={768}
              />
            </a>
          </div>

          {COLUMNS.map((column) => (
            <nav key={column.title} aria-labelledby={`footer-${column.title}`}>
              <h2
                id={`footer-${column.title}`}
                className={css({
                  color: 'page.text.initial',
                  mb: 'md',
                  textStyle: 'label-md',
                  fontWeight: 'semibold',
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

        <div
          className={css({
            borderTop: '1px solid',
            borderColor: 'page.border.initial',
            color: 'page.text.100',
            display: 'flex',
            flexDir: 'column',
            gap: 'sm',
            mt: '3xl',
            py: 'lg',
            textStyle: 'label-sm',
            md: {
              alignItems: 'center',
              flexDir: 'row',
              justifyContent: 'space-between',
            },
          })}
        >
          <p>© {YEAR} Omnifederal, LLC. All rights reserved.</p>
          <p>Built by demons of the Underworld</p>
          <p className={css({ fontVariantNumeric: 'tabular-nums' })}>
            v{version}
          </p>
        </div>
      </div>
    </footer>
  )
}
