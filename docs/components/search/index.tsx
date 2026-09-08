'use client'

import { Box, HStack, Scrollable } from '@/styled-system/jsx'
import { Add, MacCommand, Search as SearchIcon } from '@carbon/icons-react'
import {
  Dialog,
  DialogOpenChangeDetails,
  DialogProvider,
  DialogTrigger,
  Show,
  Text,
} from '@cerberus-design/react'
import { useSignal } from '@cerberus-design/signals'
import { ChangeEvent, Suspense, useEffect, useRef } from 'react'
import { FallbackLinks } from './fallback-links'
import { Footer } from './footer'
import { SearchResults } from './results'
import { SearchInput } from './search-input'

export function Search() {
  const containerRef = useRef<HTMLDivElement>(null)

  const [open, setOpen] = useSignal<boolean>(false)
  const [input, setInput] = useSignal<string>('')

  useEffect(() => {
    const handleGlobalKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'k' && (e.metaKey || e.ctrlKey)) {
        e.preventDefault()
        setOpen((prev) => !prev)
      }
    }
    document.addEventListener('keydown', handleGlobalKeyDown)
    return () => document.removeEventListener('keydown', handleGlobalKeyDown)
  }, [setOpen])

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowDown' || e.key === 'ArrowUp' || e.key === 'Enter') {
      if (!containerRef.current) return

      const items = Array.from(
        containerRef.current.querySelectorAll<HTMLElement>('[data-search-item]'),
      )
      if (!items.length) return

      const currentIndex = items.findIndex(
        (el) => el.getAttribute('data-highlighted') === 'true',
      )

      // Handle selection via Enter key
      if (e.key === 'Enter') {
        if (currentIndex !== -1) {
          e.preventDefault()
          items[currentIndex].click() // Executes the link and DialogCloseTrigger
        }
        return
      }

      e.preventDefault()

      // Clear the current highlight
      if (currentIndex !== -1) {
        items[currentIndex].removeAttribute('data-highlighted')
      }

      // Calculate the next index
      let nextIndex = 0
      if (e.key === 'ArrowDown') {
        nextIndex =
          currentIndex === -1 || currentIndex === items.length - 1
            ? 0
            : currentIndex + 1
      } else if (e.key === 'ArrowUp') {
        nextIndex = currentIndex <= 0 ? items.length - 1 : currentIndex - 1
      }

      // Apply the new highlight and scroll it into view cleanly
      const nextItem = items[nextIndex]
      if (nextItem) {
        nextItem.setAttribute('data-highlighted', 'true')
        nextItem.scrollIntoView({ block: 'nearest' })
      }
    }
  }

  return (
    <DialogProvider
      open={open}
      onOpenChange={(details: DialogOpenChangeDetails) => {
        setOpen(details.open)
        if (!details.open) setInput('')
      }}
    >
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
          {/* Attach the ref and keyboard listener to the content wrapper */}
          <Box ref={containerRef} onKeyDown={handleKeyDown}>
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
                <Suspense fallback={<SearchingText />}>
                  <SearchResults query={input} />
                </Suspense>
              </Show>
            </Scrollable>

            <Footer />
          </Box>
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
