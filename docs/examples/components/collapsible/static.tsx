import { BasicDemo } from './basic.demo'
import { OpenDemo } from './open.demo'
import { PartialDemo } from './partial.demo'
import { FadeDemo } from './fade.demo'
import { CustomDemo } from './custom.demo'
import { ControlledDemo } from './controlled.demo'

export const DEMOS = {
  basic: {
    id: 'collapsible.basic',
    preview: <BasicDemo />,
  },
  open: {
    id: 'collapsible.open',
    preview: <OpenDemo />,
  },
  partial: {
    id: 'collapsible.partial',
    preview: <PartialDemo />,
  },
  fade: {
    id: 'collapsible.fade',
    preview: <FadeDemo />,
  },
  custom: {
    id: 'collapsible.custom',
    preview: <CustomDemo />,
  },
  controlled: {
    id: 'collapsible.controlled',
    preview: <ControlledDemo />,
  },
  meta: `import { Collapsible } from '@cerberus/react'`,
}
