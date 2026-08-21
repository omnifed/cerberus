import { BasicDemo } from './basic.demo'
import { CachedDemo } from './cached.demo'
import { CustomDemo } from './custom.demo'
import { SecondaryDemo } from './secondary.demo'
import { VerticalDemo } from './vertical.demo'

export const DEMOS = {
  basic: {
    preview: <BasicDemo />,
  },
  cached: {
    preview: <CachedDemo />,
  },
  custom: {
    preview: <CustomDemo />,
  },
  secondary: {
    preview: <SecondaryDemo />,
  },
  vertical: {
    preview: <VerticalDemo />,
  },
}
