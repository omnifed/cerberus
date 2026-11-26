'use client'

import { Pause, Play } from '@carbon/icons-react'
import { Button, Tag } from '@cerberus-design/react'
import { useEffect, useRef, useState } from 'react'
import { css, cx } from 'styled-system/css'
import { Beat, plateCaption } from './beat'
import { useExperience } from './experience'

/** The loop, one step at a time. The last step is the resting frame. */
const STEPS = [
  'A designer selects the confirm button on the canvas.',
  'They change its shape, and the change is code in the same workspace.',
  'An agent opens a pull request for it.',
  'Checks run against the whole system.',
  'A developer approves and merges.',
  'The prototype is promoted to production.',
] as const

const LAST = STEPS.length - 1

const DOTS = {
  designer: css({ bgColor: 'dataViz.qualitative.100' }),
  developer: css({ bgColor: 'dataViz.qualitative.300' }),
  agent: css({ bgColor: 'dataViz.qualitative.500' }),
}

/** Which mind did this: the same colored dot as the hero's legend. */
function Dot(props: { color: keyof typeof DOTS }) {
  return (
    <span
      aria-hidden
      className={cx(
        DOTS[props.color],
        css({
          display: 'inline-block',
          h: '2',
          mr: 'xs',
          rounded: 'full',
          verticalAlign: 'middle',
          w: '2',
        }),
      )}
    />
  )
}

/** Earlier work in the same repository, so the Git pane is never empty. */
const HISTORY = [
  '#2840 Booking form: prototype to production · in production',
  '#2839 Add a seats field to the booking form · merged',
]

/**
 * 05 · The workspace. Where the ecosystem is going: one place for designers,
 * developers and agents. It is labelled as in development, because it is.
 */
export function Workspace() {
  return (
    <Beat
      id="workspace"
      pose="workspace"
      label="What’s next"
      heading="Next: one workspace for the whole team."
      layout="stacked"
      plate={<WorkspaceMock />}
      aside={
        <p>
          <Tag palette="info" shape="pill" usage="outlined">
            In development
          </Tag>
        </p>
      }
    >
      <p>
        We are building one place where designers and developers work side by
        side, without a stack of third-party tools: Git, a design canvas and a
        code editor built in, agents working in all of them, and the Cerberus
        ecosystem underneath.
      </p>
      <p>
        Designs open their own pull requests. Prototypes move from demo to
        production. Developers ship. Everything above this section ships today,
        and each piece is a step toward it.
      </p>
    </Beat>
  )
}

const paneBase = css({
  bgColor: 'page.surface.100',
  border: '1px solid',
  borderColor: 'page.border.initial',
  display: 'flex',
  flexDir: 'column',
  gap: 'sm',
  minW: '0',
  p: 'md',
  rounded: 'lg',
  transitionDuration: 'slow',
  transitionProperty: 'border-color, box-shadow',
  '&[data-active=true]': {
    borderColor: 'action.border.focus',
    boxShadow: 'lg',
  },
})

const paneTitle = css({
  color: 'page.text.100',
  fontFamily: 'mono',
  textStyle: 'label-sm',
})

const line = css({
  fontFamily: 'mono',
  textStyle: 'label-sm',
  transitionDuration: 'slow',
  transitionProperty: 'opacity, transform',
  '&[data-shown=false]': { opacity: 0, transform: 'translateY(4px)' },
})

