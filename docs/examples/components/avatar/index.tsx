import { BasicDemo } from './basic.demo'
import { SizesDemo } from './sizes.demo'
import { GradientDemo } from './gradient.demo'
import { GroupDemo } from './group.demo'
import { FloatDemo } from './float.demo'
import { NextDemo } from './next.demo'
import { CustomAvatar } from './custom.demo'

export const DEMOS = {
  basic: {
    preview: <BasicDemo />,
  },
  sizes: {
    preview: <SizesDemo />,
  },
  gradient: {
    preview: <GradientDemo />,
  },
  group: {
    preview: <GroupDemo />,
  },
  float: {
    preview: <FloatDemo />,
  },
  next: {
    preview: <NextDemo />,
  },
  custom: {
    preview: <CustomAvatar />,
  },
}
