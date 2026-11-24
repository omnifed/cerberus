'use client'

import { useFieldContext } from '@ark-ui/react/field'
import { FieldRoot, FieldTextarea, type FieldTextareaProps } from './primitives'

/**
 * A textarea styled for a `Field`: `Field.Textarea` inside a `Field`, or
 * wrapped in its own `Field.Root` when rendered on its own (as v1's
 * `Textarea` could be).
 * @see {@link FieldTextarea}
 * @example
 * ```tsx
 * import { Field, Textarea } from '@cerberus/react'
 *
 * <Field label="Comments" helperText="Your comments are valuable to us.">
 *   <Textarea />
 * </Field>
 * ```
 */
export function Textarea(props: FieldTextareaProps) {
  if (!useFieldContext()) {
    return (
      <FieldRoot>
        <FieldTextarea {...props} />
      </FieldRoot>
    )
  }
  return <FieldTextarea {...props} />
}
