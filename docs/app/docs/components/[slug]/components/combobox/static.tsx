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
  highlight: {
    id: 'combobox.highlight',
    preview: <HighlightDemo />,
  },
  context: {
    id: 'combobox.context',
    preview: <ContextDemo />,
  },
  creatable: {
    id: 'combobox.creatable',
    preview: <CreatableDemo />,
  },

  meta: `import {
  Combobox,
  ComboItemWithIndicator,
  ComboItemText,
} from '@cerberus/react'`,

  linksMeta: `import { Combobox } from '@cerberus/react'
import { useNavigate } from '@tanstack/react-router'

function Demo() {
  const navigate = useNavigate()
  return (
    <Combobox
      navigate={(e) => {
        navigate({ to: e.node.href })
      }}
    >
      {/* ... */}
    </Combobox>
  )
}`,

  objectsMeta: `const items = [
  { country: 'United States', code: 'US', flag: '🇺🇸' },
  { country: 'Canada', code: 'CA', flag: '🇨🇦' },
  { country: 'Australia', code: 'AU', flag: '🇦🇺' },
  // ...
]

const { collection } = useListCollection({
  initialItems: items,
  itemToString: (item) => item.country,
  itemToValue: (item) => item.code,
})`,

  typeMeta: `const Combobox = (props: ComboboxRootProps) => {
  return <CerbyCombobox {...props}>{/* ... */}</CerbyCombobox>
}`,

  largeMeta: `const { collection } = useListCollection({
  initialItems: items,
  limit: 10,
})`,

  varsMeta: `/* width of the combobox control */
--reference-width: <pixel-value>;
/* width of the available viewport */
--available-width: <pixel-value>;
/* height of the available viewport */
--available-height: <pixel-value>;`,

  styleMeta: `[data-scope='combobox'][data-part='content'] {
  max-height: calc(var(--available-height) - 100px);
}`,
}
