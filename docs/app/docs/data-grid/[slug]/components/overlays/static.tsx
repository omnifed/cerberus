import { DefaultNoContentDemo } from './default-none.demo'
import { NoContentDemo } from './none.demo'
import { SkeletonDemo } from './skeleton.demo'
import { LinearDemo } from './linear.demo'
import { CircularDemo } from './circular.demo'
import { ColumnDemo } from './column.demo'

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
  linear: {
    id: 'overlays.linear',
    preview: <LinearDemo />,
    context: 'data-grid',
  },
  circular: {
    id: 'overlays.circular',
    preview: <CircularDemo />,
    context: 'data-grid',
  },
  column: {
    id: 'overlays.column',
    preview: <ColumnDemo />,
    context: 'data-grid',
  },
}
