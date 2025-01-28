import { Field, Input } from '@cerberus-design/react'
import { Search } from '@carbon/icons-react'
import { Box } from '@cerberus-design/styled-system/jsx'

export function SearchInputExample() {
  return (
    <Box w="1/2">
      <Field
        ids={{
          control: 'search-input-example',
        }}
      >
        <Input startIcon={<Search />} placeholder="Search for anything" />
      </Field>
    </Box>
  )
}
