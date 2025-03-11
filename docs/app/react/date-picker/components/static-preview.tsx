import {
  DatePicker,
  DatePickerLabel,
  DatePickerInput,
  DatePickerCalendar,
  Field,
  RangePickerInput,
} from '@cerberus-design/react'
import { Box } from 'styled-system/jsx'

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

export function RangeDefaultValuePreview() {
  return (
    <Box gap="4" w="2/3">
      <Field>
        <DatePicker name="range_dates_dv" selectionMode="range">
          <DatePickerLabel>Search range</DatePickerLabel>
          <RangePickerInput defaultValue={['01/01/2025', '01/15/2025']} />
          <DatePickerCalendar />
        </DatePicker>
      </Field>
    </Box>
  )
}
