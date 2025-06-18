'use client'

import { Information, Model } from '@carbon/icons-react'
import {
  Field,
  DialogParts,
  DialogProvider,
  DialogTrigger,
  Dialog,
  DialogHeading,
  DialogDescription,
  DialogCloseTrigger,
  DialogCloseIconTrigger,
  DatePicker,
  DatePickerLabel,
  DatePickerInput,
  DatePickerCalendar,
  Button,
  Portal,
  type DialogProps,
  Tooltip,
} from '@cerberus-design/react'
import { Box, HStack, VStack } from 'styled-system/jsx'

export function OverviewPreview(props: { id: string }) {
  return (
    <DialogProvider id={props.id} lazyMount>
      <DialogTrigger asChild>
        <Button>open dialog</Button>
      </DialogTrigger>

      <Dialog>
        <DialogCloseIconTrigger />
        <VStack alignItems="flex-start" gap="xs" w="full">
          <DialogHeading>Dialog Title</DialogHeading>
          <HStack w="full">
            <DialogDescription>
              This is a custom modal description
            </DialogDescription>
            <Tooltip content="This is a tooltip within a dialog.">
              <Information />
            </Tooltip>
          </HStack>
        </VStack>

        <HStack paddingBlock="10" w="full">
          <Model size="5rem" />
          <Model size="5rem" />
          <Model size="5rem" />
        </HStack>

        <DialogCloseTrigger asChild>
          <Button>Close</Button>
        </DialogCloseTrigger>
      </Dialog>
    </DialogProvider>
  )
}

export function ModalFormPreview(props: { id: string }) {
  return (
    <DialogProvider id={props.id} lazyMount>
      <DialogTrigger asChild>
        <Button>open lazy mounted form dialog</Button>
      </DialogTrigger>
      <Dialog>
        <DialogHeading>Form Dialog</DialogHeading>
        <DialogDescription>
          This is a form dialog with a date picker
        </DialogDescription>

        <Box paddingBlock="10" w="full">
          <form>
            <Field>
              <DatePicker id={`${props.id}:picker`} name={`${props.id}:picker`}>
                <DatePickerLabel>Start date</DatePickerLabel>
                <DatePickerInput />
                <DatePickerCalendar withModal />
              </DatePicker>
            </Field>
          </form>

          <Box paddingBlockStart="10">
            <DialogCloseTrigger asChild>
              <Button>Submit</Button>
            </DialogCloseTrigger>
          </Box>
        </Box>
        <DialogCloseIconTrigger />
      </Dialog>
    </DialogProvider>
  )
}

export function CustomPreview() {
  return (
    <DialogParts.Root>
      <DialogParts.Trigger asChild>
        <Button palette="danger">Custom Dialog</Button>
      </DialogParts.Trigger>

      <Portal>
        <DialogParts.Backdrop
          css={{
            animationFillMode: 'forwards',
            bgColor: 'danger.surface.initial/70',
            bottom: 0,
            left: 0,
            opacity: 0,
            position: 'fixed',
            right: 0,
            top: 0,
            zIndex: 'overlay',
            _open: {
              animationStyle: 'emphasized-fade-in',
            },
            _closed: {
              animationStyle: 'emphasized-fade-out',
            },
          }}
        />
        <DialogParts.Positioner
          css={{
            alignItems: 'flex-start',
            display: 'flex',
            h: '100dvh',
            justifyContent: 'center',
            left: '0',
            paddingBlockStart: 'xl',
            position: 'fixed',
            top: '0',
            w: '100vw',
            zIndex: 'modal',
          }}
        >
          <DialogParts.Content
            css={{
              bgColor: 'page.surface.initial',
              padding: 'xl',
            }}
          >
            <DialogParts.Heading
              css={{
                paddingBlockEnd: 'lg',
              }}
            >
              C3rB3RuS R00lz!
            </DialogParts.Heading>
            <DialogParts.CloseTrigger asChild>
              <Button palette="danger" shape="rounded">
                Close
              </Button>
            </DialogParts.CloseTrigger>
          </DialogParts.Content>
        </DialogParts.Positioner>
      </Portal>
    </DialogParts.Root>
  )
}

export function SizePreview() {
  return (
    <HStack gap="md">
      <DialogContent size="xs" />
      <DialogContent size="sm" />
      <DialogContent size="md" />
      <DialogContent size="lg" />
      <DialogContent size="full" />
    </HStack>
  )
}

function DialogContent(props: { size: DialogProps['size'] }) {
  return (
    <DialogProvider>
      <DialogTrigger asChild>
        <Button>{`open ${props.size} size`}</Button>
      </DialogTrigger>

      <Dialog size={props.size}>
        <DialogCloseIconTrigger />
        <VStack alignItems="flex-start" gap="xs" w="full">
          <DialogHeading>Dialog Title</DialogHeading>
          <DialogDescription>
            This is a custom modal description
          </DialogDescription>
        </VStack>

        <HStack paddingBlock="10" w="full">
          <Model size="5rem" />
          <Model size="5rem" />
          <Model size="5rem" />
        </HStack>
      </Dialog>
    </DialogProvider>
  )
}
