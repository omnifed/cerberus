'use client'

import { Box, HStack, Stack } from '@/styled-system/jsx'
import {
  Button,
  Dialog,
  DialogCloseIconTrigger,
  DialogCloseTrigger,
  DialogDescription,
  DialogHeading,
  DialogProps,
  DialogProvider,
  DialogTrigger,
  For,
} from '@cerberus-design/react'
import recipesSpec from 'styled-system/specs/recipes.json'

const variants = (recipesSpec.data.find((r) => r.name === 'dialog')?.variants.size ??
  []) as DialogProps['size'][]

export function SizesDemo() {
  return (
    <HStack gap="md">
      <For each={variants}>
        {(size) => <DialogContent key={String(size)} size={size} />}
      </For>
    </HStack>
  )
}

function DialogContent(props: DialogProps) {
  return (
    <DialogProvider>
      <DialogTrigger asChild>
        <Button size="sm">open {String(props.size)}</Button>
      </DialogTrigger>

      <Dialog size={props.size}>
        <DialogCloseIconTrigger />

        <Stack gap="xs" w="full">
          <DialogHeading>Dialog Title</DialogHeading>
          <DialogDescription maxW="prose">
            Far far away, behind the word mountains, far from the countries Vokalia and
            Consonantia, there live the blind texts. Separated they live in
            Bookmarksgrove right at the coast of the Semantics, a large language ocean.
          </DialogDescription>
        </Stack>

        <Box mt="md" w="full">
          <DialogCloseTrigger asChild>
            <Button>Close</Button>
          </DialogCloseTrigger>
        </Box>
      </Dialog>
    </DialogProvider>
  )
}
