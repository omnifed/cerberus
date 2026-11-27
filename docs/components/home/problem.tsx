'use client'

import { ArrowRight } from '@carbon/icons-react'
import {
  Button,
  DatePicker,
  Field,
  Input,
  NumberInput,
  Tag,
} from '@cerberus-design/react'
import { gsap } from 'gsap'
import { useEffect, useRef, type ReactNode } from 'react'
import { css, cx } from 'styled-system/css'
import { Answer } from './answer'
import { pool } from './beat'
import { useExperience } from './experience'
import { RevealHeading } from './reveal-heading'
import { container, displayHero } from './styles'

/** The chain, one clause per handoff. Each lights as its stage arrives. */
const CLAUSES = [
  'A design',
  'becomes a ticket.',
  'The ticket becomes code.',
  'The code becomes a prompt for an agent that never saw the design.',
]

/** How much of the original survives each stage. An illustration, not a measurement. */
const FIDELITY = [100, 72, 41, 18]

const ROLE_DOT = {
  designer: css({ bgColor: 'dataViz.qualitative.100' }),
  product: css({ bgColor: 'page.text.100' }),
  developer: css({ bgColor: 'dataViz.qualitative.300' }),
  agent: css({ bgColor: 'dataViz.qualitative.500' }),
}

const label = css({ color: 'page.text.100', textStyle: 'label-sm' })

/** A raw, unstyled control, the way it comes out when nobody knew the system. */
const bare = css({
  alignItems: 'center',
  bgColor: 'page.surface.initial',
  border: '1px solid',
  borderColor: 'page.border.200',
  color: 'page.text.100',
  display: 'flex',
  h: '7',
  px: 'xs',
  textStyle: 'label-sm',
})

function DesignArtifact() {
  return (
    <div className={css({ display: 'flex', flexDir: 'column', gap: 'sm' })}>
      <p
        className={css({
          color: 'page.text.initial',
          textStyle: 'heading-2xs',
        })}
      >
        Book a trip
      </p>
      <Field>
        <DatePicker name="handoff-dates" selectionMode="range">
          <DatePicker.Label>Dates</DatePicker.Label>
          <DatePicker.RangeInputGroup />
        </DatePicker>
      </Field>
      <Field label="Travelers">
        <NumberInput
          name="handoff-travelers"
          defaultValue="2"
          max={9}
          min={1}
        />
      </Field>
      <Button shape="sharp" size="sm">
        Confirm booking
      </Button>
    </div>
  )
}

function TicketArtifact() {
  return (
    <div className={css({ display: 'flex', flexDir: 'column', gap: 'sm' })}>
      <div
        className={css({
          alignItems: 'center',
          display: 'flex',
          justifyContent: 'space-between',
        })}
      >
        <span className={cx(label, css({ fontFamily: 'mono' }))}>BOOK-412</span>
        <Tag palette="page" shape="pill" usage="outlined">
          To do
        </Tag>
      </div>
      <p
        className={css({
          color: 'page.text.initial',
          textStyle: 'heading-2xs',
        })}
      >
        Booking form
      </p>
      <p className={css({ color: 'page.text.200', textStyle: 'body-sm' })}>
        Add booking form w/ date + guests. Purple button. See Figma.
      </p>
      <p
        className={cx(
          label,
          css({ textDecoration: 'underline', wordBreak: 'break-all' }),
        )}
      >
        figma.com/file/…/Booking-v3-FINAL-2
      </p>
      <p className={cx(label, css({ mt: 'auto' }))}>Assignee: Jordan · 3 pts</p>
    </div>
  )
}

/** Rebuilt from the ticket: close, and wrong in every detail. */
function CodeArtifact() {
  return (
    <div className={css({ display: 'flex', flexDir: 'column', gap: '1' })}>
      <p className={css({ color: 'page.text.initial', textStyle: 'body-sm' })}>
        Booking
      </p>
      <Field label="Date">
        <Input name="handoff-date" placeholder="mm/dd/yyyy" size="sm" />
      </Field>
      <Field label="Guests">
        <Input name="handoff-guests" defaultValue="2" size="sm" />
      </Field>
      <Button
        shape="rounded"
        size="sm"
        usage="outlined"
        className={css({ alignSelf: 'flex-start', mt: '1' })}
      >
        Submit
      </Button>
    </div>
  )
}

