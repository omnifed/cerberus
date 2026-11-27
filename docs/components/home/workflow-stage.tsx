'use client'

import {
  Checkmark,
  CheckmarkFilled,
  CircleDash,
  Document,
  Folder,
  InProgress,
  Locked,
  Pause,
  Play,
} from '@carbon/icons-react'
import {
  Admonition,
  Button,
  Checkbox,
  DatePicker,
  Field,
  NumberInput,
  parseDate,
  Radio,
  RadioGroup,
  Rating,
  Switch,
  Tabs,
  Tag,
} from '@cerberus-design/react'
import { gsap } from 'gsap'
import {
  useEffect,
  useId,
  useRef,
  useState,
  type CSSProperties,
  type ReactNode,
} from 'react'
import { css, cx } from 'styled-system/css'
import {
  ClaudeByline,
  ClaudeComposer,
  ClaudeUserMessage,
} from './claude-prompt'
import { useExperience } from './experience'

/*
 * The hero's product: one feature going from a page of comments to
 * production. Every stage is on screen from its first frame; what moves is
 * the work done on top of it.
 */

type Role = 'designer' | 'developer' | 'agent'

const PROMPT = 'Add a price breakdown under travelers. Use our tokens.'

interface Stage {
  id: string
  label: string
  /** What happens here, for screen readers and the status line. */
  story: string
  /** Seconds this stage plays before the next one. */
  duration: number
  /** When each beat lands, in seconds. The beat count is the finished frame. */
  beats: number[]
  /** Text typed during the stage: when it starts, how long it takes. */
  type?: { at: number; duration: number }
}

/*
 * The code the agent writes in the Build stage. `add` lines are typed in;
 * the rest were already in the file.
 */
const CODE: { text: string; add?: boolean }[] = [
  { text: "import { Button, Field, … } from '@cerberus-design/react'" },
  { text: "import { css } from 'styled-system/css'" },
  { text: "import { PriceSummary } from './price-summary'", add: true },
  { text: '' },
  { text: 'export function BookingForm() {' },
  { text: '  return (' },
  {
    text: "    <form className={css({ display: 'grid', gap: 'md' })}>",
    add: true,
  },
  { text: '      <Field>', add: true },
  {
    text: '        <DatePicker name="dates" selectionMode="range">',
    add: true,
  },
  { text: '          <DatePicker.Label>Dates</DatePicker.Label>', add: true },
  { text: '          <DatePicker.RangeInputGroup />', add: true },
  { text: '        </DatePicker>', add: true },
  { text: '      </Field>', add: true },
  { text: '      <Field label="Travelers">', add: true },
  {
    text: '        <NumberInput name="travelers" min={1} max={9} />',
    add: true,
  },
  { text: '      </Field>', add: true },
  { text: '      <PriceSummary travelers={2} nights={4} />', add: true },
  { text: '      <Button shape="sharp" type="submit">', add: true },
  { text: '        Confirm booking', add: true },
  { text: '      </Button>', add: true },
  { text: '    </form>', add: true },
  { text: '  )' },
  { text: '}' },
]
const CODE_TYPED = CODE.filter((l) => l.add).reduce(
  (n, l) => n + l.text.length,
  0,
)

const STAGES: Stage[] = [
  {
    id: 'idea',
    label: 'Idea',
    story:
      'Idea: a booking page made of Cerberus components. A designer, a developer and an agent leave comments on it, and each one is resolved.',
    duration: 9.4,
    beats: [0.4, 1.9, 3.0, 4.4, 5.6, 7.0, 8.2],
  },
  {
    id: 'prototype',
    label: 'Prototype',
    story: `Prototype: the designer asks Claude, “${PROMPT}” Claude adds a price summary to the page, built from the same components and tokens.`,
    duration: 8.2,
    beats: [2.7, 2.95, 4.0, 4.6],
    type: { at: 0.4, duration: 2.0 },
  },
  {
    id: 'build',
    label: 'Build',
    story:
      'Build: an agent reads the Cerberus docs, writes the booking form with Field, DatePicker, NumberInput and Button, runs the tests and opens a pull request for review.',
    duration: 9.4,
    beats: [0.3, 0.6, 5.9, 6.4, 7.3, 7.9],
    type: { at: 0.7, duration: 5.0 },
  },
  {
    id: 'production',
    label: 'Production',
    story:
      'Production: every check passes, the pull request is merged, and the same booking form is live for every user.',
    duration: 7,
    beats: [0.8, 1.4, 2.2, 3.0],
  },
]

const TYPE_LENGTH: Record<string, number> = {
  prototype: PROMPT.length,
  build: CODE_TYPED,
}

const finalBeat = (i: number) => STAGES[i].beats.length

const DOT: Record<Role, string> = {
  designer: css({ bgColor: 'dataViz.qualitative.100' }),
  developer: css({ bgColor: 'dataViz.qualitative.300' }),
  agent: css({ bgColor: 'dataViz.qualitative.500' }),
}

function Dot(props: { role: Role }) {
  return (
    <span
      aria-hidden
      className={cx(
        DOT[props.role],
        css({
          display: 'inline-block',
          flexShrink: 0,
          h: '2',
          rounded: 'full',
          w: '2',
        }),
      )}
    />
  )
}

// Fixed dates, so the server and the client render the same thing.
const DATES = [parseDate('2027-05-14'), parseDate('2027-05-18')]

/* ------------------------------------------------------------------------ */
/* Artboard: lays a stage out at a design width and scales it down to fit.  */
/* ------------------------------------------------------------------------ */

const ARTBOARD_REM = 40

