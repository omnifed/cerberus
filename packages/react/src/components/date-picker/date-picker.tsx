import type { DatePickerRootProps } from '@ark-ui/react/date-picker'
import { DatePickerParts } from './parts'

/**
 * This module contains an abstraction of the DatePicker.Root primitive.
 * @module 'date-picker/root'
 */

/**
 * DatePicker component is an abstraction of the DatePickerRoot primitive which
 * is the context provider to the DatePicker.
 * @description [Cerberus Docs](https://cerberus.digitalu.design/react/date-picker)
 * @description [Ark Docs](https://ark-ui.com/react/docs/components/date-picker)
 */
export function DatePicker(props: DatePickerRootProps) {
  // const handleFormat = useCallback((date: DateValue) => {
  //   const day = date.day.toString().padStart(2, '0')
  //   const year = date.year.toString()
  //   const formattedMonth = new DateFormatter('en-US', {
  //     month: 'short',
  //   }).format(date.toDate(getLocalTimeZone()))

  //   // Format the date as "DD MMM YYYY"
  //   return `${day} ${formattedMonth} ${year}`
  // }, [])

  return (
    <DatePickerParts.Root
      {...props}
      positioning={{
        placement: 'bottom-start',
      }}
    />
  )
}
