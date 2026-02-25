import { BasicDemo } from './basic.demo'
import { DefaultPinnedDemo } from './pinned.demo'

export const DEMOS = {
  basic: {
    id: 'pinning.basic',
    preview: <BasicDemo />,
    context: 'data-grid',
  },
  data: {
    id: 'pinning.data',
    context: 'data-grid',
  },
  pinned: {
    id: 'pinning.pinned',
    preview: <DefaultPinnedDemo />,
    context: 'data-grid',
  },
}
