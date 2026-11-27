'use client'

import { Search } from '@carbon/icons-react'
import {
  createColumnHelper,
  DataGrid,
  OPERATORS,
  useDataGridContext,
} from '@cerberus-design/data-grid'
import { Button, Field, Input, Show, Switch, Tag } from '@cerberus-design/react'
import { useRead, useSignal } from '@cerberus-design/signals'
import { useEffect, useRef, useState } from 'react'
import { css, cx } from 'styled-system/css'
import { Beat, plateCaption } from './beat'
import { useExperience } from './experience'

type Role = 'Designer' | 'Developer' | 'Agent'
type Stage =
  | 'Prototype'
  | 'In review'
  | 'Checks running'
  | 'Merged'
  | 'In production'

interface Change {
  id: number
  title: string
  author: string
  role: Role
  stage: Stage
  checks: number
  updated: number
}

const STAGES: Stage[] = [
  'Prototype',
  'In review',
  'Checks running',
  'Merged',
  'In production',
]
const TOTAL_CHECKS = 12

const STAGE_PALETTE = {
  Prototype: 'page',
  'In review': 'info',
  'Checks running': 'warning',
  Merged: 'success',
  'In production': 'success',
} as const

const ROLE_DOT: Record<Role, string> = {
  Designer: css({ bgColor: 'dataViz.qualitative.100' }),
  Developer: css({ bgColor: 'dataViz.qualitative.300' }),
  Agent: css({ bgColor: 'dataViz.qualitative.500' }),
}

/** Who opens pull requests on an agent-scale team. */
const AUTHORS: [string, Role][] = [
  ['form-agent', 'Agent'],
  ['Priya N.', 'Designer'],
  ['token-agent', 'Agent'],
  ['Jordan L.', 'Developer'],
  ['docs-agent', 'Agent'],
  ['Sam O.', 'Designer'],
  ['a11y-agent', 'Agent'],
  ['Alex M.', 'Developer'],
  ['migrate-agent', 'Agent'],
  ['Rae T.', 'Designer'],
  ['test-agent', 'Agent'],
  ['Kai W.', 'Developer'],
]

const VERBS = [
  'Add',
  'Fix',
  'Tighten',
  'Migrate',
  'Prototype',
  'Stream',
  'Audit',
  'Virtualize',
  'Theme',
  'Document',
  'Refactor',
  'Pin',
]

const THINGS = [
  'the booking form',
  'the date range picker',
  'danger tokens',
  'the reports table',
  'focus rings on menus',
  'the release notes',
  'the empty state for search',
  'live status on the dashboard',
  'keyboard support in dialogs',
  'dark mode in settings',
  'the audit log',
  'upload retries',
  'v1 imports',
  'the pricing card',
  'the export button',
  'form labels',
  'compact density',
  'the onboarding checklist',
]

/** How many pull requests the feed starts with. */
const TOTAL = 30_000

// Synthetic, deterministic data so the server and the client agree.
function makeChange(n: number, i: number): Change {
  const [author, role] = AUTHORS[(i * 7 + (i >> 3)) % AUTHORS.length]
  const stage = STAGES[(i * 3 + (i >> 5)) % STAGES.length]
  const stageIndex = STAGES.indexOf(stage)
  return {
    id: n,
    title: `${VERBS[(i * 5) % VERBS.length]} ${THINGS[(i * 11 + (i >> 4)) % THINGS.length]}`,
    author,
    role,
    stage,
    checks: stageIndex >= 3 ? TOTAL_CHECKS : stageIndex === 2 ? 5 + (i % 6) : 0,
    updated: 1 + Math.floor(i / 6),
  }
}

function makeFeed(): Change[] {
  return Array.from({ length: TOTAL }, (_, i) =>
    makeChange(TOTAL + 2840 - i, i),
  )
}

/** Minutes since a change, as a person would say it. */
function ago(minutes: number) {
  if (minutes <= 0) return 'just now'
  if (minutes < 60) return `${minutes} min ago`
  if (minutes < 60 * 24) return `${Math.floor(minutes / 60)} h ago`
  return `${Math.floor(minutes / (60 * 24))} d ago`
}

const col = createColumnHelper<Change>()

