import { BasicDemo } from './basic.demo'
import { NestingDemo } from './nesting.demo'

export const DEMOS = {
  basic: {
    id: 'reactivity.basic',
    preview: <BasicDemo />,
    context: 'signals',
  },
  start: {
    id: 'reactivity.start',
    context: 'signals',
  },
  sync: {
    id: 'reactivity.sync',
    context: 'signals',
  },
  nesting: {
    id: 'reactivity.nesting',
    preview: <NestingDemo />,
    context: 'signals',
  },
}
