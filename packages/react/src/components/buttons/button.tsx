'use client'

import { ButtonProvider, type ButtonContextValue } from './context'
import { ButtonRoot, ButtonRootProps } from './primitives'

export type ButtonProps = ButtonRootProps & ButtonContextValue

/**
 * A `Button.Root` inside a `Button.Provider`, so `Button.Icon` children can
 * show a Spinner while `pending` (which also disables the button).
 *
 * @example
 * ```tsx
 * <Button usage="filled" onClick={save}>
 *   Save
 * </Button>
 * ```
 */
export function ButtonEl(props: ButtonProps) {
  const { pending = false, ...rootProps } = props
  return (
    <ButtonProvider pending={pending}>
      <ButtonRoot {...rootProps} disabled={pending || rootProps.disabled} />
    </ButtonProvider>
  )
}
