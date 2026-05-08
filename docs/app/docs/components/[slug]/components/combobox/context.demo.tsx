'use client'

import { Stack, VStack } from '@/styled-system/jsx'
import { ChevronDown, Close } from '@carbon/icons-react'
import {
  ComboboxParts,
  ComboItemText,
  ComboItemWithIndicator,
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
      <ComboboxParts.Root
        collection={collection}
        onInputValueChange={handleInputChange}
        placeholder="Choose option"
      >
        <ComboboxParts.Context>
          {(context: UseComboboxContext<(typeof collection.items)[number]>) => (
            <Text mb="md">Selected: {context.valueAsString || 'None'}</Text>
          )}
        </ComboboxParts.Context>

        <ComboboxParts.Label>Select Relative</ComboboxParts.Label>

        <ComboboxParts.Control>
          <ComboboxParts.Input />

          <ComboboxParts.ClearTrigger>
            <Close />
          </ComboboxParts.ClearTrigger>
          <ComboboxParts.Trigger>
            <ChevronDown />
          </ComboboxParts.Trigger>
        </ComboboxParts.Control>

        <ComboboxParts.Positioner>
          <ComboboxParts.Content>
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
                <ComboItemWithIndicator key={item.value} item={item}>
                  <ComboItemText>{item.label}</ComboItemText>
                </ComboItemWithIndicator>
              )}
            </For>
          </ComboboxParts.Content>
        </ComboboxParts.Positioner>
      </ComboboxParts.Root>
    </Stack>
  )
}
