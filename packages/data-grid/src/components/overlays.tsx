import { Show } from '@cerberus-design/react'
import { Box, Center } from 'styled-system/jsx'
import type { OverlaySlots } from '../types'
import { NoContent } from './no-content.client'

const overlayStyle = {
  height: 'calc(100% - var(--row-height))',
}

// No content

interface NoContentOverlayProps {
  custom?: OverlaySlots['noContent']
}

export function NoContentOverlay(props: NoContentOverlayProps) {
  return (
    <Center w="full" userSelect="none" style={overlayStyle}>
      <Show when={props.custom} fallback={<NoContent />}>
        {() => <>{props.custom}</>}
      </Show>
    </Center>
  )
}

// Pending

interface PendingOverlayProps {
  variant?: OverlaySlots['pending']
}

export function PendingOverlay(props: PendingOverlayProps) {
  if (props.variant === 'skeleton') return null

  return (
    <Box
      bgColor="page.bg.100/75"
      bottom="0"
      left="0"
      overflow="hidden"
      pos="absolute"
      right="0"
      top="var(--row-height)"
      userSelect="none"
      w="full"
      zIndex="decorator"
      style={overlayStyle}
    >
      <MatchPendingOverlay {...props} />
    </Box>
  )
}

function MatchPendingOverlay(props: PendingOverlayProps) {
  if (typeof props.variant !== 'string') {
    return <>{props.variant}</>
  }

  switch (props.variant) {
    case 'skeleton':
      return null
    case 'linear':
      return <LinearOverlay />
    case 'circular':
      return <CircularOverlay />
    default:
      throw new Error(
        'An unknown variant option was provided to the Data Grid overlays.pending property. The only avaiable options are: skeleton, linear, circular, or ReactNode.',
      )
  }
}

function LinearOverlay() {
  return <>linear</>
}

function CircularOverlay() {
  return <>circular</>
}
