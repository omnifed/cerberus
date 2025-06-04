import {
  DatePicker,
  type DatePickerContentProps as ArkDatePickerContentProps,
  type DatePickerContextProps as ArkDatePickerContextProps,
  type DatePickerControlProps as ArkDatePickerControlProps,
  type DatePickerInputProps as ArkDatePickerInputProps,
  type DatePickerLabelProps as ArkDatePickerLabelProps,
  type DatePickerMonthSelectProps as ArkDatePickerMonthSelectProps,
  type DatePickerNextTriggerProps as ArkDatePickerNextTriggerProps,
  type DatePickerPositionerProps as ArkDatePickerPositionerProps,
  type DatePickerPrevTriggerProps as ArkDatePickerPrevTriggerProps,
  type DatePickerRangeTextProps as ArkDatePickerRangeTextProps,
  type DatePickerRootProps as ArkDatePickerRootProps,
  type DatePickerTableBodyProps as ArkDatePickerTableBodyProps,
  type DatePickerTableCellProps as ArkDatePickerTableCellProps,
  type DatePickerTableCellTriggerProps as ArkDatePickerTableCellTriggerProps,
  type DatePickerTableHeaderProps as ArkDatePickerTableHeaderProps,
  type DatePickerTableHeadProps as ArkDatePickerTableHeadProps,
  type DatePickerTableProps as ArkDatePickerTableProps,
  type DatePickerTableRowProps as ArkDatePickerTableRowProps,
  type DatePickerTriggerProps as ArkDatePickerTriggerProps,
  type DatePickerViewControlProps as ArkDatePickerViewControlProps,
  type DatePickerViewProps as ArkDatePickerViewProps,
  type DatePickerViewTriggerProps as ArkDatePickerViewTriggerProps,
  type DatePickerYearSelectProps as ArkDatePickerYearSelectProps,
} from '@ark-ui/react/date-picker'
import { datePicker } from 'styled-system/recipes'
import {
  createCerberusPrimitive,
  type CerberusPrimitiveProps,
} from '../../system'

/**
 * This module contains the DatePicker primitives.
 * @module 'date-picker/primitives'
 */

const { withSlotRecipe, withNoRecipe } = createCerberusPrimitive(datePicker)

/**
 * The label component for the DatePicker.
 */
export type DatePickerLabelProps =
  CerberusPrimitiveProps<ArkDatePickerLabelProps>
export const DatePickerLabel = withSlotRecipe(DatePicker.Label, 'label')

/**
 * The control component for the DatePicker which wraps the input and the
 * triggers to open the DatePicker and clear the value.
 */
export type DatePickerControlProps =
  CerberusPrimitiveProps<ArkDatePickerControlProps>
export const DatePickerControl = withSlotRecipe(DatePicker.Control, 'control')

/**
 * The input component for the DatePicker.
 */
export type DatePickerInputElProps =
  CerberusPrimitiveProps<ArkDatePickerInputProps>
export const DatePickerInputEl = withSlotRecipe(DatePicker.Input, 'input')

/**
 * The trigger component that opens the DatePicker.
 */
export type DatePickerTriggerProps =
  CerberusPrimitiveProps<ArkDatePickerTriggerProps>
export const DatePickerTrigger = withSlotRecipe(DatePicker.Trigger, 'trigger')

/**
 * The content component for the DatePicker.
 */
export type DatePickerContentProps =
  CerberusPrimitiveProps<ArkDatePickerContentProps>
export const DatePickerContent = withSlotRecipe(DatePicker.Content, 'content')

/**
 * The view control component for the DatePicker which wraps the triggers to
 * switch between calendar views.
 */
export type DatePickerViewControlProps =
  CerberusPrimitiveProps<ArkDatePickerViewControlProps>
export const DatePickerViewControl = withSlotRecipe(
  DatePicker.Control,
  'viewControl',
)

/**
 * The range text component for the DatePicker.
 */
export type DatePickerRangeTextProps =
  CerberusPrimitiveProps<ArkDatePickerRangeTextProps>
export const DatePickerRangeText = withSlotRecipe(
  DatePicker.RangeText,
  'rangeText',
)

/**
 * The table component for the DatePicker.
 */
export type DatePickerTableProps =
  CerberusPrimitiveProps<ArkDatePickerTableProps>
export const DatePickerTable = withSlotRecipe(DatePicker.Table, 'table')

/**
 * The header component for the DatePicker table.
 */
export type DatePickerTableHeaderProps =
  CerberusPrimitiveProps<ArkDatePickerTableHeaderProps>
