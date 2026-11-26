'use client'

import {
  batch,
  createSignal,
  ReactiveText,
  useRead,
  type Accessor,
  type Setter,
} from '@cerberus-design/signals'
import { useEffect, useRef, useState } from 'react'
import { css, cx } from 'styled-system/css'
import { Beat, plateCaption, plateSurface } from './beat'
import { useExperience } from './experience'
import { InstallLine } from './install-line'
import { codeBlock, textLink } from './styles'

const COLS = 12
const ROWS = 6
const COUNT = COLS * ROWS

const CODE = `const [latency, setLatency] = createSignal(42)

// Only this text updates when latency changes.
<ReactiveText data={latency} />`

interface Cell {
  get: Accessor<number>
  set: Setter<number>
}

// Deterministic starting values, so the server and the client agree.
const seed = (i: number) => 18 + ((i * 37) % 71)

function createBoard() {
  const cells: Cell[] = Array.from({ length: COUNT }, (_, i) => {
    const [get, set] = createSignal(seed(i))
    return { get, set }
  })
  const [updates, setUpdates] = createSignal(0)
  return { cells, updates, setUpdates }
}

/**
 * 05 · Signals. Fine-grained state, shown rather than claimed: a board of
 * live values where only what changed re-renders, and a counter for how many
 * times the board itself has rendered.
 */
export function Signals() {
  return (
    <Beat
      id="signals"
      pose="signals"
      label="Signals"
      heading="Change one value. Not the whole page."
      layout="split-reverse"
      plate={<LiveBoard />}
      aside={
        <div
          className={css({
            display: 'flex',
            flexDir: 'column',
            gap: 'sm',
            maxW: '28rem',
          })}
        >
          <InstallLine command="npm install @cerberus-design/signals" />
          <a
            className={cx(textLink, css({ textStyle: 'label-md', w: 'fit' }))}
            href="/docs/signals/overview"
          >
            Read the Signals guide
          </a>
        </div>
      }
    >
      <p>
        Cerberus Signals gives React fine-grained state. When a value changes,
        only the UI that reads it updates, not the component around it or the
        page.
      </p>
      <p>
        It is what keeps the Data Grid live at scale, and it works anywhere:
        dashboards, forms, anything that streams.
      </p>
    </Beat>
  )
}

/** One live value. Only this re-renders when its signal changes. */
function Tile(props: { cell: Cell }) {
  const value = useRead(props.cell.get)
  return (
    <span
      // A new key replays the flash for each new value.
      key={value}
      className={css({
        color: 'page.text.200',
        fontFamily: 'mono',
        fontVariantNumeric: 'tabular-nums',
        py: '1',
        rounded: 'xs',
        textAlign: 'center',
        textStyle: 'label-sm',
        _motionSafe: { animation: 'signalFlash 1.2s ease-out' },
      })}
    >
      {value}
    </span>
  )
}

function LiveBoard() {
  const { motion } = useExperience()
  const [board] = useState(createBoard)
  const [live, setLive] = useState(true)
  const rendersRef = useRef<HTMLSpanElement>(null)
  const renders = useRef(0)
  const rootRef = useRef<HTMLDivElement>(null)

  // Counts this component's commits. If Signals did its job, it stays put.
  useEffect(() => {
    renders.current += 1
    if (rendersRef.current)
      rendersRef.current.textContent = String(renders.current)
  })

  useEffect(() => {
    const el = rootRef.current
    if (!el || !motion || !live) return
    let timer: number | undefined
    let tick = 0
    const start = () => {
      if (timer !== undefined) return
      timer = window.setInterval(() => {
        tick += 1
        batch(() => {
          for (let k = 0; k < 5; k++) {
            const cell = board.cells[(tick * 29 + k * 13) % COUNT]
            const next = 12 + ((tick * 17 + k * 31) % 88)
            cell.set(next)
          }
          board.setUpdates((n) => n + 5)
        })
      }, 90)
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
  }, [motion, live, board])

  return (
    <div
      ref={rootRef}
      className={cx(
        plateSurface,
        css({ display: 'flex', flexDir: 'column', gap: 'lg' }),
      )}
    >
      <div
        className={css({
          alignItems: 'flex-end',
          display: 'flex',
          flexWrap: 'wrap',
          gap: 'xl',
          justifyContent: 'space-between',
        })}
      >
        <dl className={css({ display: 'flex', gap: '2xl' })}>
          <div>
            <dt className={plateCaption}>Values updated</dt>
            <dd
              className={css({
                fontVariantNumeric: 'tabular-nums',
                textStyle: 'heading-lg',
              })}
            >
              <ReactiveText data={board.updates} />
            </dd>
          </div>
          <div>
            <dt className={plateCaption}>Times this panel rendered</dt>
            <dd
              className={css({
                fontVariantNumeric: 'tabular-nums',
                textStyle: 'heading-lg',
              })}
            >
              <span ref={rendersRef}>1</span>
            </dd>
          </div>
        </dl>
        {motion && (
          <button
            type="button"
            aria-pressed={!live}
            onClick={() => setLive((l) => !l)}
            className={cx(textLink, css({ textStyle: 'label-md' }))}
          >
            {live ? 'Pause updates' : 'Resume updates'}
          </button>
        )}
      </div>

      <div
        role="img"
        aria-label={`${COUNT} live latency values in milliseconds, updating several times a second`}
        className={css({
          bgColor: 'page.bg.initial',
          border: '1px solid',
          borderColor: 'page.border.initial',
          display: 'grid',
          gap: '1',
          gridTemplateColumns: `repeat(6, minmax(0, 1fr))`,
          p: 'sm',
          rounded: 'md',
          sm: { gridTemplateColumns: `repeat(${COLS}, minmax(0, 1fr))` },
        })}
      >
        {board.cells.map((cell, i) => (
          <Tile key={i} cell={cell} />
        ))}
      </div>

      <pre className={cx(codeBlock, css({ textStyle: 'label-sm' }))}>
        <code>{CODE}</code>
      </pre>
      <p className={plateCaption}>
        Synthetic values. The render count is measured live: when the panel’s
        own state changes (pausing, say), it goes up; the stream of values never
        moves it.
      </p>
    </div>
  )
}
