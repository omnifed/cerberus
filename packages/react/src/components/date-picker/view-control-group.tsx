'use client'

import { css } from 'styled-system/css'
import { useCerberusContext } from '../../context/cerberus'
import { extractParts } from '../../internal/extract-parts'
import { Button } from '../button/index'
import { IconButton } from '../icon-button/index'
import {
  DatePickerNextTrigger,
  DatePickerPrevTrigger,
  DatePickerRangeText,
  DatePickerViewControl,
  DatePickerViewTrigger,
  type DatePickerViewControlProps,
} from './primitives'

const PARTS = {
  prevTrigger: DatePickerPrevTrigger,
  viewTrigger: DatePickerViewTrigger,
  rangeText: DatePickerRangeText,
  nextTrigger: DatePickerNextTrigger,
}

export type DatePickerViewControlGroupProps = DatePickerViewControlProps

/**
 * The ViewControlGroup component is an abstraction of the
 * `DatePicker.ViewControl` primitive that renders the previous and next
 * triggers as small IconButtons with the Cerberus `calendarPrev` and
 * `calendarNext` icons, and between them a ghost Button view trigger showing
 * the `DatePicker.RangeText`. A direct `DatePicker.PrevTrigger`,
 * `DatePicker.ViewTrigger`, `DatePicker.NextTrigger` or
 * `DatePicker.RangeText` child patches that part's props; a trigger child
 * with children replaces that trigger. Other children render after the next
 * trigger.
 * @description [Cerberus Docs](https://cerberus.digitalu.design/docs/components/date-picker)
 * @description [Ark Docs](https://ark-ui.com/docs/components/date-picker)
 * @example
 * ```tsx
 * <DatePicker.View view="day">
 *   <DatePicker.ViewControlGroup />
 *   <DatePicker.Table>…</DatePicker.Table>
 * </DatePicker.View>
 * ```
 */
export function DatePickerViewControlGroup(
  props: DatePickerViewControlGroupProps,
) {
  const { children, ...controlProps } = props
  const { icons } = useCerberusContext()
  const { calendarPrev: PrevIcon, calendarNext: NextIcon } = icons
  const { parts, content } = extractParts(children, PARTS)
  const { prevTrigger, viewTrigger, nextTrigger } = parts

  return (
    <DatePickerViewControl {...controlProps}>
      {prevTrigger?.children != null ? (
        <DatePickerPrevTrigger {...prevTrigger} />
      ) : (
        <DatePickerPrevTrigger {...prevTrigger} asChild>
          <IconButton ariaLabel="Previous" size="sm">
            <PrevIcon />
          </IconButton>
        </DatePickerPrevTrigger>
      )}

      {viewTrigger?.children != null ? (
        <DatePickerViewTrigger {...viewTrigger} />
      ) : (
        <DatePickerViewTrigger {...viewTrigger} asChild>
          <Button
            className={css({
              h: '2rem',
              paddingInline: 'md',
            })}
            shape="rounded"
            size="sm"
            usage="ghost"
          >
            <DatePickerRangeText {...parts.rangeText} />
          </Button>
        </DatePickerViewTrigger>
      )}

      {nextTrigger?.children != null ? (
        <DatePickerNextTrigger {...nextTrigger} />
      ) : (
        <DatePickerNextTrigger {...nextTrigger} asChild>
          <IconButton ariaLabel="Next" size="sm">
            <NextIcon />
          </IconButton>
        </DatePickerNextTrigger>
      )}

      {content}
    </DatePickerViewControl>
  )
}
