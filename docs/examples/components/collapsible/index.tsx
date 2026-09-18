import { BasicDemo } from './basic.demo'
import { OpenDemo } from './open.demo'
import { PartialDemo } from './partial.demo'
import { FadeDemo } from './fade.demo'
import { CustomDemo } from './custom.demo'
import { ControlledDemo } from './controlled.demo'

export const DEMOS = {
  basic: {
    preview: <BasicDemo />,
  },
  open: {
    preview: <OpenDemo />,
  },
  partial: {
    preview: <PartialDemo />,
  },
  fade: {
    preview: <FadeDemo />,
  },
  custom: {
    preview: <CustomDemo />,
  },
  controlled: {
    preview: <ControlledDemo />,
  },
}
