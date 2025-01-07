import {
  Button,
  Modal,
  UseModalReturnValue,
  trapFocus,
} from '@cerberus-design/react'
import { css } from '@cerberus-design/styled-system/css'
import { HStack, VStack } from '@cerberus-design/styled-system/jsx'

export interface LazyModalData extends UseModalReturnValue {
  data: {
    heading: string
    content: string
  }
}

export default function LazyModal(props: LazyModalData) {
  const handleKeyDown = trapFocus(props.modalRef)
  return (
    <Modal onKeyDown={handleKeyDown} ref={props.modalRef}>
      <VStack
        alignItems="flex-start"
        color="page.text.initial"
        gap="lg"
        w="full"
      >
        <h2
          className={css({
            textStyle: 'heading-md',
          })}
        >
          {props.data!.heading}
        </h2>
        <p>{props.data!.content}</p>

        <HStack>
          <Button onClick={props.close}>Close</Button>
        </HStack>
      </VStack>
    </Modal>
  )
}
