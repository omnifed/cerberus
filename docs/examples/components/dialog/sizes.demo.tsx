'use client'

import { sortSizeVariants } from '@/lib/design-system'
import { Box, HStack, Stack } from '@/styled-system/jsx'
import {
  Button,
  Dialog,
  type DialogRootProps,
  For,
} from '@cerberus-design/react'
import data from 'styled-system/specs/design-system.json'

const variants = data.slotRecipes.dialog.variants.size
  .values as DialogRootProps['size'][]
const sortedSizes = sortSizeVariants(variants)

export function SizesDemo() {
  return (
    <HStack gap="md">
      <For each={sortedSizes}>
        {(size) => <SizedDialog key={String(size)} size={size} />}
      </For>
    </HStack>
  )
}

function SizedDialog(props: Pick<DialogRootProps, 'size'>) {
  return (
    <Dialog.Root size={props.size}>
      <Dialog.Trigger asChild>
        <Button size="sm">open {String(props.size)}</Button>
      </Dialog.Trigger>

      <Dialog>
        <Dialog.CloseIconTrigger />

        <Stack gap="xs" w="full">
          <Dialog.Title>Dialog Title</Dialog.Title>
          <Dialog.Description maxW="prose">
            Far far away, behind the word mountains, far from the countries
            Vokalia and Consonantia, there live the blind texts. Separated they
            live in Bookmarksgrove right at the coast of the Semantics, a large
            language ocean.
          </Dialog.Description>
        </Stack>

        <Box mt="md" w="full">
          <Dialog.CloseTrigger asChild>
            <Button>Close</Button>
          </Dialog.CloseTrigger>
        </Box>
      </Dialog>
    </Dialog.Root>
  )
}
