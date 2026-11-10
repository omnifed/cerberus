import { BasicDemo } from './basic.demo'
import { CloseDemo } from './close.demo'
import { CustomDemo } from './custom.demo'
import { PaletteDemo } from './palette.demo'
import { UnstyledDemo } from './unstyled.demo'
import { UnstyledSlotDemo } from './unstyledSlot.demo'
import { UsageDemo } from './usage.demo'

export const DEMOS = {
  basic: { preview: <BasicDemo /> },
  palette: { preview: <PaletteDemo /> },
  usage: { preview: <UsageDemo /> },
  close: { preview: <CloseDemo /> },
  custom: { preview: <CustomDemo /> },
  unstyled: { preview: <UnstyledDemo /> },
  unstyledSlot: { preview: <UnstyledSlotDemo /> },
}
