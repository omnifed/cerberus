import { BasicDemo } from './basic.demo'
import { ComparatorDemo } from './comparator.demo'
import { MultiDemo } from './multi.demo'

export const DEMOS = {
  basic: {
    preview: <BasicDemo />,
  },
  multi: {
    preview: <MultiDemo />,
  },
  comparator: {
    preview: <ComparatorDemo />,
  },
  data: {
    preview: null,
  },
}
