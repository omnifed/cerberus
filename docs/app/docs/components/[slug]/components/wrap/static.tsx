import { BasicDemo } from './basic.demo'
import { GapDemo } from './gap.demo'
import { AlignDemo } from './align.demo'
import { JustifyDemo } from './justify.demo'
import { RowColDemo } from './row-col.demo'

export const DEMOS = {
  basic: {
    id: 'wrap.basic',
    preview: <BasicDemo />,
  },
  gap: {
    id: 'wrap.gap',
    preview: <GapDemo />,
  },
  align: {
    id: 'wrap.align',
    preview: <AlignDemo />,
  },
  justify: {
    id: 'wrap.justify',
    preview: <JustifyDemo />,
  },
  rowCol: {
    id: 'wrap.row-col',
    preview: <RowColDemo />,
  },
  meta: `import { Wrap, WrapItem } from "styled-system/jsx"`,
}
