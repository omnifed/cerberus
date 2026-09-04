'use client'

import { Search } from '@carbon/icons-react'
import { Field, FieldInputProps, Input } from '@cerberus-design/react'

type Props = {
  onChange: FieldInputProps['onChange']
  value: FieldInputProps['value']
}

export function SearchInput(props: Props) {
  return (
    <Field label="What is your query, mortal?">
      <Input startIcon={<Search />} onChange={props.onChange} value={props.value} />
    </Field>
  )
}
