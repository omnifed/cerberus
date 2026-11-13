import { Accordion } from '@cerberus-design/react'
import { Box } from 'styled-system/jsx'

export async function DynamicAccordionDemo() {
  return (
    <Box w="2/3">
      <Accordion>
        <Accordion.ItemGroup heading="Dynamic Accordion" value="dynamic-example">
          <Accordion>
            <Accordion.ItemGroup
              heading="Dynamic content"
              value="dynamic-content"
              size="sm"
            >
              An accordion can change size based on the content inside of it. This is a
              dynamic example.
            </Accordion.ItemGroup>
          </Accordion>
        </Accordion.ItemGroup>
      </Accordion>
    </Box>
  )
}
