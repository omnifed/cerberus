import { splitProps, type JSX } from 'solid-js'
import { Dynamic } from 'solid-js/web'
import {
  Em,
  H1,
  H2,
  H3,
  H4,
  H5,
  H6,
  P,
  Small,
  Span,
  Strong,
  type PProps,
} from 'styled-system/jsx'

/**
 * This module exports a component for rendering text utilizing the styled-system JSX utility.
 * @module @cerberus/react/Text
 */

export type Headings = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
export type TextElements = 'p' | 'strong' | 'em' | 'small' | 'span'

// For some reason we have to use the HTMLParagraphElement type here
// or else TS will fail for non-style props like 'id' or 'className'
export interface TextProps extends PProps {
  /**
   * The element to render as. Defaults to 'p'.
   */
  as?: TextElements | Headings
}

/**
 * A component for rendering text utilizing the styled-system JSX utility.
 * @definition [Text docs](https://cerberus.digitalu.design/components/text)
 * @example
 * ```tsx
 * <Text as="h1" color="page.text.100" textStyle={{
 *   base: 'heading-md',
 *   md: 'heading-lg',
 * }}>
 *  Hello, world!
 * </Text>
 */
export function Text(props: TextProps): JSX.Element {
  const [{ as = 'p' }, pandaJSXProps] = splitProps(props, ['as'])
  return <Dynamic component={TextOptions[as]} {...pandaJSXProps} />
}

const TextOptions = {
  p: P,
  strong: Strong,
  em: Em,
  small: Small,
  span: Span,
  h1: H1,
  h2: H2,
  h3: H3,
  h4: H4,
  h5: H5,
  h6: H6,
}
