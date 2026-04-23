import { BasicDemo } from './basic.demo'

export const DEMOS = {
  basic: {
    id: 'untrack.basic',
    preview: <BasicDemo />,
    context: 'signals',
  },
  meta: `import { untrack } from '@cerberus/signals'`,
}
