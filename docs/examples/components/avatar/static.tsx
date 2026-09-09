import { BasicDemo } from './basic.demo'
import { SizesDemo } from './sizes.demo'
import { GradientDemo } from './gradient.demo'
import { GroupDemo } from './group.demo'
import { FloatDemo } from './float.demo'
import { NextDemo } from './next.demo'
import { CustomAvatar } from './custom.demo'

export const DEMOS = {
  basic: {
    id: 'avatar.basic',
    preview: <BasicDemo />,
  },
  sizes: {
    id: 'avatar.sizes',
    preview: <SizesDemo />,
  },
  gradient: {
    id: 'avatar.gradient',
    preview: <GradientDemo />,
  },
  group: {
    id: 'avatar.group',
    preview: <GroupDemo />,
  },
  float: {
    id: 'avatar.float',
    preview: <FloatDemo />,
  },
  next: {
    id: 'avatar.next',
    preview: <NextDemo />,
  },
  custom: {
    id: 'avatar.custom',
    preview: <CustomAvatar />,
  },
  meta: `import { Avatar } from '@cerberus/react'`,
}
