import { Accordion, For, Show } from '@cerberus-design/react'
import { Stack } from 'styled-system/jsx'
import ds from 'styled-system/specs/design-system.json'
import data from './data.json'

const variants = ds.slotRecipes.accordion.variants.size.values

export function SizeDemo() {
  return (
    <Stack gap="lg" w="2/3">
      <For each={variants}>
        {(size) => (
          <Accordion key={size} defaultValue={['one']} size={size}>
            <For each={data}>
              {(item) => (
                <Accordion.ItemGroup
                  heading={`${size} size`}
                  key={item.id}
                  value={item.value}
                >
                  <Show when={item.content !== null}>{item.content}</Show>
                </Accordion.ItemGroup>
              )}
            </For>
          </Accordion>
        )}
      </For>
    </Stack>
  )
}
