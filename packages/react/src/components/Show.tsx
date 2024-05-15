'use client'

import { useMemo, type PropsWithChildren, type ReactNode } from 'react'

export interface ShowProps {
  when: boolean | null | undefined
  fallback?: ReactNode
}

/**
 * Conditionally render its children or an optional fallback component
 * based on the SolidJS component.
 * @description https://docs.solidjs.com/reference/components/show
 */
export function Show(props: PropsWithChildren<ShowProps>) {
  const { when, children, fallback } = props
  const condition = useMemo(() => when ?? false, [when])

  return useMemo(() => {
    if (condition) return children
    return fallback ?? null
  }, [condition, children, fallback])
}
