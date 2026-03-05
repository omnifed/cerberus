import { BasicDemo } from './basic.demo'
import { SizesDemo } from './sizes.demo'
import { ChangeDemo } from './change.demo'

export const DEMOS = {
  basic: {
    id: 'pagination.basic',
    preview: <BasicDemo />,
    context: 'data-grid',
  },
  sizes: {
    id: 'pagination.sizes',
    preview: <SizesDemo />,
    context: 'data-grid',
  },
  change: {
    id: 'pagination.change',
    preview: <ChangeDemo />,
    context: 'data-grid',
  },
  data: {
    id: 'pagination.data',
    context: 'data-grid',
  },
}
