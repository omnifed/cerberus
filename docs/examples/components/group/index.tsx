import { BasicDemo } from './basic.demo'
import { AttachedDemo } from './attached.demo'
import { GrowDemo } from './grow.demo'
import { OrientationDemo } from './orientation.demo'
import { StackDemo } from './stack.demo'

export const DEMOS = {
  basic: {
    preview: <BasicDemo />,
  },
  attached: {
    preview: <AttachedDemo />,
  },
  grow: {
    preview: <GrowDemo />,
  },
  orientation: {
    preview: <OrientationDemo />,
  },
  stack: {
    preview: <StackDemo />,
  },
}
