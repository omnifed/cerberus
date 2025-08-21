import type { ComponentType, ElementType, JSX } from 'react'

// types

export type Positions = 'top' | 'right' | 'bottom' | 'left'

/**
 * Utility type to extract props for string elements or custom components
 */
export type ExtractProps<T> = T extends keyof JSX.IntrinsicElements
  ? JSX.IntrinsicElements[T]
  : T extends ComponentType<infer P>
    ? P
    : T extends ElementType<infer P>
      ? P
      : Record<string, unknown>
