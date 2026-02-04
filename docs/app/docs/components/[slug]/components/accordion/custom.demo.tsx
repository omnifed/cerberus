import { AccordionParts } from '@cerberus-design/react'
import { Box } from 'styled-system/jsx'

export function CustomDemo() {
  return (
    <Box w="2/3">
      <AccordionParts.Root
        css={{
          transform: 'skewX(-10deg)',
        }}
      >
        <AccordionParts.Item
          css={{
            bgColor: 'black',
            borderColor: 'red',
          }}
          value="one"
        >
          <AccordionParts.ItemTrigger
            css={{
              color: 'red',
            }}
            data-indicator-position="start"
          >
            <AccordionParts.ItemIndicator>🔥</AccordionParts.ItemIndicator>
            Cerberus
          </AccordionParts.ItemTrigger>

          <AccordionParts.ItemContent
            css={{
              color: 'white',
              paddingInline: 'md',
              textStyle: 'body-md',
            }}
          >
            Cerberus is the three-headed dog that guards the gates of the
            Underworld and our sweet baby boi protecting the integrity of your
            design system.
          </AccordionParts.ItemContent>
        </AccordionParts.Item>
      </AccordionParts.Root>
    </Box>
  )
}
