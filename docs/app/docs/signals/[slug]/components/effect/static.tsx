import { BasicDemo } from './basic.demo'
import { NativeEffectDemo } from './native.demo'

export const DEMOS = {
  basic: {
    id: 'computed.basic',
    preview: <BasicDemo />,
    context: 'signals',
  },
  native: {
    id: 'effect.native',
    preview: <NativeEffectDemo />,
    context: 'signals',
  },
  cleanup: {
    id: 'effect.cleanup',
    context: 'signals',
  },
  cleanupMeta: `import { onCleanup } from '@cerberus/signals'`,
  meta: `import { createEffect } from '@cerberus/signals'`,
}
