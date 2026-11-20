'use client'

import { Box, VStack } from '@/styled-system/jsx'
import { Search } from '@carbon/icons-react'
import {
  Combobox,
  For,
  Text,
  useStatefulCollection,
} from '@cerberus-design/react'
import { items } from './items'

export function StartIconDemo() {
  const { collection, handleInputChange } = useStatefulCollection(items)

  return (
    <Box w="1/2">
      <Combobox
        collection={collection}
        label="Select Relative"
        onInputValueChange={handleInputChange}
        openOnClick
        placeholder="Choose option"
        startIcon={<Search />}
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
            <Combobox.ItemWithIndicator key={item.value} item={item}>
              <Combobox.ItemText>{item.label}</Combobox.ItemText>
            </Combobox.ItemWithIndicator>
          )}
        </For>
      </Combobox>
    </Box>
  )
}
