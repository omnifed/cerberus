import { CheckmarkFilled, ChevronRight } from '@carbon/icons-react'
import { Button, ProgressBar, Tag } from '@cerberus-design/react'
import { css } from 'styled-system/css'
import { InstallLine } from './install-line'
import { type RealmId } from './realms'

const codeBlock = css({
  bgColor: 'page.bg.initial',
  border: '1px solid',
  borderColor: 'page.border.initial',
  color: 'page.text.200',
  overflowX: 'auto',
  p: 'md',
  rounded: 'md',
  fontFamily: 'mono',
  textStyle: 'body-sm',
  whiteSpace: 'pre',
})

const swatch = css({
  border: '1px solid',
  borderColor: 'page.border.200',
  display: 'inline-block',
  h: '6',
  rounded: 'sm',
  verticalAlign: 'middle',
  w: '6',
})

const TOKEN_NAMES = [
  {
    figma: 'action/background/initial',
    code: 'action.bg.initial',
    fill: css({ bgColor: 'action.bg.initial' }),
  },
  {
    figma: 'page/surface/initial',
    code: 'page.surface.initial',
    fill: css({ bgColor: 'page.surface.initial' }),
  },
  {
    figma: 'danger/border/initial',
    code: 'danger.border.initial',
    fill: css({ bgColor: 'danger.border.initial' }),
  },
]

/** Elysium · Design: one vocabulary from Figma to code. */
export function ElysiumArtifact() {
  return (
    <div className={css({ display: 'flex', flexDir: 'column', gap: 'lg' })}>
      <table
        className={css({
          borderCollapse: 'collapse',
          textAlign: 'left',
          w: 'full',
        })}
      >
        <caption
          className={css({
            color: 'page.text.initial',
            textAlign: 'left',
            textStyle: 'heading-2xs',
            pb: 'sm',
          })}
        >
          The same token, named the same way in Figma and in code
        </caption>
        <thead>
          <tr
            className={css({ color: 'page.text.100', textStyle: 'label-sm' })}
          >
            <th
              scope="col"
              className={css({ fontWeight: 400, pb: 'sm', w: '10' })}
            >
              <span className={css({ srOnly: true })}>Color</span>
            </th>
            <th scope="col" className={css({ fontWeight: 400, pb: 'sm' })}>
              In Figma
            </th>
            <th scope="col" className={css({ fontWeight: 400, pb: 'sm' })}>
              In code
            </th>
          </tr>
        </thead>
        <tbody>
          {TOKEN_NAMES.map((token) => (
            <tr
              key={token.code}
              className={css({
                borderTop: '1px solid',
                borderColor: 'page.border.initial',
              })}
            >
              <td className={css({ py: 'sm' })}>
                <span aria-hidden className={`${swatch} ${token.fill}`} />
              </td>
              <td
                className={css({
                  color: 'page.text.200',
                  py: 'sm',
                  fontFamily: 'mono',
                  textStyle: 'label-sm',
                  sm: { textStyle: 'body-sm' },
                })}
              >
                {token.figma}
              </td>
              <td
                className={css({
                  color: 'page.text.initial',
                  py: 'sm',
                  fontFamily: 'mono',
                  textStyle: 'label-sm',
                  sm: { textStyle: 'body-sm' },
                })}
              >
                {token.code}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <InstallLine command="npx jsr add @cerberus/figma" />
    </div>
  )
}

const THEMES: RealmId[] = ['cerberus', 'acheron', 'elysium', 'oceanus']

/** Oceanus · Foundation: the same components, repainted by every theme. */
export function OceanusArtifact() {
  return (
    <div className={css({ display: 'flex', flexDir: 'column', gap: 'lg' })}>
      <ul
        aria-label="The same card in each Cerberus theme"
        className={css({
          display: 'grid',
          gap: 'sm',
          gridTemplateColumns: 'repeat(2, minmax(0, 1fr))',
        })}
      >
        {THEMES.map((theme) => (
          <li
            key={theme}
            data-panda-theme={theme}
            className={css({
              bgColor: 'page.surface.initial',
              border: '1px solid',
              borderColor: 'page.border.initial',
              display: 'flex',
              flexDir: 'column',
              gap: 'sm',
              p: 'md',
              rounded: 'md',
            })}
          >
            <span
              className={css({
                color: 'page.text.initial',
                textStyle: 'heading-2xs',
                textTransform: 'capitalize',
              })}
            >
              {theme}
            </span>
            <ProgressBar
              id={`theme-progress-${theme}`}
              label={`${theme} progress`}
              now={60}
              size="sm"
              usage="rounded"
            />
            <div
              className={css({
                display: 'flex',
                flexWrap: 'wrap',
                gap: 'xs',
                justifyContent: 'space-between',
              })}
            >
              <Tag palette="success" shape="pill" usage="outlined">
                Booked
              </Tag>
              <Button size="sm" shape="sharp" tabIndex={-1} aria-hidden>
                Board
              </Button>
            </div>
          </li>
        ))}
      </ul>
      <pre className={codeBlock}>
        <code>{`// panda.config.ts
export default createCerberusConfig({
  designSystem: '@cerberus-design/react',
})`}</code>
      </pre>
    </div>
  )
}

/** Cerberus · Agents at the gate: what an agent reads before it writes. */
export function CerberusArtifact() {
  const steps = [
    'Read cerberus.digitalu.design/llms.txt',
    'Loaded the cerberus-form-component-styling skill',
    'Checked token names with the Panda MCP server',
  ]
  return (
    <div className={css({ display: 'flex', flexDir: 'column', gap: 'md' })}>
      <p className={css({ color: 'page.text.100', textStyle: 'label-sm' })}>
        Illustrative agent session
      </p>
      <p
        className={css({
          alignItems: 'center',
          bgColor: 'action.ghost.hover',
          color: 'page.text.initial',
          display: 'flex',
          gap: 'sm',
          px: 'md',
          py: 'sm',
          rounded: 'md',
          textStyle: 'body-sm',
        })}
      >
        <ChevronRight aria-hidden />
        Add a seats field to the booking form.
      </p>
      <ol
        className={css({
          display: 'flex',
          flexDir: 'column',
          gap: 'xs',
          pl: 'xs',
        })}
      >
        {steps.map((step) => (
          <li
            key={step}
            className={css({
              alignItems: 'center',
              color: 'page.text.200',
              display: 'flex',
              fontFamily: 'mono',
              gap: 'sm',
              textStyle: 'label-sm',
            })}
          >
            <CheckmarkFilled
              aria-hidden
              className={css({ color: 'success.text.100', flexShrink: 0 })}
            />
            {step}
          </li>
        ))}
      </ol>
      <pre className={codeBlock}>
        <code>{`<Field label="Seats needed">
  <NumberInput min={0} max={12} />
</Field>`}</code>
      </pre>
      <ul
        className={css({
          display: 'flex',
          flexWrap: 'wrap',
          gap: 'md',
          textStyle: 'label-sm',
        })}
      >
        {[
          { href: '/llms.txt', label: 'llms.txt' },
          { href: '/llms-full.txt', label: 'llms-full.txt' },
          { href: '/docs/get-started/llms', label: 'Agent docs' },
        ].map((link) => (
          <li key={link.href}>
            <a
              href={link.href}
              className={css({
                color: 'action.navigation.initial',
                rounded: 'xs',
                textDecoration: 'underline',
                textUnderlineOffset: '0.2em',
                _hover: { color: 'action.navigation.hover' },
                _focusVisible: { focusVisibleRing: 'outside' },
              })}
            >
              {link.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  )
}
