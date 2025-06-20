import type { CSSProperties } from 'react'
import type { SystemStyleObject } from 'styled-system/types'

export interface WithCss {
  /**
   * The CSS styles to apply to the component.
   * Can be a single style object or an array of style objects.
   */
  css?: SystemStyleObject | SystemStyleObject[]
  /**
   * The strict CSS styles to apply to the component. This will override any
   * other styles applied to the component and is only recommended for advanced
   * use cases.
   *
   * In most cases, you should use the `css` prop instead.
   */
  style?: CSSProperties | Record<string, number | string>
  /**
   * If true, the component will render as a child as the provided element
   * passing all the given props to the child.
   */
  asChild?: boolean
  /**
   * The class name to apply to the component.
   * Can be a single class name or an array of class names.
   */
  className?: string
}

// types

export type Positions = 'top' | 'right' | 'bottom' | 'left'
