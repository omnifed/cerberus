import { BasicDemo } from './basic.demo'
import { IconDemo } from './icon.demo'
import { InlineDemo } from './inline.demo'
import { SquareDemo } from './square.demo'
import { CircleDemo } from './circle.demo'

export const DEMOS = {
  basic: {
    id: 'center.basic',
    preview: <BasicDemo />,
  },
  icon: {
    id: 'center.icon',
    preview: <IconDemo />,
  },
  inline: {
    id: 'center.inline',
    preview: <InlineDemo />,
  },
  square: {
    id: 'center.square',
    preview: <SquareDemo />,
  },
  circle: {
    id: 'center.circle',
    preview: <CircleDemo />,
  },
  meta: `import { Center } from 'styled-system/jsx';`,
}
