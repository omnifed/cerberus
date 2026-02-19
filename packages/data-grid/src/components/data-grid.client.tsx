'use client'

import {
  type CSSProperties,
  type ReactNode,
  useEffect,
  useRef,
  useState,
} from 'react'
import { DataGridProvider } from '../context'
import { createGridStore } from '../store'
import type { GridOptions } from '../types'
import { GridViewport } from './grid.client'

interface DataGridProps<TData> extends GridOptions<TData> {
  className?: string
  toolbar?: ReactNode
  footer?: ReactNode
}

export function DataGrid<TData>({
  data,
  columns,
  className = '',
  toolbar,
  footer,
  initialState,
}: DataGridProps<TData>) {
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
      <div
        ref={rootRef}
        className={`flex flex-col h-full bg-white border border-gray-200 rounded-lg overflow-hidden ${className}`}
        style={
          {
            // Default CSS Variables for themes can go here
            '--bg-color': '#ffffff',
          } as CSSProperties
        }
      >
        {toolbar && <div className="flex-none">{toolbar}</div>}

        <GridViewport />

        <div className="flex-none">{footer}</div>
      </div>
    </DataGridProvider>
  )
}
