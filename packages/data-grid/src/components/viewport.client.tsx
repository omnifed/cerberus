'use client'

import { For, Show } from '@cerberus-design/react'
import { createComputed, useRead } from '@cerberus-design/signals'
import { memo, useMemo, useRef, type RefObject } from 'react'
import { Box, HStack, Scrollable, Stack } from 'styled-system/jsx'
import { PARTS, SCOPE } from '../const'
import { useDataGridContext } from '../context.client'
import type { OverlaySlots } from '../types'
import { useVirtualizer } from '../virtualizer.client'
import { GridHeaderCell, GridRow } from './grid.client'
import { NoContentOverlay, PendingOverlay } from './overlays'
import { DGPopoverContent } from './popover.client'

interface GridViewportProps {
  rootRef: RefObject<HTMLDivElement | null>
  overlays?: OverlaySlots
}

export const GridViewport = memo(function GridViewport(props: GridViewportProps) {
  const viewportRef = useRef<HTMLDivElement>(null)

  const store = useDataGridContext()

  const columns = useRead(store.columns)
  const rowCount = useRead(store.rowCount)
  const staticRows = useRead(store.rows)

  const pending = useRead(store.pending)

  const shouldLock = createComputed(() => rowCount <= 0)
  const hasNonSkeleton = useMemo<boolean>(() => {
    const overlays = props.overlays
    if (!overlays) return false
    return overlays?.pending !== 'skeleton'
  }, [props.overlays])

  return (
    <Scrollable
      data-scope={SCOPE}
      data-part={PARTS.VIEWPORT}
      data-lock={(pending && hasNonSkeleton) || shouldLock()}
      hideScrollbar
      h="full"
      minH="0"
      minW="full"
      pos="relative"
      w="full"
      css={{
        '&:is([data-lock=true])': {
          overflow: 'hidden!',
        },
      }}
      ref={viewportRef}
    >
      <Box
        role="grid"
        aria-rowcount={staticRows.length + 1}
        aria-colcount={columns.length}
        h="var(--row-height)"
        pos="sticky"
        top="0"
        w="var(--total-grid-width)"
        zIndex="sticky"
      >
        <HStack
          aria-rowindex={1}
          role="rowgroup"
          gap="0"
          h="full"
          pos="relative"
          w="full"
        >
          <For each={columns}>
            {(col) => (
              <Show when={col.isVisible()} key={col.id}>
                {() => <GridHeaderCell column={col} />}
              </Show>
            )}
          </For>
        </HStack>
      </Box>

      <Show
        when={rowCount > 0}
        fallback={<NoContentOverlay custom={props.overlays?.noContent} />}
      >
        {() => <TableRows viewportRef={viewportRef} />}
      </Show>

      <Show when={pending}>
        {() => <PendingOverlay variant={props.overlays?.pending} />}
      </Show>

      <DGPopoverContent ref={props.rootRef} />
    </Scrollable>
  )
})

// Rows to display

interface TableRowsProps {
  viewportRef: RefObject<HTMLDivElement | null>
}

const TableRows = memo((props: TableRowsProps) => {
  const store = useDataGridContext()
  const { virtualRows, totalHeight } = useVirtualizer(store, props.viewportRef)

  const isServerPaginated = useRead(store.isServerPaginated)
  const staticRows = useRead(store.rows)
  const currentPageRange = useRead(store.currentPageRange)

  return (
    <Show
      when={isServerPaginated}
      fallback={
        <Box
          pos="relative"
          w="var(--total-grid-width)"
          style={{
            height: `${totalHeight}px`,
          }}
        >
          <For each={virtualRows}>
            {(vRow) => (
              <GridRow
                key={vRow.index}
                row={vRow.data}
                index={vRow.index}
                offsetY={vRow.offsetY}
              />
            )}
          </For>
        </Box>
      }
    >
      {() => (
        <Stack direction="column" gap="0" w="var(--total-grid-width)">
          <For each={staticRows.slice(currentPageRange.start, currentPageRange.end)}>
            {(row, index) => <GridRow key={index} row={row} index={index} />}
          </For>
        </Stack>
      )}
    </Show>
  )
})
