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
  // There is a bug with the Root component that causes random date selection
  // onBlur after the first selection if the format prop is used.
  // ref: https://github.com/chakra-ui/ark/issues/3112#event-16047829195

  // const handleFormat = useCallback((value: DateValue) => {
  //   return formatISOToMilitary(value.toString())
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
