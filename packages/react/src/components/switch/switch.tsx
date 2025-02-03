import type { SwitchRootProps } from '@ark-ui/react'
import { SwitchParts } from './parts'

export type SwitchProps = SwitchRootProps

/**
 * The Switch component is a and abstraction of the primitives that displays a
 * controlled Switch with a label.
 * @description [Cerberus Docs] https://cerberus.digitalu.design/react/switch
 * @description [Ark Docs] https://ark-ui.com/docs/components/switch
 */
export function Switch(props: SwitchProps) {
  const { children, ...rootProps } = props

  return (
    <SwitchParts.Root {...rootProps}>
      <SwitchParts.Control>
        <SwitchParts.Thumb />
      </SwitchParts.Control>

      <SwitchParts.Label>{children}</SwitchParts.Label>

      <SwitchParts.HiddenInput />
    </SwitchParts.Root>
  )
}
