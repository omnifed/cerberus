import { css, cx } from 'styled-system/css'
import { InstallLine } from './install-line'
import { RevealHeading } from './reveal-heading'
import { container, displayStatement, lead, textLink } from './styles'

interface Entry {
  name: string
  does: string
  registry: 'npm' | 'JSR'
  href: string
  command: string
}

const ENTRIES: Entry[] = [
  {
    name: '@cerberus-design/react',
    does: 'Accessible React components on Ark UI, each one object with its parts.',
    registry: 'npm',
    href: 'https://www.npmjs.com/package/@cerberus-design/react',
    command: 'npm install @cerberus-design/react',
  },
  {
    name: '@cerberus/panda-preset',
    does: 'Recipes, conditions and semantic tokens for Panda CSS v2. The Cerberus theme is built in.',
    registry: 'JSR',
    href: 'https://jsr.io/@cerberus/panda-preset',
    command: 'npx jsr add @cerberus/panda-preset',
  },
  {
    name: '@cerberus-design/data-grid',
    does: 'A virtualized Data Grid for large, live data sets.',
    registry: 'npm',
    href: 'https://www.npmjs.com/package/@cerberus-design/data-grid',
    command: 'npm install @cerberus-design/data-grid',
  },
  {
    name: '@cerberus-design/signals',
    does: 'Fine-grained reactive state that updates only what changed.',
    registry: 'npm',
    href: 'https://www.npmjs.com/package/@cerberus-design/signals',
    command: 'npm install @cerberus-design/signals',
  },
  {
    name: '@cerberus/figma',
    does: 'Reads your Figma files through the REST API.',
    registry: 'JSR',
    href: 'https://jsr.io/@cerberus/figma',
    command: 'npx jsr add @cerberus/figma',
  },
  {
    name: '@cerberus/preset-acheron-theme',
    does: 'The Acheron theme, an earthy palette. Optional: add it to presets in panda.config. The Cerberus theme is built in.',
    registry: 'JSR',
    href: 'https://jsr.io/@cerberus/preset-acheron-theme',
    command: 'npx jsr add @cerberus/preset-acheron-theme',
  },
  {
    name: '@cerberus/preset-elysium-theme',
    does: 'The Elysium theme, a high-contrast palette. Optional: add it to presets in panda.config. The Cerberus theme is built in.',
    registry: 'JSR',
    href: 'https://jsr.io/@cerberus/preset-elysium-theme',
    command: 'npx jsr add @cerberus/preset-elysium-theme',
  },
  {
    name: '@cerberus/preset-oceanus-theme',
    does: 'The Oceanus theme, a blue palette. Optional: add it to presets in panda.config. The Cerberus theme is built in.',
    registry: 'JSR',
    href: 'https://jsr.io/@cerberus/preset-oceanus-theme',
    command: 'npx jsr add @cerberus/preset-oceanus-theme',
  },
]

/**
 * What you install, plainly. The world steps back here: an opaque page of
 * packages, each with its registry and a command to copy.
 */
export function Ledger() {
  return (
    <section
      id="install"
      aria-labelledby="ledger-heading"
      data-pose="install"
      data-hud="Install"
      data-world-cover
      className={css({
        bgColor: 'page.bg.initial',
        py: '4xl',
        md: { py: '32' },
      })}
    >
      <div
        className={cx(
          container,
          css({ display: 'flex', flexDir: 'column', gap: '3xl' }),
        )}
      >
        <div
          className={css({
            display: 'grid',
            gap: 'xl',
            gridTemplateColumns: 'minmax(0, 1fr)',
            lg: {
              alignItems: 'end',
              gridTemplateColumns: 'minmax(0, 7fr) minmax(0, 5fr)',
            },
          })}
        >
          <RevealHeading
            id="ledger-heading"
            className={cx(displayStatement, css({ maxW: '14ch' }))}
          >
            Everything you can install today.
          </RevealHeading>
          <p className={lead}>
            Take the whole ecosystem or only the parts you need. Agents get the
            same map at{' '}
            <a className={textLink} href="/llms.txt">
              llms.txt
            </a>
            .
          </p>
        </div>

        <ul
          className={css({
            borderTop: '1px solid',
            borderColor: 'page.border.200',
          })}
        >
          {ENTRIES.map((entry) => (
            <li
              key={entry.name}
              className={css({
                borderBottom: '1px solid',
                borderColor: 'page.border.200',
                display: 'grid',
                gap: 'md',
                gridTemplateColumns: 'minmax(0, 1fr)',
                py: 'lg',
                lg: {
                  alignItems: 'center',
                  gap: 'xl',
                  gridTemplateColumns:
                    'minmax(0, 4fr) minmax(0, 4fr) minmax(0, 4fr)',
                },
              })}
            >
              <div
                className={css({
                  alignItems: 'baseline',
                  display: 'flex',
                  flexWrap: 'wrap',
                  gap: 'sm',
                })}
              >
                <a
                  href={entry.href}
                  rel="noreferrer"
                  target="_blank"
                  className={css({
                    color: 'page.text.initial',
                    fontFamily: 'mono',
                    rounded: 'xs',
                    textDecoration: 'none',
                    textStyle: 'body-md',
                    _hover: {
                      textDecoration: 'underline',
                      textUnderlineOffset: '0.22em',
                    },
                    _focusVisible: { focusVisibleRing: 'outside' },
                    md: { textStyle: 'body-lg' },
                  })}
                >
                  {entry.name}
                </a>
                <span
                  className={css({
                    color: 'page.text.100',
                    textStyle: 'label-sm',
                  })}
                >
                  {entry.registry}
                </span>
              </div>
              <p
                className={css({
                  color: 'page.text.200',
                  textStyle: 'body-sm',
                  md: { textStyle: 'body-md' },
                })}
              >
                {entry.does}
              </p>
              <InstallLine command={entry.command} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
