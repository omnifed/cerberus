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
} from '@cerberus/styled-system/jsx'
import { type HTMLAttributes, type PropsWithChildren } from 'react'

/**
 * This module exports a component for rendering text utilizing the styled-system JSX utility.
 * @module @cerberus/react/Text
 */

export type Headings = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
export type TextElements = 'p' | 'strong' | 'em' | 'small' | 'span'

// For some reason we have to use the HTMLParagraphElement type here
// or else TS will fail for non-style props like 'id' or 'className'
export interface TextProps
  extends PProps,
    HTMLAttributes<HTMLParagraphElement> {
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
export function Text(props: PropsWithChildren<TextProps>) {
  const { as = 'p', ...pandaJSXProps } = props
  switch (as) {
    case 'h1':
      return <H1 {...pandaJSXProps} />
    case 'h2':
      return <H2 {...pandaJSXProps} />
    case 'h3':
      return <H3 {...pandaJSXProps} />
    case 'h4':
      return <H4 {...pandaJSXProps} />
    case 'h5':
      return <H5 {...pandaJSXProps} />
    case 'h6':
      return <H6 {...pandaJSXProps} />
    case 'strong':
      return <Strong {...pandaJSXProps} />
    case 'em':
      return <Em {...pandaJSXProps} />
    case 'small':
      return <Small {...pandaJSXProps} />
    case 'span':
      return <Span {...pandaJSXProps} />
    default:
      return <P {...pandaJSXProps} />
  }
}
