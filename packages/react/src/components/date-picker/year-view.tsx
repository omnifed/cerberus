import type {
  DatePickerViewProps,
  UseDatePickerContext,
} from '@ark-ui/react/date-picker'
import { DatePickerParts } from './parts'
import { DatePickerViewControlGroup } from './view-control-group'

/**
 * This private module contains an abstraction of the DatePickerYearView
 * component.
 * @module 'date-picker/year-view'
 */

/**
 * An abstraction of the DatePickerYearView that renders the year view of the
 * DatePicker.
 * @definition [datePicker docs](https://cerberus.digitalu.design/react/date-picker)
 */
export function DatePickerYearView(props: Omit<DatePickerViewProps, 'view'>) {
  return (
    <DatePickerParts.View {...props} view="year">
      <DatePickerParts.Context>
        {(datePicker: UseDatePickerContext) => (
          <>
            <DatePickerViewControlGroup />

            <DatePickerParts.Table>
              <DatePickerParts.TableBody>
                {datePicker.getYearsGrid({ columns: 4 }).map((years, id) => (
                  <DatePickerParts.TableRow key={id}>
                    {years.map((year, id) => (
                      <DatePickerParts.TableCell key={id} value={year.value}>
                        <DatePickerParts.TableCellTrigger>
                          {year.label}
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
