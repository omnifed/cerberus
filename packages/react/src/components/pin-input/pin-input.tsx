'use client'

import { extractParts } from '../../internal/extract-parts'
import { splitProps } from '../../utils/index'
import { For } from '../for/for'
import {
  PinInputControl,
  PinInputHiddenInput,
  PinInputInput,
  PinInputLabel,
  PinInputRoot,
  type PinInputRootProps,
} from './primitives'

const PARTS = {
  label: PinInputLabel,
  control: PinInputControl,
  input: PinInputInput,
}

export type PinInputProps = PinInputRootProps

/**
 * Renders a complete PinInput: one input per `count` (3 by default) and the
 * hidden input that holds the combined value. Direct `PinInput.Label`,
 * `PinInput.Control` and `PinInput.Input` children override those parts; a
 * `PinInput.Input` child patches every input (its `index` is ignored).
 */
export function PinInputEl(props: PinInputProps) {
  const [localProps, rootProps] = splitProps(props, ['children'])
  const count = rootProps.count ?? 3

  const { parts, content } = extractParts(localProps.children, PARTS)
  const { children: controlChildren, ...controlOverrideProps } =
    parts.control ?? {}
  const { index: _index, ...inputOverrideProps } = parts.input ?? {}

  return (
    <PinInputRoot placeholder="" {...rootProps} count={count}>
      {parts.label && <PinInputLabel {...parts.label} />}

      <PinInputControl {...controlOverrideProps}>
        {controlChildren ?? (
          <For each={Array.from({ length: count })}>
            {(_, index) => (
              <PinInputInput
                key={index}
                {...inputOverrideProps}
                index={index}
              />
            )}
          </For>
        )}
      </PinInputControl>

      {content}
      <PinInputHiddenInput />
    </PinInputRoot>
  )
}
