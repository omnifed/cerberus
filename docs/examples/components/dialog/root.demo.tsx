'use client'

import { Stack } from '@/styled-system/jsx'
import { Button, Dialog, Text, useDialog } from '@cerberus-design/react'

export function RootProviderDemo() {
  const dialog = useDialog()

  return (
    <>
      <Button onClick={() => dialog.setOpen(true)}>
        Dialog is {dialog.open ? 'open' : 'closed'}
      </Button>

      <Dialog.RootProvider size="auto" value={dialog}>
        <Dialog>
          <Dialog.CloseIconTrigger />
          <Stack gap="md" w="full">
            <Dialog.Title asChild>
              <Text textStyle="heading-sm">Controlled Externally</Text>
            </Dialog.Title>
            <Dialog.Description maxW="prose">
              This dialog is controlled via the useDialog hook.
            </Dialog.Description>
          </Stack>
        </Dialog>
      </Dialog.RootProvider>
    </>
  )
}
