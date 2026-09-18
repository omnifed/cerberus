import { Box, VStack } from '@/styled-system/jsx'
import { Field, Input } from '@cerberus-design/react'

export function HiddenLabelDemo() {
  return (
    <Box w="1/2">
      <VStack alignItems="flex-start" gap="lg" w="full">
        <Field
          label="Search something"
          helperText="Label is hidden but accessible to screen readers"
          hideLabel
        >
          <Input name="search" type="search" placeholder="Type to search..." />
        </Field>
        <Field label="Global search" hideLabel required>
          <Input
            name="global-search"
            type="search"
            placeholder="Search the entire site..."
          />
        </Field>
      </VStack>
    </Box>
  )
}