function WorkspaceMock() {
  const { motion } = useExperience()
  const [step, setStep] = useState<number>(LAST)
  const [playing, setPlaying] = useState(true)
  const [cycle, setCycle] = useState(0)
  const ref = useRef<HTMLDivElement>(null)
  const stepRef = useRef(step)

  useEffect(() => {
    const el = ref.current
    if (!el || !motion || !playing) return
    let timer: number | undefined
    const start = () => {
      if (timer !== undefined) return
      timer = window.setInterval(() => {
        const next = stepRef.current >= LAST ? 0 : stepRef.current + 1
        if (next === 0) setCycle((c) => c + 1)
        stepRef.current = next
        setStep(next)
      }, 1900)
    }
    const stop = () => {
      window.clearInterval(timer)
      timer = undefined
    }
    const observer = new IntersectionObserver(([entry]) =>
      entry.isIntersecting && !document.hidden ? start() : stop(),
    )
    observer.observe(el)
    return () => {
      observer.disconnect()
      stop()
    }
  }, [motion, playing])

  // Each loop alternates the tweak, so the canvas always shows a change.
  const rounded = cycle % 2 === 0
  const from = rounded ? 'sharp' : 'rounded'
  const to = rounded ? 'rounded' : 'sharp'
  const shape = step === 0 ? from : to
  const checks = step < 3 ? 0 : step === 3 ? 7 : 12
  const at = (n: number) => String(step >= n)

  return (
    <figure
      ref={ref}
      className={css({
        display: 'flex',
        flexDir: 'column',
        gap: 'sm',
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
          <p className={cx(paneTitle, css({ color: 'page.text.initial' }))}>
            booking-app · main
          </p>
          {motion && (
            <Button
              size="sm"
              usage="ghost"
              shape="sharp"
              aria-pressed={!playing}
              onClick={() => setPlaying((p) => !p)}
            >
              <Button.Icon>{playing ? <Pause /> : <Play />}</Button.Icon>
              {playing ? 'Pause' : 'Play'}
            </Button>
          )}
        </div>

        {/* The picture. The same story is told in words just below for screen readers. */}
        <div
          aria-hidden
          className={css({
            display: 'grid',
            gap: 'md',
            gridTemplateColumns: 'minmax(0, 1fr)',
            p: 'md',
            md: { gridTemplateColumns: 'minmax(0, 3fr) minmax(0, 2fr)' },
            lg: {
              gridTemplateColumns:
                'minmax(0, 4fr) minmax(0, 3fr) minmax(0, 3fr)',
            },
          })}
        >
          <section
            data-active={step <= 1}
            className={cx(paneBase, css({ lg: { gridRow: 'span 2' } }))}
          >
            <p className={paneTitle}>Canvas</p>
            <div
              className={css({
                alignItems: 'center',
                backgroundImage:
                  'radial-gradient(circle, token(colors.page.border.initial) 1px, transparent 1px)',
                backgroundSize: '1rem 1rem',
                display: 'flex',
                flex: '1',
                justifyContent: 'center',
                minH: '12rem',
                rounded: 'md',
              })}
            >
              <div
                className={css({
                  outline: '1px dashed',
                  outlineColor:
                    step === 0 ? 'dataViz.qualitative.100' : 'transparent',
                  outlineOffset: '0.375rem',
                  transitionDuration: 'slow',
                  transitionProperty: 'outline-color',
                })}
              >
                <Button shape={shape} tabIndex={-1}>
                  Confirm booking
                </Button>
              </div>
            </div>
            <p
              className={css({ color: 'page.text.200', textStyle: 'label-sm' })}
            >
              <Dot color="designer" /> Priya · shape: {shape}
            </p>
          </section>

          <section data-active={step === 1} className={paneBase}>
            <p className={paneTitle}>booking-form.tsx</p>
            <p className={line}>{'<Button'}</p>
            <p
              data-shown={at(1)}
              className={cx(
                line,
                css({
                  color: 'danger.text.100',
                  textDecoration: 'line-through',
                }),
              )}
            >
              {`-  shape="${from}"`}
            </p>
            <p
              data-shown={at(1)}
              className={cx(line, css({ color: 'success.text.100' }))}
            >
              {`+  shape="${to}"`}
            </p>
            <p className={line}>{'>'}</p>
          </section>

          <section data-active={step === 2} className={paneBase}>
            <p className={paneTitle}>Agent</p>
            <p
              data-shown={String(step < 2)}
              className={cx(line, css({ color: 'page.text.200' }))}
            >
              Watching the canvas for changes…
            </p>
            <p data-shown={at(2)} className={line}>
              <Dot color="agent" /> Opened PR #2841
            </p>
            <p
              data-shown={at(2)}
              className={cx(line, css({ color: 'page.text.200' }))}
            >
              “Round the confirm button”
            </p>
          </section>

          <section
            data-active={step === 3 || step === 4}
            className={cx(
              paneBase,
              css({
                md: { gridColumn: '1 / -1' },
                lg: { gridColumn: 'span 2' },
              }),
            )}
          >
            <p className={paneTitle}>Git</p>
            <div
              className={css({
                alignItems: 'center',
                display: 'flex',
                gap: 'sm',
              })}
            >
              <span
                className={css({
                  bgColor: 'page.surface.300',
                  flex: '1',
                  h: '1',
                  overflow: 'hidden',
                  rounded: 'full',
                })}
              >
                <span
                  className={css({
                    bgColor: 'success.bg.initial',
                    display: 'block',
                    h: 'full',
                    transitionDuration: 'slower',
                    transitionProperty: 'width',
                  })}
                  style={{ width: `${(checks / 12) * 100}%` }}
                />
              </span>
              <span
                className={cx(
                  line,
                  css({ fontVariantNumeric: 'tabular-nums' }),
                )}
              >
                {checks}/12 checks
              </span>
            </div>
            <p data-shown={at(4)} className={line}>
              <Dot color="developer" /> Jordan approved and merged #2841
            </p>
            <ul
              className={css({
                borderTop: '1px solid',
                borderColor: 'page.border.initial',
                display: 'flex',
                flexDir: 'column',
                gap: 'xs',
                mt: 'xs',
                pt: 'sm',
              })}
            >
              {HISTORY.map((entry) => (
                <li
                  key={entry}
                  className={cx(line, css({ color: 'page.text.100' }))}
                >
                  {entry}
                </li>
              ))}
            </ul>
          </section>
        </div>

        <div
          aria-hidden
          className={css({
            alignItems: 'center',
            borderTop: '1px solid',
            borderColor: 'page.border.initial',
            display: 'flex',
            gap: 'sm',
            minH: '2.75rem',
            px: 'md',
            py: 'sm',
          })}
        >
          <span data-shown={at(5)} className={line}>
            <Tag palette="success" shape="pill" usage="filled">
              Promoted to production
            </Tag>
          </span>
          <span className={cx(paneTitle, css({ ml: 'auto' }))}>
            {STEPS[step]}
          </span>
        </div>
      </div>

      <figcaption className={plateCaption}>
        A concept of the workspace in development. The button on the canvas is a
        real Cerberus component.
      </figcaption>
      <ol className={css({ srOnly: true })}>
        {STEPS.map((s) => (
          <li key={s}>{s}</li>
        ))}
      </ol>
    </figure>
  )
}
