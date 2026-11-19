'use client'

import { useCerberusContext } from '../../context/cerberus'
import { extractParts } from '../../internal/extract-parts'
import {
  SwitchControl,
  SwitchHiddenInput,
  SwitchLabel,
  SwitchRoot,
  SwitchThumb,
  type SwitchRootProps,
} from './primitives'

const PARTS = {
  control: SwitchControl,
  thumb: SwitchThumb,
  label: SwitchLabel,
  hiddenInput: SwitchHiddenInput,
}

export type SwitchProps = SwitchRootProps

/**
 * The Switch component is an abstraction of the primitives that displays a
 * labeled switch with the Cerberus check indicator in the thumb. Non-part
 * children render as the label; direct `Switch.Control`, `Switch.Thumb`,
 * `Switch.Label` or `Switch.HiddenInput` children override that part.
 * @description [Cerberus Docs] https://cerberus.digitalu.design/docs/components/switch
 * @description [Ark Docs] https://ark-ui.com/docs/components/switch
 */
export function SwitchEl(props: SwitchProps) {
  const { children, ...rootProps } = props
  const { icons } = useCerberusContext()
  const { toggleChecked: CheckIcon } = icons

  const { parts, content } = extractParts(children, PARTS)

  const { children: controlChildren, ...controlOverrideProps } =
    parts.control ?? {}
  const { children: thumbChildren, ...thumbOverrideProps } = parts.thumb ?? {}
  const { children: labelChildren, ...labelOverrideProps } = parts.label ?? {}

  return (
    <SwitchRoot {...rootProps}>
      <SwitchControl {...controlOverrideProps}>
        {controlChildren ?? (
          <SwitchThumb {...thumbOverrideProps}>
            {thumbChildren ?? <CheckIcon />}
          </SwitchThumb>
        )}
      </SwitchControl>

      <SwitchLabel {...labelOverrideProps}>
        {labelChildren ?? content}
      </SwitchLabel>

      <SwitchHiddenInput {...parts.hiddenInput} />
    </SwitchRoot>
  )
}
