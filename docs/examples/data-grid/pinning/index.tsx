import { BasicDemo } from './basic.demo'
import { DefaultPinnedDemo } from './pinned.demo'

export const DEMOS = {
  basic: {
    preview: <BasicDemo />,
  },
  data: {
    preview: null,
  },
  pinned: {
    preview: <DefaultPinnedDemo />,
  },
}
