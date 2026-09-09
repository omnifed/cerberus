import { BasicDemo } from './basic.demo'
import { IndeterminateDemo } from './indeterminate.demo'
import { SizeDemo } from './size.demo'
import { CustomDemo } from './custom.demo'

export const DEMOS = {
  basic: {
    id: 'checkbox.basic',
    preview: <BasicDemo />,
  },
  indeterminate: {
    id: 'checkbox.indeterminate',
    preview: <IndeterminateDemo />,
  },
  size: {
    id: 'checkbox.size',
    preview: <SizeDemo />,
  },
  custom: {
    id: 'checkbox.custom',
    preview: <CustomDemo />,
  },
  meta: `import { Checkbox, CheckboxGroup } from '@cerberus/react'`,
}