const columns = [
  col.accessor('id', {
    header: 'PR',
    width: 112,
    features: { sort: true, pinning: { defaultPosition: 'left' } },
    cell: ({ value }) => (
      <span
        className={css({
          fontFamily: 'mono',
          fontVariantNumeric: 'tabular-nums',
        })}
      >
        #{value}
      </span>
    ),
  }),
  col.accessor('title', {
    header: 'Change',
    minWidth: 360,
    features: { sort: true, filter: true },
  }),
  col.accessor('author', {
    header: 'Author',
    width: 180,
    features: { sort: true, filter: true },
    cell: ({ row, value }) => (
      <span
        className={css({
          alignItems: 'center',
          display: 'inline-flex',
          gap: 'sm',
        })}
      >
        <span
          aria-hidden
          className={cx(
            ROLE_DOT[row.role],
            css({ flexShrink: 0, h: '2', rounded: 'full', w: '2' }),
          )}
        />
        {value}
      </span>
    ),
  }),
  col.accessor('role', {
    header: 'Role',
    width: 140,
    features: { sort: true, filter: true },
  }),
  col.accessor('stage', {
    header: 'Stage',
    width: 180,
    features: { sort: true, filter: true },
    cell: ({ value }) => (
      <Tag
        palette={STAGE_PALETTE[value as Stage]}
        shape="pill"
        usage={value === 'In production' ? 'filled' : 'outlined'}
      >
        {value}
      </Tag>
    ),
  }),
  col.accessor('checks', {
    header: 'Checks',
    width: 150,
    features: { sort: true },
    cell: ({ value }) => (
      <span
        className={css({
          alignItems: 'center',
          display: 'inline-flex',
          gap: 'sm',
          w: 'full',
        })}
      >
        <span
          aria-hidden
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
              transitionDuration: 'slow',
              transitionProperty: 'width',
            })}
            style={{ width: `${(Number(value) / TOTAL_CHECKS) * 100}%` }}
          />
        </span>
        <span
          className={css({
            fontVariantNumeric: 'tabular-nums',
            textStyle: 'label-sm',
          })}
        >
          {value}/{TOTAL_CHECKS}
        </span>
      </span>
    ),
  }),
  col.accessor('updated', {
    header: 'Updated',
    width: 130,
    features: { sort: true },
    cell: ({ value }) => (
      <span
        className={css({
          color: 'page.text.200',
          fontVariantNumeric: 'tabular-nums',
        })}
      >
        {ago(Number(value))}
      </span>
    ),
  }),
]

/**
 * One beat of the feed: a new pull request opens at the top and a few recent
 * ones move a step toward production. Only the changed rows are new objects.
 */
function advance(prev: Change[], tick: number): Change[] {
  const next = prev.slice()
  for (let k = 0; k < 3; k++) {
    const i = (tick * 7 + k * 5) % 24
    const change = next[i]
    if (!change) continue
    if (change.stage === 'Checks running' && change.checks < TOTAL_CHECKS) {
      next[i] = {
        ...change,
        checks: Math.min(TOTAL_CHECKS, change.checks + 4),
        updated: 0,
      }
      continue
    }
    const stage =
      STAGES[Math.min(STAGES.length - 1, STAGES.indexOf(change.stage) + 1)]
    next[i] = {
      ...change,
      stage,
      checks: stage === 'Checks running' ? 2 : change.checks,
      updated: 0,
    }
  }
  const top = next[0]
  const fresh = makeChange((top?.id ?? TOTAL) + 1, tick * 13)
  next.unshift({ ...fresh, stage: 'Prototype', checks: 0, updated: 0 })
  return next
}

/**
 * Ship. The workflow's output at agent scale: thirty thousand pull requests
 * from every kind of author in one virtualized Data Grid, streaming live.
 */
export function Ship() {
  return (
    <Beat
      id="ship"
      pose="ship"
      label="Ship"
      heading="Thirty thousand pull requests. One calm grid."
      layout="stacked"
      plate={<ReleaseFeed />}
    >
      <p>
        When agents open pull requests, teams ship them by the tens of
        thousands. The Cerberus Data Grid is virtualized: it keeps only the rows
        on screen in the DOM, so a 30,000-row release feed sorts, filters,
        searches and scrolls like a short one.
      </p>
      <p>
        Cerberus Signals streams the changes in, and only the cells that change
        update. Scroll it, sort it, search it: this one is live.
      </p>
    </Beat>
  )
}

