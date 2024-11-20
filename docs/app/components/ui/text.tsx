import type { BoxProps } from '@cerberus-design/styled-system/jsx'
import { createElement, type PropsWithChildren } from 'react'

interface TextProps extends BoxProps {
  as?: 'p' | 'span' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
}

export default function Text(props: PropsWithChildren<TextProps>) {
  const { as = 'p', children, ...rest } = props
  return createElement(as, rest, children)
}
