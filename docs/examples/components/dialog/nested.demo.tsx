'use client'

import { Box, Stack } from '@/styled-system/jsx'
import {
  Button,
  Dialog,
  DialogCloseIconTrigger,
  DialogDescription,
  DialogHeading,
  DialogRootProvider,
  DialogRootProviderProps,
  useDialog,
} from '@cerberus-design/react'

export function NestedDialog() {
  const parentDialog = useDialog()
  const childDialog = useDialog()

  return (
    <>
      <Button onClick={() => parentDialog.setOpen(true)}>Trigger</Button>
      <ParentDialog value={parentDialog} onClick={() => childDialog.setOpen(true)} />
      <ChildDialog value={childDialog} />
    </>
  )
}

interface ParentDialogProps extends DialogRootProviderProps {
  onClick?: () => void
}

function ParentDialog(props: ParentDialogProps) {
  return (
    <DialogRootProvider {...props}>
      <Dialog size="auto">
        <DialogCloseIconTrigger />

        <Stack gap="xs" w="full">
          <DialogHeading>Parent Dialog</DialogHeading>
          <DialogDescription maxW="prose">
            This is the parent dialog. Open a nested dialog to see automatic z-index
            management.
          </DialogDescription>
        </Stack>

        <Box mt="md" w="full">
          <Button onClick={props.onClick}>Open nested dialog</Button>
        </Box>
      </Dialog>
    </DialogRootProvider>
  )
}

function ChildDialog(props: DialogRootProviderProps) {
  return (
    <DialogRootProvider {...props}>
      <Dialog size="auto">
        <DialogCloseIconTrigger />

        <Stack gap="xs" w="full">
          <DialogHeading>Nested Dialog</DialogHeading>
          <DialogDescription maxW="prose">
            This dialog is nested within the parent with proper z-index layering.
          </DialogDescription>
        </Stack>
      </Dialog>
    </DialogRootProvider>
  )
}
