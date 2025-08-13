import { Show } from '../show/show'
import { NumberInputParts } from './parts'
import type { NumberInputRootProps } from './primitives'
import { DecrementTrigger } from './decrement-trigger'
import { IncrementTrigger } from './increment-trigger'

interface NumberInputElProps extends NumberInputRootProps {
  /**
   * Whether to show a scrubber for fine-tuning the value.
   */
  scrubber?: boolean
}

/**
 * An input for displaying a numeric value.
 * @definition [Cerberus Docs](https://cerberus.digitalu.design/docs/components/number-input)
 */
export function NumberInput(props: NumberInputElProps) {
  const { scrubber, ...rootProps } = props
  return (
    <NumberInputParts.Root {...rootProps}>
      <Show when={scrubber}>
        <NumberInputParts.Scrubber />
      </Show>

      <NumberInputParts.Control>
        <NumberInputParts.Input />
        <IncrementTrigger />
        <DecrementTrigger />
      </NumberInputParts.Control>
    </NumberInputParts.Root>
  )
}
