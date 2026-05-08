'use client'

import { Box, VStack } from '@/styled-system/jsx'
import { Corn } from '@carbon/icons-react'
import {
  Combobox,
  ComboboxInputValueChangeDetails,
  ComboboxOpenChangeDetails,
  ComboboxValueChangeDetails,
  ComboItemText,
  ComboItemWithIndicator,
  For,
  Show,
  Tag,
  Text,
  useFilter,
  useListCollection,
} from '@cerberus-design/react'
import { useSignal } from '@cerberus-design/signals'
import { flushSync } from 'react-dom'

interface Item {
  label: string
  value: string
  __new__?: boolean
}

const NEW_OPTION_VALUE = '[[new]]'

const api = {
  create: (value: string): Item => ({ label: value, value: NEW_OPTION_VALUE }),
  isNew: (value: string) => value === NEW_OPTION_VALUE,
  replaceValue: (values: string[], value: string) => {
    return values.map((v) => (v === NEW_OPTION_VALUE ? value : v))
  },
  getNewOptionData: (inputValue: string): Item => ({
    label: inputValue,
    value: inputValue,
    __new__: true,
  }),
}

export function CreatableDemo() {
  const [selectedValue, setSelectedValue] = useSignal<string[]>([])
  const [inputValue, setInputValue] = useSignal('')

  const { contains } = useFilter({ sensitivity: 'base' })
  const { collection, filter, upsert, update, remove } = useListCollection<Item>({
    initialItems: [
      { label: 'Bug', value: 'bug' },
      { label: 'Feature', value: 'feature' },
      { label: 'Enhancement', value: 'enhancement' },
      { label: 'Documentation', value: 'docs' },
    ],
    filter: contains,
  })

  const isValidNewOption = (inputValue: string) => {
    const exactOptionMatch =
      collection.filter((item) => item.toLowerCase() === inputValue.toLowerCase())
        .size > 0
    return !exactOptionMatch && inputValue.trim().length > 0
  }

  const handleInputChange = ({
    inputValue,
    reason,
  }: ComboboxInputValueChangeDetails) => {
    if (reason === 'input-change' || reason === 'item-select') {
      flushSync(() => {
        if (isValidNewOption(inputValue)) {
          upsert(NEW_OPTION_VALUE, api.create(inputValue))
        } else if (inputValue.trim().length === 0) {
          remove(NEW_OPTION_VALUE)
        }
      })
      filter(inputValue)
    }
    setInputValue(inputValue)
  }

  const handleOpenChange = ({ reason }: ComboboxOpenChangeDetails) => {
    if (reason === 'trigger-click') {
      filter('')
    }
  }

  const handleValueChange = ({ value }: ComboboxValueChangeDetails) => {
    setSelectedValue(api.replaceValue(value, inputValue))
    if (value.includes(NEW_OPTION_VALUE)) {
      console.log('New Option Created', inputValue)
      update(NEW_OPTION_VALUE, api.getNewOptionData(inputValue))
    }
  }

  return (
    <Box w="1/2">
      <Combobox
        allowCustomValue
        collection={collection}
        label="Select Relative"
        onOpenChange={handleOpenChange}
        onInputValueChange={handleInputChange}
        onValueChange={handleValueChange}
        placeholder="Choose option"
        value={selectedValue}
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
              <Show
                when={api.isNew(item.value)}
                fallback={<ComboItemText>{item.label}</ComboItemText>}
              >
                {() => (
                  <ComboItemText textStyle="label-sm">
                    + Create &quot;{item.label}&quot;
                  </ComboItemText>
                )}
              </Show>

              <Show when={item.__new__}>
                {() => (
                  <Tag palette="success" usage="outlined">
                    New <Corn />
                  </Tag>
                )}
              </Show>
            </ComboItemWithIndicator>
          )}
        </For>
      </Combobox>
    </Box>
  )
}
