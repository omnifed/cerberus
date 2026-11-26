'use client'

import { CheckmarkFilled, ChevronRight } from '@carbon/icons-react'
import { Field, NumberInput } from '@cerberus-design/react'
import { version } from '@cerberus-design/react/package.json'
import { gsap } from 'gsap'
import { useEffect, useRef } from 'react'
import { css, cx } from 'styled-system/css'
import { Beat, plateCaption, plateSurface } from './beat'
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
 * 01 · Agents first. On most teams an agent is the first to touch the code,
 * so this is the first thing the page proves.
 */
export function Agents() {
  return (
    <Beat
      id="agents"
      pose="agents"
      label="Agents first"
      heading="Agents come first. So we built for them first."
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
        Agents now do much of the work, often before a person sees it. Cerberus
        gives them what you would give a new teammate: plain-text docs,
        component APIs that are hard to misuse, and skills for the hard parts.
      </p>
      <p>
        Every component is one object with its parts. Every docs page has a
        plain-text twin. The React package is agent-ready from source to docs
        today, and the rest of the ecosystem is next.
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

/**
 * An illustrative agent session: what the agent reads on the left, what it
 * writes and ships on the right. The result at the bottom is that code,
 * running.
 */
function AgentSession() {
  const { motion } = useExperience()
  const ref = useRef<HTMLDivElement>(null)

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

      const startsBelow =
        el.getBoundingClientRect().top > window.innerHeight * 0.85
      const tl = gsap.timeline({
        paused: true,
        defaults: { duration: 0.5, ease: 'power3.out' },
      })
      if (startsBelow) {
        tl.from('[data-step]', { opacity: 0, y: 8, stagger: 0.32 })
          .from(
            '[data-code-line]',
            { opacity: 0, y: 8, stagger: 0.14 },
            '+=0.1',
          )
          .from('[data-result]', { opacity: 0, y: 8, duration: 0.6 }, '+=0.15')
      }

      gsap.timeline({
        scrollTrigger: {
          trigger: el,
          start: 'top 75%',
          end: 'bottom top',
          onEnter: () => {
            tl.play()
            scan.play()
          },
          onEnterBack: () => scan.play(),
          onLeave: () => scan.pause(),
          onLeaveBack: () => scan.pause(),
        },
      })
      // Keyboard focus never lands on something still invisible.
      el.addEventListener('focusin', () => tl.progress(1), { once: true })
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
          md: { gridTemplateColumns: 'minmax(0, 1fr) minmax(0, 1fr)' },
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
        <p className={plateCaption}>What it ships</p>
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
          <ChevronRight aria-hidden className={css({ flexShrink: 0 })} />
          Add a seats field to the booking form.
        </p>
        <ol className={css({ display: 'flex', flexDir: 'column', gap: 'xs' })}>
          {STEPS.map((step) => (
            <li
              key={step}
              data-step
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
          <code>
            {CODE.split('\n').map((line, i) => (
              <span
                key={i}
                data-code-line
                className={css({ display: 'block' })}
              >
                {line}
              </span>
            ))}
          </code>
        </pre>
        <div
          data-result
          className={css({
            border: '1px dashed',
            borderColor: 'page.border.200',
            display: 'flex',
            flexDir: 'column',
            gap: 'sm',
            p: 'md',
            rounded: 'md',
          })}
        >
          <p className={plateCaption}>That code, running</p>
          <div className={css({ maxW: '12rem' })}>
            <Field label="Seats needed">
              <NumberInput defaultValue="2" max={12} min={0} />
            </Field>
          </div>
        </div>
      </div>
      <p className={cx(plateCaption, css({ md: { gridColumn: '1 / -1' } }))}>
        An illustrative session. The docs excerpt is the real file; the result
        is live Cerberus.
      </p>
    </div>
  )
}
