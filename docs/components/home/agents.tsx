'use client'

import { CheckmarkFilled } from '@carbon/icons-react'
import { Button, Field, NumberInput } from '@cerberus-design/react'
import { version } from '@cerberus-design/react/package.json'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useEffect, useRef, useState } from 'react'
import { css, cx } from 'styled-system/css'
import { Beat, plateCaption, plateSurface } from './beat'
import { ClaudeByline, ClaudeSession } from './claude-prompt'
import { useExperience } from './experience'
import { codeBlock, textLink } from './styles'

/** The first lines of the real /llms.txt, as an agent receives them. */
const LLMS = [
  '# Cerberus UI Platform Documentation',
  '',
  `@doc-version: ${version}`,
  'Full documentation: /llms-full.txt',
  '',
  '## Docs',
  '### Get Started',
  '- [Installation](/llms/get-started/installation.txt)',
  '- [LLMS.txt](/llms/get-started/llms.txt)',
  '### Components',
  '- [Field](/llms/components/field.txt)',
  '- [NumberInput](/llms/components/number-input.txt)',
  '…',
]

const STEPS = [
  'Read /llms.txt',
  'Fetched /llms/components/number-input.txt',
  'Loaded the cerberus-form-component-styling skill',
]

const CODE = `<Field label="Seats needed">
  <NumberInput min={0} max={12} />
</Field>`

const LINKS = [
  { href: '/llms.txt', label: 'llms.txt' },
  { href: '/llms-full.txt', label: 'llms-full.txt' },
  { href: '/docs/get-started/llms', label: 'Docs for agents' },
  { href: '/docs/get-started/context-7', label: 'Context7 MCP' },
]

/**
 * Agents first. On most teams an agent touches the code before a person
 * does, so Cerberus is built for that first pass, and for the people who
 * review it and decide what ships.
 */
