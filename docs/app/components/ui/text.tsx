import { css } from '@cerberus-design/styled-system/css'
import type { BoxProps } from '@cerberus-design/styled-system/jsx'
import { createElement, type PropsWithChildren } from 'react'

type Headings = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
type TextElements = 'p' | 'strong' | 'em'

interface TextProps extends BoxProps {
  as?: TextElements | Headings
}

export default function Text(props: PropsWithChildren<TextProps>) {
  const { as = 'p', children, ...rest } = props
  const styles = css({ ...rest })
  const elProps = { className: styles }
  return createElement(as, elProps, children)
}
