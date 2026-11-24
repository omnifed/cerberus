'use client'

import { useCerberusContext } from '../../context/cerberus'
import { IconButton } from '../buttons/index'
import { DatePickerTrigger, type DatePickerTriggerProps } from './primitives'

export type DatePickerIconTriggerProps = DatePickerTriggerProps & {
  /**
   * The accessible label of the trigger.
   * @default 'Open calendar'
   */
  ariaLabel?: string
}

/**
 * The IconTrigger component is an abstraction of the `DatePicker.Trigger`
 * primitive that renders a small ghost IconButton with the Cerberus
 * `calendar` icon. Children replace the icon.
 * @description [Cerberus Docs](https://cerberus.digitalu.design/docs/components/date-picker)
 * @description [Ark Docs](https://ark-ui.com/docs/components/date-picker)
 * @example
 * ```tsx
 * <DatePicker.Control>
 *   <DatePicker.IconTrigger />
 *   <DatePicker.Input />
 * </DatePicker.Control>
 * ```
 */
export function DatePickerIconTrigger(props: DatePickerIconTriggerProps) {
  const { ariaLabel = 'Open calendar', children, ...triggerProps } = props
  const { icons } = useCerberusContext()
  const { calendar: CalendarIcon } = icons

  return (
    <DatePickerTrigger {...triggerProps} asChild>
      <IconButton ariaLabel={ariaLabel} size="sm" usage="ghost">
        {children ?? <CalendarIcon />}
      </IconButton>
    </DatePickerTrigger>
  )
}
