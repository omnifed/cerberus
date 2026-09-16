import { BasicDemo } from './basic.demo'
import { CustomDemo } from './custom.demo'
import { InjectDemo } from './inject.demo'

export const DEMOS = {
  basic: { preview: <BasicDemo /> },
  inject: { preview: <InjectDemo /> },
  custom: { preview: <CustomDemo /> },
}