/** What an agent makes from a prompt with nothing behind it. */
function AgentArtifact() {
  return (
    <div className={css({ display: 'flex', flexDir: 'column', gap: 'sm' })}>
      <p className={cx(label, css({ fontFamily: 'mono' }))}>
        &gt; make a booking form
      </p>
      <span className={cx(bare, css({ w: '72%' }))}>date</span>
      <span className={cx(bare, css({ ml: '3', w: '44%' }))} />
      <span
        className={cx(
          bare,
          css({
            bgColor: 'page.surface.300',
            color: 'page.text.initial',
            ml: '1',
            px: 'sm',
            w: 'fit',
          }),
        )}
      >
        Click here
      </span>
      <p
        className={css({
          color: 'danger.text.100',
          mt: 'auto',
          textStyle: 'label-sm',
        })}
      >
        No labels · no states · no name
      </p>
    </div>
  )
}

interface Stage {
  n: string
  title: string
  role: keyof typeof ROLE_DOT
  artifact: ReactNode
  /** The artifact in words, for screen readers. */
  describe: string
  lost: string[]
}

const STAGES: Stage[] = [
  {
    n: '01',
    title: 'Design',
    role: 'designer',
    artifact: <DesignArtifact />,
    describe:
      'A booking card from the design system: a date range picker, a Travelers number field and a Confirm booking button.',
    lost: [],
  },
  {
    n: '02',
    title: 'Ticket',
    role: 'product',
    artifact: <TicketArtifact />,
    describe:
      'A ticket that describes the design in one line: add booking form with date and guests, purple button, see Figma.',
    lost: ['the token names', 'the hover, empty and error states'],
  },
  {
    n: '03',
    title: 'Code',
    role: 'developer',
    artifact: <CodeArtifact />,
    describe:
      'A rebuild from the ticket: one date field, a field labelled Guests, and a rounded Submit button.',
    lost: ['the range picker', 'the label “Travelers”', 'the button’s shape'],
  },
  {
    n: '04',
    title: 'Agent prompt',
    role: 'agent',
    artifact: <AgentArtifact />,
    describe:
      'An agent’s output from the prompt “make a booking form”: two unlabelled inputs and a generic Click here button.',
    lost: ['every label', 'the error states', 'the accessible name'],
  },
]

/** Later hands, looser grip: each stage sits a little more askew. */
const tilt = [
  css({}),
  css({}),
  css({ xl: { rotate: '0.5deg' } }),
  css({ xl: { rotate: '-0.9deg' } }),
]

const stageCard = css({
  bgColor: 'page.surface.100',
  border: '1px solid',
  borderColor: 'page.border.initial',
  boxShadow: '2xl',
  display: 'flex',
  flexDir: 'column',
  gap: 'sm',
  minW: '0',
  p: 'md',
  pos: 'relative',
  rounded: 'xl',
})

function StageCard(props: { stage: Stage; index: number }) {
  const { stage, index } = props
  return (
    <li data-stage={index} className={cx(stageCard, tilt[index])}>
      {index > 0 && (
        // The handoff itself: drawn across the gap from the stage before.
        <span
          aria-hidden
          data-handoff
          className={css({
            alignItems: 'center',
            color: 'page.text.200',
            display: 'none',
            pos: 'absolute',
            right: '100%',
            top: '9rem',
            transformOrigin: 'left',
            w: '6',
            xl: { display: 'flex' },
          })}
        >
          <span
            className={css({ bgColor: 'currentColor', flex: '1', h: '1px' })}
          />
          <ArrowRight size={12} className={css({ flexShrink: 0, ml: '-1' })} />
        </span>
      )}
      <div
        className={css({
          alignItems: 'center',
          display: 'flex',
          gap: 'sm',
          textStyle: 'label-sm',
        })}
      >
        <span className={css({ color: 'page.text.100', fontFamily: 'mono' })}>
          {stage.n}
        </span>
        <span
          aria-hidden
          className={cx(
            ROLE_DOT[stage.role],
            css({ flexShrink: 0, h: '2', rounded: 'full', w: '2' }),
          )}
        />
        <span className={css({ color: 'page.text.initial', fontWeight: 600 })}>
          {stage.title}
        </span>
        <span
          className={css({
            color: 'page.text.200',
            fontVariantNumeric: 'tabular-nums',
            ml: 'auto',
          })}
        >
          <span className={css({ srOnly: true })}>Fidelity </span>
          {FIDELITY[index]}%
        </span>
      </div>

      {/* A picture of the artifact, so it stays out of the tab order. */}
      <div
        aria-hidden
        inert
        className={css({
          bgColor: 'page.bg.initial',
          border: '1px solid',
          borderColor: 'page.border.initial',
          display: 'flex',
          flexDir: 'column',
          h: '15.5rem',
          overflow: 'hidden',
          p: 'md',
          rounded: 'lg',
          xl: { zoom: 0.84 },
          '& > *': { flex: '1' },
        })}
      >
        {stage.artifact}
      </div>
      <p className={css({ srOnly: true })}>{stage.describe}</p>

      <div className={css({ display: 'flex', flexDir: 'column', gap: 'xs' })}>
        <p className={label}>
          {stage.lost.length ? 'Lost in this handoff' : 'Nothing lost yet'}
        </p>
        <ul
          className={css({
            display: 'flex',
            flexDir: 'column',
            gap: '1',
            minH: '3lh',
            textStyle: 'label-sm',
          })}
        >
          {stage.lost.map((item) => (
            <li
              key={item}
              className={css({
                color: 'page.text.200',
                pos: 'relative',
                w: 'fit',
              })}
            >
              {item}
              <span
                aria-hidden
                data-strike
                className={css({
                  bgColor: 'danger.text.100',
                  h: '1px',
                  insetInline: '0',
                  pos: 'absolute',
                  top: '55%',
                  transformOrigin: 'left',
                })}
              />
            </li>
          ))}
        </ul>
      </div>
    </li>
  )
}

