'use client'

import { Model } from '@carbon/icons-react'
import {
  Field,
  Dialog,
  DialogBackdrop,
  DialogPositioner,
  DialogContent,
  DialogTrigger,
  DialogProvider,
  DialogCloseTrigger,
  DialogCloseIconTrigger,
  DialogHeading,
  DialogDescription,
  DatePicker,
  DatePickerLabel,
  DatePickerInput,
  DatePickerCalendar,
  Button,
  Portal,
} from '@cerberus-design/react'
import { Box, HStack, VStack } from '@cerberus/styled-system/jsx'
import { css } from '@cerberus-design/styled-system/css'

export function OverviewPreview() {
  return (
    <DialogProvider id="basics-dialog">
      <DialogTrigger asChild>
        <Button>open dialog</Button>
      </DialogTrigger>

      <Dialog>
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

        <DialogCloseTrigger asChild>
          <Button>Close</Button>
        </DialogCloseTrigger>
      </Dialog>
    </DialogProvider>
  )
}

export function ModalFormPreview() {
  return (
    <DialogProvider id="form-dialog" lazyMount>
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
              <DatePicker id="modal-form-picker" name="modal-form-picker">
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
    <DialogProvider>
      <DialogTrigger asChild>
        <Button palette="danger">Custom Dialog</Button>
      </DialogTrigger>

      <Portal>
        <DialogBackdrop
          className={css({
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
          })}
        />
        <DialogPositioner
          className={css({
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
          })}
        >
          <DialogContent
            className={css({
              bgColor: 'page.surface.initial',
              padding: 'xl',
            })}
          >
            <DialogHeading
              className={css({
                paddingBlockEnd: 'lg',
              })}
            >
              C3rB3RuS R00lz!
            </DialogHeading>
            <DialogCloseTrigger asChild>
              <Button palette="danger" shape="rounded">
                Close
              </Button>
            </DialogCloseTrigger>
          </DialogContent>
        </DialogPositioner>
      </Portal>
    </DialogProvider>
  )
}
