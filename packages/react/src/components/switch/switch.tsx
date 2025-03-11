import type { SwitchRootProps } from '@ark-ui/react'
import type { SwitchRecipeVariantProps } from 'styled-system/recipes'
import { SwitchParts } from './parts'
import { SwitchIndicator } from './switch-indicator'

export type SwitchProps = SwitchRootProps & SwitchRecipeVariantProps

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
        <SwitchParts.Thumb>
          <SwitchIndicator />
        </SwitchParts.Thumb>
      </SwitchParts.Control>

      <SwitchParts.Label>{children}</SwitchParts.Label>

      <SwitchParts.HiddenInput />
    </SwitchParts.Root>
  )
}
