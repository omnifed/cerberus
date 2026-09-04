'use client'

import { Box, HStack } from '@/styled-system/jsx'
import { Add, MacCommand, Search as SearchIcon } from '@carbon/icons-react'
import {
  Dialog,
  DialogProvider,
  DialogTrigger,
  Show,
  Text,
} from '@cerberus-design/react'
import { createEffect, onCleanup, useSignal } from '@cerberus-design/signals'
import { ChangeEvent, Suspense } from 'react'
import { Footer } from './footer'
import { SearchResults } from './results'
import { SearchInput } from './search-input'

export function Search() {
  const [input, setInput, getInput] = useSignal<string>('')
  const [debouncedQuery, setDebouncedQuery] = useSignal<string>('')

  createEffect(() => {
    const currentInput = getInput()

    const timer = setTimeout(() => {
      setDebouncedQuery(currentInput)
    }, 200)

    onCleanup(() => clearTimeout(timer))
  })

  return (
    <DialogProvider>
      <Box maxW="27rem" w="full">
        <DialogTrigger
          aria-label="Search (Meta+k)"
          aria-keyshortcuts="Meta+k"
          bgColor="page.bg.initial"
          border="1px solid"
          borderColor="page.border.initial"
          focusVisibleRing="outside"
          h="2.25rem"
          px="md"
          rounded="full"
          w="full"
        >
          <HStack h="full" justify="space-between" w="full">
            <HStack color="page.text.100" gap="sm">
              <SearchIcon />
              <Text textStyle="label-sm">Search Cerberus</Text>
            </HStack>
            <HStack color="page.text.100" gap="xs">
              <MacCommand />
              <Add />
              <Text>K</Text>
            </HStack>
          </HStack>
        </DialogTrigger>

        <Dialog p="lg" size="md">
          <SearchInput
            onChange={(e: ChangeEvent<HTMLInputElement>) => setInput(e.target.value)}
            value={input}
          />

          <Show when={input !== ''}>
            <Box mt="2" w="full">
              {debouncedQuery === '' ? (
                <Text p="4" textStyle="body-sm" color="page.text.100">
                  Searching...
                </Text>
              ) : (
                <Suspense
                  fallback={
                    <Text p="4" textStyle="body-sm" color="page.text.100">
                      Searching...
                    </Text>
                  }
                >
                  <SearchResults query={debouncedQuery} />
                </Suspense>
              )}
            </Box>
          </Show>

          <Footer />
        </Dialog>
      </Box>
    </DialogProvider>
  )
}
