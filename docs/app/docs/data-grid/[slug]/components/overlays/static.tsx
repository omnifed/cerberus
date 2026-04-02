import { DefaultNoContentDemo } from './default-none.demo'
import { NoContentDemo } from './none.demo'

export const DEMOS = {
  defaultNone: {
    id: 'overlays.default-none',
    preview: <DefaultNoContentDemo />,
    context: 'data-grid',
  },
  none: {
    id: 'overlays.none',
    preview: <NoContentDemo />,
    context: 'data-grid',
  },
}
