'use client'

import { useCerberusContext } from '../../context/cerberus'
import { extractParts } from '../../internal/extract-parts'
import { cerberus } from '../../system/index'
import {
  CheckboxContext,
  CheckboxControl,
  CheckboxHiddenInput,
  CheckboxIndicator,
  CheckboxLabel,
  CheckboxRoot,
  type CheckboxRootProps,
} from './primitives'

const PARTS = {
  control: CheckboxControl,
  indicator: CheckboxIndicator,
  label: CheckboxLabel,
  hiddenInput: CheckboxHiddenInput,
}

export type CheckboxProps = CheckboxRootProps

/**
 * The Checkbox component is an abstraction of the primitives that displays a
 * labeled checkbox with the Cerberus `checkbox` or `indeterminate` icon in its
 * indicator, and a "(required)" notice in the label when `required` is set.
 * Non-part children render as the label; direct `Checkbox.Control`,
 * `Checkbox.Indicator`, `Checkbox.Label` or `Checkbox.HiddenInput` children
 * override that part. A part child with children replaces its default content.
 * @description [Cerberus Docs](https://cerberus.digitalu.design/docs/components/checkbox)
 * @description [Ark Docs](https://ark-ui.com/docs/components/checkbox)
 * @example
 * ```tsx
 * <Checkbox name="terms" required>
 *   I agree to the terms
 * </Checkbox>
 * ```
 */
export function CheckboxEl(props: CheckboxProps) {
  const { children, ...rootProps } = props
  const { icons } = useCerberusContext()
  const { checkbox: CheckIcon, indeterminate: IndeterminateIcon } = icons

  const { parts, content } = extractParts(children, PARTS)

  const { children: controlChildren, ...controlOverrideProps } =
    parts.control ?? {}
  const { children: indicatorChildren, ...indicatorOverrideProps } =
    parts.indicator ?? {}
  const { children: labelChildren, ...labelOverrideProps } = parts.label ?? {}

  return (
    <CheckboxRoot {...rootProps}>
      <CheckboxControl {...controlOverrideProps}>
        {controlChildren ?? (
          <CheckboxContext>
            {(checkbox) => (
              <CheckboxIndicator
                indeterminate={checkbox.indeterminate}
                {...indicatorOverrideProps}
              >
                {indicatorChildren ??
                  (checkbox.indeterminate ? (
                    <IndeterminateIcon />
                  ) : (
                    <CheckIcon />
                  ))}
              </CheckboxIndicator>
            )}
          </CheckboxContext>
        )}
      </CheckboxControl>

      <CheckboxLabel {...labelOverrideProps}>
        {labelChildren ?? content}
        {rootProps.required && (
          <cerberus.span data-part="required-indicator">
            (required)
          </cerberus.span>
        )}
      </CheckboxLabel>

      <CheckboxHiddenInput {...parts.hiddenInput} />
    </CheckboxRoot>
  )
}
