import { BasicDemo } from './basic.demo'
import { ReadDemo } from './read.demo'
import { StateDemo } from './state.demo'
import { StoreDemo } from './store.demo'
import { UseDemo } from './use.demo'

export const DEMOS = {
  basic: {
    id: 'signal.basic',
    preview: <BasicDemo />,
    context: 'signals',
  },
  store: {
    id: 'signal.store',
    preview: <StoreDemo />,
    context: 'signals',
  },
  read: {
    id: 'signal.read',
    preview: <ReadDemo />,
    context: 'signals',
  },
  state: {
    id: 'signal.state',
    preview: <StateDemo />,
    context: 'signals',
  },
  use: {
    id: 'signal.use',
    preview: <UseDemo />,
    context: 'signals',
  },
  updates: {
    id: 'signal.updates',
    context: 'signals',
  },
  killer: {
    id: 'signal.killer',
    context: 'signals',
  },
  hookMeta: `import { useSignal } from '@cerberus/signals'`,
  meta: `import { createSignal } from '@cerberus/signals'`,
}
