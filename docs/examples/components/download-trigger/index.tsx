import { BasicDemo } from './basic.demo'
import { PromiseDemo } from './promise.demo'
import { SvgDemo } from './svg.demo'

export const DEMOS = {
  basic: { preview: <BasicDemo /> },
  svg: { preview: <SvgDemo /> },
  promise: { preview: <PromiseDemo /> },
}
