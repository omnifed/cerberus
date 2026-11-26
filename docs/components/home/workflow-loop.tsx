'use client'

import { Bot, Pause, Play } from '@carbon/icons-react'
import {
  Admonition,
  Button,
  Checkbox,
  DatePicker,
  Field,
  NumberInput,
  ProgressBar,
  Rating,
  Switch,
  Tag,
  Textarea,
} from '@cerberus-design/react'
import { gsap } from 'gsap'
import { useEffect, useRef, useState } from 'react'
import { css, cx } from 'styled-system/css'
import { useExperience } from './experience'

const STAGES = ['Idea', 'Prototype', 'Build', 'Review', 'Production'] as const
const LAST = STAGES.length - 1
const IDEA =
  'Let travelers book a trip: pick dates, choose how many are going, then rate it.'
const CHECKS = 12

/** What happens at each stage, for screen readers and the status line. */
const STORY = [
  'A designer writes the idea.',
  'It becomes a working prototype made of Cerberus components.',
  'An agent picks it up and builds it.',
  'Checks run and design signs off.',
  'It ships to production.',
]

const DOTS = {
  designer: css({ bgColor: 'dataViz.qualitative.100' }),
  developer: css({ bgColor: 'dataViz.qualitative.300' }),
  agent: css({ bgColor: 'dataViz.qualitative.500' }),
}

const card = css({
  bgColor: 'page.surface.100',
  border: '1px solid',
  borderColor: 'page.border.initial',
  display: 'flex',
  flexDir: 'column',
  gap: 'sm',
  p: 'md',
  rounded: 'lg',
})

const column = css({ display: 'flex', flexDir: 'column', gap: 'md', minW: '0' })

/**
 * On a phone the board would be too tall with every stage stacked, so while
 * it animates the stages share one slot and only the current one shows.
 * Without motion the whole finished board is shown instead.
 */
const phoneStage = css({
  '&[data-animated=true]': {
    '& [data-column]': { display: 'contents', sm: { display: 'flex' } },
    '& [data-stage-of]': {
      alignSelf: 'start',
      gridColumn: '1',
      gridRow: '1',
      sm: { gridColumn: 'auto', gridRow: 'auto' },
    },
  },
  // Panda extracts styles statically, so each stage is spelled out.
  '&[data-animated=true][data-stage="0"] [data-stage-of]:not([data-stage-of="0"])':
    {
      visibility: 'hidden',
      sm: { visibility: 'visible' },
    },
  '&[data-animated=true][data-stage="1"] [data-stage-of]:not([data-stage-of="1"])':
    {
      visibility: 'hidden',
      sm: { visibility: 'visible' },
    },
  '&[data-animated=true][data-stage="2"] [data-stage-of]:not([data-stage-of="2"])':
    {
      visibility: 'hidden',
      sm: { visibility: 'visible' },
    },
  '&[data-animated=true][data-stage="3"] [data-stage-of]:not([data-stage-of="3"])':
    {
      visibility: 'hidden',
      sm: { visibility: 'visible' },
    },
  '&[data-animated=true][data-stage="4"] [data-stage-of]:not([data-stage-of="4"])':
    {
      visibility: 'hidden',
      sm: { visibility: 'visible' },
    },
})

const caption = css({
  alignItems: 'center',
  color: 'page.text.200',
  display: 'flex',
  gap: 'sm',
  textStyle: 'label-sm',
})

function Who(props: { role: keyof typeof DOTS; children: string }) {
  return (
    <span className={caption}>
      <span
        aria-hidden
        className={cx(
          DOTS[props.role],
          css({
            display: 'inline-block',
            flexShrink: 0,
            h: '2',
            rounded: 'full',
            w: '2',
          }),
        )}
      />
      {props.children}
    </span>
  )
}

interface LoopState {
  stage: number
  idea: string
  ready: boolean
  checks: number
  rating: number
  approved: boolean
}

// The finished picture: what renders first, without JavaScript and under reduced motion.
const FINAL: LoopState = {
  stage: LAST,
  idea: IDEA,
  ready: true,
  checks: CHECKS,
  rating: 5,
  approved: true,
}

/**
 * The hero's product: one feature travelling from a designer's idea to
 * production, built from real Cerberus components. It loops for as long as it
 * is on screen, pauses on request, and holds its finished frame under reduced
 * motion.
 */
