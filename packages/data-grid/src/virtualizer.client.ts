'use client'

import { useEffect, useMemo, useState } from 'react'
import { useSignalValue } from './adapter.client'
import type { GridStore } from './types'

export function useVirtualizer(
  store: GridStore<unknown>,
  viewportRef: React.RefObject<HTMLDivElement | null>,
) {
  const isServerPaginated = useSignalValue(store.isServerPaginated)
  if (isServerPaginated) {
    return useMemo(() => ({ virtualRows: [], totalHeight: 0 }), [])
  }

  const rows = useSignalValue(store.visibleRows)
  const rowHeight = useSignalValue(store.rowSize)

  const totalHeight = rows.length * rowHeight

  // Force render updates in the React DOM
  const [scrollTop, setScrollTop] = useState<number>(0)
  const [containerHeight, setContainerHeight] = useState<number>(0)

  useEffect(() => {
    const el = viewportRef.current
    if (!el) return

    const onScroll = () => {
      requestAnimationFrame(() => {
        setScrollTop(el.scrollTop)
      })
    }
    el.addEventListener('scroll', onScroll, { passive: true })

    const observer = new ResizeObserver((entries) => {
      for (const entry of entries) {
        setContainerHeight(entry.contentRect.height)
      }
    })
    observer.observe(el)

    return () => {
      el.removeEventListener('scroll', onScroll)
      observer.disconnect()
    }
  }, [viewportRef])

  const buffer = 5
  const visibleCount = Math.ceil((containerHeight || 600) / rowHeight)

  const start = Math.max(0, Math.floor(scrollTop / rowHeight) - buffer)
  const end = Math.min(rows.length, start + visibleCount + buffer * 2)

  const virtualRows = rows.slice(start, end).map((row, index) => ({
    data: row,
    index: start + index,
    offsetY: (start + index) * rowHeight,
  }))

  return useMemo(
    () => ({ virtualRows, totalHeight, rowHeight }),
    [virtualRows, totalHeight, rowHeight],
  )
}
