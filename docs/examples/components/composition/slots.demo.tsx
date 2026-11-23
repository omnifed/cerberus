'use client'

import { CerberusLogo } from '@/components/logos/cerberus'
import { Accordion, cerberus } from '@cerberus-design/react'
import { HStack, Square } from 'styled-system/jsx'

export function SlotsDemo() {
  return (
    <HStack w="3/4">
      <Accordion collapsible>
        <Accordion.ItemGroup heading="Slots demo" value="one">
          <Accordion.ItemIndicator>
            <Square size="6rem">
              <CerberusLogo />
            </Square>
          </Accordion.ItemIndicator>
          <Accordion.ItemContent>
            <cerberus.p textStyle="heading-lg">
              We replaced the ItemContent children with our own custom component
            </cerberus.p>
          </Accordion.ItemContent>
          This is default content that will never show because we have
          overridden the ItemContent part.
        </Accordion.ItemGroup>
      </Accordion>
    </HStack>
  )
}
