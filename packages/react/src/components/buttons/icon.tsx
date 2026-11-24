'use client'

import type { ReactNode, Ref } from 'react'
import { Box } from 'styled-system/jsx'
import { Show } from '../show'
import { Spinner } from '../spinner'
import { useButtonContext } from './context'

export type ButtonIconProps = {
  /**
   * The icon to render. It is replaced by a Spinner while the parent Button is `pending`.
   */
  children?: ReactNode
  /**
   * A ref to the Spinner wrapper rendered while the parent Button is `pending`.
   */
  ref?: Ref<HTMLDivElement>
}

export function ButtonIcon(props: ButtonIconProps) {
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
