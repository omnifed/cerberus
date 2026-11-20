'use client'

import { DatePickerRoot, type DatePickerRootProps } from './primitives'

export type DatePickerProps = DatePickerRootProps

/**
 * The DatePicker component is an abstraction of the `DatePicker.Root`
 * primitive that places the content below the start of the control
 * (`positioning={{ placement: 'bottom-start' }}`) unless `positioning` is set.
 * It renders no other part: its children, primitives or abstractions such as
 * `DatePicker.InputGroup` and `DatePicker.Calendar`, render inside the root
 * as given.
 * @description [Cerberus Docs](https://cerberus.digitalu.design/docs/components/date-picker)
 * @description [Ark Docs](https://ark-ui.com/docs/components/date-picker)
 * @example
 * ```tsx
 * <Field label="Start date">
 *   <DatePicker name="start_date">
 *     <DatePicker.Label>Start date</DatePicker.Label>
 *     <DatePicker.InputGroup />
 *     <DatePicker.Calendar />
 *   </DatePicker>
 * </Field>
 * ```
 */
export function DatePickerEl(props: DatePickerProps) {
  return (
    <DatePickerRoot positioning={{ placement: 'bottom-start' }} {...props} />
  )
}
