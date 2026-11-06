import { Accordion, For } from '@cerberus-design/react'
import { Box } from 'styled-system/jsx'
import data from './data.json'

export function UnstyledDemo() {
  return (
    <Box w="2/3">
      <Accordion defaultValue={['one']} unstyled>
        <For each={data}>
          {(item) => (
            <Accordion.ItemGroup
              heading={item.heading}
              key={item.id}
              value={item.value}
            >
              {item.content || 'This is content for the Accordion.'}
            </Accordion.ItemGroup>
          )}
        </For>
      </Accordion>
    </Box>
  )
}
