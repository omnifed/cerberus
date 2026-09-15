import { BasicDemo } from './basic.demo'
import { ClosableDemo } from './closable.demo'
import { CustomDemo } from './custom.demo'
import { GradientDemo } from './gradient.demo'
import { PaletteDemo } from './palette.demo'
import { ShapeDemo } from './shape.demo'
import { UsageDemo } from './usage.demo'

export const DEMOS = {
  basic: {
    preview: <BasicDemo />,
  },
  usage: {
    preview: <UsageDemo />,
  },
  shape: {
    preview: <ShapeDemo />,
  },
  custom: {
    preview: <CustomDemo />,
  },
  closable: {
    preview: <ClosableDemo />,
  },
  palette: {
    preview: <PaletteDemo />,
  },
  gradient: {
    preview: <GradientDemo />,
  },
}
