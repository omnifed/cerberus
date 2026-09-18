import { BasicDemo } from './basic.demo'
import { FieldDemo } from './field.demo'
import { SizesDemo } from './size.demo'
import { CustomDemo } from './custom.demo'

export const DEMOS = {
  basic: { preview: <BasicDemo /> },
  size: { preview: <SizesDemo /> },
  field: { preview: <FieldDemo /> },
  custom: { preview: <CustomDemo /> },
}
