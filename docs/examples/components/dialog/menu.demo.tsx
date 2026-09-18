'use client'

import { Box, Stack } from '@/styled-system/jsx'
import { ChevronDown } from '@carbon/icons-react'
import {
  Button,
  Dialog,
  DialogCloseIconTrigger,
  DialogCloseTrigger,
  DialogDescription,
  DialogHeading,
  DialogProps,
  DialogProvider,
  Menu,
  MenuContent,
  MenuItem,
  MenuSeparator,
  MenuTrigger,
  OpenChangeDetails,
} from '@cerberus-design/react'
import { useSignal } from '@cerberus-design/signals'

export function MenuDemo() {
  const [open, setOpen] = useSignal<boolean>(false)

  return (
    <>
      <Menu>
        <MenuTrigger>
          <Button>
            Actions
            <ChevronDown />
          </Button>
        </MenuTrigger>

        <MenuContent>
          <MenuItem value="edit">Edit</MenuItem>
          <MenuItem value="duplicate">Duplicate</MenuItem>
          <MenuSeparator />
          <MenuItem value="delete" onClick={() => setOpen(true)}>
            Delete
          </MenuItem>
        </MenuContent>
      </Menu>

      <MyDialog
        open={open}
        onOpenChange={(details: OpenChangeDetails) => setOpen(details.open)}
      />
    </>
  )
}

function MyDialog(props: DialogProps) {
  return (
    <DialogProvider {...props}>
      <Dialog size="auto">
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
