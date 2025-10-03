import {
  DatePicker,
  DatePickerLabel,
  DatePickerInput,
  DatePickerCalendar,
  Field,
  RangePickerInput,
} from '@cerberus-design/react'
import { Box, Grid } from 'styled-system/jsx'

interface DPPreviewProps {
  id: string
}

export function StaticPreview(props: DPPreviewProps) {
  return (
    <Box w="2/3">
      <Field>
        <DatePicker name={props.id}>
          <DatePickerLabel>Start date</DatePickerLabel>
          <DatePickerInput />
          <DatePickerCalendar />
        </DatePicker>
      </Field>
    </Box>
  )
}

export function RangePreview(props: DPPreviewProps) {
  return (
    <Box gap="4" w="2/3">
      <Field>
        <DatePicker name={props.id} selectionMode="range">
          <DatePickerLabel>Search range</DatePickerLabel>
          <RangePickerInput />
          <DatePickerCalendar />
        </DatePicker>
      </Field>
    </Box>
  )
}

export function CustomStylesDemo() {
  return (
    <Grid columns={2} gap="4" px="3/4" w="full">
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
          <DatePickerLabel>Start date</DatePickerLabel>
          <DatePickerInput />
          <DatePickerCalendar />
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
          <DatePickerLabel>End date</DatePickerLabel>
          <DatePickerInput />
          <DatePickerCalendar />
        </DatePicker>
      </Field>
    </Grid>
  )
}
