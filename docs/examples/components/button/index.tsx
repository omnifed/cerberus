import { AttachedDemo } from './attached.demo'
import { BasicDemo } from './basic.demo'
import { CustomDemo } from './custom.demo'
import { GroupDemo } from './group.demo'
import { IconDemo } from './icon.demo'
import { PaletteDemo } from './palette.demo'
import { PendingDemo } from './pending.demo'
import { ShapesDemo } from './shapes.demo'
import { SizeDemo } from './size.demo'
import { UnstyledButton } from './unstyled.demo'
import { UsageDemo } from './usage.demo'

export const DEMOS = {
  basic: { preview: <BasicDemo /> },
  icon: { preview: <IconDemo /> },
  palette: { preview: <PaletteDemo /> },
  pending: { preview: <PendingDemo /> },
  shapes: { preview: <ShapesDemo /> },
  usage: { preview: <UsageDemo /> },
  size: { preview: <SizeDemo /> },
  group: { preview: <GroupDemo /> },
  attached: { preview: <AttachedDemo /> },
  custom: { preview: <CustomDemo /> },
  global: { preview: null },
  unstyled: { preview: <UnstyledButton /> },
}
