'use client'

import { Box } from 'styled-system/jsx'
import type { CerberusProps } from '../../system/types'
import { Show } from '../show/index'
import { Spinner } from '../spinner/index'
import {
  ButtonProvider,
  useButtonContext,
  type ButtonContextValue,
} from './context'
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

export function ButtonIcon(props: CerberusProps<'div'>) {
  const { children, ref } = props
  const { pending } = useButtonContext()
  return (
    <Show when={pending} fallback={<>{children}</>}>
      <Box data-scope="button" data-part="button-spinner" ref={ref} w="4">
        <Spinner />
      </Box>
    </Show>
  )
}
