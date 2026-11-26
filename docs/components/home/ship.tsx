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

const SEED: [string, string, Role][] = [
  ['Booking form: prototype to production', 'Priya N.', 'Designer'],
  ['Add a seats field to the booking form', 'form-agent', 'Agent'],
  ['Raise contrast on danger tokens', 'Sam O.', 'Designer'],
  ['Move the reports table to the Data Grid', 'Jordan L.', 'Developer'],
  ['Swap hex values for semantic tokens', 'token-agent', 'Agent'],
  ['Tighten the focus ring on menus', 'Alex M.', 'Developer'],
  ['Write the release notes', 'docs-agent', 'Agent'],
  ['New empty state for search', 'Rae T.', 'Designer'],
  ['Stream live status into the dashboard', 'Kai W.', 'Developer'],
  ['Add keyboard support to the date range', 'a11y-agent', 'Agent'],
  ['Dark mode pass on settings', 'Mina P.', 'Designer'],
  ['Pin the ID column on every grid', 'Lee S.', 'Developer'],
  ['Regenerate the API docs', 'docs-agent', 'Agent'],
  ['Onboarding checklist prototype', 'Priya N.', 'Designer'],
  ['Retry failed uploads automatically', 'Jordan L.', 'Developer'],
  ['Audit every form for labels', 'a11y-agent', 'Agent'],
  ['Compact density for admin tables', 'Sam O.', 'Designer'],
  ['Cache the theme on first paint', 'Alex M.', 'Developer'],
  ['Migrate v1 imports to v2', 'migrate-agent', 'Agent'],
  ['Status colors for the release feed', 'Rae T.', 'Designer'],
  ['Virtualize the audit log', 'Kai W.', 'Developer'],
  ['Find raw pixel values and replace them', 'token-agent', 'Agent'],
  ['New pricing card prototype', 'Mina P.', 'Designer'],
  ['Ship the export button', 'Lee S.', 'Developer'],
]

// Synthetic, deterministic data so the server and the client agree.
const INITIAL: Change[] = SEED.map(([title, author, role], i) => {
  const stage = STAGES[(i * 3) % STAGES.length]
  const stageIndex = STAGES.indexOf(stage)
  return {
    id: 2840 - i,
    title,
    author,
    role,
    stage,
    checks: stageIndex >= 3 ? TOTAL_CHECKS : stageIndex === 2 ? 5 + (i % 6) : 0,
    updated: 1 + ((i * 7) % 58),
  }
})

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
        {Number(value) <= 0 ? 'just now' : `${value} min ago`}
      </span>
    ),
  }),
]

/** Moves one change one step along the workflow. */
function advance(prev: Change[], tick: number): Change[] {
  const target = (tick * 5) % prev.length
  return prev.map((change, i) => {
    if (i !== target)
      return { ...change, updated: change.updated + (tick % 4 === 0 ? 1 : 0) }
    if (change.stage === 'Checks running' && change.checks < TOTAL_CHECKS) {
      return {
        ...change,
        checks: Math.min(TOTAL_CHECKS, change.checks + 4),
        updated: 0,
      }
    }
    const next = STAGES[(STAGES.indexOf(change.stage) + 1) % STAGES.length]
    return {
      ...change,
      stage: next,
      checks: next === 'Prototype' || next === 'In review' ? 0 : change.checks,
      updated: 0,
    }
  })
}

/**
 * 04 · Ship. The workflow's output, in the Data Grid: every change from every
 * kind of author, moving toward production while you watch.
 */
export function Ship() {
  return (
    <Beat
      id="ship"
      pose="ship"
      label="Ship"
      heading="Every change, from every mind, moving to production."
      layout="stacked"
      plate={<ReleaseFeed />}
    >
      <p>
        Designers, developers and agents all open pull requests against the same
        system, so their work lands in one place. This is the Cerberus Data
        Grid: sorting, column filters, pinning, search and pagination, fed live
        by Cerberus Signals.
      </p>
    </Beat>
  )
}

function ReleaseFeed() {
  const { motion } = useExperience()
  const [rows, setRows] = useSignal<Change[]>(INITIAL)
  const [live, setLive] = useState(true)
  const tick = useRef(0)
  const rootRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = rootRef.current
    if (!el || !motion || !live) return
    let timer: number | undefined
    const start = () => {
      if (timer !== undefined) return
      timer = window.setInterval(() => {
        tick.current += 1
        setRows((prev) => advance(prev, tick.current))
      }, 1800)
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
      <div
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
          pagination
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
        Synthetic data. Sort any column, filter from a column’s menu, or search
        everything.
      </p>
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
