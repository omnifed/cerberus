import { Search } from '@carbon/icons-react'
import { Field, Input } from '@cerberus-design/react'
import { VStack } from 'styled-system/jsx'

export function SearchDemo() {
  return (
    <VStack gap="md" w="1/2">
      <Field>
        <Input startIcon={<Search />} placeholder="Search for anything" />
      </Field>
      <Field>
        <Input endIcon={<Search />} placeholder="Search for anything" />
      </Field>
      <Field invalid>
        <Input endIcon={<Search />} placeholder="Search for anything" />
      </Field>
    </VStack>
  )
}
