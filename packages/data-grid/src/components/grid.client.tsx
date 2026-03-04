'use client'

import {
  For,
  IconButton,
  Show,
  Tooltip,
  useCerberusContext,
} from '@cerberus-design/react'
import {
  type CSSProperties,
  memo,
  type MouseEvent,
  type PropsWithChildren,
  type ReactNode,
  useMemo,
  useRef,
} from 'react'
import { Box, HStack, Scrollable } from 'styled-system/jsx'
import type { Dict } from 'styled-system/types'
import { useSignalValue } from '../adapter.client'
import { useDataGridContext } from '../context.client'
import {
  useColumnStyles,
  usePinnedAttribute,
  usePinnedState,
} from '../hooks.client'
import { PARTS, SCOPE } from '../const'
import type { InternalColumn } from '../types'
import { useVirtualizer } from '../virtualizer.client'
import { HeaderCellOptions } from './features.client'

export function GridViewport() {
  const viewportRef = useRef<HTMLDivElement>(null)

  const store = useDataGridContext()
  const { virtualRows, totalHeight } = useVirtualizer(store, viewportRef)

  const columns = useSignalValue(store.columns)

  return (
    <Scrollable
      hideScrollbar
      data-scope={SCOPE}
      data-part={PARTS.VIEWPORT}
      h="full"
      minH="0"
      minW="full"
      pos="relative"
      w="full"
      ref={viewportRef}
    >
      <Box
        h="2.5rem" // Must match rowHeight in virtualizer
        pos="sticky"
        top="0"
        w="var(--total-grid-width)"
        zIndex="sticky"
      >
        <HStack gap="0" h="full" pos="relative" w="full">
          <For each={columns}>
            {(col) => (
              <Show when={col.isVisible.value} key={col.id}>
                {() => <GridHeaderCell column={col} />}
              </Show>
            )}
          </For>
        </HStack>
      </Box>

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
    </Scrollable>
  )
}

// --- 1. Header Cell ---

interface GridHeaderCellProps<TData> {
  column: InternalColumn<TData>
}

export const GridHeaderCell = memo(function GridHeaderCell<TData>(
  props: GridHeaderCellProps<TData>,
) {
  const { column } = props
  const store = useDataGridContext<TData>()
  const { icons } = useCerberusContext()

  const pinnedVal = useSignalValue(column.pinned)
  const sortingVal = useSignalValue(store.sorting)

  const pinnedState = usePinnedState(pinnedVal)
  const pinnedAttr = usePinnedAttribute(pinnedVal)
  const style = useColumnStyles(column, pinnedVal)

  const isSortedDesc = useMemo(() => {
    const result = sortingVal.find((item) => item.id === column.id)
    if (result) return result.desc
    return false
  }, [sortingVal, column.id])

  const SortAscIcon = icons.sortAsc
  const SortDescIcon = icons.sortDesc

  function handleToggleSorting(e: MouseEvent<HTMLButtonElement>) {
    store.toggleSort(column.id, e.shiftKey)
  }

  // const handleMouseDown = (e: MouseEvent) => {
  //   e.preventDefault()
  //   e.stopPropagation()
  //   const startX = e.clientX

  //   const onMove = (me: globalThis.MouseEvent) => {
  //     store.resizeColumn(column.id, me.clientX - startX)
  //   }

  //   const onUp = () => {
  //     window.removeEventListener('mousemove', onMove)
  //     window.removeEventListener('mouseup', onUp)
  //   }

  //   window.addEventListener('mousemove', onMove)
  //   window.addEventListener('mouseup', onUp)
  // }

  return (
    <HStack
      data-scope={SCOPE}
      data-part={PARTS.HEAD_CELL}
      data-state={pinnedState}
      data-col={column.id}
      {...pinnedAttr}
      bgColor="page.bg.initial"
      borderBottom="1px solid"
      borderColor="page.border.200"
      h="full"
      justify="space-between"
      pos="relative"
      px="md"
      py="md"
      userSelect="none"
      textAlign="left"
      textStyle="label-md"
      verticalAlign="middle"
      w="full"
      zIndex="10"
      _first={{
        borderTopLeftRadius: 'md',
      }}
      _last={{
        borderTopRightRadius: 'md',
      }}
      _pinned={{
        pos: 'sticky',
        zIndex: 20,
      }}
      _leftPinned={{
        borderRightColor: 'page.border.200',
        borderRight: '1px solid',
      }}
      _rightPinned={{
        borderLeftColor: 'page.border.200',
        borderLeft: '1px solid',
      }}
      className="group"
      style={style}
    >
      <HStack
        gap="sm"
        _groupHover={{
          '& :is(button)': {
            opacity: '1',
          },
        }}
      >
        {typeof column.original.header === 'function'
          ? column.original.header({ colId: column.id })
          : column.original.header}

        <Show when={column.sortable}>
          <Tooltip
            content={isSortedDesc ? 'Sort Ascending' : 'Sort Decending'}
            openDelay={800}
            asChild
          >
            <IconButton
              ariaLabel="Toggle sorting"
              size="sm"
              opacity={{
                base: 1,
                md: 0,
              }}
              transitionProperty="opacity"
              transitionDuration="fast"
              onClick={handleToggleSorting}
            >
              <Show when={isSortedDesc} fallback={<SortAscIcon />}>
                <SortDescIcon />
              </Show>
            </IconButton>
          </Tooltip>
        </Show>
      </HStack>

      <HeaderCellOptions {...column} />

      <Show when={pinnedState === 'pinned'}>
        {() => <ShadowFiller style={style} {...pinnedAttr} />}
      </Show>
    </HStack>
  )
})

