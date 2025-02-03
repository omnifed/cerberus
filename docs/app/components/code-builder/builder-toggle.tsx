'use client'

import { Switch, type SwitchProps } from '@cerberus-design/react'
import type { BooleanResult } from './helpers'

interface BuilderToggleProps extends SwitchProps, BooleanResult {}

export default function BuilderToggle(props: BuilderToggleProps) {
  const { onChange, ...nativeProps } = props

  function handleChange(details: { checked: boolean }) {
    onChange(nativeProps.name, details.checked)
  }

  return (
    <Switch {...nativeProps} onCheckedChange={handleChange}>
      show {nativeProps.name}
    </Switch>
  )
}
