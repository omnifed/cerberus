'use client'

import { HStack } from '@/styled-system/jsx'
import { createToaster, Button, NotificationCenter } from '@cerberus-design/react'

export function CustomConfigDemo() {
  const customToaster = createToaster({
    gap: 24,
    overlap: false,
    placement: 'bottom-end',
  })

  return (
    <>
      <HStack>
        <Button
          onClick={() => {
            customToaster.create({
              title: 'Custom Toaster',
              description: 'This notification is using a custom toaster configuration.',
              type: 'success',
            })
          }}
        >
          Show Notification
        </Button>
      </HStack>

      <NotificationCenter toaster={customToaster} />
    </>
  )
}
