import { HStack } from '@/styled-system/jsx'
import { Code, CodeHide } from '@carbon/icons-react'
import { Show } from '@cerberus-design/react'

interface Props {
  open: boolean
}

export function TriggerContent(props: Props) {
  return (
    <HStack gap="sm">
      <Show
        when={props.open}
        fallback={
          <>
            <Code /> Show code
          </>
        }
      >
        <CodeHide />
        Hide code
      </Show>
    </HStack>
  )
}
