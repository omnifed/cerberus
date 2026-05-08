'use client'

import { Box, Square, VStack } from '@/styled-system/jsx'
import { Search } from '@carbon/icons-react'
import {
  ComboItemText,
  ComboItemWithIndicator,
  Combobox,
  ComboboxInputValueChangeDetails,
  For,
  Spinner,
  Text,
  createListCollection,
} from '@cerberus-design/react'
import { createQuery, useQuery } from '@cerberus-design/signals'
import { Suspense, useState, useTransition } from 'react'

function useDeferredValue() {
  // Use native React state and transitions for loading state to override Suspsense
  const [inputValue, setInputValue] = useState<string>('')
  const [pending, startTransition] = useTransition()
  return {
    inputValue,
    setInputValue,
    pending,
    startTransition,
  }
}

function AsyncCombobox() {
  const { inputValue, setInputValue, pending, startTransition } = useDeferredValue()
  const data = useQuery(queryList(inputValue))

  const collection = createListCollection<Character>({
    items: data,
    itemToString: (item) => item.name,
    itemToValue: (item) => item.url,
  })

  const handleInputChange = (details: ComboboxInputValueChangeDetails) => {
    if (details.reason === 'input-change') {
      startTransition(() => {
        setInputValue(details.inputValue)
      })
    }
  }

  return (
    <Combobox
      collection={collection}
      label="Select Star Wars Character"
      onInputValueChange={handleInputChange}
      placeholder="Type to search or choose an option"
      startIcon={
        pending ? (
          <Square size="4">
            <Spinner />
          </Square>
        ) : (
          <Search />
        )
      }
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
          <ComboItemWithIndicator key={item.name} item={item}>
            <ComboItemText>{item.name}</ComboItemText>
          </ComboItemWithIndicator>
        )}
      </For>
    </Combobox>
  )
}

export function LoadingDemo() {
  return (
    <Box w="1/2">
      <Suspense fallback="...loading">
        <AsyncCombobox />
      </Suspense>
    </Box>
  )
}

// Factories

interface Character {
  name: string
  height: string
  mass: string
  created: string
  edited: string
  url: string
}

const queryList = createQuery(async (inputValue: string) => {
  try {
    const response = await db.searchCharacters(inputValue)
    return response.results
  } catch (error) {
    console.error(error)
    return []
  }
}, 'queryList')

// API

const db = {
  searchCharacters: async (inputValue: string) => {
    const response = await fetch(
      `https://swapi.py4e.com/api/people/?search=${inputValue ?? ''}`,
    )
    return await response.json()
  },
}
