'use client'

import { createColumnHelper, DataGrid } from '@cerberus-design/data-grid'
import { Tag } from '@cerberus-design/react'
import { useSignal } from '@cerberus-design/signals'
import { useEffect, useRef } from 'react'
import { css } from 'styled-system/css'

type Status = 'Boarded' | 'Waiting' | 'Disputed'

interface Passenger {
  id: number
  name: string
  origin: string
  obols: number
  status: Status
}

const NAMES = [
  ['Orpheus', 'Thrace'],
  ['Psyche', 'Corinth'],
  ['Heracles', 'Thebes'],
  ['Aeneas', 'Troy'],
  ['Eurydice', 'Thrace'],
  ['Theseus', 'Athens'],
  ['Odysseus', 'Ithaca'],
  ['Alcestis', 'Pherae'],
  ['Sisyphus', 'Corinth'],
  ['Persephone', 'Enna'],
  ['Achilles', 'Phthia'],
  ['Tantalus', 'Lydia'],
  ['Protesilaus', 'Phylace'],
  ['Laodamia', 'Phylace'],
  ['Pirithous', 'Larissa'],
  ['Ixion', 'Thessaly'],
] as const

// Synthetic demo data: a deterministic manifest so server and client agree.
const INITIAL: Passenger[] = NAMES.map(([name, origin], i) => ({
  id: i + 1,
  name,
  origin,
  obols: i % 5 === 2 ? 0 : 1,
  status: i % 5 === 2 ? 'Disputed' : i % 3 === 0 ? 'Boarded' : 'Waiting',
}))

const STATUS_PALETTE = {
  Boarded: 'success',
  Waiting: 'warning',
  Disputed: 'danger',
} as const

const col = createColumnHelper<Passenger>()

const columns = [
  col.accessor('name', {
    header: 'Passenger',
    width: 150,
    features: { sort: true },
  }),
  col.accessor('origin', { header: 'Origin', width: 120 }),
  col.accessor('obols', {
    header: 'Obols',
    width: 90,
    cell: ({ value }) => (
      <span className={css({ fontVariantNumeric: 'tabular-nums' })}>
        {value}
      </span>
    ),
  }),
  col.accessor('status', {
    header: 'Status',
    width: 120,
    cell: ({ value }) => (
      <Tag
        palette={STATUS_PALETTE[value as Status]}
        shape="pill"
        usage="outlined"
      >
        {value}
      </Tag>
    ),
  }),
]

/**
 * Acheron · Build: Charon's manifest in the Data Grid, streaming through a
 * signal. It only updates while it is on screen and motion is allowed.
 */
export function AcheronManifest() {
  const [rows, setRows] = useSignal<Passenger[]>(INITIAL)
  const tick = useRef(0)
  const rootRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = rootRef.current
    if (!el || window.matchMedia('(prefers-reduced-motion: reduce)').matches)
      return

    let timer: number | undefined
    const start = () => {
      if (timer !== undefined) return
      timer = window.setInterval(() => {
        tick.current += 1
        setRows((prev) =>
          prev.map((p, i) => {
            if ((i + tick.current) % 7 !== 0 || p.status === 'Disputed')
              return p
            return {
              ...p,
              status: p.status === 'Waiting' ? 'Boarded' : 'Waiting',
            }
          }),
        )
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
  }, [setRows])

  return (
    <div
      ref={rootRef}
      className={css({ display: 'flex', flexDir: 'column', gap: 'sm' })}
    >
      <div className={css({ h: '20rem', w: 'full' })}>
        <DataGrid columns={columns} data={rows} />
      </div>
      <p className={css({ color: 'page.text.100', textStyle: 'label-sm' })}>
        Synthetic manifest, updating live through Signals.
      </p>
    </div>
  )
}
