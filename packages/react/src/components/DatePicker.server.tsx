import {
  DatePicker as ArkDP,
  type DatePickerLabelProps,
  type DatePickerTableCellProps,
  type DatePickerTableCellTriggerProps,
  type DatePickerTableHeaderProps,
  type DatePickerTableProps,
  type DatePickerViewControlProps,
} from '@ark-ui/react'
import { cx } from '@cerberus/styled-system/css'
import { datePicker, label } from '@cerberus/styled-system/recipes'

/**
 * This module contains the DatePicker server family components.
 * @module DatePicker
 */

// We are not exposing this to the public API
const datePickerStyles = datePicker()

/**
 * The label component for the DatePicker.
 * @definition [datePicker docs](https://cerberus.digitalu.design/react/date-picker)
 * @example
 * ```tsx
 * <DatePickerLabel>
 *   <DatePickerLabel.Label>...</DatePickerLabel.Label>
 * </DatePickerLabel>
 * ```
 */
export function DatePickerLabel(props: DatePickerLabelProps) {
  const { className, ...arkProps } = props
  return (
    <ArkDP.Label
      {...arkProps}
      className={cx(
        className,
        label({
          size: 'sm',
        }),
      )}
    />
  )
}

/**
 * The control component for the DatePicker which wraps the triggers to switch
 * between calendar views.
 * @definition [datePicker docs](https://cerberus.digitalu.design/react/date-picker)
 * @example
 * ```tsx
 * <DatePickerViewControl>
 *   <PrevTrigger />
 *   <ViewTrigger />
 *   <NextTrigger />
 * </DatePickerViewControl>
 * ```
 */
export function DatePickerViewControl(props: DatePickerViewControlProps) {
  return (
    <ArkDP.Control
      {...props}
      className={cx(props.className, datePickerStyles.viewControl)}
    />
  )
}

/**
 * The table component for the DatePicker.
 * @definition [datePicker docs](https://cerberus.digitalu.design/react/date-picker)
 * @example
 * ```tsx
 * <DatePickerTable />
 * ```
 */
export function DatePickerTable(props: DatePickerTableProps) {
  return (
    <ArkDP.Table
      {...props}
      className={cx(props.className, datePickerStyles.table)}
    />
  )
}

/**
 * The header component for the DatePicker table.
 * @definition [datePicker docs](https://cerberus.digitalu.design/react/date-picker)
 * @example
 * ```tsx
 * <DatePickerTableHeader />
 * ```
 */
export function DatePickerTableHeader(props: DatePickerTableHeaderProps) {
  return (
    <ArkDP.TableHeader
      {...props}
      className={cx(props.className, datePickerStyles.tableHeader)}
    />
  )
}

/**
 * The cell component for the DatePicker table.
 * @definition [datePicker docs](https://cerberus.digitalu.design/react/date-picker)
 * @example
 * ```tsx
 * <DatePickerTableCell />
 * ```
 */
export function DatePickerTableCell(props: DatePickerTableCellProps) {
  return (
    <ArkDP.TableCell
      {...props}
      className={cx(props.className, datePickerStyles.tableCell)}
    />
  )
}

/**
 * The cell component for the DatePicker table.
 * @definition [datePicker docs](https://cerberus.digitalu.design/react/date-picker)
 * @example
 * ```tsx
 * <DatePickerTableCell />
 * ```
 */
export function DatePickerTableCellTrigger(
  props: DatePickerTableCellTriggerProps,
) {
  return (
    <ArkDP.TableCellTrigger
      {...props}
      className={cx(props.className, datePickerStyles.tableCellTrigger)}
    />
  )
}

/**
 * The view container which wraps the control and content components.
 * @definition [datePicker docs](https://cerberus.digitalu.design/react/date-picker)
 * @example
 * ```tsx
 * <DatePickerView />
 * ```
 */
export const DatePickerView = ArkDP.View

/**
 * The context component for the DatePicker which provides the DatePicker state.
 * @definition [datePicker docs](https://cerberus.digitalu.design/react/date-picker)
 * @example
 * ```tsx
 * <DatePickerContext />
 * ```
 */
export const DatePickerContext = ArkDP.Context
