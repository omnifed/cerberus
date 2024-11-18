'use client'

import { Close } from '@cerberus-design/icons'
import { Button, IconButton, Portal, Show } from '@cerberus-design/react'
import { hstack } from '@cerberus/styled-system/patterns'
import { useState } from 'react'

export default function PortalPreview() {
  const [showPortal, setShowPortal] = useState<boolean>(false)

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
          <div
            className={hstack({
              backgroundColor: 'info.surface.100',
              color: 'info.text.100',
              justify: 'space-between',
              left: 0,
              mxi: '4',
              p: '4',
              position: 'absolute',
              right: 0,
              rounded: 'md',
              shadow: 'md',
              top: '4',
              zIndex: 'toast',
            })}
          >
            <p>
              This is a portal element that is outside of the DOM hierarchy of
              the parent component.
            </p>

            <IconButton ariaLabel="Close Portal" onClick={handleClosePortal}>
              <Close />
            </IconButton>
          </div>
        </Portal>
      </Show>
    </>
  )
}
