'use client'

import { Calendar } from '@carbon/icons-react'
import {
  Field,
  FieldMessage,
  Input,
  Label,
  useDate,
  type InputProps,
} from '@cerberus-design/react'

export function DateInput(props: InputProps) {
  const date = useDate()
  return (
    <Field>
      <Label htmlFor={props.id}>Start Date</Label>
      <Input
        {...props}
        describedBy="help:start_date"
        onChange={date.onChange}
        startIcon={<Calendar />}
        placeholder="DD MMM YYYY"
        type="text"
        value={date.value}
      />
      <FieldMessage id="help:start_date">
        We also have access to the ISO format: {date.ISO}
      </FieldMessage>
    </Field>
  )
}
