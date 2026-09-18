import { BasicDemo } from './basic.demo'
import { GapDemo } from './gap.demo'
import { AlignDemo } from './align.demo'
import { JustifyDemo } from './justify.demo'
import { RowColDemo } from './row-col.demo'

export const DEMOS = {
  basic: {
    preview: <BasicDemo />,
  },
  gap: {
    preview: <GapDemo />,
  },
  align: {
    preview: <AlignDemo />,
  },
  justify: {
    preview: <JustifyDemo />,
  },
  'row-col': {
    preview: <RowColDemo />,
  },
}
