'use client'

import { Box, VStack } from '@/styled-system/jsx'
import { Search } from '@carbon/icons-react'
import {
  Combobox,
  ComboItemGroup,
  ComboItemText,
  ComboItemWithIndicator,
  For,
  Text,
  useStatefulCollection,
} from '@cerberus-design/react'
import { items } from './items'

export function GroupedItemsDemo() {
  const { collection, handleInputChange } = useStatefulCollection(items)

  return (
    <Box w="1/2">
      <Combobox
        collection={collection}
        label="Select Relative"
        onInputValueChange={handleInputChange}
        placeholder="Choose option"
        startIcon={<Search />}
      >
        <ComboItemGroup label="The fam">
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
        </ComboItemGroup>
      </Combobox>
    </Box>
  )
}
