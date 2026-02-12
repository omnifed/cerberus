import { BasicDemo } from './basic.demo'
import { AttachedDemo } from './attached.demo'
import { CompactDemo } from './compact.demo'
import { SliceDemo } from './slice.demo'
import { AlignmentDemo } from './alignment.demo'
import { ControlledDemo } from './controlled.demo'
import { CustomDemo } from './custom.demo'

export const DEMOS = {
  basic: {
    id: 'pagination.basic',
    preview: <BasicDemo />,
  },
  attached: {
    id: 'pagination.attached',
    preview: <AttachedDemo />,
  },
  compact: {
    id: 'pagination.compact',
    preview: <CompactDemo />,
  },
  slice: {
    id: 'pagination.slice',
    preview: <SliceDemo />,
  },
  alignment: {
    id: 'pagination.alignment',
    preview: <AlignmentDemo />,
  },
  controlled: {
    id: 'pagination.controlled',
    preview: <ControlledDemo />,
  },
  custom: {
    id: 'pagination.custom',
    preview: <CustomDemo />,
  },
  meta: `import { Pagination } from '@cerberus/react'`,
}
