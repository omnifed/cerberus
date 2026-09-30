'use client'

import { Stack } from '@/styled-system/jsx'
import { cerberus, Field, Input, Button } from '@cerberus-design/react'
import { SyntheticEvent } from 'react'

export function AutocompleteDemo() {
  return (
    <cerberus.form
      onSubmit={(e: SyntheticEvent) => {
        e.preventDefault()
      }}
      display="flex"
      w="1/2"
    >
      <Stack gap="lg" w="full">
        <Field label="First Name">
          <Input autoComplete="given-name" name="firstName" id="firstName" />
        </Field>
        <Field
          label="Enter your email"
          helperText="We'll never share your email with anyone else."
          required
        >
          <Input autoComplete="email" id="email" name="email" type="email" />
        </Field>
        <Button type="submit">Submit</Button>
      </Stack>
    </cerberus.form>
  )
}
