'use client'

import { extractParts } from '../../internal/extract-parts'
import {
  DatePickerContext,
  DatePickerTable,
  DatePickerTableBody,
  DatePickerTableCell,
  DatePickerTableCellTrigger,
  DatePickerTableRow,
  DatePickerView,
  type DatePickerViewProps,
} from './primitives'
import { DatePickerViewControlGroup } from './view-control-group'

const PARTS = {
  viewControlGroup: DatePickerViewControlGroup,
  table: DatePickerTable,
}

export type DatePickerMonthViewProps = Omit<DatePickerViewProps, 'view'>

/**
 * The MonthView component is an abstraction of the `DatePicker.View`
 * primitive for the `month` view. It renders a `DatePicker.ViewControlGroup`
 * and a table of short month names, four per row. A direct
 * `DatePicker.ViewControlGroup` or `DatePicker.Table` child patches that
 * part's props. Other children render after the table.
 * @description [Cerberus Docs](https://cerberus.digitalu.design/docs/components/date-picker)
 * @description [Ark Docs](https://ark-ui.com/docs/components/date-picker)
 * @example
 * ```tsx
 * <DatePicker.ContentGroup>
 *   <DatePicker.DayView />
 *   <DatePicker.MonthView />
 * </DatePicker.ContentGroup>
 * ```
 */
export function DatePickerMonthView(props: DatePickerMonthViewProps) {
  const { children, ...viewProps } = props
  const { parts, content } = extractParts(children, PARTS)
  const { children: _tableChildren, ...tableProps } = parts.table ?? {}

  return (
    <DatePickerView {...viewProps} view="month">
      <DatePickerContext>
        {(datePicker) => (
          <>
            <DatePickerViewControlGroup {...parts.viewControlGroup} />

            <DatePickerTable {...tableProps}>
              <DatePickerTableBody>
                {datePicker
                  .getMonthsGrid({ columns: 4, format: 'short' })
                  .map((months, id) => (
                    <DatePickerTableRow key={id}>
                      {months.map((month, id) => (
                        <DatePickerTableCell key={id} value={month.value}>
                          <DatePickerTableCellTrigger>
                            {month.label}
                          </DatePickerTableCellTrigger>
                        </DatePickerTableCell>
                      ))}
                    </DatePickerTableRow>
                  ))}
              </DatePickerTableBody>
            </DatePickerTable>

            {content}
          </>
        )}
      </DatePickerContext>
    </DatePickerView>
  )
}
