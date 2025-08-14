import { PinInputParts } from './parts'
import type { PinInputRootProps } from './primitives'

/**
 * PinInput component for entering a numeric PIN code.
 * @definition [Cerberus Docs](https://cerberus.digitalu.design/docs/components/pin-input)
 */
export function PinInput(props: PinInputRootProps) {
  const { size, ...rootProps } = props

  return (
    <PinInputParts.Root placeholder="" size={size} {...rootProps}>
      <PinInputParts.Control>
        {[0, 1, 2].map((id, index) => (
          <PinInputParts.Input key={id} index={index} size={size} />
        ))}
      </PinInputParts.Control>
      <PinInputParts.HiddenInput />
    </PinInputParts.Root>
  )
}