function ReleaseFeed() {
  const { motion } = useExperience()
  // Built once per mount: useSignal keys its signal on this value.
  const [initial] = useState(makeFeed)
  const [rows, setRows] = useSignal<Change[]>(initial)
  const [live, setLive] = useState(true)
  const [domRows, setDomRows] = useState<number | null>(null)
  const tick = useRef(0)
  const rootRef = useRef<HTMLDivElement>(null)
  const gridRef = useRef<HTMLDivElement>(null)

  // Measure, never claim: how many grid rows exist in the DOM right now.
  useEffect(() => {
    const grid = gridRef.current
    if (!grid) return
    let raf = 0
    const count = () => {
      raf = 0
      setDomRows(grid.querySelectorAll('[role="row"]').length)
    }
    const schedule = () => {
      if (!raf) raf = requestAnimationFrame(count)
    }
    count()
    const observer = new MutationObserver(schedule)
    observer.observe(grid, { childList: true, subtree: true })
    return () => {
      observer.disconnect()
      cancelAnimationFrame(raf)
    }
  }, [])

  useEffect(() => {
    const el = rootRef.current
    if (!el || !motion || !live) return
    let timer: number | undefined
    const start = () => {
      if (timer !== undefined) return
      timer = window.setInterval(() => {
        tick.current += 1
        setRows((prev) => advance(prev, tick.current))
      }, 1400)
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
  }, [motion, live, setRows])

  return (
    <div
      ref={rootRef}
      className={css({
        display: 'flex',
        flexDir: 'column',
        gap: 'sm',
        w: 'full',
      })}
    >
      <dl
        className={css({
          display: 'grid',
          gap: 'md',
          gridTemplateColumns: 'repeat(2, minmax(0, 1fr))',
          md: { gridTemplateColumns: 'repeat(3, minmax(0, 1fr))' },
        })}
      >
        <FeedStat label="Pull requests in the feed">
          {rows.length.toLocaleString('en-US')}
        </FeedStat>
        <FeedStat label="Rows in the DOM right now">
          {domRows === null ? '…' : domRows.toLocaleString('en-US')}
        </FeedStat>
        <FeedStat label="Opened by agents" className={css({ hideBelow: 'md' })}>
          {`${Math.round((rows.filter((r) => r.role === 'Agent').length / rows.length) * 100)}%`}
        </FeedStat>
      </dl>
      <div
        ref={gridRef}
        data-lenis-prevent
        className={css({
          bgColor: 'page.surface.100',
          border: '1px solid',
          borderColor: 'page.border.initial',
          boxShadow: '2xl',
          h: '36rem',
          overflow: 'hidden',
          rounded: 'xl',
          w: 'full',
          md: { h: '40rem' },
        })}
      >
        <DataGrid
          columns={columns}
          data={rows}
          toolbar={
            <FeedToolbar
              live={live}
              canStream={motion}
              onLiveChange={setLive}
            />
          }
        />
      </div>
      <p className={plateCaption}>
        Synthetic data: 30,000 generated pull requests, with a new one every few
        seconds. The DOM row count is measured live. Sort any column, filter
        from a column’s menu, or search everything.
      </p>
    </div>
  )
}

function FeedStat(props: {
  label: string
  children: string
  className?: string
}) {
  return (
    <div
      className={cx(
        css({
          borderTop: '1px solid',
          borderColor: 'page.border.200',
          display: 'flex',
          flexDir: 'column-reverse',
          gap: 'xs',
          pt: 'sm',
        }),
        props.className,
      )}
    >
      <dt className={plateCaption}>{props.label}</dt>
      <dd
        className={css({
          color: 'page.text.initial',
          fontSize: 'clamp(2rem, 1.2rem + 2.4vw, 3.5rem)',
          fontVariantNumeric: 'tabular-nums',
          fontWeight: 'semibold',
          letterSpacing: '-0.03em',
          lineHeight: '1',
        })}
      >
        {props.children}
      </dd>
    </div>
  )
}

interface ToolbarProps {
  live: boolean
  canStream: boolean
  onLiveChange: (live: boolean) => void
}

function FeedToolbar<TData>(props: ToolbarProps) {
  const store = useDataGridContext<TData>()
  const current = useRead(store.globalFilter)

  function search(formData: FormData) {
    const value = String(formData.get('search') ?? '')
    store.setGlobalFilter({
      value: value || null,
      operator: OPERATORS.contains,
    })
  }

  return (
    <div
      className={css({
        alignItems: 'center',
        columnGap: 'lg',
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        px: 'md',
        py: 'sm',
        rowGap: 'sm',
        w: 'full',
      })}
    >
      <p
        className={css({
          alignItems: 'center',
          display: 'flex',
          gap: 'sm',
          textStyle: 'heading-2xs',
        })}
      >
        Release feed
        {props.canStream && props.live && (
          <span
            aria-hidden
            className={css({
              bgColor: 'success.bg.initial',
              display: 'inline-block',
              h: '2',
              rounded: 'full',
              w: '2',
              _motionSafe: { animation: 'livePulse 2s ease-in-out infinite' },
            })}
          />
        )}
      </p>
      <div
        className={css({
          alignItems: 'center',
          columnGap: 'md',
          display: 'flex',
          flexWrap: 'wrap',
          rowGap: 'sm',
        })}
      >
        {props.canStream && (
          <Switch
            checked={props.live}
            onCheckedChange={(d) => props.onLiveChange(d.checked)}
            size="sm"
          >
            Live updates
          </Switch>
        )}
        <Show when={current.value}>
          <Button
            palette="danger"
            size="sm"
            usage="ghost"
            onClick={() =>
              store.setGlobalFilter({
                operator: OPERATORS.contains,
                value: null,
              })
            }
          >
            Clear
          </Button>
        </Show>
        <form action={search} className={css({ w: '16rem' })}>
          <Field hideLabel label="Search the release feed">
            <Input
              name="search"
              placeholder="Search, then press Enter"
              size="sm"
              startIcon={<Search />}
            />
          </Field>
        </form>
      </div>
    </div>
  )
}
