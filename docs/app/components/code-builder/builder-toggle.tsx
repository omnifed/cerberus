'use client'

import { Toggle, useToggle, type ToggleProps } from '@cerberus-design/react'
import type { BooleanResult } from './helpers'

interface BuilderToggleProps
  extends Omit<ToggleProps, 'name' | 'type' | 'value'>,
    BooleanResult {}

export default function BuilderToggle(props: BuilderToggleProps) {
  const { onChange, ...nativeProps } = props
  const { checked, handleChange } = useToggle({
    checked: nativeProps.value ? nativeProps.name : '',
    onChange,
  })

  return (
    <Toggle
      {...nativeProps}
      checked={checked === nativeProps.name}
      onChange={handleChange}
      value={String(nativeProps.name)}
    />
  )
}