const readoutLevel = css({
  color: 'page.text.initial',
  fontSize: 'clamp(3.5rem, 1.5rem + 5vw, 7.5rem)',
  fontVariantNumeric: 'tabular-nums',
  fontWeight: 'bold',
  letterSpacing: '-0.05em',
  lineHeight: '0.9',
  transitionDuration: 'slow',
  transitionProperty: 'color',
  '&[data-level=mid]': { color: 'warning.text.100' },
  '&[data-level=low]': { color: 'danger.text.100' },
})

const levelOf = (v: number) => (v > 60 ? 'high' : v > 30 ? 'mid' : 'low')

/**
 * 02 · The problem, as a game of telephone. On wide screens the section pins
 * and the booking card passes through four hands as you scroll, losing a
 * little at each one while a readout counts what survives. Everywhere else,
 * and without motion, the four stages simply stand side by side.
 */
export function Problem() {
  return (
    <>
      <Telephone />
      <Answer />
    </>
  )
}

function Telephone() {
  const { motion } = useExperience()
  const pinRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const root = pinRef.current
    if (!motion || !root) return
    const all = <T extends Element>(sel: string) => [
      ...root.querySelectorAll<T>(sel),
    ]
    const stages = all<HTMLElement>('[data-stage]')
    const clauses = all<HTMLElement>('[data-clause]')
    const handoffs = all<HTMLElement>('[data-handoff]')
    const readout = root.querySelector<HTMLElement>('[data-readout]')
    const value = root.querySelector<HTMLElement>('[data-readout-value]')

    const showFidelity = (v: number) => {
      const n = Math.round(v)
      if (value) value.textContent = String(n)
      readout?.setAttribute('data-level', levelOf(n))
    }

    const mm = gsap.matchMedia()
    mm.add(
      { pinned: '(min-width: 80rem) and (min-height: 44rem)' },
      (context) => {
        if (!context.conditions?.pinned) {
          // Narrow screens: no pin, the stages rise in as they arrive.
          const list = root.querySelector('ol')
          if (
            !list ||
            list.getBoundingClientRect().top < window.innerHeight * 0.9
          )
            return
          gsap.from(stages, {
            opacity: 0,
            y: 32,
            duration: 0.9,
            ease: 'expo.out',
            stagger: 0.12,
            scrollTrigger: { trigger: list, start: 'top 85%', once: true },
          })
          return
        }

        // Wide screens: one handoff per beat of scroll.
        const STEP = 1.2
        // The readout follows the timeline, so it is right wherever scroll lands.
        const fidelityAt = (time: number) => {
          let v = FIDELITY[0]
          for (let i = 1; i < FIDELITY.length; i++) {
            const from = (i - 1) * STEP + 0.45
            if (time < from) break
            const t = Math.min(1, (time - from) / 0.6)
            v = FIDELITY[i - 1] + (FIDELITY[i] - FIDELITY[i - 1]) * t
          }
          return v
        }
        let tl: gsap.core.Timeline | null = null
        const sync = () => tl && showFidelity(fidelityAt(tl.time()))
        tl = gsap.timeline({
          defaults: { ease: 'none' },
          scrollTrigger: {
            trigger: root,
            start: 'top top',
            end: '+=260%',
            pin: true,
            scrub: 0.6,
            anticipatePin: 1,
            invalidateOnRefresh: true,
            onRefresh: sync,
          },
          onUpdate: sync,
        })
        for (let i = 1; i < stages.length; i++) {
          const at = (i - 1) * STEP + 0.2
          tl.fromTo(
            handoffs[i - 1],
            { scaleX: 0 },
            { scaleX: 1, duration: 0.35 },
            at,
          )
            .fromTo(
              stages[i],
              { opacity: 0.1, y: 36 },
              { opacity: 1, y: 0, duration: 0.6, ease: 'power2.out' },
              at + 0.25,
            )
            .fromTo(
              clauses[i],
              { opacity: 0.16 },
              { opacity: 1, duration: 0.5 },
              at + 0.25,
            )
            .fromTo(
              stages[i].querySelectorAll('[data-strike]'),
              { scaleX: 0 },
              { scaleX: 1, duration: 0.3, stagger: 0.12 },
              at + 0.75,
            )
        }
        // Hold on the wreck before the verdict scrolls in.
        tl.to({}, { duration: 0.7 })
        sync()

        return () => showFidelity(FIDELITY[FIDELITY.length - 1])
      },
    )
    return () => mm.revert()
  }, [motion])

  return (
    <section
      id="problem"
      aria-labelledby="problem-heading"
      data-pose="problem"
      data-hud="The problem"
      className={css({
        pb: '4xl',
        scrollMarginTop: 'var(--nav-height)',
        md: { pb: '32' },
      })}
    >
      <div
        ref={pinRef}
        className={css({
          alignItems: 'center',
          display: 'flex',
          minH: '100svh',
          pb: 'xl',
          pt: 'calc(var(--nav-height) + token(spacing.xl))',
        })}
      >
        <div
          className={cx(
            container,
            css({ display: 'flex', flexDir: 'column', gap: '2xl' }),
          )}
        >
          <div
            className={css({
              alignItems: 'end',
              display: 'grid',
              gap: 'xl',
              gridTemplateColumns: 'minmax(0, 1fr)',
              lg: { gridTemplateColumns: 'minmax(0, 8fr) minmax(0, 4fr)' },
            })}
          >
            <div className={css({ isolation: 'isolate', pos: 'relative' })}>
              <span
                aria-hidden
                className={cx(pool, css({ inset: '-40% -10%' }))}
              />
              <p
                className={cx(label, css({ color: 'page.text.200', mb: 'sm' }))}
              >
                How a feature crosses a team today
              </p>
              <p
                className={css({
                  color: 'page.text.initial',
                  fontSize: 'clamp(1.5rem, 0.9rem + 1.6vw, 2.5rem)',
                  fontWeight: 'semibold',
                  letterSpacing: '-0.03em',
                  lineHeight: '1.12',
                  maxW: '34ch',
                  textWrap: 'balance',
                })}
              >
                {CLAUSES.map((clause, i) => (
                  <span key={clause}>
                    <span data-clause={i}>{clause}</span>
                    {i < CLAUSES.length - 1 ? ' ' : null}
                  </span>
                ))}
              </p>
            </div>
            <div
              className={css({
                isolation: 'isolate',
                pos: 'relative',
                lg: { textAlign: 'right' },
              })}
            >
              <span
                aria-hidden
                className={cx(pool, css({ inset: '-30% -20%' }))}
              />
              <p className={label}>
                What survives the crossing{' '}
                <span className={css({ color: 'page.text.200' })}>
                  · illustrative
                </span>
              </p>
              {/* Counts down as the stages arrive; the final figure is the resting state. */}
              <p
                aria-hidden
                data-readout
                data-level="low"
                className={readoutLevel}
              >
                <span data-readout-value>{FIDELITY[FIDELITY.length - 1]}</span>%
              </p>
              <p className={css({ srOnly: true })}>
                By the fourth handoff, about {FIDELITY[FIDELITY.length - 1]}% of
                the original design survives.
              </p>
            </div>
          </div>

          <ol
            aria-label="Four handoffs, from design to an agent’s prompt"
            className={css({
              display: 'grid',
              gap: 'lg',
              gridTemplateColumns: 'minmax(0, 1fr)',
              md: { gridTemplateColumns: 'repeat(2, minmax(0, 1fr))' },
              xl: { gridTemplateColumns: 'repeat(4, minmax(0, 1fr))' },
            })}
          >
            {STAGES.map((stage, i) => (
              <StageCard key={stage.n} stage={stage} index={i} />
            ))}
          </ol>
        </div>
      </div>

      <div className={cx(container, css({ pt: '3xl' }))}>
        <div
          className={css({ isolation: 'isolate', pos: 'relative', w: 'fit' })}
        >
          <span aria-hidden className={cx(pool, css({ inset: '-25% -12%' }))} />
          <RevealHeading
            id="problem-heading"
            className={cx(displayHero, css({ maxW: '14ch' }))}
          >
            Every handoff loses something.
          </RevealHeading>
        </div>
      </div>
    </section>
  )
}