export const DatePickerTableHeader = withSlotRecipe(
  DatePicker.TableHeader,
  'tableHeader',
)

/**
 * The table cell component for the DatePicker.
 */
export type DatePickerTableCellProps =
  CerberusPrimitiveProps<ArkDatePickerTableCellProps>
export const DatePickerTableCell = withSlotRecipe(
  DatePicker.TableCell,
  'tableCell',
)

/**
 * The table cell trigger component for the DatePicker.
 */
export type DatePickerTableCellTriggerProps =
  CerberusPrimitiveProps<ArkDatePickerTableCellTriggerProps>
export const DatePickerTableCellTrigger = withSlotRecipe(
  DatePicker.TableCellTrigger,
  'tableCellTrigger',
)

/**
 * The root component of the DatePicker. This primitive has no Cerberus styles.
 */
export type DatePickerRootProps = CerberusPrimitiveProps<ArkDatePickerRootProps>
// @ts-expect-error this is a workaround for the type error WIP
export const DatePickerRoot = withNoRecipe(DatePicker.Root)

/**
 * The label component of the DatePicker. This primitive has no Cerberus styles.
 */
export type DatePickerClearTriggerProps =
  CerberusPrimitiveProps<ArkDatePickerTriggerProps>
export const DatePickerClearTrigger = withNoRecipe(DatePicker.ClearTrigger)

/**
 * The control component of the DatePicker. This primitive has no Cerberus
 * styles.
 */
export type DatePickerPositionerProps =
  CerberusPrimitiveProps<ArkDatePickerPositionerProps>
export const DatePickerPositioner = withNoRecipe(DatePicker.Positioner)

/**
 * The year select input component of the DatePicker. This primitive has no
 * Cerberus styles.
 */
export type DatePickerYearSelectProps =
  CerberusPrimitiveProps<ArkDatePickerYearSelectProps>
export const DatePickerYearSelect = withNoRecipe(DatePicker.YearSelect)

/**
 * The month select input component of the DatePicker. This primitive has no
 * Cerberus styles.
 */
export type DatePickerMonthSelectProps =
  CerberusPrimitiveProps<ArkDatePickerMonthSelectProps>
export const DatePickerMonthSelect = withNoRecipe(DatePicker.MonthSelect)

/**
 * The day view component of the DatePicker. This primitive has no Cerberus
 * styles.
 */
export type DatePickerViewProps = CerberusPrimitiveProps<ArkDatePickerViewProps>
export const DatePickerView = withNoRecipe(DatePicker.View)

/**
 * The day context component of the DatePicker. This primitive has no
 * Cerberus styles.
 */
export type DatePickerContextProps =
  CerberusPrimitiveProps<ArkDatePickerContextProps>
export const DatePickerContext = DatePicker.Context

/**
 * The trigger component of the DatePicker. This primitive has no Cerberus
 * styles.
 */
export type DatePickerPrevTriggerProps =
  CerberusPrimitiveProps<ArkDatePickerPrevTriggerProps>
export const DatePickerPrevTrigger = withNoRecipe(DatePicker.PrevTrigger)

/**
 * The trigger component of the DatePicker. This primitive has no Cerberus
 * styles.
 */
export type DatePickerNextTriggerProps =
  CerberusPrimitiveProps<ArkDatePickerNextTriggerProps>
export const DatePickerNextTrigger = withNoRecipe(DatePicker.NextTrigger)

/**
 * The trigger component of the DatePicker. This primitive has no Cerberus
 * styles.
 */
export type DatePickerViewTriggerProps =
  CerberusPrimitiveProps<ArkDatePickerViewTriggerProps>
export const DatePickerViewTrigger = withNoRecipe(DatePicker.ViewTrigger)

/**
 * The table head component of the DatePicker. This primitive has no Cerberus
 * styles.
 */
export type DatePickerTableHeadProps =
  CerberusPrimitiveProps<ArkDatePickerTableHeadProps>
export const DatePickerTableHead = withNoRecipe(DatePicker.TableHead)

/**
 * The table row component of the DatePicker. This primitive has no Cerberus
 * styles.
 */
export type DatePickerTableRowProps =
  CerberusPrimitiveProps<ArkDatePickerTableRowProps>
export const DatePickerTableRow = withNoRecipe(DatePicker.TableRow)

/**
 * The table body component of the DatePicker. This primitive has no Cerberus
 * styles.
 */
export type DatePickerTableBodyProps =
  CerberusPrimitiveProps<ArkDatePickerTableBodyProps>
export const DatePickerTableBody = withNoRecipe(DatePicker.TableBody)
