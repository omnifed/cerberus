import type { HTMLAttributes } from 'react'
import { label } from '@cerberus/styled-system/recipes'
import { cx } from '@cerberus/styled-system/css'

export interface LabelProps extends HTMLAttributes<HTMLLabelElement> {
  htmlFor: string
  hidden?: boolean
}

export function Label(props: LabelProps) {
  const { hidden, ...nativeProps } = props
  const usage = hidden ? 'hidden' : 'visible'

  return (
    <label
      {...nativeProps}
      className={cx(nativeProps.className, label({ usage }))}
    />
  )
}
