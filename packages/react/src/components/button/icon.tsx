'use client'

import type { ReactNode, RefObject } from 'react'
import { Box } from 'styled-system/jsx'
import { Show } from '../show'
import { Spinner } from '../spinner'
import { useButtonContext } from './context'

export type ButtonIconProps = {
  children: ReactNode
  ref: RefObject<HTMLDivElement>
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
