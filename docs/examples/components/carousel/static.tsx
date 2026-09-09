import { BasicDemo } from './basic.demo'
import { IndicatorDemo } from './indicator.demo'

export const DEMOS = {
  basic: {
    id: 'carousel.basic',
    preview: <BasicDemo />,
  },
  indicator: {
    id: 'carousel.indicator',
    preview: <IndicatorDemo />,
  },
  meta: `import { Carousel } from '@cerberus/react'`,
}
