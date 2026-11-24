import { Grid } from '@/styled-system/jsx'
import { DatePicker, Field } from '@cerberus-design/react'

export function CustomDemo() {
  return (
    <Grid columns={2} gap="4" w="3/4">
      <Field>
        <DatePicker
          name="custom_start_date"
          css={{
            w: 'full',
            '& :is([data-part=control])': {
              w: 'full',
            },
          }}
        >
          <DatePicker.Label>Start date</DatePicker.Label>
          <DatePicker.InputGroup />
          <DatePicker.Calendar />
        </DatePicker>
      </Field>
      <Field>
        <DatePicker
          name="custom_end_date"
          css={{
            w: 'full',
            '& :is([data-part=control])': {
              w: 'full',
            },
          }}
        >
          <DatePicker.Label>End date</DatePicker.Label>
          <DatePicker.InputGroup />
          <DatePicker.Calendar />
        </DatePicker>
      </Field>
    </Grid>
  )
}
