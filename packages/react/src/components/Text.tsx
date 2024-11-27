import { css, cx } from '@cerberus/styled-system/css'
import type { BoxProps } from '@cerberus/styled-system/jsx'
import { createElement, type PropsWithChildren } from 'react'

/**
 * This module exports a component for rendering text utilizing the styled-system JSX utility.
 * @module @cerberus-design/react/Text
 */

export type Headings = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
export type TextElements = 'p' | 'strong' | 'em' | 'small' | 'span'

export interface TextProps extends BoxProps {
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
  const { as = 'p', children, id, className, ...rest } = props
  const styles = cx(className, css({ ...rest }))
  const elProps = { className: styles, id }
  return createElement(as, elProps, children)
}
