'use client'

import { Accordion } from '@cerberus-design/react'
import { HStack } from 'styled-system/jsx'

export function SlotPropsDemo() {
  return (
    <HStack w="3/4">
      <Accordion collapsible>
        <Accordion.ItemGroup heading="Part props demo" value="one">
          <Accordion.Item data-testid="my-qa-thing" />
          <Accordion.ItemContent className="some-tw-class" />
          This default content still shows because the part overrides above only
          patch props.
        </Accordion.ItemGroup>
      </Accordion>
    </HStack>
  )
}
