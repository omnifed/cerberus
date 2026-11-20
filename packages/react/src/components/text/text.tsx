import type { ElementType } from 'react'
import { cerberus } from '../../system/index'
import type { CerberusProps } from '../../system/types'

/**
 * This module exports a component for rendering text utilizing the styled-system JSX utility.
 * @module @cerberus/react/Text
 */

export type Headings = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
export type TextElements = 'p' | 'strong' | 'em' | 'small' | 'span'

/**
 * Props of `<Text>`: every HTML attribute (including `ref`) of the element
 * chosen with `as`, plus Panda style props, `css` and `asChild`.
 */
export type TextProps<T extends Headings | TextElements = 'p'> =
  CerberusProps<T> & {
    /**
     * The element to render as. Defaults to 'p'.
     */
    as?: T
  }

const elements: Record<Headings | TextElements, ElementType> = {
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
 * ```
 */
export function TextEl<T extends Headings | TextElements = 'p'>(
  props: TextProps<T>,
) {
  const { as, ...elProps } = props
  // Unknown values (untyped callers) fall back to a paragraph
  const Component =
    as && Object.hasOwn(elements, as) ? elements[as] : elements.p
  return <Component {...elProps} />
}
