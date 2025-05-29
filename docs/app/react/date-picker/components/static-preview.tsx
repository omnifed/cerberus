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
