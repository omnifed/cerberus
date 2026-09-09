'use client'

import { Stack } from '@/styled-system/jsx'
import {
  Button,
  cerberus,
  Dialog,
  DialogCloseIconTrigger,
  DialogDescription,
  DialogHeading,
  DialogProvider,
  DialogTrigger,
  Field,
  Input,
} from '@cerberus-design/react'
import { useRef } from 'react'

export function InitialFocusDemo() {
  const inputRef = useRef<HTMLInputElement>(null)

  return (
    <DialogProvider initialFocusEl={() => inputRef.current}>
      <DialogTrigger asChild>
        <Button>open dialog</Button>
      </DialogTrigger>

      <Dialog size="auto">
        <DialogCloseIconTrigger />

        <Stack gap="md" w="full">
          <DialogHeading>Edit Profile</DialogHeading>
          <DialogDescription maxW="prose">
            The first input will be focused when the dialog opens.
          </DialogDescription>

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
    </DialogProvider>
  )
}
