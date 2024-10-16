'use client'

import { useMemo, type PropsWithChildren, type ReactNode } from 'react'

/**
 * This module contains the Show component.
 * @module
 */

export interface ShowProps {
  /**
   * The condition to render memoized children or the fallback content.
   */
  when: boolean | null | undefined
  /**
   * The children to render when the condition is false.
   */
  fallback?: ReactNode
}

/**
 * Conditionally render a memoized version of the children or optional fallback
 * content.
 * @see https://cerberus.digitalu.design/react/show
 * @example
 * ```tsx
 * <Show when={isLoggedIn} fallback={<Navigate to="/login" />}>
 *   <Dashboard />
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
