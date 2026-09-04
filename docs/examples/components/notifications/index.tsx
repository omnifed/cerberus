import { BasicDemo } from './basic.demo'
import { CustomConfigDemo } from './custom.demo'
import { NotifyBadgeDemo } from './notify-badge.demo'
import { SubtleDemo } from './subtle.demo'

export const DEMOS = {
  basic: {
    preview: <BasicDemo />,
  },
  custom: {
    preview: <CustomConfigDemo />,
  },
  subtle: {
    preview: <SubtleDemo />,
  },
  'notify-badge': {
    preview: <NotifyBadgeDemo />,
  },
}
