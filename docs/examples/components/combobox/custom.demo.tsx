'use client'

import { Box, VStack } from '@/styled-system/jsx'
import { ChevronDownOutline } from '@carbon/icons-react'
import {
  Combobox,
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
      <Combobox.Root
        collection={collection}
        onInputValueChange={handleInputChange}
        transform="skewX(-10deg)"
      >
        <Combobox.Label textTransform="uppercase">Custom label</Combobox.Label>

        <Combobox.Control>
          <Combobox.Input />

          <Combobox.Trigger>
            <ChevronDownOutline />
          </Combobox.Trigger>
        </Combobox.Control>

        <Portal>
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
                  <Combobox.Item key={item.value} item={item}>
                    <Combobox.ItemText fontSize="xl">
                      {item.label}
                    </Combobox.ItemText>
                    <Combobox.ItemIndicator>🔥</Combobox.ItemIndicator>
                  </Combobox.Item>
                )}
              </For>
            </Combobox.Content>
          </Combobox.Positioner>
        </Portal>
      </Combobox.Root>
    </Box>
  )
}
