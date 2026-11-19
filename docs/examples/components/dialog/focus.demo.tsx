'use client'

import { Stack } from '@/styled-system/jsx'
import { Button, cerberus, Dialog, Field, Input } from '@cerberus-design/react'
import { useRef } from 'react'

export function InitialFocusDemo() {
  const inputRef = useRef<HTMLInputElement>(null)

  return (
    <Dialog.Root size="auto" initialFocusEl={() => inputRef.current}>
      <Dialog.Trigger asChild>
        <Button>open dialog</Button>
      </Dialog.Trigger>

      <Dialog>
        <Dialog.CloseIconTrigger />

        <Stack gap="md" w="full">
          <Dialog.Title>Edit Profile</Dialog.Title>
          <Dialog.Description maxW="prose">
            The first input will be focused when the dialog opens.
          </Dialog.Description>

          <cerberus.form mt="md" w="full">
            <Stack gap="md" w="full">
              <Field label="Name">
                <Input ref={inputRef} placeholder="Enter your name..." />
              </Field>
              <Field label="Emaiil">
                <Input placeholder="Enter your email..." type="email" />
              </Field>
            </Stack>
          </cerberus.form>
        </Stack>
      </Dialog>
    </Dialog.Root>
  )
}
