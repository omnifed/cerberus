import { BasicDemo } from './basic.demo'
import { AttachedDemo } from './attached.demo'
import { GrowDemo } from './grow.demo'

export const DEMOS = {
  basic: {
    id: 'group.basic',
    preview: <BasicDemo />,
  },
  attached: {
    id: 'group.attached',
    preview: <AttachedDemo />,
  },
  grow: {
    id: 'group.grow',
    preview: <GrowDemo />,
  },
  meta: `import { Group } from '@cerberus/react'`,
}
