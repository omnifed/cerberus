import { BasicDemo } from './basic.demo'
import { CustomDemo } from './custom.demo'
import { IndicatorDemo } from './indicator.demo'
import { SizeDemo } from './size.demo'
import { UnstyledDemo } from './unstyled.demo'
import { UnstyledSlotDemo } from './unstyledSlot.demo'

export const DEMOS = {
  basic: { preview: <BasicDemo /> },
  indicator: { preview: <IndicatorDemo /> },
  size: { preview: <SizeDemo /> },
  custom: { preview: <CustomDemo /> },
  unstyled: { preview: <UnstyledDemo /> },
  unstyledSlot: { preview: <UnstyledSlotDemo /> },
}
