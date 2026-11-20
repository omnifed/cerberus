'use client'

import { Box, VStack } from '@/styled-system/jsx'
import {
  Combobox,
  Field,
  For,
  Text,
  useStatefulCollection,
} from '@cerberus-design/react'
import { items } from './items'

export function FieldDemo() {
  const { collection, handleInputChange } = useStatefulCollection(items)

  return (
    <Box w="1/2">
      <Field
        label="Select Relative"
        helperText="This is saved to your profile"
        errorText="You must select something."
        required
      >
        <Combobox
          collection={collection}
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
              <Combobox.ItemWithIndicator key={item.value} item={item}>
                <Combobox.ItemText>{item.label}</Combobox.ItemText>
              </Combobox.ItemWithIndicator>
            )}
          </For>
        </Combobox>
      </Field>
    </Box>
  )
}
