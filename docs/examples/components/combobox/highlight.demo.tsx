'use client'

import { Box, VStack } from '@/styled-system/jsx'
import {
  Combobox,
  ComboboxContext,
  ComboItemText,
  ComboItemWithIndicator,
  For,
  Highlight,
  Text,
  useStatefulCollection,
} from '@cerberus-design/react'
import { items } from './items'

export function HighlightDemo() {
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
              <ComboItemText>
                <ComboboxContext>
                  {(context) => (
                    <Highlight
                      text={item.label}
                      query={context.inputValue}
                      ignoreCase
                    />
                  )}
                </ComboboxContext>
              </ComboItemText>
            </ComboItemWithIndicator>
          )}
        </For>
      </Combobox>
    </Box>
  )
}
