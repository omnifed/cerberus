import { BasicDemo } from './basic.demo'
import { CustomDemo } from './custom.demo'

export const DEMOS = {
  basic: {
    id: 'sizing.basic',
    preview: <BasicDemo />,
    context: 'data-grid',
  },
  custom: {
    id: 'sizing.custom',
    preview: <CustomDemo />,
    context: 'data-grid',
  },
}
