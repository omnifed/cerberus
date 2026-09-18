import { BasicDemo } from './basic.demo'
import { CustomDemo } from './custom.demo'
import { GroupedDemo } from './grouped.demo'
import { SizeDemo } from './size.demo'
import { WithDialogDemo } from './withDialog.demo'

export const DEMOS = {
  basic: { preview: <BasicDemo /> },
  grouped: { preview: <GroupedDemo /> },
  size: { preview: <SizeDemo /> },
  withDialog: { preview: <WithDialogDemo /> },
  custom: { preview: <CustomDemo /> },
}
