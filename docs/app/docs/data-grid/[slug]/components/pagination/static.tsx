import { BasicDemo } from './basic.demo'
import { SizesDemo } from './sizes.demo'
import { PageDemo } from './page.demo'
import { ChangeDemo } from './change.demo'
import { CountDemo } from './count.demo'

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
  page: {
    id: 'pagination.page',
    preview: <PageDemo />,
    context: 'data-grid',
  },
  count: {
    id: 'pagination.count',
    preview: <CountDemo />,
    context: 'data-grid',
  },
  data: {
    id: 'pagination.data',
    context: 'data-grid',
  },
}
