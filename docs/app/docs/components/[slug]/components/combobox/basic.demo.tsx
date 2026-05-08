'use client'

import { Box, VStack } from '@/styled-system/jsx'
import {
  Combobox,
  ComboItemText,
  ComboItemWithIndicator,
  For,
  Text,
  useStatefulCollection,
} from '@cerberus-design/react'
import { items } from './items'

export function BasicDemo() {
  const { collection, handleInputChange } = useStatefulCollection(items)

  return (
    <Box w="1/2">
      <Combobox
        collection={collection}
        label="Select Relative"
        onInputValueChange={handleInputChange}
        placeholder="Choose option"
      >
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
      </Combobox>
    </Box>
  )
}
