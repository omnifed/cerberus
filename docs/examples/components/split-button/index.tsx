import { BasicDemo } from './basic.demo'
import { PendingDemo } from './pending.demo'
import { ShapeDemo } from './shape.demo'
import { SizeDemo } from './size.demo'
import { UsageDemo } from './usage.demo'

export const DEMOS = {
  basic: { preview: <BasicDemo /> },
  pending: { preview: <PendingDemo /> },
  size: { preview: <SizeDemo /> },
  shape: { preview: <ShapeDemo /> },
  usage: { preview: <UsageDemo /> },
}
