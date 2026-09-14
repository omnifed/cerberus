import { BasicDemo } from './basic.demo'
import { BlurDemo } from './blur.demo'
import { CountDemo } from './count.demo'
import { CustomDemo } from './custom.demo'
import { SizeDemo } from './size.demo'

export const DEMOS = {
  basic: { preview: <BasicDemo /> },
  count: { preview: <CountDemo /> },
  size: { preview: <SizeDemo /> },
  blur: { preview: <BlurDemo /> },
  custom: { preview: <CustomDemo /> },
}
