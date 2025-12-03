import { type ReactNode } from 'react'

/**
 * This module contains the Show component.
 * @module
 */

export interface ShowProps<T> {
  /**
   * The children to render when the condition is true.
   * This can be a ReactNode or a function that returns a ReactNode. Passing a
   * function will lazy render the children only when needed.
   */
  children: ReactNode | (() => ReactNode)
  /**
   * The condition to render memoized children or the fallback content.
   */
  when: T | boolean | null | undefined
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
export function Show<T>(props: ShowProps<T>) {
  const { when, children, fallback } = props

  if (when) {
    if (typeof children === 'function') {
      return <>{children()}</>
    }
    return <>{children}</>
  }

  if (fallback) return <>{fallback}</>

  return null
}
