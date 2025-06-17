import { SwitchParts } from './parts'
import { SwitchIndicator } from './switch-indicator'
import type { SwitchRootProps } from './primitives'

/**
 * The Switch component is a and abstraction of the primitives that displays a
 * controlled Switch with a label.
 * @description [Cerberus Docs] https://cerberus.digitalu.design/react/switch
 * @description [Ark Docs] https://ark-ui.com/docs/components/switch
 */
export function Switch(props: SwitchRootProps) {
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
