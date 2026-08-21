import { BasicDemo } from './basic.demo'
import { ReadDemo } from './read.demo'
import { StateDemo } from './state.demo'
import { StoreDemo } from './store.demo'
import { UseDemo } from './use.demo'
import { UseStoreDemo } from './useStore.demo'

export const DEMOS = {
  basic: {
    preview: <BasicDemo />,
  },
  store: {
    preview: <StoreDemo />,
  },
  read: {
    preview: <ReadDemo />,
  },
  state: {
    preview: <StateDemo />,
  },
  use: {
    preview: <UseDemo />,
  },
  useStore: {
    preview: <UseStoreDemo />,
  },
  updates: {
    id: 'signal.updates',
  },
  killer: {
    id: 'signal.killer',
    context: 'signals',
  },

  hookMeta: `import { useSignal } from '@cerberus/signals'`,
  storeMeta: `import { useStore } from '@cerberus/signals'`,
  meta: `import { createSignal } from '@cerberus/signals'`,
}
