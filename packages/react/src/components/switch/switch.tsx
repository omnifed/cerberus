import type { SwitchRootProps } from '@ark-ui/react'
import { SwitchParts } from './parts'

export interface SwitchProps extends SwitchRootProps {
  /**
   * The label of the switch.
   */
  label: string
}

/**
 * The Switch component is a and abstraction of the primitives that displays a
 * controlled Switch with a label.
 * @description [Cerberus Docs] https://cerberus.digitalu.design/react/switch
 * @description [Ark Docs] https://ark-ui.com/docs/components/switch
 */
export function Switch(props: SwitchProps) {
  const { label, ...rootProps } = props

  return (
    <SwitchParts.Root {...rootProps}>
      <SwitchParts.Control>
        <SwitchParts.Thumb />
      </SwitchParts.Control>

      <SwitchParts.Label>{label}</SwitchParts.Label>

      <SwitchParts.HiddenInput />
    </SwitchParts.Root>
  )
}
