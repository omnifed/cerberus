import { BasicDemo } from './basic.demo'
import { VerticalDemo } from './vertical.demo'
import { DirectionDemo } from './direction.demo'

export const DEMOS = {
  basic: {
    id: 'bleed.basic',
    preview: <BasicDemo />,
  },
  vertical: {
    id: 'bleed.vertical',
    preview: <VerticalDemo />,
  },
  direction: {
    id: 'bleed.direction',
    preview: <DirectionDemo />,
  },
  meta: `import { Bleed } from 'styled-system/jsx'`,
}
