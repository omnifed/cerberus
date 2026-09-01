import { BasicDemo } from './basic.demo'
import { GlobalDemo } from './global.demo'
import { PureDemo } from './pure.demo'
import { LocalDemo } from './local.demo'

export const DEMOS = {
  basic: {
    preview: <BasicDemo />,
  },
  global: {
    preview: <GlobalDemo />,
  },
  pure: {
    preview: <PureDemo />,
  },
  local: {
    preview: <LocalDemo />,
  },
}
