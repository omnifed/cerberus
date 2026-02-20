'use client'

import { Show } from '@cerberus-design/react'
import { type ReactNode, useEffect, useRef, useState } from 'react'
import { HStack, Scrollable, Stack } from 'styled-system/jsx'
import { DataGridProvider } from '../context'
import { PARTS, SCOPE } from '../parts'
import { createGridStore } from '../store'
import type { GridOptions } from '../types'
import { GridViewport } from './grid.client'

interface DataGridProps<TData> extends GridOptions<TData> {
  toolbar?: ReactNode
  footer?: ReactNode
}

export function DataGrid<TData>(props: DataGridProps<TData>) {
  const { data, columns, initialState } = props

  // Lazy cache store for React compatibility
  const [store] = useState(() =>
    createGridStore({
      data,
      columns,
      initialState,
    }),
  )

  // Layout Engine Injection -TEMP
  // We attach the CSS variables to the root DOM node via Ref
  const rootRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    store.updateData(data)
  }, [data, store])

  useEffect(() => {
    return store.rootCssVars.subscribe((vars) => {
      if (rootRef.current) {
        // Fast DOM updates without React render
        Object.entries(vars).forEach(([key, val]) => {
          rootRef.current?.style.setProperty(key, val)
        })
      }
    })
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
        <Scrollable
          hideScrollbar
          h="full"
          w="full"
          style={{
            maxHeight: '20rem',
          }}
        >
          <GridViewport />
        </Scrollable>

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
