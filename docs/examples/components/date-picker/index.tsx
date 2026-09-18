import { BasicDemo } from './basic.demo'
import { CustomDemo } from './custom.demo'
import { RangeDemo } from './range.demo'
import { RangeDefaultValueDemo } from './rangeDefault.demo'

export const DEMOS = {
  basic: { preview: <BasicDemo /> },
  range: { preview: <RangeDemo /> },
  custom: { preview: <CustomDemo /> },
  rangeDefault: { preview: <RangeDefaultValueDemo /> },
}
