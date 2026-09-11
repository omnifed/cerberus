import { BasicDemo } from './basic.demo'
import { GroupedDemo } from './grouped.demo'
import { NavDemo } from './nav.demo'
import { PositioningMenu } from './positioning.demo'
import { CustomDemo } from './custom.demo'

export const DEMOS = {
  basic: { preview: <BasicDemo /> },
  grouped: { preview: <GroupedDemo /> },
  nav: { preview: <NavDemo /> },
  positioning: { preview: <PositioningMenu /> },
  custom: { preview: <CustomDemo /> },
}
