import { BasicDemo } from './basic.demo'
import { ClickableDemo } from './clickable.demo'
import { CustomDemo } from './custom.demo'
import { DecorationDemo } from './decoration.demo'
import { SizeDemo } from './size.demo'
import { StickyDemo } from './sticky.demo'

export const DEMOS = {
  basic: { preview: <BasicDemo /> },
  size: { preview: <SizeDemo /> },
  decoration: { preview: <DecorationDemo /> },
  sticky: { preview: <StickyDemo /> },
  clickable: { preview: <ClickableDemo /> },
  custom: { preview: <CustomDemo /> },
}
