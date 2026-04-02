import { Show } from '@cerberus-design/react'
import { Center } from 'styled-system/jsx'
import type { OverlaySlots } from '../types'
import { NoContent } from './no-content.client'

interface NoContentOverlayProps {
  custom?: OverlaySlots['noContent']
}

export function NoContentOverlay(props: NoContentOverlayProps) {
  return (
    <Center
      w="full"
      userSelect="none"
      style={{
        height: 'calc(100% - var(--row-height))',
      }}
    >
      <Show when={props.custom} fallback={<NoContent />}>
        {() => <>{props.custom}</>}
      </Show>
    </Center>
  )
}
