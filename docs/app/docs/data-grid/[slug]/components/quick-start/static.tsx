import { BasicDemo } from './basic.demo'

export const DEMOS = {
  basic: {
    id: 'quick-start.basic',
    preview: <BasicDemo />,
    context: 'data-grid',
  },
  data: {
    id: 'quick-start.data',
    context: 'data-grid',
  },
  helper: {
    id: 'quick-start.helper',
    context: 'data-grid',
  },
  columns: {
    id: 'quick-start.columns',
    context: 'data-grid',
  },
  meta: `import { DataGrid } from '@cerberus/data-grid';`,
}
