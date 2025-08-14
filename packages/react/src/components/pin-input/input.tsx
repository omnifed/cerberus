import { PinInputParts } from './parts'
import type { PinInputRootProps } from './primitives'

/**
 * PinInput component for entering a numeric PIN code.
 * @definition [Cerberus Docs](https://cerberus.digitalu.design/docs/components/pin-input)
 */
export function PinInput(props: PinInputRootProps) {
  const { size, ...rootProps } = props
  const count = rootProps.count ?? 3

  return (
    <PinInputParts.Root placeholder="" size={size} {...rootProps}>
      <PinInputParts.Control>
        {Array.from({ length: count }, (_, index) => (
          <PinInputParts.Input key={index} index={index} size={size} />
        ))}
      </PinInputParts.Control>
      <PinInputParts.HiddenInput />
    </PinInputParts.Root>
  )
}
