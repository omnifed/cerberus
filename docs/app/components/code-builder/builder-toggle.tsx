'use client'

import { Switch, type SwitchProps } from '@cerberus-design/react'

type BuilderToggleProps = SwitchProps & {
  onChange: (name: string, value: boolean) => void
}

export default function BuilderToggle(props: BuilderToggleProps) {
  const { onChange, ...rootProps } = props

  function handleChange(details: { checked: boolean }) {
    onChange(rootProps.name ?? '', details.checked)
  }

  return (
    <Switch {...rootProps} onCheckedChange={handleChange}>
      show {rootProps.name}
    </Switch>
  )
}
