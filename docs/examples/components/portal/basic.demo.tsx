'use client'

import { HStack } from '@/styled-system/jsx'
import { Close } from '@carbon/icons-react'
import { Button, IconButton, Portal, Show } from '@cerberus-design/react'
import { useSignal } from '@cerberus-design/signals'

export function BasicDemo() {
  const [showPortal, setShowPortal] = useSignal<boolean>(false)

  function handleShowPortal() {
    setShowPortal(true)
  }

  function handleClosePortal() {
    setShowPortal(false)
  }

  return (
    <>
      <Button onClick={handleShowPortal}>Show Portal</Button>
      <Show when={showPortal}>
        <Portal>
          <HStack
            bgColor="info.surface.100"
            color="info.text.100"
            justify="space-between"
            left="0"
            mx="md"
            p="md"
            position="absolute"
            right="0"
            rounded="md"
            shadow="md"
            top="md"
            zIndex="toast"
          >
            <p>
              This is a portal element that is outside of the DOM hierarchy of the
              parent component.
            </p>

            <IconButton ariaLabel="Close Portal" onClick={handleClosePortal}>
              <Close />
            </IconButton>
          </HStack>
        </Portal>
      </Show>
    </>
  )
}
