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
  DatePicker,
  DatePickerLabel,
  DatePickerInput,
  DatePickerCalendar,
  Button,
  Portal,
} from '@cerberus-design/react'
import { css } from '@cerberus-design/styled-system/css'
import { hstack } from '@cerberus-design/styled-system/patterns'
import { Box } from '@cerberus-design/styled-system/jsx'

export function OverviewPreview() {
  const { modalRef, show, close } = useModal()
  const handleKeyDown = trapFocus(modalRef)

  return (
    <div>
      <Button onClick={show}>Open Modal</Button>

      <Portal>
        <Modal onKeyDown={handleKeyDown} ref={modalRef}>
          <ModalHeader>
            <ModalHeading>This is a custom modal</ModalHeading>
          </ModalHeader>
          <ModalDescription>
            This is a custom modal that is can be whatever you need.
          </ModalDescription>

          <div
            className={hstack({
              color: 'info.text.100',
              mb: '10',
            })}
          >
            <Model size="5rem" />
            <Model size="5rem" />
            <Model size="5rem" />
          </div>

          <Button usage="outlined" onClick={close}>
            Close
          </Button>
        </Modal>
      </Portal>
    </div>
  )
}

export function ModalFormPreview() {
  return (
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
