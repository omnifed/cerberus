import { AsChildDemo } from './asChild.demo'
import { BasicDemo } from './basic.demo'
import { CustomDemo } from './custom.demo'
import { PaletteDemo } from './palette.demo'
import { ShapeDemo } from './shape.demo'
import { SizeDemo } from './size.demo'
import { UsageDemo } from './usage.demo'

export const DEMOS = {
  basic: { preview: <BasicDemo /> },
  asChild: { preview: <AsChildDemo /> },
  custom: { preview: <CustomDemo /> },
  palette: { preview: <PaletteDemo /> },
  shape: { preview: <ShapeDemo /> },
  size: { preview: <SizeDemo /> },
  usage: { preview: <UsageDemo /> },
}
