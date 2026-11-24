'use client'

import { Box, Stack } from '@/styled-system/jsx'
import {
  Button,
  Dialog,
  DialogRootProviderProps,
  useDialog,
} from '@cerberus-design/react'

export function NestedDialog() {
  const parentDialog = useDialog()
  const childDialog = useDialog()

  return (
    <>
      <Button onClick={() => parentDialog.setOpen(true)}>Trigger</Button>
      <ParentDialog
        value={parentDialog}
        onClick={() => childDialog.setOpen(true)}
      />
      <ChildDialog value={childDialog} />
    </>
  )
}

interface ParentDialogProps extends DialogRootProviderProps {
  onClick?: () => void
}

function ParentDialog(props: ParentDialogProps) {
  return (
    <Dialog.RootProvider size="auto" {...props}>
      <Dialog>
        <Dialog.CloseIconTrigger />

        <Stack gap="xs" w="full">
          <Dialog.Title>Parent Dialog</Dialog.Title>
          <Dialog.Description maxW="prose">
            This is the parent dialog. Open a nested dialog to see automatic
            z-index management.
          </Dialog.Description>
        </Stack>

        <Box mt="md" w="full">
          <Button onClick={props.onClick}>Open nested dialog</Button>
        </Box>
      </Dialog>
    </Dialog.RootProvider>
  )
}

function ChildDialog(props: DialogRootProviderProps) {
  return (
    <Dialog.RootProvider size="auto" {...props}>
      <Dialog>
        <Dialog.CloseIconTrigger />

        <Stack gap="xs" w="full">
          <Dialog.Title>Nested Dialog</Dialog.Title>
          <Dialog.Description maxW="prose">
            This dialog is nested within the parent with proper z-index
            layering.
          </Dialog.Description>
        </Stack>
      </Dialog>
    </Dialog.RootProvider>
  )
}
