import {
  Accordion,
  AccordionItemGroup,
  For,
  Show,
} from '@cerberus-design/react'
import { Box } from 'styled-system/jsx'
import data from './data.json'

export function SizeDemo() {
  return (
    <Box w="2/3">
      <Accordion defaultValue={['one']} size="sm">
        <For each={data}>
          {(item) => (
            <AccordionItemGroup
              heading={item.heading}
              key={item.id}
              value={item.value}
            >
              <Show when={item.content !== null}>{item.content}</Show>
            </AccordionItemGroup>
          )}
        </For>
      </Accordion>
    </Box>
  )
}
