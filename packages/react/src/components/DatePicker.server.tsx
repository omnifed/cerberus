import {
  DatePicker as ArkDP,
  type DatePickerLabelProps,
  type DatePickerTableCellTriggerProps,
  type DatePickerTableHeaderProps,
  type DatePickerTableProps,
  type DatePickerTriggerProps,
  type DatePickerViewControlProps,
} from '@ark-ui/react'
import { css, cx } from '@cerberus/styled-system/css'
import { datePicker, iconButton, label } from '@cerberus/styled-system/recipes'
import { $cerberusIcons } from '../config/defineIcons'
import { IconButton } from './IconButton'
import { Button } from './Button'

/**
 * This module contains the DatePicker server family components.
 * @module DatePicker
 */

const datePickerStyles = datePicker()

/**
 * The label component for the DatePicker.
 * @definition [ARK docs](https://ark-ui.com/react/docs/components/date-picker)
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

export function DatePickerTrigger(props: DatePickerTriggerProps) {
  const { calendar: CalendarIcon } = $cerberusIcons
  return (
    <ArkDP.Trigger
      {...props}
      className={cx(
        props.className,
        iconButton({
          size: 'sm',
          usage: 'ghost',
        }),
        datePickerStyles.trigger,
      )}
    >
      <CalendarIcon />
    </ArkDP.Trigger>
  )
}

export function DatePickerViewControl(props: DatePickerViewControlProps) {
  return (
    <ArkDP.Control
      {...props}
      className={cx(props.className, datePickerStyles.viewControl)}
    />
  )
}

export function DatePickerViewControlGroup(props: DatePickerViewControlProps) {
  const { calendarPrev: PrevIcon, calendarNext: NextIcon } = $cerberusIcons
  return (
    <DatePickerViewControl {...props}>
      <ArkDP.PrevTrigger asChild>
        <IconButton ariaLabel="Previous" size="sm">
          <PrevIcon />
        </IconButton>
      </ArkDP.PrevTrigger>

      <ArkDP.ViewTrigger asChild>
        <Button
          className={css({
            h: '2rem',
            paddingInline: 'md',
          })}
          shape="rounded"
          size="sm"
          usage="ghost"
        >
          <ArkDP.RangeText />
        </Button>
      </ArkDP.ViewTrigger>

      <ArkDP.NextTrigger asChild>
        <IconButton ariaLabel="Next" size="sm">
          <NextIcon />
        </IconButton>
      </ArkDP.NextTrigger>
    </DatePickerViewControl>
  )
}

export function DatePickerTable(props: DatePickerTableProps) {
  return (
    <ArkDP.Table
      {...props}
      className={cx(props.className, datePickerStyles.table)}
    />
  )
}

export function DatePickerTableHeader(props: DatePickerTableHeaderProps) {
  return (
    <ArkDP.TableHeader
      {...props}
      className={cx(props.className, datePickerStyles.tableHeader)}
    />
  )
}

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

export const DatePickerView = ArkDP.View
export const DatePickerContext = ArkDP.Context
