'use client'

import { Model } from '@carbon/icons-react'
import {
  Modal,
  ModalHeader,
  ModalHeading,
  ModalDescription,
  useModal,
  trapFocus,
  Field,
  Dialog,
  DialogTrigger,
  DialogProvider,
  DialogCloseTrigger,
  DialogHeading,
  DialogDescription,
  DatePicker,
  DatePickerLabel,
  DatePickerInput,
  DatePickerCalendar,
  Button,
  Portal,
} from '@cerberus-design/react'
import { css } from '@cerberus/styled-system/css'
import { Box, HStack, VStack } from '@cerberus/styled-system/jsx'

export function OverviewPreview() {
  return (
    <DialogProvider>
      <DialogTrigger asChild>
        <Button>open dialog</Button>
      </DialogTrigger>

      <Dialog>
        <VStack alignItems="flex-start" gap="xs" paddingBlock="lg" w="full">
          <DialogHeading>This is a custom modal</DialogHeading>
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
    <DialogProvider lazyMount>
      <DialogTrigger asChild>
        <Button>open lazy mounted form dialog</Button>
      </DialogTrigger>
      <Dialog>
        <Box paddingBlock="10" w="full">
          <form>
            <Field>
              <DatePicker id="start_date" name="start_date">
                <DatePickerLabel>Start date</DatePickerLabel>
                <DatePickerInput />
                <DatePickerCalendar />
              </DatePicker>
            </Field>
          </form>
        </Box>
      </Dialog>
    </DialogProvider>
  )
}

export function CustomPreview() {
  const { modalRef, show, close } = useModal()
  const handleKeyDown = trapFocus(modalRef)

  return (
    <div>
      <Button
        className={css({
          bgColor: 'black',
          color: 'yellow',
          _hover: {
            bgColor: 'yellow',
            color: 'black',
          },
        })}
        onClick={show}
      >
        Enter the Wu
      </Button>

      <Portal>
        <Modal
          className={css({
            bgColor: 'black',
          })}
          onKeyDown={handleKeyDown}
          ref={modalRef}
        >
          <ModalHeader>
            <ModalHeading
              className={css({
                color: 'yellow !important',
              })}
            >
              Inspectah Deck
            </ModalHeading>
            <ModalDescription>
              Swingin&apos; through your town like your neighborhood Spider-man!
            </ModalDescription>
          </ModalHeader>

          <Button
            className={css({
              borderColor: 'yellow',
              color: 'yellow',
              _hover: {
                borderColor: 'yellow',
                color: 'yellow',
              },
            })}
            usage="outlined"
            onClick={close}
          >
            Close
          </Button>
        </Modal>
      </Portal>
    </div>
  )
}
