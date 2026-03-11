'use client'

import { useRead, useSignal } from '@cerberus-design/signals'
import { type RefObject, useEffect, useMemo } from 'react'
import type { GridStore } from './types'

export function useVirtualizer(
  store: GridStore<unknown>,
  viewportRef: RefObject<HTMLDivElement | null>,
) {
  const isServerPaginated = useRead(store.isServerPaginated)
  const rows = useRead(store.visibleRows)
  const rowHeight = useRead(store.rowSize)

  const [scrollTop, setScrollTop] = useSignal<number>(0)
  const [containerHeight, setContainerHeight] = useSignal<number>(0)

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
  }, [viewportRef, setScrollTop, setContainerHeight])

  return useMemo(() => {
    if (isServerPaginated) {
      return { virtualRows: [], totalHeight: 0, rowHeight }
    }

    const totalHeight = rows.length * rowHeight
    const buffer = 5
    const visibleCount = Math.ceil((containerHeight || 600) / rowHeight)

    const start = Math.max(0, Math.floor(scrollTop / rowHeight) - buffer)
    const end = Math.min(rows.length, start + visibleCount + buffer * 2)

    const virtualRows = rows.slice(start, end).map((row, index) => ({
      data: row,
      index: start + index,
      offsetY: (start + index) * rowHeight,
    }))

    return { virtualRows, totalHeight, rowHeight }
  }, [isServerPaginated, rows, rowHeight, scrollTop, containerHeight])
}
