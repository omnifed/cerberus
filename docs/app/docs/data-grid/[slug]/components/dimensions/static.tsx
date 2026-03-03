import { BasicDemo } from './basic.demo'
import { MaxDemo } from './max.demo'
import { StaticDemo } from './static.demo'

export const DEMOS = {
  flex: {
    id: 'dimensions.basic',
    preview: <BasicDemo />,
    context: 'data-grid',
  },
  max: {
    id: 'dimensions.max',
    preview: <MaxDemo />,
    context: 'data-grid',
  },
  static: {
    id: 'dimensions.static',
    preview: <StaticDemo />,
    context: 'data-grid',
  },
}
