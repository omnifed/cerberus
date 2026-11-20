'use client'

import { Stack } from '@/styled-system/jsx'
import {
  Button,
  Dialog,
  DialogRootProviderProps,
  Field,
  Text,
  Textarea,
  useDialog,
} from '@cerberus-design/react'
import { useSignal } from '@cerberus-design/signals'
import { ChangeEventHandler } from 'react'

export function ConfirmationDialog() {
  const [formContent, setFormContent] = useSignal<string>('')
  const [isParentDialogOpen, setIsParentDialogOpen] = useSignal<boolean>(false)

  const parentDialog = useDialog({
    open: isParentDialogOpen,
    onOpenChange: (details) => {
      if (!details.open && formContent.trim()) {
        confirmDialog.setOpen(true)
      } else {
        setIsParentDialogOpen(details.open)
      }
    },
  })
  const confirmDialog = useDialog()

  const handleConfirmClose = () => {
    confirmDialog.setOpen(false)
    parentDialog.setOpen(false)
    setFormContent('')
  }

  const handleCancel = () => {
    confirmDialog.setOpen(false)
  }

  return (
    <>
      <Button onClick={() => parentDialog.setOpen(true)}>Trigger</Button>
      <ParentDialog
        onChange={(e) => setFormContent(e.target.value)}
        formValue={formContent}
        value={parentDialog}
      />
      <ConfirmDialog
        value={confirmDialog}
        onCancel={handleCancel}
        onClose={handleConfirmClose}
      />
    </>
  )
}

interface ParentDialogProps extends DialogRootProviderProps {
  onChange?: ChangeEventHandler<HTMLTextAreaElement>
  formValue: string
}

function ParentDialog(props: ParentDialogProps) {
  return (
    <Dialog.RootProvider {...props}>
      <Dialog>
        <Dialog.CloseIconTrigger />

        <Stack gap="md" w="full">
          <Dialog.Title asChild>
            <Text textStyle="heading-sm">Edit Content</Text>
          </Dialog.Title>
          <Dialog.Description maxW="prose">
            Make changes to your content. You&apos;ll be asked to confirm before
            closing if there are unsaved changes.
          </Dialog.Description>

          <Field>
            <Textarea
              value={props.formValue}
              onChange={props.onChange}
              placeholder="Enter some text..."
              rows={4}
            />
          </Field>
        </Stack>
      </Dialog>
    </Dialog.RootProvider>
  )
}

interface ConfirmationDialogProps extends DialogRootProviderProps {
  onCancel?: () => void
  onClose?: () => void
}

function ConfirmDialog(props: ConfirmationDialogProps) {
  return (
    <Dialog.RootProvider size="auto" {...props}>
      <Dialog>
        <Dialog.CloseIconTrigger />

        <Stack gap="md" w="full">
          <Dialog.Title asChild>
            <Text textStyle="heading-sm">Unsaved Changes</Text>
          </Dialog.Title>
          <Dialog.Description maxW="prose">
            You have unsaved changes. Are you sure you want to close without
            saving?
          </Dialog.Description>

          <Button.Group>
            <Button onClick={props.onCancel} usage="outlined-subtle">
              Keep Editing
            </Button>
            <Button palette="danger" onClick={props.onClose}>
              Discard Changes
            </Button>
          </Button.Group>
        </Stack>
      </Dialog>
    </Dialog.RootProvider>
  )
}
