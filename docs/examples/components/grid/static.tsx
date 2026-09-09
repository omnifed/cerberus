import { BasicDemo } from './basic.demo'
import { ColSpanDemo } from './colspan.demo'
import { SpanningDemo } from './spanning.demo'

export const DEMOS = {
  basic: {
    id: 'grid.basic',
    preview: <BasicDemo />,
  },
  colspan: {
    id: 'grid.colspan',
    preview: <ColSpanDemo />,
  },
  spanning: {
    id: 'grid.spanning',
    preview: <SpanningDemo />,
  },
  meta: `import { Grid } from "styled-system/jsx"`,
}
