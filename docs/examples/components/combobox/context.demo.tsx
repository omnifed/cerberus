'use client'

import { Stack, VStack } from '@/styled-system/jsx'
import { ChevronDown, Close } from '@carbon/icons-react'
import {
  Combobox,
  For,
  Text,
  UseComboboxContext,
  useStatefulCollection,
} from '@cerberus-design/react'
import { items } from './items'

export function ContextDemo() {
  const { collection, handleInputChange } = useStatefulCollection(items)

  return (
    <Stack w="1/2">
      <Combobox.Root
        collection={collection}
        onInputValueChange={handleInputChange}
        placeholder="Choose option"
      >
        <Combobox.Context>
          {(context: UseComboboxContext<(typeof collection.items)[number]>) => (
            <Text mb="md">Selected: {context.valueAsString || 'None'}</Text>
          )}
        </Combobox.Context>

        <Combobox.Label>Select Relative</Combobox.Label>

        <Combobox.Control>
          <Combobox.Input />

          <Combobox.ClearTrigger>
            <Close />
          </Combobox.ClearTrigger>
          <Combobox.Trigger>
            <ChevronDown />
          </Combobox.Trigger>
        </Combobox.Control>

        <Combobox.Positioner>
          <Combobox.Content>
            <For
              each={collection.items}
              fallback={
                <VStack paddingBlock="6" w="full">
                  <Text textAlign="center" textStyle="label-sm">
                    No results found
                  </Text>
                </VStack>
              }
            >
              {(item) => (
                <Combobox.ItemWithIndicator key={item.value} item={item}>
                  <Combobox.ItemText>{item.label}</Combobox.ItemText>
                </Combobox.ItemWithIndicator>
              )}
            </For>
          </Combobox.Content>
        </Combobox.Positioner>
      </Combobox.Root>
    </Stack>
  )
}
