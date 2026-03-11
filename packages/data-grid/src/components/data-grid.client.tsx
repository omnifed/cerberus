'use client'

import { Show } from '@cerberus-design/react'
import { createEffect, useSignal } from '@cerberus-design/signals'
import { memo, useEffect, useMemo, useRef } from 'react'
import { HStack, Stack } from 'styled-system/jsx'
import { PARTS, SCOPE } from '../const'
import { DataGridProvider } from '../context.client'
import { createGridStore } from '../store'
import type { GridOptions } from '../types'
import { GridViewport } from './grid.client'
import { GridPagination } from './pagination.client'

// Features
// TODO: Figure out filtering (requires popover API)

// Layout
// TODO: Figure out footer

function DataGridEl<TData>(props: GridOptions<TData>) {
  const { data } = props

  // Only create the graph ONCE when the component mounts
  const store = useMemo(
    () =>
      createGridStore({
        data,
        columns: props.columns,
        initialState: props.initialState,
        rowSize: props.rowSize,
        onPageChange: props.onPageChange,
      }),
    [],
  )

  const [ready, setReady] = useSignal<boolean>(false)
  const rootRef = useRef<HTMLDivElement>(null)

  // Sync data in store with props
  useEffect(() => {
    store.updateData(data)
  }, [data, store])

  // Set root CSS vars with rootRef
  useEffect(() => {
    const el = rootRef.current
    if (!el) return

    const observer = new ResizeObserver((entries) => {
      for (const entry of entries) {
        store.setContainerWidth(entry.contentRect.width)
      }
    })
    observer.observe(el)

    // Reactively apply CSS variables when they change in the store
    // This bypasses React entirely for performance
    const cleanupSignalEffect = createEffect(() => {
      Object.entries(store.rootCssVars()).forEach(([key, val]) => {
        el.style.setProperty(key, val)
      })
    })

    // Immediately mark as ready so the Viewport renders
    setReady(true)

    return () => {
      observer.disconnect()
      cleanupSignalEffect()
    }
  }, [store])

  return (
    <DataGridProvider createStore={() => store}>
      <Show when={props.toolbar}>
        {() => (
          <HStack data-scope={SCOPE} data-part={PARTS.TOOLBAR} w="full">
            {props.toolbar}
          </HStack>
        )}
      </Show>

      <Stack
        data-scope={SCOPE}
        data-part={PARTS.ROOT}
        dir="columns"
        maxH="inherit"
        minH="inherit"
        gap="0"
        h="full"
        bgColor="page.surface.100/55"
        border="1px solid"
        borderColor="page.border.initial"
        rounded="lg"
        overflow="hidden"
        w="full"
        ref={rootRef}
      >
        <Show when={ready}>{() => <GridViewport />}</Show>

        <Show when={props.footer}>
          {() => (
            <HStack data-scope={SCOPE} data-part={PARTS.FOOTER} w="full">
              {props.footer}
            </HStack>
          )}
        </Show>

        <GridPagination />
      </Stack>
    </DataGridProvider>
  )
}

export const DataGrid = memo(DataGridEl) as typeof DataGridEl
