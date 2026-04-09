import { BasicDemo } from './basic.demo'
import { GlobalDemo } from './global.demo'

export const DEMOS = {
  basic: {
    id: 'filtering.basic',
    preview: <BasicDemo />,
    context: 'data-grid',
  },
  global: {
    id: 'filtering.global',
    preview: <GlobalDemo />,
    context: 'data-grid',
  },
  compare: {
    id: 'filtering.compare',
    context: 'data-grid',
  },
  operators: {
    id: 'filtering.operators',
    context: 'data-grid',
  },
}
