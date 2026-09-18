import { BasicDemo } from './basic.demo'
import { PaletteDemo } from './palette.demo'
import { UsageDemo } from './usage.demo'
import { CustomDemo } from './custom.demo'

export const DEMOS = {
  basic: {
    preview: <BasicDemo />,
  },
  palette: {
    preview: <PaletteDemo />,
  },
  usage: {
    preview: <UsageDemo />,
  },
  custom: {
    preview: <CustomDemo />,
  },
}
