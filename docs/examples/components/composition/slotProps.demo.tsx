import { Accordion } from '@cerberus-design/react'
import { HStack } from 'styled-system/jsx'

export function SlotPropsDemo() {
  return (
    <HStack w="3/4">
      <Accordion collapsible>
        <Accordion.ItemGroup
          heading="Slots demo"
          value="one"
          slotProps={{
            item: { 'data-testid': 'my-qa-thing' },
            itemContent: { className: 'some-tw-class' },
          }}
        >
          This is default content that will never show because we have altered the
          abstracted API.
        </Accordion.ItemGroup>
      </Accordion>
    </HStack>
  )
}
