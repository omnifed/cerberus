import { BasicDemo } from './basic.demo'
import { DirectionDemo } from './direction.demo'
import { AlignDemo } from './align.demo'
import { JustifyDemo } from './justify.demo'
import { OrderDemo } from './order.demo'
import { MarginDemo } from './margin.demo'
import { WrapDemo } from './wrap.demo'

export const DEMOS = {
  basic: {
    id: 'flex.basic',
    preview: <BasicDemo />,
  },
  direction: {
    id: 'flex.direction',
    preview: <DirectionDemo />,
  },
  align: {
    id: 'flex.align',
    preview: <AlignDemo />,
  },
  justify: {
    id: 'flex.justify',
    preview: <JustifyDemo />,
  },
  order: {
    id: 'flex.order',
    preview: <OrderDemo />,
  },
  margin: {
    id: 'flex.margin',
    preview: <MarginDemo />,
  },
  wrap: {
    id: 'flex.wrap',
    preview: <WrapDemo />,
  },
  meta: `import { Flex } from "styled-system/jsx";`,
}
