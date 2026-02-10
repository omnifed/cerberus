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
    id: 'button.basic',
    preview: <BasicDemo />,
  },
  icon: {
    id: 'button.icon',
    preview: <IconDemo />,
  },
  pending: {
    id: 'button.pending',
    preview: <PendingDemo />,
  },
  shapes: {
    id: 'button.shapes',
    preview: <ShapesDemo />,
  },
  usage: {
    id: 'button.usage',
    preview: <UsageDemo />,
  },
  size: {
    id: 'button.size',
    preview: <SizeDemo />,
  },
  group: {
    id: 'button.group',
    preview: <GroupDemo />,
  },
  attached: {
    id: 'button.attached',
    preview: <AttachedDemo />,
  },
  custom: {
    id: 'button.custom',
    preview: <CustomDemo />,
  },
  meta: `import { Button } from '@cerberus/react';`,
}
