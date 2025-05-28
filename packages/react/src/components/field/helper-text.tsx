import type { PropsWithChildren } from 'react'
import { FieldHelperText } from './primitives'

interface HelperTextProps {
  invalid?: boolean
}

/**
 * The HelperText component is an abstraction for hiding the helper text
 * when the field is invalid. Ark UI assumes people want the helper text
 * to always be visible, so this is a workaround for that.
 */
export function HelperText(props: PropsWithChildren<HelperTextProps>) {
  if (props.invalid) return null
  return (
    <FieldHelperText data-has-content={Boolean(props.children)}>
      {props.children}
    </FieldHelperText>
  )
}
