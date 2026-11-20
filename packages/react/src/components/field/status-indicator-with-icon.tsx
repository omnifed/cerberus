'use client'

import { useFieldContext } from '@ark-ui/react/field'
import type { ReactNode } from 'react'
import { useCerberusContext } from '../../context/cerberus'
import {
  FieldEndIndicator,
  FieldStatusIndicator,
  type FieldEndIndicatorProps,
  type FieldStatusIndicatorProps,
} from './primitives'

/**
 * Renders `Field.StatusIndicator` with the Cerberus `invalid` icon (or its
 * children) when the field is invalid, else `Field.EndIndicator`. Both are
 * decorative. Shared by `Field.StatusIndicatorWithIcon` and
 * `Field.InputGroup`, which patch each one separately.
 * @internal
 */
export function StatusSlot(props: {
  statusProps: FieldStatusIndicatorProps
  endProps: FieldEndIndicatorProps
}) {
  const field = useFieldContext()
  const { icons } = useCerberusContext()
  const { invalid: InvalidIcon } = icons

  if (field?.invalid) {
    const { children, ...statusProps } = props.statusProps
    return (
      <FieldStatusIndicator aria-hidden="true" data-invalid {...statusProps}>
        {children ?? <InvalidIcon />}
      </FieldStatusIndicator>
    )
  }

  return <FieldEndIndicator aria-hidden="true" {...props.endProps} />
}

export interface FieldStatusIndicatorWithIconProps extends FieldStatusIndicatorProps {
  /**
   * The content of the end indicator rendered while the field is valid.
   */
  fallback?: ReactNode
}

/**
 * The StatusIndicatorWithIcon component is an abstraction that renders
 * `Field.StatusIndicator` with the Cerberus `invalid` icon when the field is
 * invalid, else a `Field.EndIndicator` with the `fallback`. Its props go to
 * whichever indicator renders; children replace the invalid icon. It must
 * render inside a `Field`.
 * @description [Cerberus Docs](https://cerberus.digitalu.design/docs/components/field)
 * @example
 * ```tsx
 * <Field.Root invalid>
 *   <Field.InputRoot>
 *     <Field.Input />
 *     <Field.StatusIndicatorWithIcon fallback={<Search />} />
 *   </Field.InputRoot>
 * </Field.Root>
 * ```
 */
export function FieldStatusIndicatorWithIcon(
  props: FieldStatusIndicatorWithIconProps,
) {
  const { fallback, children, ...indicatorProps } = props
  return (
    <StatusSlot
      statusProps={{ ...indicatorProps, children }}
      endProps={{ ...indicatorProps, children: fallback }}
    />
  )
}
