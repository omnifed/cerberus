import { Portal } from '../portal/index'
import type { DatePickerCalendarProps } from './calendar'
import { DatePickerParts } from './parts'
import type { DatePickerContentProps } from './primitives'

/**
 * This private module contains an abstraction of the DatePickerContent
 * primitive.
 * @module 'date-picker/content'
 */

/**
 * An abstraction of the DatePicker content that wraps the DatePickerParts
 * primitives.
 * @definition [datePicker docs](https://cerberus.digitalu.design/react/date-picker)
 */
export function DatePickerContent(
  props: DatePickerContentProps & DatePickerCalendarProps,
) {
  const { withModal, container, ...contentProps } = props
  return (
    <Portal disabled={withModal ?? false} container={container}>
      <DatePickerParts.Positioner>
        <DatePickerParts.Content {...contentProps} />
      </DatePickerParts.Positioner>
    </Portal>
  )
}
