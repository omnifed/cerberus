import { PinInputParts } from './parts'
import type { PinInputRootProps } from './primitives'

/**
 * PinInput component for entering a numeric PIN code.
 * @definition [Cerberus Docs](https://cerberus.digitalu.design/docs/components/pin-input)
 */
export function PinInput(props: PinInputRootProps) {
  return (
    <PinInputParts.Root {...props}>
      <PinInputParts.Label>Label</PinInputParts.Label>
      <PinInputParts.Control>
        {[0, 1, 2].map((id, index) => (
          <PinInputParts.Input key={id} index={index} />
        ))}
      </PinInputParts.Control>
      <PinInputParts.HiddenInput />
    </PinInputParts.Root>
  )
}
