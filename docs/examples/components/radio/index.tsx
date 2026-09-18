import { BasicDemo } from './basic.demo'
import { CustomDemo } from './custom.demo'
import { OrientationDemo } from './orientation.demo'
import { SizeDemo } from './size.demo'

export const DEMOS = {
  basic: { preview: <BasicDemo /> },
  orientation: { preview: <OrientationDemo /> },
  size: { preview: <SizeDemo /> },
  custom: { preview: <CustomDemo /> },
}
