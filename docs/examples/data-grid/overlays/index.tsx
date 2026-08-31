import { DefaultNoContentDemo } from './default-none.demo'
import { NoContentDemo } from './none.demo'
import { SkeletonDemo } from './skeleton.demo'
import { LinearDemo } from './linear.demo'
import { CircularDemo } from './circular.demo'
import { ColumnDemo } from './column.demo'
import { CustomDemo } from './custom.demo'
import { InitialDemo } from './initial.demo'

export const DEMOS = {
  'default-none': {
    preview: <DefaultNoContentDemo />,
  },
  none: {
    preview: <NoContentDemo />,
  },
  skeleton: {
    preview: <SkeletonDemo />,
  },
  linear: {
    preview: <LinearDemo />,
  },
  circular: {
    preview: <CircularDemo />,
  },
  column: {
    preview: <ColumnDemo />,
  },
  custom: {
    preview: <CustomDemo />,
  },
  initial: {
    preview: <InitialDemo />,
  },
}
