'use client'

import { useCerberusContext } from '../../context/cerberus'
import { extractParts } from '../../internal/extract-parts'
import { splitProps } from '../../utils/index'
import {
  NumberInputControl,
  NumberInputDecrementTrigger,
  NumberInputIncrementTrigger,
  NumberInputInput,
  NumberInputLabel,
  NumberInputRoot,
  NumberInputScrubber,
  type NumberInputRootProps,
} from './primitives'

const PARTS = {
  label: NumberInputLabel,
  scrubber: NumberInputScrubber,
  control: NumberInputControl,
  input: NumberInputInput,
  incrementTrigger: NumberInputIncrementTrigger,
  decrementTrigger: NumberInputDecrementTrigger,
}

export type NumberInputProps = NumberInputRootProps & {
  /**
   * Whether to show a scrubber for fine-tuning the value with the pointer.
   * A direct `NumberInput.Scrubber` child also shows it.
   */
  scrubber?: boolean
}

/**
 * Renders a complete NumberInput: the input with increment and decrement
 * triggers (using the Cerberus `increment` and `decrement` icons) and an
 * optional scrubber. Direct `NumberInput.Label`, `NumberInput.Scrubber`,
 * `NumberInput.Control`, `NumberInput.Input`, `NumberInput.IncrementTrigger`
 * and `NumberInput.DecrementTrigger` children override those parts; a trigger
 * child with children replaces its default icon. Other children render at the
 * end of the root.
 * @description [Cerberus Docs](https://cerberus.digitalu.design/docs/components/number-input)
 * @description [Ark Docs](https://ark-ui.com/docs/components/number-input)
 * @example
 * ```tsx
 * <Field label="How many?">
 *   <NumberInput />
 * </Field>
 * ```
 */
export function NumberInputEl(props: NumberInputProps) {
  const [localProps, rootProps] = splitProps(props, ['scrubber', 'children'])
  const { icons } = useCerberusContext()
  const { increment: IncrementIcon, decrement: DecrementIcon } = icons

  const { parts, content } = extractParts(localProps.children, PARTS)

  const { children: controlChildren, ...controlOverrideProps } =
    parts.control ?? {}
  const { children: incrementChildren, ...incrementOverrideProps } =
    parts.incrementTrigger ?? {}
  const { children: decrementChildren, ...decrementOverrideProps } =
    parts.decrementTrigger ?? {}

  const showScrubber = Boolean(localProps.scrubber || parts.scrubber)

  return (
    <NumberInputRoot {...rootProps}>
      {parts.label && <NumberInputLabel {...parts.label} />}

      {showScrubber && <NumberInputScrubber {...parts.scrubber} />}

      <NumberInputControl {...controlOverrideProps}>
        {controlChildren ?? (
          <>
            <NumberInputInput {...parts.input} />
            <NumberInputIncrementTrigger {...incrementOverrideProps}>
              {incrementChildren ?? <IncrementIcon />}
            </NumberInputIncrementTrigger>
            <NumberInputDecrementTrigger {...decrementOverrideProps}>
              {decrementChildren ?? <DecrementIcon />}
            </NumberInputDecrementTrigger>
          </>
        )}
      </NumberInputControl>

      {content}
    </NumberInputRoot>
  )
}
