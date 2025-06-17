'use client'

import type { UseDatePickerContext } from '@ark-ui/react/date-picker'
import { DatePickerParts } from './parts'
import { DatePickerViewControlGroup } from './view-control-group'
import type { DatePickerViewProps } from './primitives'

/**
 * This private module contains an abstraction of the DatePickerMonthView
 * component.
 * @module 'date-picker/month-view'
 */

/**
 * An abstraction of the DatePickerMonthView that renders the month view of the
 * DatePicker.
 * @definition [datePicker docs](https://cerberus.digitalu.design/react/date-picker)
 */
export function DatePickerMonthView(props: DatePickerViewProps) {
  return (
    <DatePickerParts.View {...props} view="month">
      <DatePickerParts.Context>
        {(datePicker: UseDatePickerContext) => (
          <>
            <DatePickerViewControlGroup />

            <DatePickerParts.Table>
              <DatePickerParts.TableBody>
                {datePicker
                  .getMonthsGrid({ columns: 4, format: 'short' })
                  .map((months, id) => (
                    <DatePickerParts.TableRow key={id}>
                      {months.map((month, id) => (
                        <DatePickerParts.TableCell key={id} value={month.value}>
                          <DatePickerParts.TableCellTrigger>
                            {month.label}
                          </DatePickerParts.TableCellTrigger>
                        </DatePickerParts.TableCell>
                      ))}
                    </DatePickerParts.TableRow>
                  ))}
              </DatePickerParts.TableBody>
            </DatePickerParts.Table>
          </>
        )}
      </DatePickerParts.Context>
    </DatePickerParts.View>
  )
}
