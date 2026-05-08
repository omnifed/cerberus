import { BasicDemo } from './basic.demo'
import { CustomDemo } from './custom.demo'
import { FieldDemo } from './field.demo'
import { GroupedItemsDemo } from './group.demo'
import { LoadingDemo } from './loading.demo'
import { StartIconDemo } from './start.demo'
import { SizeDemo } from './size.demo'

export const DEMOS = {
  basic: {
    id: 'combobox.basic',
    preview: <BasicDemo />,
  },
  start: {
    id: 'combobox.start',
    preview: <StartIconDemo />,
  },
  group: {
    id: 'combobox.group',
    preview: <GroupedItemsDemo />,
  },
  field: {
    id: 'combobox.field',
    preview: <FieldDemo />,
  },
  custom: {
    id: 'combobox.custom',
    preview: <CustomDemo />,
  },
  size: {
    id: 'combobox.size',
    preview: <SizeDemo />,
  },
  loading: {
    id: 'combobox.loading',
    preview: <LoadingDemo />,
  },
  meta: `import {
  Combobox,
  ComboItemWithIndicator,
  ComboItemText,
} from '@cerberus/react'`,
}
