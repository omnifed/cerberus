import { BasicDemo } from './basic.demo'
import { ChangeDemo } from './change.demo'
import { CountDemo } from './count.demo'
import { PageDemo } from './page.demo'
import { SizesDemo } from './sizes.demo'

export const DEMOS = {
  basic: {
    preview: <BasicDemo />,
  },
  sizes: {
    preview: <SizesDemo />,
  },
  change: {
    preview: <ChangeDemo />,
  },
  page: {
    preview: <PageDemo />,
  },
  count: {
    preview: <CountDemo />,
  },
  data: {
    preview: null,
  },
}