export function WorkflowLoop() {
  const { motion } = useExperience()
  const [state, setState] = useState<LoopState>(FINAL)
  const [playing, setPlaying] = useState(true)
  const rootRef = useRef<HTMLDivElement>(null)
  const tlRef = useRef<gsap.core.Timeline | null>(null)

  useEffect(() => {
    const root = rootRef.current
    if (!motion || !root) return
    const set = (patch: Partial<LoopState>) =>
      setState((s) => ({ ...s, ...patch }))

    const ctx = gsap.context(() => {
      const piece = (name: string) => `[data-piece="${name}"]`
      const typed = { n: 0 }
      const checks = { n: 0 }
      const tl = gsap.timeline({
        repeat: -1,
        defaults: { duration: 0.7, ease: 'expo.out' },
      })
      tl.set('[data-piece]', { opacity: 0, y: 14 })
        .call(() => {
          typed.n = 0
          checks.n = 0
          setState({
            stage: 0,
            idea: '',
            ready: false,
            checks: 0,
            rating: 0,
            approved: false,
          })
        })
        // Idea
        .to(piece('idea'), { opacity: 1, y: 0 }, 0.2)
        .to(typed, {
          n: IDEA.length,
          duration: 2.2,
          ease: 'none',
          onUpdate: () => set({ idea: IDEA.slice(0, Math.round(typed.n)) }),
        })
        // Prototype
        .call(() => set({ stage: 1 }), undefined, '+=0.4')
        .to(piece('proto'), { opacity: 1, y: 0 })
        .to(piece('tag'), { opacity: 1, y: 0, stagger: 0.12 }, '-=0.3')
        // Build
        .call(() => set({ stage: 2 }), undefined, '+=0.9')
        .to(piece('build'), { opacity: 1, y: 0 })
        .to(piece('code'), { opacity: 1, y: 0 }, '-=0.4')
        .call(() => set({ ready: true }), undefined, '+=0.7')
        // Review
        .call(() => set({ stage: 3 }), undefined, '+=0.7')
        .to(piece('review'), { opacity: 1, y: 0 })
        .to(checks, {
          n: CHECKS,
          duration: 1.6,
          ease: 'power1.inOut',
          onUpdate: () => set({ checks: Math.round(checks.n) }),
        })
        .call(() => set({ rating: 5 }), undefined, '-=0.6')
        .call(() => set({ approved: true }), undefined, '+=0.3')
        // Production
        .call(() => set({ stage: 4 }), undefined, '+=0.6')
        .to(piece('ship'), { opacity: 1, y: 0, duration: 0.9 })
        // Hold the finished picture, then clear the board for the next feature.
        .to(
          '[data-piece]',
          {
            opacity: 0,
            y: -8,
            duration: 0.6,
            ease: 'power2.in',
            stagger: 0.03,
          },
          '+=3.2',
        )
      tlRef.current = tl
    }, root)

    // Only run while someone can see it.
    const observer = new IntersectionObserver(([entry]) => {
      const tl = tlRef.current
      if (!tl) return
      if (
        entry.isIntersecting &&
        !document.hidden &&
        root.dataset.playing === 'true'
      )
        tl.play()
      else tl.pause()
    })
    observer.observe(root)
    const onVisibility = () => {
      if (document.hidden) tlRef.current?.pause()
      else if (root.dataset.playing === 'true') tlRef.current?.play()
    }
    document.addEventListener('visibilitychange', onVisibility)

    return () => {
      observer.disconnect()
      document.removeEventListener('visibilitychange', onVisibility)
      ctx.revert()
      tlRef.current = null
      setState(FINAL)
    }
  }, [motion])

  useEffect(() => {
    const tl = tlRef.current
    if (!tl) return
    if (playing) tl.play()
    else tl.pause()
  }, [playing])

  return (
    <figure
      ref={rootRef}
      data-playing={playing}
      className={css({
        display: 'flex',
        flexDir: 'column',
        gap: 'sm',
        minW: '0',
        w: 'full',
      })}
    >
      <div
        className={css({
          bgColor: 'page.surface.initial',
          border: '1px solid',
          borderColor: 'page.border.initial',
          boxShadow: '2xl',
          overflow: 'hidden',
          rounded: 'xl',
        })}
      >
        {/* The stage rail: where this feature is in its life. */}
        <div
          className={css({
            alignItems: 'center',
            borderBottom: '1px solid',
            borderColor: 'page.border.initial',
            display: 'flex',
            gap: 'md',
            justifyContent: 'space-between',
            px: 'md',
            py: 'sm',
          })}
        >
          <ol
            aria-hidden
            className={css({ display: 'flex', flexWrap: 'wrap', gap: 'xs' })}
          >
            {STAGES.map((stage, i) => (
              <li
                key={stage}
                data-state={
                  i < state.stage
                    ? 'done'
                    : i === state.stage
                      ? 'current'
                      : 'next'
                }
                className={css({
                  alignItems: 'center',
                  color: 'page.text.100',
                  display: 'flex',
                  gap: 'xs',
                  px: 'sm',
                  py: '1',
                  rounded: 'full',
                  textStyle: 'label-sm',
                  transitionDuration: 'normal',
                  transitionProperty: 'background-color, color',
                  '&[data-state=done]': { color: 'page.text.200' },
                  '&[data-state=current]': {
                    bgColor: 'action.ghost.hover',
                    color: 'page.text.initial',
                  },
                })}
              >
                <span
                  className={css({
                    bgColor: 'page.border.200',
                    display: 'inline-block',
                    h: '1.5',
                    rounded: 'full',
                    transitionDuration: 'normal',
                    transitionProperty: 'background-color',
                    w: '1.5',
                    '[data-state=done] > &': { bgColor: 'success.bg.initial' },
                    '[data-state=current] > &': {
                      bgColor: 'action.bg.initial',
                    },
                  })}
                />
                {stage}
              </li>
            ))}
          </ol>
          {motion && (
            <Button
              size="sm"
              usage="ghost"
              shape="sharp"
              aria-pressed={!playing}
              aria-label={
                playing
                  ? 'Pause the workflow animation'
                  : 'Play the workflow animation'
              }
              onClick={() => setPlaying((p) => !p)}
            >
              <Button.Icon>{playing ? <Pause /> : <Play />}</Button.Icon>
            </Button>
          )}
        </div>

        {/* The board. A picture of the product, so it is out of the tab order; the story is told below. */}
        <div
          aria-hidden
          inert
          data-animated={motion}
          data-stage={state.stage}
          className={cx(
            css({
              display: 'grid',
              gap: 'md',
              gridTemplateColumns: 'minmax(0, 1fr)',
              p: 'md',
              sm: { gridTemplateColumns: 'minmax(0, 1fr) minmax(0, 1fr)' },
            }),
            phoneStage,
          )}
        >
          <div data-column className={column}>
            <div data-piece="idea" data-stage-of="0" className={card}>
              <div
                className={css({
                  alignItems: 'center',
                  display: 'flex',
                  justifyContent: 'space-between',
                })}
              >
                <Who role="designer">Priya · Designer</Who>
                <Tag shape="pill" usage="outlined">
                  Idea
                </Tag>
              </div>
              <Field label="What should we build?">
                <Textarea
                  name="loop-idea"
                  readOnly
                  rows={3}
                  value={state.idea}
                />
              </Field>
            </div>

            <div
              data-stage-of="1"
              className={css({ display: 'flex', flexDir: 'column', gap: 'md' })}
            >
              <div data-piece="proto" className={card}>
                <p
                  className={css({
                    color: 'page.text.initial',
                    textStyle: 'heading-2xs',
                  })}
                >
                  Book a trip
                </p>
                <Field>
                  <DatePicker name="loop-dates" selectionMode="range">
                    <DatePicker.Label>Dates</DatePicker.Label>
                    <DatePicker.RangeInputGroup />
                  </DatePicker>
                </Field>
                <Field label="Travelers">
                  <NumberInput
                    name="loop-travelers"
                    defaultValue="2"
                    max={9}
                    min={1}
                  />
                </Field>
                <Button shape="sharp" size="sm">
                  Request quote
                </Button>
              </div>

              <div
                className={css({
                  display: 'flex',
                  flexWrap: 'wrap',
                  gap: 'xs',
                })}
              >
                <span data-piece="tag">
                  <Tag palette="warning" shape="pill">
                    Booking fast
                  </Tag>
                </span>
                <span data-piece="tag">
                  <Tag palette="info" shape="pill">
                    Best price
                  </Tag>
                </span>
                <span data-piece="tag">
                  <Tag palette="success" shape="pill" usage="outlined">
                    Accessible
                  </Tag>
                </span>
              </div>
            </div>
          </div>

          <div data-column className={column}>
            <div
              data-stage-of="2"
              className={css({ display: 'flex', flexDir: 'column', gap: 'md' })}
            >
              <div
                data-piece="build"
                className={cx(
                  card,
                  css({
                    alignItems: 'center',
                    flexDir: 'row',
                    justifyContent: 'space-between',
                  }),
                )}
              >
                <span
                  className={css({
                    alignItems: 'center',
                    display: 'flex',
                    gap: 'sm',
                  })}
                >
                  <span
                    className={css({
                      alignItems: 'center',
                      bgColor: 'action.ghost.hover',
                      color: 'page.text.initial',
                      display: 'inline-flex',
                      h: '8',
                      justifyContent: 'center',
                      rounded: 'full',
                      w: '8',
                    })}
                  >
                    <Bot />
                  </span>
                  <span className={css({ display: 'flex', flexDir: 'column' })}>
                    <span
                      className={css({
                        color: 'page.text.200',
                        textStyle: 'label-sm',
                      })}
                    >
                      Assigned to
                    </span>
                    <span
                      className={css({
                        color: 'page.text.initial',
                        textStyle: 'label-md',
                      })}
                    >
                      form-agent
                    </span>
                  </span>
                </span>
                <Switch checked={state.ready} size="sm">
                  Ready
                </Switch>
              </div>

              <pre
                data-piece="code"
                className={css({
                  bgColor: 'page.bg.initial',
                  border: '1px solid',
                  borderColor: 'page.border.initial',
                  color: 'page.text.200',
                  fontFamily: 'mono',
                  overflow: 'hidden',
                  p: 'sm',
                  rounded: 'md',
                  textStyle: 'label-sm',
                  whiteSpace: 'pre',
                })}
              >
                {`<DatePicker selectionMode="range">
  <DatePicker.RangeInputGroup />
</DatePicker>`}
              </pre>
            </div>

            <div data-piece="review" data-stage-of="3" className={card}>
              <div
                className={css({
                  alignItems: 'center',
                  display: 'flex',
                  justifyContent: 'space-between',
                })}
              >
                <Who role="developer">Jordan · Developer</Who>
                <span
                  className={css({
                    color: 'page.text.200',
                    fontVariantNumeric: 'tabular-nums',
                    textStyle: 'label-sm',
                  })}
                >
                  {state.checks}/{CHECKS} checks
                </span>
              </div>
              <ProgressBar
                id="loop-checks"
                label="Checks passing"
                now={(state.checks / CHECKS) * 100}
                usage="rounded"
              />
              <div
                className={css({
                  alignItems: 'center',
                  display: 'flex',
                  justifyContent: 'space-between',
                  gap: 'sm',
                })}
              >
                <Checkbox
                  checked={state.approved}
                  ids={{ control: 'loop-approved' }}
                  size="sm"
                >
                  Design approved
                </Checkbox>
                <Rating readOnly size="sm" value={state.rating} />
              </div>
            </div>

            <div data-piece="ship" data-stage-of="4">
              <Admonition heading="Live in production" palette="success">
                Shipped to every user. Nothing was rebuilt by hand.
              </Admonition>
            </div>
          </div>
        </div>

        <p
          aria-hidden
          className={css({
            borderTop: '1px solid',
            borderColor: 'page.border.initial',
            color: 'page.text.200',
            px: 'md',
            py: 'sm',
            textStyle: 'label-sm',
          })}
        >
          {STORY[state.stage]}
        </p>
      </div>
      <figcaption
        className={css({ color: 'page.text.100', textStyle: 'label-sm' })}
      >
        One feature, idea to production, built from real Cerberus components.
      </figcaption>
      <ol className={css({ srOnly: true })}>
        {STAGES.map((stage, i) => (
          <li key={stage}>
            {stage}: {STORY[i]}
          </li>
        ))}
      </ol>
    </figure>
  )
}
