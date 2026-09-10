import { BasicDemo } from './basic.demo'
import { IndicatorDemo } from './indicator.demo'
import { SizeDemo } from './size.demo'
import { CustomDemo } from './custom.demo'

export const DEMOS = {
  basic: {
    preview: <BasicDemo />,
  },
  indicator: {
    preview: <IndicatorDemo />,
  },
  size: {
    preview: <SizeDemo />,
  },
  custom: {
    preview: <CustomDemo />,
  },
}
