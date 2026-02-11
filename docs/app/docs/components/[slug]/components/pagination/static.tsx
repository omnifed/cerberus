import { BasicDemo } from './basic.demo'
import { AttachedDemo } from './attached.demo'

export const DEMOS = {
  basic: {
    id: 'pagination.basic',
    preview: <BasicDemo />,
  },
  attached: {
    id: 'pagination.attached',
    preview: <AttachedDemo />,
  },
  meta: `import { Pagination } from '@cerberus/react'`,
}
