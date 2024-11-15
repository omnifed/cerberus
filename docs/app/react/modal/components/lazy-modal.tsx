import {
  Button,
  Modal,
  UseModalReturnValue,
  trapFocus,
} from '@cerberus-design/react'
import { HStack } from '@cerberus-design/styled-system/jsx'

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
      <div>
        <h2>{props.data!.heading}</h2>
        <p>{props.data!.content}</p>
      </div>

      <HStack>
        <Button onClick={props.close}>Close</Button>
      </HStack>
    </Modal>
  )
}
