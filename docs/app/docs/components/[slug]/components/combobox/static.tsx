'use client'

import {
  For,
  Field,
  Combobox,
  ComboItemGroup,
  ComboItemWithIndicator,
  ComboItemText,
  ComboboxParts,
  Portal,
  Text,
  useStatefulCollection,
} from '@cerberus-design/react'
import { Box, VStack } from 'styled-system/jsx'
import { ChevronDownOutline, Search } from '@carbon/icons-react'

const comboInitialItems = [
  { label: 'Hades', value: 'hades' },
  { label: 'Persephone', value: 'persephone' },
  { label: 'Zeus', value: 'zeus', disabled: true },
  { label: 'Poseidon', value: 'poseidon' },
  { label: 'Hera', value: 'hera' },
]

export function BasicPreview() {
  const { collection, handleInputChange } =
    useStatefulCollection(comboInitialItems)

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

export function StartIconPreview() {
  const { collection, handleInputChange } =
    useStatefulCollection(comboInitialItems)

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
            <ComboItemWithIndicator key={item.value} item={item}>
              <ComboItemText>{item.label}</ComboItemText>
            </ComboItemWithIndicator>
          )}
        </For>
      </Combobox>
    </Box>
  )
}

export function GroupedItemsPreview() {
  const { collection, handleInputChange } =
    useStatefulCollection(comboInitialItems)

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

export function FieldPreview() {
  const { collection, handleInputChange } =
    useStatefulCollection(comboInitialItems)

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
              <ComboItemWithIndicator key={item.value} item={item}>
                <ComboItemText>{item.label}</ComboItemText>
              </ComboItemWithIndicator>
            )}
          </For>
        </Combobox>
      </Field>
    </Box>
  )
}

export function CustomDemo() {
  const { collection, handleInputChange } =
    useStatefulCollection(comboInitialItems)

  return (
    <Box w="1/2">
      <ComboboxParts.Root
        collection={collection}
        onInputValueChange={handleInputChange}
        css={{
          transform: 'skewX(-10deg)',
        }}
      >
        <ComboboxParts.Label
          css={{
            textTransform: 'uppercase',
          }}
        >
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
                    <ComboboxParts.ItemText css={{ fontSize: 'xl' }}>
                      {item.label}
                    </ComboboxParts.ItemText>
                    <ComboboxParts.ItemIndicator>
                      🔥
                    </ComboboxParts.ItemIndicator>
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
