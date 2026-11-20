'use client'

import { ButtonProvider, type ButtonContextValue } from './context'
import { ButtonRoot, ButtonRootProps } from './primitives'

export type ButtonProps = ButtonRootProps & ButtonContextValue

export function ButtonEl(props: ButtonProps) {
  const { pending = false, ...rootProps } = props
  return (
    <ButtonProvider pending={pending}>
      <ButtonRoot {...rootProps} disabled={pending || rootProps.disabled} />
    </ButtonProvider>
  )
}
