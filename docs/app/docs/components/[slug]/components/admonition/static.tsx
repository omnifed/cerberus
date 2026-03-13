import { BasicDemo } from './basic.demo'
import { PaletteDemo } from './palette.demo'
import { UsageDemo } from './usage.demo'
import { CustomDemo } from './custom.demo'

export const DEMOS = {
  basic: {
    id: 'admonition.basic',
    preview: <BasicDemo />,
  },
  palette: {
    id: 'admonition.palette',
    preview: <PaletteDemo />,
  },
  usage: {
    id: 'admonition.usage',
    preview: <UsageDemo />,
  },
  custom: {
    id: 'admonition.custom',
    preview: <CustomDemo />,
  },
  meta: `import { Admonition } from '@cerberus/react'`,
}
