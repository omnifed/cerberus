import type { ElementType } from 'react'
import {
  DatePickerClearTrigger,
  DatePickerContent,
  DatePickerContext,
  DatePickerControl,
  DatePickerInputEl,
  DatePickerLabel,
  DatePickerMonthSelect,
  DatePickerNextTrigger,
  DatePickerPositioner,
  DatePickerPrevTrigger,
  DatePickerRangeText,
  DatePickerRoot,
  DatePickerTable,
  DatePickerTableBody,
  DatePickerTableCell,
  DatePickerTableCellTrigger,
  DatePickerTableHead,
  DatePickerTableHeader,
  DatePickerTableRow,
  DatePickerTrigger,
  DatePickerView,
  DatePickerViewControl,
  DatePickerViewTrigger,
  DatePickerYearSelect,
} from './primitives'

/**
 * This module contains the parts of the DatePicker component.
 * @module 'date-picker/parts'
 */

interface DatePickerPartsValue {
  /**
   * The container of the date-picker.
   */
  Root: ElementType
  /**
   * The label of the date-picker.
   */
  Label: ElementType
  /**
   * The control of the date-picker.
   */
  Control: ElementType
  /**
   * The input of the date-picker.
   */
  Input: ElementType
  /**
   * The trigger that opens the date-picker.
   */
  Trigger: ElementType
  /**
   * The trigger that clears the value of the date-picker.
   */
  ClearTrigger: ElementType
  /**
   * The positioner of the content for the date-picker.
   */
  Positioner: ElementType
  /**
   * The content of the date-picker.
   */
  Content: ElementType
  /**
   * The year select input of the date-picker.
   */
  YearSelect: ElementType
  /**
   * The month select input of the date-picker.
   */
  MonthSelect: ElementType
  /**
   * The day view of the date-picker.
   */
  View: ElementType
  /**
   * The day context of the date-picker.
   */
  Context: ElementType
  /**
   * The container for the content triggers.
   */
  ViewControl: ElementType
  /**
   * The trigger that moves to the previous month.
   */
  PrevTrigger: ElementType
  /**
   * The trigger that moves to the next month.
   */
  NextTrigger: ElementType
  /**
   * The trigger that moves to the next view.
   */
  ViewTrigger: ElementType
  /**
   * The range text of the date-picker.
   */
  RangeText: ElementType
  /**
   * The table of the date-picker.
   */
  Table: ElementType
  /**
   * The table head of the date-picker.
   */
  TableHead: ElementType
  /**
   * The table row of the date-picker.
   */
  TableRow: ElementType
  /**
   * The header text for the table.
   */
  TableHeader: ElementType
  /**
   * The body of the table.
   */
  TableBody: ElementType
  /**
   * The table cell of the table.
   */
  TableCell: ElementType
  /**
   * The trigger for the table cell.
   */
  TableCellTrigger: ElementType
}

/**
 * An Object containing the parts of the DatePicker component. For users that
 * prefer Object component syntax.
 *
 * @remarks
 *
 * When using object component syntax, you import the DatePickerParts object and
 * the entire family of components vs. only what you use.
 */
export const DatePickerParts: DatePickerPartsValue = {
  Root: DatePickerRoot,
  Label: DatePickerLabel,
  Control: DatePickerControl,
  Input: DatePickerInputEl,
  Trigger: DatePickerTrigger,
  ClearTrigger: DatePickerClearTrigger,
  Positioner: DatePickerPositioner,
  Content: DatePickerContent,
  YearSelect: DatePickerYearSelect,
  MonthSelect: DatePickerMonthSelect,
  View: DatePickerView,
  Context: DatePickerContext,
  ViewControl: DatePickerViewControl,
  PrevTrigger: DatePickerPrevTrigger,
  NextTrigger: DatePickerNextTrigger,
  ViewTrigger: DatePickerViewTrigger,
  RangeText: DatePickerRangeText,
  Table: DatePickerTable,
  TableHead: DatePickerTableHead,
  TableRow: DatePickerTableRow,
  TableHeader: DatePickerTableHeader,
  TableBody: DatePickerTableBody,
  TableCell: DatePickerTableCell,
  TableCellTrigger: DatePickerTableCellTrigger,
}
