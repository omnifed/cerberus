import {
    AccordionItemGroup,
    Accordion,
  } from '@cerberus-design/react'
import { Box } from '@cerberus-design/styled-system/jsx'

export async function DynamicAccordion() {
return (
    <Box w="2/3">
    <Accordion>
        <AccordionItemGroup
            heading="Dynamic Accordion"
            value="dynamic-example"
        >           
            <Accordion>
            <AccordionItemGroup
                heading="Dynamic content"
                value="dynamic-content"
                size="sm"
            >
                An accordion can change size based on the content inside of it. This is a dynamic example.
            </AccordionItemGroup>
            </Accordion>
        </AccordionItemGroup>
    </Accordion>
    </Box>
)
}