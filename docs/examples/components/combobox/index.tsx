import { BasicDemo } from './basic.demo'
import { CustomDemo } from './custom.demo'
import { FieldDemo } from './field.demo'
import { GroupedItemsDemo } from './group.demo'
import { LoadingDemo } from './loading.demo'
import { StartIconDemo } from './start.demo'
import { SizeDemo } from './size.demo'
import { HighlightDemo } from './highlight.demo'
import { ContextDemo } from './context.demo'
import { CreatableDemo } from './creatable.demo'

export const DEMOS = {
  basic: {
    preview: <BasicDemo />,
  },
  start: {
    preview: <StartIconDemo />,
  },
  group: {
    preview: <GroupedItemsDemo />,
  },
  field: {
    preview: <FieldDemo />,
  },
  custom: {
    preview: <CustomDemo />,
  },
  size: {
    preview: <SizeDemo />,
  },
  loading: {
    preview: <LoadingDemo />,
  },
  highlight: {
    preview: <HighlightDemo />,
  },
  context: {
    preview: <ContextDemo />,
  },
  creatable: {
    preview: <CreatableDemo />,
  },
}
