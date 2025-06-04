import {
  DatePicker,
  type DatePickerContentProps,
  type DatePickerContextProps,
  type DatePickerControlProps,
  type DatePickerInputProps,
  type DatePickerLabelProps,
  type DatePickerMonthSelectProps,
  type DatePickerNextTriggerProps,
  type DatePickerPositionerProps,
  type DatePickerPrevTriggerProps,
  type DatePickerRangeTextProps,
  type DatePickerRootProps,
  type DatePickerTableBodyProps,
  type DatePickerTableCellProps,
  type DatePickerTableCellTriggerProps,
  type DatePickerTableHeaderProps,
  type DatePickerTableHeadProps,
  type DatePickerTableProps,
  type DatePickerTableRowProps,
  type DatePickerTriggerProps,
  type DatePickerViewControlProps,
  type DatePickerViewProps,
  type DatePickerViewTriggerProps,
  type DatePickerYearSelectProps,
} from '@ark-ui/react/date-picker'
import { cx } from 'styled-system/css'
import { datePicker } from 'styled-system/recipes'
// import {
//   createCerberusPrimitive,
//   type CerberusPrimitiveProps,
// } from '../../system'

/**
 * This module contains the DatePicker primitives.
 * @module 'date-picker/primitives'
 */

// const { withSlotRecipe } = createCerberusPrimitive(datePicker)

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
export function DatePickerInputEl(props: DatePickerInputProps) {
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
export function DatePickerRoot(props: DatePickerRootProps) {
  return <DatePicker.Root {...props} />
}

/**
 * The label component of the DatePicker. This primitive has no Cerberus styles.
 */
export function DatePickerClearTrigger(props: DatePickerTriggerProps) {
  return <DatePicker.ClearTrigger {...props} />
}

/**
 * The control component of the DatePicker. This primitive has no Cerberus
 * styles.
 */
export function DatePickerPositioner(props: DatePickerPositionerProps) {
  return <DatePicker.Positioner {...props} />
}

/**
 * The year select input component of the DatePicker. This primitive has no
 * Cerberus styles.
 */
export function DatePickerYearSelect(props: DatePickerYearSelectProps) {
  return <DatePicker.YearSelect {...props} />
}

/**
 * The month select input component of the DatePicker. This primitive has no
 * Cerberus styles.
 */
export function DatePickerMonthSelect(props: DatePickerMonthSelectProps) {
  return <DatePicker.MonthSelect {...props} />
}

/**
 * The day view component of the DatePicker. This primitive has no Cerberus
 * styles.
 */
export function DatePickerView(props: DatePickerViewProps) {
  return <DatePicker.View {...props} />
}

/**
 * The day context component of the DatePicker. This primitive has no
 * Cerberus styles.
 */
export function DatePickerContext(props: DatePickerContextProps) {
  return <DatePicker.Context {...props} />
}

/**
 * The trigger component of the DatePicker. This primitive has no Cerberus
 * styles.
 */
export function DatePickerPrevTrigger(props: DatePickerPrevTriggerProps) {
  return <DatePicker.PrevTrigger {...props} />
}

/**
 * The trigger component of the DatePicker. This primitive has no Cerberus
 * styles.
 */
export function DatePickerNextTrigger(props: DatePickerNextTriggerProps) {
  return <DatePicker.NextTrigger {...props} />
}

/**
 * The trigger component of the DatePicker. This primitive has no Cerberus
 * styles.
 */
export function DatePickerViewTrigger(props: DatePickerViewTriggerProps) {
  return <DatePicker.ViewTrigger {...props} />
}

/**
 * The table head component of the DatePicker. This primitive has no Cerberus
 * styles.
 */
export function DatePickerTableHead(props: DatePickerTableHeadProps) {
  return <DatePicker.TableHead {...props} />
}
/**
 * The table row component of the DatePicker. This primitive has no Cerberus
 * styles.
 */
export function DatePickerTableRow(props: DatePickerTableRowProps) {
  return <DatePicker.TableRow {...props} />
}
/**
 * The table body component of the DatePicker. This primitive has no Cerberus
 * styles.
 */
export function DatePickerTableBody(props: DatePickerTableBodyProps) {
  return <DatePicker.TableBody {...props} />
}
