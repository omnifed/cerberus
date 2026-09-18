import { BasicDemo } from './basic.demo'
import { HorizontalDemo } from './horizontal.demo'
import { HStackDemo } from './hstack.demo'
import { VStackDemo } from './vstack.demo'
import { ResponsiveStackDemo } from './responsive.demo'

export const DEMOS = {
  basic: {
    preview: <BasicDemo />,
  },
  horizontal: {
    preview: <HorizontalDemo />,
  },
  hstack: {
    preview: <HStackDemo />,
  },
  vstack: {
    preview: <VStackDemo />,
  },
  responsive: {
    preview: <ResponsiveStackDemo />,
  },
}
