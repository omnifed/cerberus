import { AutocompleteDemo } from './autocomplete.demo'
import { BasicDemo } from './basic.demo'
import { CustomDemo } from './custom.demo'
import { HiddenLabelDemo } from './hiddenLabel.demo'
import { SearchDemo } from './search.demo'

export const DEMOS = {
  basic: { preview: <BasicDemo /> },
  hiddenLabel: { preview: <HiddenLabelDemo /> },
  custom: { preview: <CustomDemo /> },
  search: { preview: <SearchDemo /> },
  autocomplete: { preview: <AutocompleteDemo /> },
}
