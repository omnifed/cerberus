'use client'

import { Stack } from '@/styled-system/jsx'
import {
  Button,
  Dialog,
  DialogCloseIconTrigger,
  DialogDescription,
  DialogHeading,
  DialogRootProvider,
  Text,
  useDialog,
} from '@cerberus-design/react'

export function RootProviderDemo() {
  const dialog = useDialog()

  return (
    <>
      <Button onClick={() => dialog.setOpen(true)}>
        Dialog is {dialog.open ? 'open' : 'closed'}
      </Button>

      <DialogRootProvider value={dialog}>
        <Dialog size="auto">
          <DialogCloseIconTrigger />
          <Stack gap="md" w="full">
            <DialogHeading asChild>
              <Text textStyle="heading-sm">Controlled Externally</Text>
            </DialogHeading>
            <DialogDescription maxW="prose">
              This dialog is controlled via the useDialog hook.
            </DialogDescription>
          </Stack>
        </Dialog>
      </DialogRootProvider>
    </>
  )
}
