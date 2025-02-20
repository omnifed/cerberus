import {
  DatePicker,
  type DatePickerContentProps,
  type DatePickerControlProps,
  type DatePickerInputProps,
  type DatePickerLabelProps,
  type DatePickerRangeTextProps,
  type DatePickerTableCellProps,
  type DatePickerTableCellTriggerProps,
  type DatePickerTableHeaderProps,
  type DatePickerTableProps,
  type DatePickerTriggerProps,
  type DatePickerViewControlProps,
} from '@ark-ui/react/date-picker'
import { cx } from '@cerberus/styled-system/css'
import { datePicker } from '@cerberus/styled-system/recipes'

/**
 * This module contains the DatePicker primitives.
 * @module 'date-picker/primitives'
 */

/**
 * The label component for the DatePicker.
 */
export function DatePickerLabel(props: DatePickerLabelProps) {
  const styles = datePicker()
  return (
    <DatePicker.Label
      {...props}
      className={cx(styles.label, props.className)}
    />
  )
}

/**
 * The control component for the DatePicker which wraps the input and the
 * triggers to open the DatePicker and clear the value.
 */
export function DatePickerControl(props: DatePickerControlProps) {
  const styles = datePicker()
  return (
    <DatePicker.Control
      {...props}
      className={cx(styles.control, props.className)}
    />
  )
}

/**
 * The input component for the DatePicker.
 */
export function DatePickerInput(props: DatePickerInputProps) {
  const styles = datePicker()
  return (
    <DatePicker.Input
      {...props}
      className={cx(styles.input, props.className)}
    />
  )
}

/**
 * The trigger component that opens the DatePicker.
 */
export function DatePickerTrigger(props: DatePickerTriggerProps) {
  const styles = datePicker()
  return (
    <DatePicker.Trigger
      {...props}
      className={cx(styles.trigger, props.className)}
    />
  )
}

/**
 * The content component for the DatePicker.
 */
export function DatePickerContent(props: DatePickerContentProps) {
  const styles = datePicker()
  return (
    <DatePicker.Content
      {...props}
      className={cx(styles.content, props.className)}
    />
  )
}

/**
 * The view control component for the DatePicker which wraps the triggers to
 * switch between calendar views.
 */
export function DatePickerViewControl(props: DatePickerViewControlProps) {
  const styles = datePicker()
  return (
    <DatePicker.Control
      {...props}
      className={cx(styles.viewControl, props.className)}
    />
  )
}

/**
 * The range text component for the DatePicker.
 */
export function DatePickerRangeText(props: DatePickerRangeTextProps) {
  const styles = datePicker()
  return (
    <DatePicker.RangeText
      {...props}
      className={cx(styles.rangeText, props.className)}
    />
  )
}

/**
 * The table component for the DatePicker.
 */
export function DatePickerTable(props: DatePickerTableProps) {
  const styles = datePicker()
  return (
    <DatePicker.Table
      {...props}
      className={cx(styles.table, props.className)}
    />
  )
}

/**
 * The header component for the DatePicker table.
 */
export function DatePickerTableHeader(props: DatePickerTableHeaderProps) {
  const styles = datePicker()
  return (
    <DatePicker.TableHeader
      {...props}
      className={cx(styles.tableHeader, props.className)}
    />
  )
}

/**
 * The table cell component for the DatePicker.
 */
export function DatePickerTableCell(props: DatePickerTableCellProps) {
  const styles = datePicker()
  return (
    <DatePicker.TableCell
      {...props}
      className={cx(styles.tableCell, props.className)}
    />
  )
}

/**
 * The table cell trigger component for the DatePicker.
 */
export function DatePickerTableCellTrigger(
  props: DatePickerTableCellTriggerProps,
) {
  const styles = datePicker()
  return (
    <DatePicker.TableCellTrigger
      {...props}
      className={cx(styles.tableCellTrigger, props.className)}
    />
  )
}

/**
 * The root component of the DatePicker. This primitive has no Cerberus styles.
 */
export const DatePickerRoot = DatePicker.Root
/**
 * The label component of the DatePicker. This primitive has no Cerberus styles.
 */
export const DatePickerClearTrigger = DatePicker.ClearTrigger
/**
 * The control component of the DatePicker. This primitive has no Cerberus
 * styles.
 */
export const DatePickerPositioner = DatePicker.Positioner
/**
 * The year select input component of the DatePicker. This primitive has no
 * Cerberus styles.
 */
export const DatePickerYearSelect = DatePicker.YearSelect
/**
 * The month select input component of the DatePicker. This primitive has no
 * Cerberus styles.
 */
export const DatePickerMonthSelect = DatePicker.MonthSelect
/**
 * The day view component of the DatePicker. This primitive has no Cerberus
 * styles.
 */
export const DatePickerView = DatePicker.View
/**
 * The day context component of the DatePicker. This primitive has no
 * Cerberus styles.
 */
export const DatePickerContext = DatePicker.Context
/**
 * The trigger component of the DatePicker. This primitive has no Cerberus
 * styles.
 */
export const DatePickerPrevTrigger = DatePicker.PrevTrigger
/**
 * The trigger component of the DatePicker. This primitive has no Cerberus
 * styles.
 */
export const DatePickerNextTrigger = DatePicker.NextTrigger
/**
 * The trigger component of the DatePicker. This primitive has no Cerberus
 * styles.
 */
export const DatePickerViewTrigger = DatePicker.ViewTrigger
/**
 * The table head component of the DatePicker. This primitive has no Cerberus
 * styles.
 */
export const DatePickerTableHead = DatePicker.TableHead
/**
 * The table row component of the DatePicker. This primitive has no Cerberus
 * styles.
 */
export const DatePickerTableRow = DatePicker.TableRow
/**
 * The table body component of the DatePicker. This primitive has no Cerberus
 * styles.
 */
export const DatePickerTableBody = DatePicker.TableBody
