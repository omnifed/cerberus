'use client'

import { useState, useEffect } from 'react'
import { useSignalValue } from './adapter'
import type { GridStore } from './types'

export function useVirtualizer(
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  store: GridStore<any>,
  viewportRef: React.RefObject<HTMLDivElement | null>,
) {
  const rows = useSignalValue(store.visibleRows)
  const rowHeight = 40 // Default height, could be dynamic
  const totalHeight = rows.length * rowHeight

  const [scrollTop, setScrollTop] = useState(0)

  useEffect(() => {
    const el = viewportRef.current
    if (!el) return

    const onScroll = () => {
      // Use RAF to decouple scroll event from React state update
      requestAnimationFrame(() => {
        setScrollTop(el.scrollTop)
      })
    }

    el.addEventListener('scroll', onScroll, { passive: true })
    return () => el.removeEventListener('scroll', onScroll)
  }, [])

  const visibleCount = Math.ceil(
    (viewportRef.current?.clientHeight ?? 600) / rowHeight,
  )
  const buffer = 5
  const start = Math.max(0, Math.floor(scrollTop / rowHeight) - buffer)
  const end = Math.min(rows.length, start + visibleCount + buffer * 2)

  const virtualRows = rows.slice(start, end).map((row, index) => ({
    data: row,
    index: start + index,
    offsetY: (start + index) * rowHeight,
  }))

  return { virtualRows, totalHeight, rowHeight }
}
