import { BasicDemo } from './basic.demo'
import { IndeterminateDemo } from './indeterminate.demo'
import { SizeDemo } from './size.demo'
import { CustomDemo } from './custom.demo'

export const DEMOS = {
  basic: {
    preview: <BasicDemo />,
  },
  indeterminate: {
    preview: <IndeterminateDemo />,
  },
  size: {
    preview: <SizeDemo />,
  },
  custom: {
    preview: <CustomDemo />,
  },
}
