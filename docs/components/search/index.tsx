'use client'

import { Box, HStack, Scrollable } from '@/styled-system/jsx'
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
import { FallbackLinks } from './fallback-links'
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

          <Scrollable h="28rem" pb="2.5rem" w="full">
            <Show
              when={input !== ''}
              fallback={
                <Box mt="md" w="full">
                  <FallbackLinks />
                </Box>
              }
            >
              {debouncedQuery === '' ? (
                <SearchingText />
              ) : (
                <Suspense fallback={<SearchingText />}>
                  <SearchResults query={debouncedQuery} />
                </Suspense>
              )}
            </Show>
          </Scrollable>

          <Footer />
        </Dialog>
      </Box>
    </DialogProvider>
  )
}

function SearchingText() {
  return (
    <Text as="em" color="page.text.100" display="block" p="md" textStyle="label-sm">
      Searching the Underworld...
    </Text>
  )
}
