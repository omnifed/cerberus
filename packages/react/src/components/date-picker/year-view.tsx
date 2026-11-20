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

export type DatePickerYearViewProps = Omit<DatePickerViewProps, 'view'>

/**
 * The YearView component is an abstraction of the `DatePicker.View`
 * primitive for the `year` view. It renders a `DatePicker.ViewControlGroup`
 * and a table of the years in the visible decade, four per row. A direct
 * `DatePicker.ViewControlGroup` or `DatePicker.Table` child patches that
 * part's props. Other children render after the table.
 * @description [Cerberus Docs](https://cerberus.digitalu.design/docs/components/date-picker)
 * @description [Ark Docs](https://ark-ui.com/docs/components/date-picker)
 * @example
 * ```tsx
 * <DatePicker.ContentGroup>
 *   <DatePicker.DayView />
 *   <DatePicker.YearView />
 * </DatePicker.ContentGroup>
 * ```
 */
export function DatePickerYearView(props: DatePickerYearViewProps) {
  const { children, ...viewProps } = props
  const { parts, content } = extractParts(children, PARTS)
  const { children: _tableChildren, ...tableProps } = parts.table ?? {}

  return (
    <DatePickerView {...viewProps} view="year">
      <DatePickerContext>
        {(datePicker) => (
          <>
            <DatePickerViewControlGroup {...parts.viewControlGroup} />

            <DatePickerTable {...tableProps}>
              <DatePickerTableBody>
                {datePicker.getYearsGrid({ columns: 4 }).map((years, id) => (
                  <DatePickerTableRow key={id}>
                    {years.map((year, id) => (
                      <DatePickerTableCell key={id} value={year.value}>
                        <DatePickerTableCellTrigger>
                          {year.label}
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
