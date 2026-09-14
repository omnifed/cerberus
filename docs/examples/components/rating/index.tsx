import { BasicDemo } from './basic.demo'
import { CustomDemo } from './custom.demo'
import { OrientationDemo } from './orientation.demo'
import { ReadOnlyDemo } from './readOnly.demo'
import { SizeDemo } from './size.demo'

export const DEMOS = {
  basic: { preview: <BasicDemo /> },
  readOnly: { preview: <ReadOnlyDemo /> },
  orientation: { preview: <OrientationDemo /> },
  size: { preview: <SizeDemo /> },
  custom: { preview: <CustomDemo /> },
}
