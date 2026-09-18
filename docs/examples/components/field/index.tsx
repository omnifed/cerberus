import { BasicDemo } from './basic.demo'
import { HiddenLabelDemo } from './hiddenLabel.demo'
import { CustomDemo } from './custom.demo'
import { SearchDemo } from './search.demo'

export const DEMOS = {
  basic: { preview: <BasicDemo /> },
  hiddenLabel: { preview: <HiddenLabelDemo /> },
  custom: { preview: <CustomDemo /> },
  search: { preview: <SearchDemo /> },
}
