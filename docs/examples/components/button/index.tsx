import { BasicDemo } from './basic.demo'
import { IconDemo } from './icon.demo'
import { PendingDemo } from './pending.demo'
import { ShapesDemo } from './shapes.demo'
import { UsageDemo } from './usage.demo'
import { SizeDemo } from './size.demo'
import { GroupDemo } from './group.demo'
import { AttachedDemo } from './attached.demo'
import { CustomDemo } from './custom.demo'

export const DEMOS = {
  basic: {
    preview: <BasicDemo />,
  },
  icon: {
    preview: <IconDemo />,
  },
  pending: {
    preview: <PendingDemo />,
  },
  shapes: {
    preview: <ShapesDemo />,
  },
  usage: {
    preview: <UsageDemo />,
  },
  size: {
    preview: <SizeDemo />,
  },
  group: {
    preview: <GroupDemo />,
  },
  attached: {
    preview: <AttachedDemo />,
  },
  custom: {
    preview: <CustomDemo />,
  },
  global: {
    preview: null,
  },
}