// --- 2. Body Cell ---

interface GridCellProps<TData> {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  row: any
  column: InternalColumn<TData>
}

export const GridCell = memo(function GridCell<TData>(
  props: GridCellProps<TData>,
) {
  const { column, row } = props
  const value = column.getValue(row) as keyof TData

  const pinnedVal = useSignalValue(column.pinned)

  const pinnedState = usePinnedState(pinnedVal)
  const pinnedAttr = usePinnedAttribute(pinnedVal)
  const style: CSSProperties = useColumnStyles(column, pinnedVal)

  return (
    <HStack
      data-scope={SCOPE}
      data-part={PARTS.CELL}
      data-state={pinnedState}
      {...pinnedAttr}
      bgColor="inherit"
      borderColor="page.border.200"
      h="full"
      pos="relative"
      px="md"
      py="md"
      userSelect="none"
      verticalAlign="middle"
      zIndex="base"
      _pinned={{
        pos: 'sticky',
        zIndex: 20,
      }}
      _leftPinned={{
        borderRightColor: 'page.border.200',
        borderRight: '1px solid',
      }}
      _rightPinned={{
        borderLeftColor: 'page.border.200',
        borderLeft: '1px solid',
      }}
      style={style}
    >
      {column.original.cell
        ? column.original.cell({ row, value })
        : (value as ReactNode)}

      <Show when={pinnedState === 'pinned'}>
        {() => <ShadowFiller style={style} {...pinnedAttr} />}
      </Show>
    </HStack>
  )
})

// --- 3. Body Row ---

interface GridRowProps {
  row: unknown
  index: number
  offsetY: number
}

export const GridRow = memo(function GridRow(props: GridRowProps) {
  const store = useDataGridContext()
  const columns = useSignalValue(store.columns)

  return (
    <GridRowContainer offsetY={props.offsetY}>
      <For each={columns}>
        {(col) => (
          <Show when={col.isVisible.value} key={col.id}>
            {() => <GridCell row={props.row} column={col} />}
          </Show>
        )}
      </For>
    </GridRowContainer>
  )
})

// -- Row Container

interface GridRowContainerProps {
  offsetY: number
}

function GridRowContainer(props: PropsWithChildren<GridRowContainerProps>) {
  return (
    <HStack
      data-scope={SCOPE}
      data-part={PARTS.ROW}
      bgColor="page.surface.100"
      gap="0"
      h="2.5rem" // Must match rowHeight in virtualizer
      left="0"
      pos="absolute"
      w="full"
      _even={{
        bgColor: 'page.surface.initial',
      }}
      _hover={{
        bgColor: 'page.surface.200',
      }}
      style={{
        transform: `translateY(${props.offsetY}px)`,
      }}
    >
      {props.children}
    </HStack>
  )
}

// -- Shadow Filler

interface ShadowFillerProps extends Dict {
  style: CSSProperties
}

function ShadowFiller(props: ShadowFillerProps) {
  const { style, ...rest } = props

  return (
    <Box
      bottom="0"
      h="full"
      pos="absolute"
      w="0.75rem"
      zIndex="inherit"
      _leftPinned={{
        bgGradient: 'to-r',
        gradientFrom: 'black/10',
        gradientTo: 'transparent',
      }}
      _rightPinned={{
        bgGradient: 'to-l',
        gradientFrom: 'black/10',
        gradientTo: 'transparent',
      }}
      style={{
        left: style.left ? style.width : undefined,
        right: style.right ? style.width : undefined,
      }}
      {...rest}
    />
  )
}