function Artboard(props: { children: ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null)
  const [box, setBox] = useState({ scale: 1, width: 0, height: 0 })

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const rem = Number.parseFloat(
      getComputedStyle(document.documentElement).fontSize,
    )
    const design = ARTBOARD_REM * rem
    const observer = new ResizeObserver(([entry]) => {
      const { width, height } = entry.contentRect
      // Hidden panels measure zero; keep the last good frame.
      if (width === 0 || height === 0) return
      const scale = Math.min(1, width / design)
      setBox({ scale, width: Math.max(design, width), height: height / scale })
    })
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  const style: CSSProperties | undefined = box.width
    ? {
        height: box.height,
        transform: `scale(${box.scale})`,
        width: box.scale < 1 ? box.width : '100%',
      }
    : undefined

  return (
    <div
      ref={ref}
      className={css({ h: 'full', minW: '0', overflow: 'hidden', w: 'full' })}
    >
      <div
        style={style}
        className={cx(
          css({ h: 'full', transformOrigin: 'top left', w: 'full' }),
          props.className,
        )}
      >
        {props.children}
      </div>
    </div>
  )
}

/* ------------------------------------------------------------------------ */
/* The booking page: real components, used in three stages.                 */
/* ------------------------------------------------------------------------ */

interface BookingPageProps {
  /** The tag on the price is the right palette (after the agent's comment). */
  tagFixed: boolean
  /** The price breakdown Claude adds in the Prototype stage. */
  summary: 'none' | 'new' | 'shipped'
  /** Comment pins, anchored to the parts they are about. */
  pins?: { dates?: ReactNode; tag?: ReactNode; price?: ReactNode }
}

const anchor = css({ pos: 'relative' })

const ADDONS = [
  { id: 'insurance', label: 'Insurance', price: '+$38', on: true },
  { id: 'transfer', label: 'Transfer', price: '+$24', on: false },
  { id: 'checkout', label: 'Late checkout', price: '+$15', on: false },
]

function PriceSummary(props: { fresh: boolean }) {
  const row = css({
    color: 'page.text.200',
    display: 'flex',
    justifyContent: 'space-between',
    textStyle: 'body-sm',
  })
  return (
    <div
      data-fresh={props.fresh}
      className={css({
        bgColor: 'page.surface.100',
        border: '1px solid',
        borderColor: 'page.border.initial',
        display: 'flex',
        flexDir: 'column',
        gap: 'xs',
        p: 'sm',
        pos: 'relative',
        rounded: 'md',
        '&[data-fresh=true]': {
          outline: '2px solid',
          outlineColor: 'action.border.focus',
          outlineOffset: '3px',
          _motionSafe: {
            animation: 'pinDrop 0.5s cubic-bezier(0.22, 1, 0.36, 1)',
          },
        },
      })}
    >
      {props.fresh && (
        <span
          className={css({
            alignItems: 'center',
            bgColor: 'action.bg.initial',
            color: 'action.text.initial',
            display: 'inline-flex',
            gap: '1',
            pos: 'absolute',
            px: 'xs',
            right: '0',
            rounded: 'xs',
            textStyle: 'label-sm',
            top: '-1.6rem',
          })}
        >
          New · Claude
        </span>
      )}
      <p className={row}>
        <span>2 travelers × 4 nights</span>
        <span className={css({ fontVariantNumeric: 'tabular-nums' })}>
          $840
        </span>
      </p>
      <p className={row}>
        <span>Taxes and fees</span>
        <span className={css({ fontVariantNumeric: 'tabular-nums' })}>$96</span>
      </p>
      <p
        className={cx(
          row,
          css({
            borderTop: '1px solid',
            borderColor: 'page.border.initial',
            color: 'page.text.initial',
            fontWeight: 600,
            pt: 'xs',
          }),
        )}
      >
        <span>Total</span>
        <span className={css({ fontVariantNumeric: 'tabular-nums' })}>
          $936
        </span>
      </p>
    </div>
  )
}

