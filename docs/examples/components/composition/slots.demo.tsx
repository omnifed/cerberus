import { CerberusLogo } from '@/components/logos/cerberus'
import { Accordion, cerberus } from '@cerberus-design/react'
import { HStack, Square } from 'styled-system/jsx'

export function SlotsDemo() {
  return (
    <HStack w="3/4">
      <Accordion collapsible>
        <Accordion.ItemGroup
          heading="Slots demo"
          value="one"
          slots={{
            itemIndicator: (
              <Square size="6rem">
                <CerberusLogo />
              </Square>
            ),
            itemContent: (
              <cerberus.p textStyle="heading-lg">
                We replaced the ItemContent slot with our own custom component
              </cerberus.p>
            ),
          }}
        >
          This is default content that will never show because we have altered the
          abstracted API.
        </Accordion.ItemGroup>
      </Accordion>
    </HStack>
  )
}
