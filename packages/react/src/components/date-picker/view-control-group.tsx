'use client'

import type { DatePickerViewControlProps } from '@ark-ui/react/date-picker'
import { useCerberusContext } from '../../context/cerberus'
import { IconButton } from '../IconButton'
import { DatePickerParts } from './parts'
import { Button } from '../button/button'
import { css } from '@cerberus/styled-system/css'

/**
 * This private module contains an abstraction of the DatePickerViewControl
 * primitive.
 * @module 'date-picker/view-control-group'
 */

/**
 * An abstraction of the DatePicker control that contains the prev, view, and
 * next triggers which control the calendar output.
 * @definition [datePicker docs](https://cerberus.digitalu.design/react/date-picker)
 */
export function DatePickerViewControlGroup(props: DatePickerViewControlProps) {
  const { icons } = useCerberusContext()
  const { calendarPrev: PrevIcon, calendarNext: NextIcon } = icons

  return (
    <DatePickerParts.ViewControl {...props}>
      <DatePickerParts.PrevTrigger asChild>
        <IconButton ariaLabel="Previous" size="sm">
          <PrevIcon />
        </IconButton>
      </DatePickerParts.PrevTrigger>

      <DatePickerParts.ViewTrigger asChild>
        <Button
          className={css({
            h: '2rem',
            paddingInline: 'md',
          })}
          shape="rounded"
          size="sm"
          usage="ghost"
        >
          <DatePickerParts.RangeText />
        </Button>
      </DatePickerParts.ViewTrigger>

      <DatePickerParts.NextTrigger asChild>
        <IconButton ariaLabel="Next" size="sm">
          <NextIcon />
        </IconButton>
      </DatePickerParts.NextTrigger>
    </DatePickerParts.ViewControl>
  )
}
