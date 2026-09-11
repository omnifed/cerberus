import { BasicDemo } from './basic.demo'
import { CustomDemo } from './custom.demo'
import { FieldsetGroupDemo } from './group.demo'

export const DEMOS = {
  basic: { preview: <BasicDemo /> },
  group: { preview: <FieldsetGroupDemo /> },
  custom: { preview: <CustomDemo /> },
}
