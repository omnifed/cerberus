import { BasicDemo } from './basic.demo'
import { IndicatorDemo } from './indicator.demo'
import { SizeDemo } from './size.demo'
import { CustomDemo } from './custom.demo'

export const DEMOS = {
  basic: {
    id: 'accordion.basic',
    preview: <BasicDemo />,
  },
  indicator: {
    id: 'accordion.indicator',
    preview: <IndicatorDemo />,
  },
  size: {
    id: 'accordion.size',
    preview: <SizeDemo />,
  },
  custom: {
    id: 'accordion.custom',
    preview: <CustomDemo />,
  },
  meta: `import { Accordion, AccordionItemGroup } from '@cerberus/react'`,
}
