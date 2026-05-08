'use client'

import { Box, VStack } from '@/styled-system/jsx'
import { ChevronDownOutline } from '@carbon/icons-react'
import {
  ComboboxParts,
  For,
  Portal,
  Text,
  useStatefulCollection,
} from '@cerberus-design/react'
import { items } from './items'

export function CustomDemo() {
  const { collection, handleInputChange } = useStatefulCollection(items)

  return (
    <Box w="1/2">
      <ComboboxParts.Root
        collection={collection}
        onInputValueChange={handleInputChange}
        transform="skewX(-10deg)"
      >
        <ComboboxParts.Label textTransform="uppercase">
          Custom label
        </ComboboxParts.Label>

        <ComboboxParts.Control>
          <ComboboxParts.Input />

          <ComboboxParts.Trigger>
            <ChevronDownOutline />
          </ComboboxParts.Trigger>
        </ComboboxParts.Control>

        <Portal>
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
                  <ComboboxParts.Item key={item.value} item={item}>
                    <ComboboxParts.ItemText fontSize="xl">
                      {item.label}
                    </ComboboxParts.ItemText>
                    <ComboboxParts.ItemIndicator>🔥</ComboboxParts.ItemIndicator>
                  </ComboboxParts.Item>
                )}
              </For>
            </ComboboxParts.Content>
          </ComboboxParts.Positioner>
        </Portal>
      </ComboboxParts.Root>
    </Box>
  )
}
