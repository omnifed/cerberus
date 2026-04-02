import { DefaultNoContentDemo } from './default-none.demo'
import { NoContentDemo } from './none.demo'
import { SkeletonDemo } from './skeleton.demo'

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
  skeleton: {
    id: 'overlays.skeleton',
    preview: <SkeletonDemo />,
    context: 'data-grid',
  },
}
