import type { HTMLAttributes } from 'react'
import { cerberus, type CerberusPrimitiveProps } from '../../system/index'

/**
 * This module exports a component for rendering text utilizing the styled-system JSX utility.
 * @module @cerberus/react/Text
 */

export type Headings = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
export type TextElements = 'p' | 'strong' | 'em' | 'small' | 'span'

// For some reason we have to use the HTMLParagraphElement type here
// or else TS will fail for non-style props like 'id' or 'className'
export interface TextProps
  extends CerberusPrimitiveProps<HTMLAttributes<HTMLParagraphElement>> {
  /**
   * The element to render as. Defaults to 'p'.
   */
  as?: TextElements | Headings
}

/**
 * A component for rendering text utilizing the styled-system JSX utility.
 * @definition [Text docs](https://cerberus.digitalu.design/react/text)
 * @example
 * ```tsx
 * <Text as="h1" color="page.text.100" textStyle={{
 *   base: 'heading-md',
 *   md: 'heading-lg',
 * }}>
 *  Hello, world!
 * </Text>
 */
export function Text(props: TextProps) {
  const { as = 'p', ...elProps } = props

  const cache = {
    h1: cerberus.h1,
    h2: cerberus.h2,
    h3: cerberus.h3,
    h4: cerberus.h4,
    h5: cerberus.h5,
    h6: cerberus.h6,
    strong: cerberus.strong,
    em: cerberus.em,
    small: cerberus.small,
    span: cerberus.span,
    p: cerberus.p,
  }

  if (as in cache) {
    const Component = cache[as as keyof typeof cache]
    return <Component {...elProps} />
  }

  return <cerberus.p {...elProps} />
}
