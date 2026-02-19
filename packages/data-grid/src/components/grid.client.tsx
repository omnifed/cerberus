'use client'

import {
  type CSSProperties,
  memo,
  type MouseEvent,
  type ReactNode,
  useRef,
} from 'react'
import { useSignalValue } from '../adapter'
import { useDataGridContext } from '../context'
import type { InternalColumn } from '../types'
import { useVirtualizer } from '../virtualizer'

// --- 1. Header Cell ---

export const GridHeaderCell = memo(function GridHeaderCell({
  column,
}: {
  column: InternalColumn<unknown>
}) {
  const store = useDataGridContext()
  const sortState = useSignalValue(store.sorting)
  const isPinned = useSignalValue(column.pinned)
  const sort = sortState.find((s) => s.id === column.id)

  const handleMouseDown = (e: MouseEvent) => {
    e.preventDefault()
    e.stopPropagation()
    const startX = e.clientX

    const onMove = (me: globalThis.MouseEvent) => {
      store.resizeColumn(column.id, me.clientX - startX)
    }

    const onUp = () => {
      window.removeEventListener('mousemove', onMove)
      window.removeEventListener('mouseup', onUp)
    }

    window.addEventListener('mousemove', onMove)
    window.addEventListener('mouseup', onUp)
  }

  const style: CSSProperties = {
    width: `var(--col-${column.id}-width)`,
    position: isPinned ? 'sticky' : 'relative',
    left: isPinned === 'left' ? `var(--col-${column.id}-left)` : undefined,
    right: isPinned === 'right' ? `var(--col-${column.id}-right)` : undefined,
    zIndex: isPinned ? 20 : 10,
  }

  return (
    <div
      className="group relative flex items-center px-4 py-3 bg-gray-50 border-b border-r border-gray-200 text-sm font-semibold text-gray-700 select-none"
      style={style}
    >
      <div
        className={`flex-1 flex items-center gap-2 cursor-pointer ${column.sortable ? 'hover:text-black' : ''}`}
        onClick={() => column.sortable && store.toggleSort(column.id)}
      >
        {/* Render String or Component Header */}
        {typeof column.original.header === 'function'
          ? column.original.header({ colId: column.id })
          : column.original.header}

        {sort && (sort.desc ? 'down' : 'up')}
      </div>

      <div
        className="absolute right-0 top-0 bottom-0 w-1 cursor-col-resize hover:bg-blue-400 group-hover:bg-gray-300 transition-colors"
        onMouseDown={handleMouseDown}
        onClick={(e) => e.stopPropagation()}
      />
    </div>
  )
})

// --- 2. Body Cell ---

export const GridCell = memo(function GridCell({
  row,
  column,
}: {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  row: any
  column: InternalColumn<ReactNode>
}) {
  const value = column.getValue(row)
  const isPinned = useSignalValue(column.pinned)

  const style: CSSProperties = {
    width: `var(--col-${column.id}-width)`,
    position: isPinned ? 'sticky' : 'relative',
    left: isPinned === 'left' ? `var(--col-${column.id}-left)` : undefined,
    right: isPinned === 'right' ? `var(--col-${column.id}-right)` : undefined,
    zIndex: isPinned ? 10 : 0, // Lower than header
    backgroundColor: isPinned ? 'var(--bg-color, white)' : undefined,
  }

  return (
    <div
      className="flex items-center px-4 py-2 border-b border-r border-gray-100 text-sm text-gray-800 truncate"
      style={style}
    >
      {column.original.cell
        ? column.original.cell({ row, value })
        : (value as ReactNode)}
    </div>
  )
})

// --- 3. Body Row ---

export const GridRow = memo(function GridRow({
  row,
  offsetY,
}: {
  row: unknown
  index: number
  offsetY: number
}) {
  const store = useDataGridContext()
  const columns = useSignalValue(store.columns)

  return (
    <div
      className="absolute left-0 w-full flex bg-white hover:bg-gray-50 transition-colors"
      style={{
        transform: `translateY(${offsetY}px)`,
        height: '40px', // Must match rowHeight in virtualizer
      }}
    >
      {columns.map(
        (col) =>
          col.isVisible.value && (
            <GridCell key={col.id} row={row} column={col} />
          ),
      )}
    </div>
  )
})

// --- 4. The Viewport ---

export function GridViewport() {
  const store = useDataGridContext()
  const columns = useSignalValue(store.columns)
  const viewportRef = useRef<HTMLDivElement>(null)
  const { virtualRows, totalHeight } = useVirtualizer(store, viewportRef)

  return (
    <div
      ref={viewportRef}
      className="flex-1 overflow-auto relative w-full"
      style={{
        // Ensure horizontal scroll works by forcing min-width
        minWidth: '100%',
      }}
    >
      {/* Sticky Header */}
      <div
        className="sticky top-0 flex z-30 shadow-sm"
        style={{ minWidth: 'var(--total-grid-width)' }}
      >
        {columns.map(
          (col) =>
            col.isVisible.value && <GridHeaderCell key={col.id} column={col} />,
        )}
      </div>

      {/* Scrollable Body Content */}
      <div
        className="relative"
        style={{
          height: `${totalHeight}px`,
          minWidth: 'var(--total-grid-width)',
        }}
      >
        {virtualRows.map((vRow) => (
          <GridRow
            key={vRow.index}
            row={vRow.data}
            index={vRow.index}
            offsetY={vRow.offsetY}
          />
        ))}
      </div>
    </div>
  )
}
