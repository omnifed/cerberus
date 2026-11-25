import { Tag } from '@cerberus-design/react'
import { css } from 'styled-system/css'
import { AcheronManifest } from './acheron-manifest'
import { CerberusArtifact, ElysiumArtifact, OceanusArtifact } from './artifacts'
import { DepthGauge } from './depth-gauge'
import { RealmSection } from './realm-section'
import { FAR_SHORE, REALMS } from './realms'

const [elysium, oceanus, acheron, cerberus] = REALMS

const code = css({
  color: 'page.text.initial',
  fontFamily: 'mono',
  fontSize: '0.92em',
})

/**
 * The home page's story: a descent through the realms of the ecosystem, from
 * design down to the agents at the gate, with the far shore drawn as the goal.
 */
export function Descent() {
  return (
    <section
      aria-labelledby="descent-heading"
      className={css({
        borderTop: '1px solid',
        borderColor: 'page.border.initial',
        bgColor: 'page.bg.initial',
      })}
    >
      <div
        className={css({
          display: 'grid',
          gridTemplateColumns: 'minmax(0, 1fr)',
          mx: 'auto',
          maxW: '90rem',
          pt: '4xl',
          lg: {
            columnGap: '3xl',
            gridTemplateColumns: '15rem minmax(0, 1fr)',
            gridTemplateRows: 'auto 1fr',
            px: '2xl',
          },
        })}
      >
        <header
          className={css({
            display: 'flex',
            flexDir: 'column',
            gap: 'lg',
            maxW: '56rem',
            px: 'md',
            pb: 'xl',
            md: { px: 'xl' },
            lg: { gridColumn: '2', gridRow: '1', px: '0' },
          })}
        >
          <h2
            id="descent-heading"
            className={css({
              color: 'page.text.initial',
              textStyle: 'heading-xl',
              textWrap: 'balance',
              md: { textStyle: 'display-sm' },
            })}
          >
            <span
              className={css({
                color: 'page.text.100',
                display: 'block',
                mb: 'xs',
                textStyle: 'heading-sm',
                md: { mb: '0', textStyle: 'display-sm' },
              })}
            >
              Designers, developers and agents all build your UI. They rarely
              build the same one.
            </span>{' '}
            <span className={css({ display: 'block' })}>
              Go down through one ecosystem that keeps all three in step.
            </span>
          </h2>
          <p
            className={css({
              color: 'page.text.200',
              maxW: '60ch',
              textStyle: 'body-lg',
              textWrap: 'pretty',
            })}
          >
            Every layer of Cerberus ships today as a package you can install,
            and every layer speaks to people and agents in the same names.
          </p>
        </header>

        <div
          className={css({
            alignSelf: 'start',
            pos: 'sticky',
            top: 'var(--nav-height)',
            zIndex: 'decorator',
            lg: {
              gridColumn: '1',
              gridRow: '1 / span 2',
              pt: 'sm',
              top: 'calc(var(--nav-height) + token(spacing.xl))',
            },
          })}
        >
          <DepthGauge />
        </div>

        <div
          className={css({
            px: 'md',
            md: { px: 'xl' },
            lg: { gridColumn: '2', gridRow: '2', px: '0' },
          })}
        >
          <RealmSection
            realm={elysium}
            heading="Design starts where the code already lives."
            people="Designers pick from the same components and tokens developers ship."
            agents="Token names in a design match token names in code, so nothing gets lost in translation."
            artifact={<ElysiumArtifact />}
            below={['oceanus', 'acheron', 'cerberus']}
          >
            <p>
              The Cerberus Figma library uses the same names as the code: every
              component, every token and all four themes.{' '}
              <code className={code}>@cerberus/figma</code> reads your Figma
              files through the REST API, so design data can reach your build
              without a hand-off.
            </p>
          </RealmSection>

          <RealmSection
            realm={oceanus}
            heading="One set of tokens, flowing through everything."
            people="Theme a whole app with one line of config, in light and dark."
            agents="The Panda CSS skills and the Panda MCP server know every token by name."
            artifact={<OceanusArtifact />}
            below={['acheron', 'cerberus']}
          >
            <p>
              <code className={code}>@cerberus/panda-preset</code> carries the
              recipes, conditions and semantic tokens for Panda CSS v2.
              Cerberus, Acheron, Elysium and Oceanus ship with it. Point Panda
              at the design system and every component follows.
            </p>
          </RealmSection>

          <RealmSection
            realm={acheron}
            heading="Accessible components, and data that streams."
            people="Every API is one object with its parts, like Field.Input and DatePicker.Calendar."
            agents="One obvious way to write each component means generated code stays on-system."
            artifact={<AcheronManifest />}
            below={['cerberus']}
          >
            <p>
              <code className={code}>@cerberus-design/react</code> is built on
              Ark UI’s accessible primitives, so keyboard and screen reader
              support come with every component.{' '}
              <code className={code}>@cerberus-design/data-grid</code> and{' '}
              <code className={code}>@cerberus-design/signals</code> handle
              live, high-volume data without re-rendering the page.
            </p>
          </RealmSection>

          <RealmSection
            realm={cerberus}
            heading="Your agents, briefed before they write a line."
            people="Read the same guides your agents read, in plain language."
            agents="llms.txt, skills and an MCP server give context instead of guesswork."
            artifact={<CerberusArtifact />}
            below={[]}
          >
            <p>
              Cerberus ships what an agent needs to build with it correctly:
              llms.txt and llms-full.txt, task playbooks and skills, and the
              Panda MCP server. The guardian at the gate keeps generated code on
              the system.
            </p>
          </RealmSection>

          <FarShore />
        </div>
      </div>
    </section>
  )
}

function FarShore() {
  return (
    <section
      id={FAR_SHORE.id}
      aria-labelledby="far-shore-heading"
      className={css({
        border: '1.5px dashed',
        borderColor: 'page.border.200',
        display: 'flex',
        flexDir: 'column',
        gap: 'md',
        mb: '4xl',
        mt: '2xl',
        p: 'xl',
        rounded: 'xl',
        scrollMarginTop: 'calc(var(--nav-height) + token(spacing.3xl))',
        md: { p: '2xl' },
      })}
    >
      <h3
        id="far-shore-heading"
        className={css({
          color: 'page.text.initial',
          textStyle: 'heading-xl',
          textWrap: 'balance',
          md: { textStyle: 'heading-2xl' },
        })}
      >
        The far shore: designer to production, end to end.
      </h3>
      <div>
        <Tag palette="page" shape="pill" usage="outlined">
          In progress
        </Tag>
      </div>
      <p
        className={css({
          color: 'page.text.200',
          maxW: '60ch',
          textStyle: 'body-lg',
          textWrap: 'pretty',
        })}
      >
        Where Cerberus is headed: one workflow from a designer’s frame to
        production code an agent ships, with nothing lost on the way. We aren’t
        there yet. Every realm above is a step toward it.
      </p>
    </section>
  )
}
