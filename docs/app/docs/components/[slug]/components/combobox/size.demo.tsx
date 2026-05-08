'use client'

import { Stack, VStack } from '@/styled-system/jsx'
import {
  Combobox,
  ComboboxProps,
  ComboItemText,
  ComboItemWithIndicator,
  For,
  Text,
  useStatefulCollection,
} from '@cerberus-design/react'
import { items } from './items'
import { sizes } from './meta'

export function SizeDemo() {
  return (
    <Stack gap="md" w="3/4">
      <For each={sizes}>{(size) => <SizeBox key={size} size={size} />}</For>
    </Stack>
  )
}

interface SizeBoxProps<T> {
  size: ComboboxProps<T>['size']
}

export function SizeBox<T>(props: SizeBoxProps<T>) {
  const { collection, handleInputChange } = useStatefulCollection(items)

  return (
    <Combobox
      collection={collection}
      label={`Size: ${props.size}`}
      onInputValueChange={handleInputChange}
      placeholder="Type to search"
      size={props.size}
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
  )
}
