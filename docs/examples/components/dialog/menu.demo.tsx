'use client'

import { Box, Stack } from '@/styled-system/jsx'
import { ChevronDown } from '@carbon/icons-react'
import {
  Button,
  Dialog,
  type DialogRootProps,
  Menu,
  OpenChangeDetails,
} from '@cerberus-design/react'
import { useSignal } from '@cerberus-design/signals'

export function MenuDemo() {
  const [open, setOpen] = useSignal<boolean>(false)

  return (
    <>
      <Menu>
        <Menu.Trigger asChild>
          <Button>
            Actions
            <ChevronDown />
          </Button>
        </Menu.Trigger>

        <Menu.ContentGroup>
          <Menu.Item value="edit">Edit</Menu.Item>
          <Menu.Item value="duplicate">Duplicate</Menu.Item>
          <Menu.Separator />
          <Menu.Item value="delete" onClick={() => setOpen(true)}>
            Delete
          </Menu.Item>
        </Menu.ContentGroup>
      </Menu>

      <MyDialog
        open={open}
        onOpenChange={(details: OpenChangeDetails) => setOpen(details.open)}
      />
    </>
  )
}

function MyDialog(props: DialogRootProps) {
  return (
    <Dialog.Root size="auto" {...props}>
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