export function Agents() {
  return (
    <Beat
      id="agents"
      pose="agents"
      label="Agents first"
      heading="Agents start the work. People make the call."
      layout="split"
      plate={<AgentSession />}
      aside={
        <ul
          className={css({
            columnGap: 'lg',
            display: 'flex',
            flexWrap: 'wrap',
            rowGap: 'sm',
            textStyle: 'label-md',
          })}
        >
          {LINKS.map((link) => (
            <li key={link.href}>
              <a href={link.href} className={textLink}>
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      }
    >
      <p>
        On most teams an agent now writes the first draft, often before anyone
        opens the file. So we build Cerberus for that first pass: plain-text
        docs, component APIs that are hard to misuse, and skills for the hard
        parts.
      </p>
      <p>
        The draft you review already speaks your system, so your time goes to
        what only people can do: taste, judgment and the call to ship. Every
        component is one object with its parts, and every docs page has a
        plain-text twin. Our ecosystem is agent-ready from source to docs today,
        and we improve it with each release.
      </p>
    </Beat>
  )
}

const pane = css({
  display: 'flex',
  flexDir: 'column',
  gap: 'md',
  minW: '0',
})

const stepLine = css({
  alignItems: 'center',
  color: 'page.text.200',
  display: 'flex',
  fontFamily: 'mono',
  gap: 'sm',
  textStyle: 'label-sm',
})

/**
 * An illustrative session: what the agent reads on the left; on the right,
 * the prompt in Claude, what the agent writes, and the person who reviews it
 * before it ships. The result is that code, running.
 */
function AgentSession() {
  const { motion } = useExperience()
  const ref = useRef<HTMLDivElement>(null)
  const [approved, setApproved] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!motion || !el) return
    const ctx = gsap.context(() => {
      // The read head walks the file for as long as the plate is on screen.
      const lines = gsap.utils.toArray<HTMLElement>('[data-read]')
      const scan = gsap.timeline({ repeat: -1, repeatDelay: 1.2, paused: true })
      lines.forEach((line, i) => {
        const prev = lines[i - 1]
        scan.call(
          () => {
            prev?.removeAttribute('data-on')
            line.setAttribute('data-on', '')
          },
          undefined,
          i * 0.22,
        )
      })
      scan.call(
        () => lines.at(-1)?.removeAttribute('data-on'),
        undefined,
        lines.length * 0.22,
      )
      ScrollTrigger.create({
        trigger: el,
        start: 'top 75%',
        end: 'bottom top',
        onToggle: (self) => (self.isActive ? scan.play() : scan.pause()),
      })
    }, el)
    return () => ctx.revert()
  }, [motion])

  return (
    <div
      ref={ref}
      className={cx(
        plateSurface,
        css({
          display: 'grid',
          gap: 'xl',
          gridTemplateColumns: 'minmax(0, 1fr)',
          md: { gridTemplateColumns: 'minmax(0, 5fr) minmax(0, 7fr)' },
        }),
      )}
    >
      <div className={pane}>
        <p className={plateCaption}>What your agent reads</p>
        <pre
          aria-label="The start of /llms.txt"
          className={cx(
            codeBlock,
            css({ flex: '1', textStyle: 'label-sm', whiteSpace: 'pre-wrap' }),
          )}
        >
          <code>
            {LLMS.map((line, i) => (
              <span
                key={i}
                data-read
                className={css({
                  display: 'block',
                  minH: '1lh',
                  transitionDuration: 'slow',
                  transitionProperty: 'color',
                  '&[data-on]': {
                    color: 'dataViz.qualitative.500',
                    transitionDuration: '0s',
                  },
                })}
              >
                {line}
              </span>
            ))}
          </code>
        </pre>
      </div>

      <div className={pane}>
        <p className={plateCaption}>What it writes, and who decides</p>
        <ClaudeSession prompt="Add a seats field to the booking form.">
          <div data-step>
            <ClaudeByline>read the docs first</ClaudeByline>
          </div>
          <ol
            data-step
            className={css({ display: 'flex', flexDir: 'column', gap: 'xs' })}
          >
            {STEPS.map((step) => (
              <li key={step} className={stepLine}>
                <CheckmarkFilled
                  aria-hidden
                  className={css({ color: 'success.text.100', flexShrink: 0 })}
                />
                {step}
              </li>
            ))}
          </ol>
          <pre
            data-step
            className={cx(codeBlock, css({ textStyle: 'label-sm' }))}
          >
            <code>{CODE}</code>
          </pre>
          <div
            data-step
            className={css({
              alignItems: 'flex-end',
              border: '1px solid',
              borderColor: 'page.border.initial',
              display: 'flex',
              flexWrap: 'wrap',
              gap: 'md',
              justifyContent: 'space-between',
              p: 'md',
              rounded: 'lg',
            })}
          >
            <div
              className={css({
                display: 'flex',
                flexDir: 'column',
                gap: 'xs',
                minW: '10rem',
              })}
            >
              <p className={plateCaption}>That code, running</p>
              <Field label="Seats needed">
                <NumberInput defaultValue="2" max={12} min={0} />
              </Field>
            </div>
            <div
              className={css({
                display: 'flex',
                flexDir: 'column',
                gap: 'xs',
                alignItems: 'flex-end',
              })}
            >
              <p
                aria-live="polite"
                className={css({
                  alignItems: 'center',
                  color: 'page.text.200',
                  display: 'flex',
                  gap: 'xs',
                  textStyle: 'label-sm',
                })}
              >
                <span
                  aria-hidden
                  className={css({
                    bgColor: 'dataViz.qualitative.300',
                    h: '2',
                    rounded: 'full',
                    w: '2',
                  })}
                />
                {approved
                  ? 'You approved #2841. It ships.'
                  : 'PR #2841 is waiting on you'}
              </p>
              <Button
                shape="sharp"
                size="sm"
                usage={approved ? 'outlined' : 'filled'}
                aria-pressed={approved}
                onClick={() => setApproved((a) => !a)}
              >
                {approved ? 'Approved' : 'Approve'}
              </Button>
            </div>
          </div>
        </ClaudeSession>
      </div>
      <p className={cx(plateCaption, css({ md: { gridColumn: '1 / -1' } }))}>
        An illustrative Claude session. The docs excerpt is the real file; the
        field and the review button are live Cerberus.
      </p>
    </div>
  )
}