function BookingPage(props: BookingPageProps) {
  const id = useId()
  return (
    <div
      className={css({
        bgColor: 'page.bg.initial',
        color: 'page.text.initial',
        display: 'flex',
        flexDir: 'column',
        gap: 'lg',
        p: 'lg',
      })}
    >
      <div
        className={css({
          alignItems: 'flex-end',
          display: 'flex',
          justifyContent: 'space-between',
        })}
      >
        <div>
          <p className={css({ textStyle: 'heading-sm' })}>Book a trip</p>
          <p className={css({ color: 'page.text.200', textStyle: 'body-sm' })}>
            Athens to Santorini · ferry and hotel
          </p>
        </div>
        <p
          className={css({
            color: 'page.text.100',
            display: 'flex',
            gap: 'md',
            textStyle: 'label-sm',
          })}
        >
          <span>Trips</span>
          <span>Saved</span>
          <span>Help</span>
        </p>
      </div>

      <div
        className={css({
          display: 'grid',
          gap: 'lg',
          gridTemplateColumns: 'minmax(0, 3fr) minmax(0, 2fr)',
        })}
      >
        <div className={css({ display: 'flex', flexDir: 'column', gap: 'md' })}>
          <div className={anchor}>
            <Field>
              <DatePicker
                name={`${id}-dates`}
                selectionMode="range"
                defaultValue={DATES}
              >
                <DatePicker.Label>Dates</DatePicker.Label>
                <DatePicker.RangeInputGroup />
              </DatePicker>
            </Field>
            {props.pins?.dates}
          </div>
          <Field label="Travelers">
            <NumberInput
              name={`${id}-travelers`}
              defaultValue="2"
              max={9}
              min={1}
            />
          </Field>
          {props.summary !== 'none' && (
            <PriceSummary fresh={props.summary === 'new'} />
          )}
          <div
            className={css({ display: 'flex', flexDir: 'column', gap: 'xs' })}
          >
            <p className={css({ textStyle: 'label-sm' })}>Cabin</p>
            <RadioGroup
              aria-label="Cabin"
              name={`${id}-cabin`}
              defaultValue="deck"
              orientation="horizontal"
              className={css({ columnGap: 'md' })}
            >
              <Radio value="deck">Deck</Radio>
              <Radio value="cabin">Cabin</Radio>
              <Radio value="suite">Suite</Radio>
            </RadioGroup>
          </div>
        </div>

        <div
          className={css({
            alignSelf: 'start',
            bgColor: 'page.surface.100',
            border: '1px solid',
            borderColor: 'page.border.initial',
            display: 'flex',
            flexDir: 'column',
            gap: 'sm',
            p: 'md',
            rounded: 'lg',
          })}
        >
          <div className={cx(anchor, css({ w: 'fit' }))}>
            <Tag
              palette={props.tagFixed ? 'success' : 'warning'}
              shape="pill"
              usage="outlined"
            >
              Best price
            </Tag>
            {props.pins?.tag}
          </div>
          <p className={css({ textStyle: 'heading-2xs' })}>4 nights · Oia</p>
          <Rating readOnly size="sm" value={5} />
          <div className={anchor}>
            <p
              className={css({
                fontVariantNumeric: 'tabular-nums',
                textStyle: 'heading-md',
              })}
            >
              $936
            </p>
            {props.pins?.price}
          </div>
          <Switch checked size="sm">
            Flexible dates
          </Switch>
          <Button shape="sharp" size="sm">
            Confirm booking
          </Button>
        </div>
      </div>

      <div className={css({ display: 'flex', flexDir: 'column', gap: 'xs' })}>
        <p className={css({ textStyle: 'label-sm' })}>Add-ons</p>
        <div
          className={css({
            display: 'grid',
            gap: 'sm',
            gridTemplateColumns: 'repeat(3, minmax(0, 1fr))',
          })}
        >
          {ADDONS.map((addon) => (
            <div
              key={addon.id}
              className={css({
                alignItems: 'center',
                border: '1px solid',
                borderColor: 'page.border.initial',
                display: 'flex',
                gap: 'sm',
                justifyContent: 'space-between',
                px: 'sm',
                py: 'xs',
                rounded: 'md',
              })}
            >
              <Checkbox
                defaultChecked={addon.on}
                ids={{ control: `${id}-${addon.id}` }}
                size="sm"
              >
                {addon.label}
              </Checkbox>
              <span
                className={css({
                  color: 'page.text.200',
                  fontVariantNumeric: 'tabular-nums',
                  textStyle: 'label-sm',
                })}
              >
                {addon.price}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

/* ------------------------------------------------------------------------ */
/* Stage 1: Idea. A page of components, and the comments on it.             */
/* ------------------------------------------------------------------------ */

interface Comment {
  id: 'dates' | 'tag' | 'price'
  role: Role
  who: string
  text: string
  reply: { role: Role; who: string; text: string }
  /** The beats when it opens, is resolved, and folds back into its pin. */
  at: [number, number, number]
  /** Which way the card opens from its pin. */
  side: 'left' | 'right'
}

const COMMENTS: Comment[] = [
  {
    id: 'price',
    role: 'designer',
    who: 'Priya · Designer',
    text: 'Can travelers see the total before they confirm?',
    reply: {
      role: 'developer',
      who: 'Jordan',
      text: 'Prototyping a price breakdown next.',
    },
    at: [1, 2, 3],
    side: 'left',
  },
  {
    id: 'dates',
    role: 'developer',
    who: 'Jordan · Developer',
    text: 'Past dates are selectable. The range needs a min.',
    reply: { role: 'agent', who: 'form-agent', text: 'Set min to today.' },
    at: [3, 4, 5],
    side: 'left',
  },
  {
    id: 'tag',
    role: 'agent',
    who: 'form-agent · Agent',
    text: 'A warning tag on a price reads like an error. Use success?',
    reply: { role: 'designer', who: 'Priya', text: 'Yes. Swapped.' },
    at: [5, 6, 7],
    side: 'left',
  },
]

type CommentState = 'hidden' | 'open' | 'resolved' | 'done'

function commentState(c: Comment, beat: number): CommentState {
  if (beat < c.at[0]) return 'hidden'
  if (beat < c.at[1]) return 'open'
  if (beat < c.at[2]) return 'resolved'
  return 'done'
}

function CommentPin(props: { comment: Comment; n: number; beat: number }) {
  const { comment: c } = props
  const state = commentState(c, props.beat)
  if (state === 'hidden') return null
  const resolved = state !== 'open'
  return (
    <span
      className={css({
        pos: 'absolute',
        right: '-0.5rem',
        top: '-0.5rem',
        zIndex: '1',
      })}
    >
      <span
        key={resolved ? 'resolved' : 'open'}
        data-resolved={resolved}
        className={cx(
          DOT[c.role],
          css({
            alignItems: 'center',
            boxShadow: 'md',
            color: 'page.text.inverse',
            display: 'inline-flex',
            fontWeight: 600,
            h: '6',
            justifyContent: 'center',
            outline: '2px solid',
            outlineColor: 'page.bg.initial',
            rounded: 'full',
            textStyle: 'label-sm',
            w: '6',
            _motionSafe: {
              animation: 'pinDrop 0.45s cubic-bezier(0.22, 1, 0.36, 1)',
            },
            '&[data-resolved=true]': {
              bgColor: 'success.bg.initial',
              color: 'success.text.initial',
            },
          }),
        )}
      >
        {resolved ? <Checkmark size={14} /> : props.n}
      </span>
      {state !== 'done' && (
        <span
          data-side={c.side}
          className={css({
            bgColor: 'page.surface.initial',
            border: '1px solid',
            borderColor: 'page.border.initial',
            boxShadow: 'xl',
            display: 'flex',
            flexDir: 'column',
            gap: 'xs',
            p: 'sm',
            pos: 'absolute',
            rounded: 'lg',
            top: '1.75rem',
            w: '14rem',
            _motionSafe: {
              animation: 'pinDrop 0.4s cubic-bezier(0.22, 1, 0.36, 1)',
            },
            '&[data-side=left]': { right: '0' },
            '&[data-side=right]': { left: '0' },
          })}
        >
          <span
            className={css({
              alignItems: 'center',
              color: 'page.text.200',
              display: 'flex',
              gap: 'xs',
              textStyle: 'label-sm',
            })}
          >
            <Dot role={c.role} />
            {c.who}
          </span>
          <span
            className={css({
              color: 'page.text.initial',
              textStyle: 'body-sm',
            })}
          >
            {c.text}
          </span>
          {resolved && (
            <span
              className={css({
                borderTop: '1px solid',
                borderColor: 'page.border.initial',
                display: 'flex',
                flexDir: 'column',
                gap: 'xs',
                pt: 'xs',
              })}
            >
              <span
                className={css({
                  alignItems: 'center',
                  color: 'page.text.200',
                  display: 'flex',
                  gap: 'xs',
                  textStyle: 'label-sm',
                })}
              >
                <Dot role={c.reply.role} />
                {c.reply.who}: {c.reply.text}
              </span>
              <span
                className={css({
                  alignItems: 'center',
                  color: 'success.text.100',
                  display: 'flex',
                  gap: 'xs',
                  fontWeight: 600,
                  textStyle: 'label-sm',
                })}
              >
                <CheckmarkFilled size={12} />
                Resolved
              </span>
            </span>
          )}
        </span>
      )}
    </span>
  )
}

/** The design canvas: dot grid, a frame label, and the page as a frame. */
function Canvas(props: { label: string; children: ReactNode }) {
  return (
    <div
      className={css({
        backgroundImage:
          'radial-gradient(circle, token(colors.page.border.initial) 1px, transparent 1px)',
        backgroundSize: '1rem 1rem',
        bgColor: 'page.surface.100',
        display: 'flex',
        flexDir: 'column',
        gap: 'xs',
        h: 'full',
        // The frame sits in the middle of the canvas, as a design file opens.
        justifyContent: 'center',
        overflow: 'hidden',
        px: 'xl',
        py: 'lg',
      })}
    >
      <p className={css({ color: 'page.text.100', textStyle: 'label-sm' })}>
        {props.label}
      </p>
      <div
        className={css({
          border: '1px solid',
          borderColor: 'page.border.initial',
          boxShadow: 'lg',
          rounded: 'md',
        })}
      >
        {props.children}
      </div>
    </div>
  )
}

function IdeaStage(props: { beat: number }) {
  const pins = Object.fromEntries(
    COMMENTS.map((c, i) => [
      c.id,
      <CommentPin key={c.id} comment={c} n={i + 1} beat={props.beat} />,
    ]),
  )
  return (
    <Artboard>
      <Canvas label="Booking · Desktop · 3 comments">
        <BookingPage tagFixed={props.beat >= 6} summary="none" pins={pins} />
      </Canvas>
    </Artboard>
  )
}

/* ------------------------------------------------------------------------ */
/* Stage 2: Prototype. The designer brings Claude in.                       */
/* ------------------------------------------------------------------------ */

function PrototypeStage(props: { beat: number; chars: number }) {
  const { beat } = props
  const sent = beat >= 2
  const replied = beat >= 3
  return (
    <div
      className={css({
        display: 'grid',
        gridTemplateColumns: 'minmax(0, 1fr) 16rem',
        h: 'full',
      })}
    >
      <Artboard>
        <Canvas label="Booking · Desktop · Prototype">
          <BookingPage
            tagFixed
            summary={beat >= 4 ? (beat === 4 ? 'new' : 'shipped') : 'none'}
          />
        </Canvas>
      </Artboard>
      <div
        className={css({
          bgColor: 'page.surface.initial',
          borderColor: 'page.border.initial',
          borderLeft: '1px solid',
          display: 'flex',
          flexDir: 'column',
          gap: 'md',
          justifyContent: 'flex-end',
          minW: '0',
          p: 'md',
        })}
      >
        {sent && (
          <div
            className={css({
              display: 'flex',
              flexDir: 'column',
              gap: 'md',
              _motionSafe: {
                animation: 'pinDrop 0.4s cubic-bezier(0.22, 1, 0.36, 1)',
              },
            })}
          >
            <ClaudeUserMessage>{PROMPT}</ClaudeUserMessage>
            <div
              className={css({ display: 'flex', flexDir: 'column', gap: 'xs' })}
            >
              <ClaudeByline>{replied ? null : 'is working…'}</ClaudeByline>
              {replied && (
                <p
                  className={css({
                    color: 'page.text.initial',
                    textStyle: 'body-sm',
                    textWrap: 'pretty',
                  })}
                >
                  Added a PriceSummary under Travelers, built from Cerberus
                  parts on{' '}
                  <code className={css({ fontFamily: 'mono' })}>
                    page.surface.100
                  </code>
                  . No new colors or sizes.
                </p>
              )}
            </div>
          </div>
        )}
        <ClaudeComposer
          placeholder="Ask Claude to change this design…"
          value={sent ? '' : PROMPT.slice(0, props.chars)}
          typing={!sent && props.chars > 0 && props.chars < PROMPT.length}
          sending={beat === 1}
        />
      </div>
    </div>
  )
}

/* ------------------------------------------------------------------------ */
/* Stage 3: Build. An agent writes it in the editor.                        */
/* ------------------------------------------------------------------------ */

type Kind = 'kw' | 'str' | 'tag' | 'attr' | 'punc' | 'plain'

const TOKEN =
  /('[^']*'|"[^"]*")|\b(import|from|export|function|return)\b|(<\/?)([A-Za-z][\w.]*)|([A-Za-z]+)(?==)|([{}()=,]|\/?>)/g

function tokenize(line: string): [Kind, string][] {
  const out: [Kind, string][] = []
  let last = 0
  for (const m of line.matchAll(TOKEN)) {
    const at = m.index ?? 0
    if (at > last) out.push(['plain', line.slice(last, at)])
    if (m[1]) out.push(['str', m[1]])
    else if (m[2]) out.push(['kw', m[2]])
    else if (m[3]) {
      out.push(['punc', m[3]])
      out.push(['tag', m[4]])
    } else if (m[5]) out.push(['attr', m[5]])
    else out.push(['punc', m[6]])
    last = at + m[0].length
  }
  if (last < line.length) out.push(['plain', line.slice(last)])
  return out
}

const KIND: Record<Kind, string> = {
  kw: css({ color: 'dataViz.qualitative.100' }),
  str: css({ color: 'dataViz.qualitative.300' }),
  tag: css({ color: 'dataViz.qualitative.500' }),
  attr: css({ color: 'page.text.200' }),
  punc: css({ color: 'page.text.100' }),
  plain: css({ color: 'page.text.initial' }),
}

const TOKENS = CODE.map((l) => tokenize(l.text))

const caret = css({
  bgColor: 'page.text.initial',
  display: 'inline-block',
  h: '1em',
  ml: '0.5',
  verticalAlign: 'text-bottom',
  w: '0.5ch',
  _motionSafe: { animation: 'caretBlink 1s steps(1) infinite' },
})

function Editor(props: { chars: number }) {
  let budget = props.chars
  const rows: ReactNode[] = []
  let n = 0
  CODE.forEach((line, i) => {
    let shown = line.text.length
    let typing = false
    if (line.add) {
      if (budget <= 0) return
      shown = Math.min(budget, line.text.length)
      budget -= line.text.length
      typing =
        shown < line.text.length || (budget <= 0 && props.chars < CODE_TYPED)
    }
    n += 1
    let left = shown
    const parts: ReactNode[] = []
    TOKENS[i].forEach(([kind, text], k) => {
      if (left <= 0) return
      parts.push(
        <span key={k} className={KIND[kind]}>
          {text.slice(0, left)}
        </span>,
      )
      left -= text.length
    })
    rows.push(
      <span
        key={i}
        data-add={line.add ?? false}
        className={css({
          display: 'grid',
          gridTemplateColumns: '2.25rem minmax(0, 1fr)',
          minH: '1lh',
          '&[data-add=true]': {
            bgColor: 'success.bg.initial/8',
            boxShadow: 'inset 2px 0 0 token(colors.success.bg.initial)',
          },
        })}
      >
        <span
          className={css({
            color: 'page.text.100',
            pr: 'sm',
            textAlign: 'right',
            userSelect: 'none',
          })}
        >
          {n}
        </span>
        <span className={css({ whiteSpace: 'pre' })}>
          {parts}
          {typing && <span aria-hidden className={caret} />}
        </span>
      </span>,
    )
  })
  return (
    <pre
      className={css({
        fontFamily: 'mono',
        // Recursive's mono axis: a code editor lines up.
        fontVariationSettings: "'MONO' 1",
        lineHeight: '1.6',
        overflow: 'hidden',
        py: 'sm',
        textStyle: 'label-sm',
      })}
    >
      <code
        className={css({
          display: 'block',
          fontFamily: 'mono',
          fontVariationSettings: "'MONO' 1",
          '& *': { fontVariationSettings: 'inherit' },
        })}
      >
        {rows}
      </code>
    </pre>
  )
}

interface Step {
  label: string
  /** Beat it starts at, and beat it finishes at. */
  at: [number, number]
  done?: string
}

const AGENT_STEPS: Step[] = [
  { label: 'Read date-picker.txt docs', at: [1, 1], done: 'via /llms.txt' },
  {
    label: 'Edit booking-form.tsx',
    at: [2, 3],
    done: '+16 lines',
  },
  { label: 'pnpm test', at: [4, 5], done: '12 passed' },
  { label: 'Open PR #2841', at: [6, 6], done: 'Ready for your review' },
]

function StepRow(props: { step: Step; beat: number }) {
  const { step, beat } = props
  const state =
    beat >= step.at[1] ? 'done' : beat >= step.at[0] ? 'running' : 'waiting'
  return (
    <li
      data-state={state}
      className={css({
        alignItems: 'flex-start',
        color: 'page.text.200',
        display: 'flex',
        gap: 'xs',
        fontFamily: 'mono',
        textStyle: 'label-sm',
        transitionDuration: 'normal',
        transitionProperty: 'color, opacity',
        '&[data-state=waiting]': { opacity: 0.45 },
        '&[data-state=running]': { color: 'page.text.initial' },
      })}
    >
      <span className={css({ flexShrink: 0, mt: '0.5' })}>
        {state === 'done' ? (
          <CheckmarkFilled
            size={12}
            className={css({ color: 'success.text.100' })}
          />
        ) : state === 'running' ? (
          <InProgress
            size={12}
            className={css({
              color: 'action.text.200',
              _motionSafe: { animation: 'stageSpin 1.2s linear infinite' },
            })}
          />
        ) : (
          <CircleDash size={12} />
        )}
      </span>
      <span className={css({ display: 'flex', flexDir: 'column' })}>
        <span>{step.label}</span>
        {state === 'done' && step.done && (
          <span className={css({ color: 'success.text.100' })}>
            {step.done}
          </span>
        )}
      </span>
    </li>
  )
}

const FILES = [
  { depth: 0, name: 'src', folder: true },
  { depth: 1, name: 'booking', folder: true },
  { depth: 2, name: 'booking-form.tsx', active: true, mark: 'M' },
  { depth: 2, name: 'price-summary.tsx', mark: 'A' },
  { depth: 2, name: 'booking.test.tsx' },
  { depth: 1, name: 'app', folder: true },
  { depth: 0, name: 'panda.config.ts' },
  { depth: 0, name: 'AGENTS.md' },
]

function BuildStage(props: { beat: number; chars: number }) {
  return (
    <Artboard>
      <div
        className={css({
          bgColor: 'page.bg.initial',
          display: 'grid',
          gridTemplateRows: 'auto minmax(0, 1fr)',
          h: 'full',
        })}
      >
        <div
          className={css({
            alignItems: 'stretch',
            borderBottom: '1px solid',
            borderColor: 'page.border.initial',
            display: 'flex',
            fontFamily: 'mono',
            textStyle: 'label-sm',
          })}
        >
          <span
            className={css({
              alignItems: 'center',
              borderColor: 'page.border.initial',
              borderRight: '1px solid',
              color: 'page.text.100',
              display: 'flex',
              px: 'md',
              w: '11rem',
            })}
          >
            booking-app
          </span>
          <span
            className={css({
              alignItems: 'center',
              bgColor: 'page.surface.100',
              borderBottom: '2px solid',
              borderBottomColor: 'action.bg.initial',
              color: 'page.text.initial',
              display: 'flex',
              gap: 'xs',
              px: 'md',
              py: 'xs',
            })}
          >
            booking-form.tsx
            <span className={css({ color: 'page.text.100' })}>M</span>
          </span>
          <span
            className={css({
              alignItems: 'center',
              color: 'page.text.100',
              display: 'flex',
              px: 'md',
            })}
          >
            price-summary.tsx
          </span>
        </div>
        <div
          className={css({
            display: 'grid',
            gridTemplateColumns: '11rem minmax(0, 1fr)',
            minH: '0',
          })}
        >
          <div
            className={css({
              borderColor: 'page.border.initial',
              borderRight: '1px solid',
              display: 'flex',
              flexDir: 'column',
              justifyContent: 'space-between',
              minH: '0',
              overflow: 'hidden',
            })}
          >
            <ul
              className={css({
                display: 'flex',
                flexDir: 'column',
                fontFamily: 'mono',
                gap: '1',
                py: 'sm',
                textStyle: 'label-sm',
              })}
            >
              {FILES.map((f) => (
                <li
                  key={f.name}
                  data-active={f.active ?? false}
                  style={{ paddingLeft: `${0.75 + f.depth * 0.75}rem` }}
                  className={css({
                    alignItems: 'center',
                    color: 'page.text.200',
                    display: 'flex',
                    gap: 'xs',
                    pr: 'sm',
                    py: '0.5',
                    '&[data-active=true]': {
                      bgColor: 'action.ghost.hover',
                      color: 'page.text.initial',
                    },
                  })}
                >
                  {f.folder ? <Folder size={12} /> : <Document size={12} />}
                  <span
                    className={css({
                      flex: '1',
                      overflow: 'hidden',
                      textOverflow: 'ellipsis',
                      whiteSpace: 'nowrap',
                    })}
                  >
                    {f.name}
                  </span>
                  {f.mark && (
                    <span className={css({ color: 'page.text.100' })}>
                      {f.mark}
                    </span>
                  )}
                </li>
              ))}
            </ul>
            <div
              className={css({
                bgColor: 'page.surface.100',
                borderColor: 'page.border.initial',
                borderTop: '1px solid',
                display: 'flex',
                flexDir: 'column',
                gap: 'sm',
                p: 'sm',
              })}
            >
              <p
                className={css({
                  alignItems: 'center',
                  color: 'page.text.initial',
                  display: 'flex',
                  gap: 'xs',
                  fontWeight: 600,
                  textStyle: 'label-sm',
                })}
              >
                <Dot role="agent" />
                form-agent
              </p>
              <ol
                className={css({
                  display: 'flex',
                  flexDir: 'column',
                  gap: 'xs',
                })}
              >
                {AGENT_STEPS.map((step) => (
                  <StepRow key={step.label} step={step} beat={props.beat} />
                ))}
              </ol>
            </div>
          </div>
          <div className={css({ minW: '0', overflow: 'hidden' })}>
            <Editor chars={props.chars} />
          </div>
        </div>
      </div>
    </Artboard>
  )
}

/* ------------------------------------------------------------------------ */
/* Stage 4: Production. The same form, live.                                */
/* ------------------------------------------------------------------------ */

function ProductionStage(props: { beat: number }) {
  const { beat } = props
  const checks = beat >= 2 ? 12 : beat >= 1 ? 11 : 9
  const live = beat >= 4
  return (
    <Artboard>
      <div
        className={css({
          bgColor: 'page.surface.100',
          display: 'grid',
          gap: 'md',
          gridTemplateRows: 'minmax(0, 1fr) auto',
          h: 'full',
          p: 'md',
        })}
      >
        <div
          className={css({
            bgColor: 'page.bg.initial',
            border: '1px solid',
            borderColor: 'page.border.initial',
            boxShadow: 'lg',
            display: 'grid',
            gridTemplateRows: 'auto minmax(0, 1fr)',
            overflow: 'hidden',
            pos: 'relative',
            rounded: 'lg',
          })}
        >
          <div
            className={css({
              alignItems: 'center',
              borderBottom: '1px solid',
              borderColor: 'page.border.initial',
              display: 'flex',
              gap: 'sm',
              px: 'sm',
              py: 'xs',
            })}
          >
            <span className={css({ display: 'flex', gap: '1' })}>
              {[0, 1, 2].map((d) => (
                <span
                  key={d}
                  className={css({
                    bgColor: 'page.border.200',
                    h: '2',
                    rounded: 'full',
                    w: '2',
                  })}
                />
              ))}
            </span>
            <span
              className={css({
                alignItems: 'center',
                bgColor: 'page.surface.100',
                color: 'page.text.200',
                display: 'flex',
                flex: '1',
                fontFamily: 'mono',
                gap: 'xs',
                justifyContent: 'center',
                mx: 'xl',
                py: '0.5',
                rounded: 'full',
                textStyle: 'label-sm',
              })}
            >
              <Locked size={12} />
              booking.example.com/trips/new
            </span>
          </div>
          <div className={css({ overflow: 'hidden' })}>
            <BookingPage tagFixed summary="shipped" />
          </div>
          {live && (
            <div
              className={css({
                bottom: 'md',
                boxShadow: 'xl',
                pos: 'absolute',
                right: 'md',
                w: '17rem',
                _motionSafe: {
                  animation: 'pinDrop 0.5s cubic-bezier(0.22, 1, 0.36, 1)',
                },
              })}
            >
              <Admonition heading="Live for every user" palette="success">
                Shipped from the prototype. Nothing was rebuilt by hand.
              </Admonition>
            </div>
          )}
        </div>

        <div
          className={css({
            alignItems: 'center',
            bgColor: 'page.bg.initial',
            border: '1px solid',
            borderColor: 'page.border.initial',
            columnGap: 'lg',
            display: 'flex',
            fontFamily: 'mono',
            px: 'md',
            py: 'sm',
            rounded: 'lg',
            textStyle: 'label-sm',
          })}
        >
          <span
            className={css({
              alignItems: 'center',
              color: 'page.text.initial',
              display: 'flex',
              gap: 'xs',
            })}
          >
            <Dot role="developer" />
            #2841 {beat >= 3 ? 'merged by Jordan' : 'approved by Jordan'}
          </span>
          <span
            className={css({
              alignItems: 'center',
              color: checks === 12 ? 'success.text.100' : 'page.text.200',
              display: 'flex',
              fontVariantNumeric: 'tabular-nums',
              gap: 'xs',
            })}
          >
            {checks === 12 ? (
              <CheckmarkFilled size={12} />
            ) : (
              <InProgress
                size={12}
                className={css({
                  _motionSafe: { animation: 'stageSpin 1.2s linear infinite' },
                })}
              />
            )}
            {checks}/12 checks
          </span>
          <span className={css({ ml: 'auto' })}>
            <Tag
              palette={live ? 'success' : 'page'}
              shape="pill"
              usage={live ? 'filled' : 'outlined'}
            >
              {live ? 'In production' : 'Deploying'}
            </Tag>
          </span>
        </div>
      </div>
    </Artboard>
  )
}

/* ------------------------------------------------------------------------ */
/* The window and the director.                                             */
/* ------------------------------------------------------------------------ */

/** Play only while it is wanted, visible and the page is in front. */
function syncTimeline(
  tl: gsap.core.Timeline | null,
  gate: { playing: boolean; visible: boolean },
) {
  if (!tl) return
  if (gate.playing && gate.visible && !document.hidden) tl.play()
  else tl.pause()
}

/**
 * The hero's product window: four stages of one feature, switched with real
 * Cerberus Tabs. While it is on screen it plays each stage and moves on;
 * picking a tab jumps there. Under reduced motion nothing plays, and every
 * tab shows its finished frame.
 */
export function WorkflowStage() {
  const { motion } = useExperience()
  const [stage, setStage] = useState(0)
  // How far the current stage has played. Tagged with its stage, so a stage
  // that has just been picked starts from its first frame.
  const [progress, setProgress] = useState({ stage: -1, beat: 0, chars: 0 })
  const [playing, setPlaying] = useState(true)
  const rootRef = useRef<HTMLElement>(null)
  const fillRefs = useRef<(HTMLSpanElement | null)[]>([])
  const tlRef = useRef<gsap.core.Timeline | null>(null)
  const gate = useRef({ playing: true, visible: false })

  const sync = () => syncTimeline(tlRef.current, gate.current)

  useEffect(() => {
    const root = rootRef.current
    if (!motion || !root) return
    const observer = new IntersectionObserver(([entry]) => {
      gate.current.visible = entry.isIntersecting
      sync()
    })
    observer.observe(root)
    document.addEventListener('visibilitychange', sync)
    return () => {
      observer.disconnect()
      document.removeEventListener('visibilitychange', sync)
    }
  }, [motion])

  useEffect(() => {
    gate.current.playing = playing
    sync()
  }, [playing])

  // Each stage gets its own timeline: its beats, its typing, its progress bar.
  useEffect(() => {
    if (!motion) return
    const def = STAGES[stage]
    const startChars = def.type ? 0 : Number.POSITIVE_INFINITY
    const own = (p: typeof progress) =>
      p.stage === stage ? p : { stage, beat: 0, chars: startChars }
    fillRefs.current.forEach((fill, i) => {
      if (fill) gsap.set(fill, { scaleX: i < stage ? 1 : 0 })
    })
    const tl = gsap.timeline({
      paused: true,
      onComplete: () => setStage((s) => (s + 1) % STAGES.length),
    })
    def.beats.forEach((at, i) =>
      tl.call(
        () => setProgress((p) => ({ ...own(p), beat: i + 1 })),
        undefined,
        at,
      ),
    )
    if (def.type) {
      const total = TYPE_LENGTH[def.id] ?? 0
      const count = { n: 0 }
      tl.to(
        count,
        {
          n: total,
          duration: def.type.duration,
          ease: 'none',
          onUpdate: () =>
            setProgress((p) => ({ ...own(p), chars: Math.round(count.n) })),
        },
        def.type.at,
      )
    }
    const fill = fillRefs.current[stage]
    if (fill) {
      tl.fromTo(
        fill,
        { scaleX: 0 },
        { scaleX: 1, duration: def.duration, ease: 'none' },
        0,
      )
    }
    // A short rest after the last beat, so the finished frame can be read.
    tl.to({}, { duration: Math.max(0, def.duration - tl.duration()) })
    tlRef.current = tl
    sync()
    return () => {
      tl.kill()
      tlRef.current = null
    }
  }, [motion, stage])

  const select = (index: number) => {
    if (index !== stage) setStage(index)
  }

  // Without motion, and for every tab not playing, the finished frame.
  const playingNow = (i: number) => motion && i === stage
  const beatFor = (i: number) =>
    !playingNow(i) ? finalBeat(i) : progress.stage === i ? progress.beat : 0
  const charsFor = (i: number) =>
    !playingNow(i)
      ? Number.POSITIVE_INFINITY
      : progress.stage === i
        ? progress.chars
        : STAGES[i].type
          ? 0
          : Number.POSITIVE_INFINITY

  return (
    <figure
      ref={rootRef}
      data-hero-stage
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
          display: 'grid',
          gridTemplateRows: 'minmax(0, 1fr) auto',
          h: '30rem',
          overflow: 'hidden',
          rounded: 'xl',
          sm: { h: '34rem' },
          xl: { h: '36rem' },
        })}
      >
        <Tabs.Root
          value={STAGES[stage].id}
          onValueChange={(d) => {
            const index = STAGES.findIndex((s) => s.id === d.value)
            if (index >= 0) select(index)
          }}
          className={css({
            display: 'grid',
            gridTemplateRows: 'auto minmax(0, 1fr)',
            minH: '0',
          })}
        >
          <div
            className={css({
              alignItems: 'center',
              borderBottom: '1px solid',
              borderColor: 'page.border.initial',
              display: 'flex',
              gap: 'sm',
              pr: 'sm',
            })}
          >
            <Tabs.List
              aria-label="Stages of one feature"
              className={css({
                borderBottom: 'none',
                flex: '1',
                minW: '0',
                overflowX: 'auto',
                scrollbarWidth: 'none',
              })}
            >
              {STAGES.map((s, i) => (
                <Tabs.Trigger
                  key={s.id}
                  value={s.id}
                  className={css({
                    flexShrink: 0,
                    gap: 'xs',
                    pos: 'relative',
                    px: 'sm',
                    textStyle: 'label-md',
                    md: { px: 'md' },
                  })}
                >
                  <span
                    aria-hidden
                    className={css({
                      color: 'page.text.100',
                      fontFamily: 'mono',
                      fontVariantNumeric: 'tabular-nums',
                      textStyle: 'label-sm',
                    })}
                  >
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  {s.label}
                  <span
                    aria-hidden
                    className={css({
                      bgColor: 'page.border.initial',
                      bottom: '0',
                      h: '2px',
                      insetInline: 'sm',
                      overflow: 'hidden',
                      pos: 'absolute',
                    })}
                  >
                    <span
                      ref={(el) => {
                        fillRefs.current[i] = el
                      }}
                      data-static={!motion && i === stage}
                      className={css({
                        bgColor: 'action.bg.initial',
                        display: 'block',
                        h: 'full',
                        transform: 'scaleX(0)',
                        transformOrigin: 'left',
                        '&[data-static=true]': { transform: 'scaleX(1)' },
                      })}
                    />
                  </span>
                </Tabs.Trigger>
              ))}
            </Tabs.List>
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

          {STAGES.map((s, i) => (
            <Tabs.Content
              key={s.id}
              value={s.id}
              className={css({
                gridColumn: '1',
                gridRow: '2',
                h: 'full',
                minH: '0',
                overflow: 'hidden',
                p: '0',
              })}
            >
              <p className={css({ srOnly: true })}>{s.story}</p>
              {/* A picture of the product, so it stays out of the tab order. */}
              <div aria-hidden inert className={css({ h: 'full' })}>
                {s.id === 'idea' && <IdeaStage beat={beatFor(i)} />}
                {s.id === 'prototype' && (
                  <PrototypeStage beat={beatFor(i)} chars={charsFor(i)} />
                )}
                {s.id === 'build' && (
                  <BuildStage beat={beatFor(i)} chars={charsFor(i)} />
                )}
                {s.id === 'production' && <ProductionStage beat={beatFor(i)} />}
              </div>
            </Tabs.Content>
          ))}
        </Tabs.Root>

        <p
          aria-hidden
          className={css({
            borderTop: '1px solid',
            borderColor: 'page.border.initial',
            color: 'page.text.200',
            overflow: 'hidden',
            px: 'md',
            py: 'sm',
            textOverflow: 'ellipsis',
            textStyle: 'label-sm',
            whiteSpace: 'nowrap',
          })}
        >
          {STAGES[stage].story}
        </p>
      </div>
      <figcaption
        className={css({ color: 'page.text.100', textStyle: 'label-sm' })}
      >
        One feature, idea to production. Every interface here is live Cerberus;
        the people, the prompt and the agent are illustrative.
      </figcaption>
    </figure>
  )
}
