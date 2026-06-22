import { BasicDemo } from './basic.demo'
import { HiddenDemo } from './hidden.demo'

export const DEMOS = {
  basic: {
    id: 'visibility.basic',
    preview: <BasicDemo />,
    context: 'data-grid',
  },
  hidden: {
    id: 'visibility.hidden',
    preview: <HiddenDemo />,
    context: 'data-grid',
  },
  def: {
    id: 'visibility.def',
    context: 'data-grid',
  },
}
