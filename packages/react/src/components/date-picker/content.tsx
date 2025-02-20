import type { DatePickerContentProps } from '@ark-ui/react/date-picker'
import { Portal } from '../Portal'
import { DatePickerParts } from './parts'

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
  props: DatePickerContentProps & {
    withModal?: boolean
  },
) {
  const { withModal, ...contentProps } = props
  return (
    <Portal disabled={withModal ?? false}>
      <DatePickerParts.Positioner>
        <DatePickerParts.Content {...contentProps} />
      </DatePickerParts.Positioner>
    </Portal>
  )
}
