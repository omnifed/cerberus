import { BasicDemo } from './basic.demo'
import { NestingDemo } from './nesting.demo'

export const DEMOS = {
  basic: {
    preview: <BasicDemo />,
  },
  start: {
    preview: null,
  },
  sync: {
    preview: null,
  },
  nesting: {
    preview: <NestingDemo />,
  },
}
