'use client'

import { useMemo, type PropsWithChildren, type ReactNode } from 'react'

export interface ShowProps {
  when: boolean | null | undefined
  fallback?: ReactNode
}

/**
 * Conditionally render its children or an optional fallback component
 * based on the SolidJS component.
 * @definition [Show docs](https://cerberus.digitalu.design/react/show)
 * @example
 * ```tsx
 * <Show when={condition}>
 *  <div>Content</div>
 * </Show>
 */
export function Show(props: PropsWithChildren<ShowProps>): ReactNode {
  const { when, children, fallback } = props
  const condition = useMemo(() => when ?? false, [when])

  return useMemo(() => {
    if (condition) return children
    return fallback ?? null
  }, [condition, children, fallback])
}
