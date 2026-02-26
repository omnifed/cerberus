'use client'

import { Show } from '@cerberus-design/react'
import { type ReactNode, useEffect, useRef, useState } from 'react'
import { HStack, Stack } from 'styled-system/jsx'
import { DataGridProvider } from '../context.client'
import { PARTS, SCOPE } from '../parts'
import { createGridStore } from '../store'
import type { GridOptions } from '../types'
import { GridViewport } from './grid.client'

// Features
// TODO: Figure out filtering (requires popover API)

// Layout
// TODO: Figure out pagination
// TODO: Figure out Toolbar
// TODO: Figure out footer

// TODO: Figure out icons

interface DataGridProps<TData> extends GridOptions<TData> {
  toolbar?: ReactNode
  footer?: ReactNode
}

export function DataGrid<TData>(props: DataGridProps<TData>) {
  const { data, columns, initialState } = props

  const rootRef = useRef<HTMLDivElement>(null)
  const [ready, setReady] = useState<boolean>(false)

  // Lazy cache store for React compatibility
  const [store] = useState(() =>
    createGridStore({
      data,
      columns,
      initialState,
    }),
  )

  useEffect(() => {
    store.updateData(data)
  }, [data, store])

  useEffect(() => {
    const el = rootRef.current
    if (!el) return

    const observer = new ResizeObserver((entries) => {
      for (const entry of entries) {
        store.setContainerWidth(entry.contentRect.width)
      }
    })
    observer.observe(el)

    const unsubscribe = store.rootCssVars.subscribe((vars) => {
      Object.entries(vars).forEach(([key, val]) => {
        el.style.setProperty(key, val)
      })
      setReady((prev) => (prev ? prev : true))
    })

    return () => {
      observer.disconnect()
      unsubscribe()
    }
  }, [store])

  return (
    <DataGridProvider store={store}>
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
        h="full"
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
      </Stack>
    </DataGridProvider>
  )
}
