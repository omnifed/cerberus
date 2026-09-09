import { AccordionParts } from '@cerberus-design/react'
import { Box } from 'styled-system/jsx'

export function CustomDemo() {
  return (
    <Box w="2/3">
      <AccordionParts.Root transform="skewX(-10deg)">
        <AccordionParts.Item bgColor="black" borderColor="red" value="one">
          <AccordionParts.ItemTrigger data-indicator-position="start" color="red">
            <AccordionParts.ItemIndicator>🔥</AccordionParts.ItemIndicator>
            Cerberus
          </AccordionParts.ItemTrigger>

          <AccordionParts.ItemContent
            color="white"
            paddingInline="md"
            textStyle="body-md"
          >
            Cerberus is the three-headed dog that guards the gates of the Underworld and
            our sweet baby boi protecting the integrity of your design system.
          </AccordionParts.ItemContent>
        </AccordionParts.Item>
      </AccordionParts.Root>
    </Box>
  )
}
