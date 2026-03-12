import { BasicDemo } from './basic.demo'
import { MultiDemo } from './multi.demo'
import { ComparatorDemo } from './comparator.demo'

export const DEMOS = {
  basic: {
    id: 'sorting.basic',
    preview: <BasicDemo />,
    context: 'data-grid',
  },
  multi: {
    id: 'sorting.multi',
    preview: <MultiDemo />,
    context: 'data-grid',
  },
  comparator: {
    id: 'sorting.comparator',
    preview: <ComparatorDemo />,
    context: 'data-grid',
  },
  data: {
    id: 'sorting.data',
    context: 'data-grid',
  },
}
