import { BasicDemo } from './basic.demo'
import { MaxDemo } from './max.demo'
import { StaticDemo } from './static.demo'

export const DEMOS = {
  basic: {
    preview: <BasicDemo />,
  },
  max: {
    preview: <MaxDemo />,
  },
  static: {
    preview: <StaticDemo />,
  },
}
