import { BasicDemo } from './basic.demo'
import { NativeEffectDemo } from './native.demo'

export const DEMOS = {
  basic: {
    preview: <BasicDemo />,
  },
  native: {
    preview: <NativeEffectDemo />,
  },
  cleanup: {
    preview: null,
  },
}
