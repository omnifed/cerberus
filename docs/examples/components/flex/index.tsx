import { BasicDemo } from './basic.demo'
import { DirectionDemo } from './direction.demo'
import { AlignDemo } from './align.demo'
import { JustifyDemo } from './justify.demo'
import { OrderDemo } from './order.demo'
import { MarginDemo } from './margin.demo'
import { WrapDemo } from './wrap.demo'

export const DEMOS = {
  basic: {
    preview: <BasicDemo />,
  },
  direction: {
    preview: <DirectionDemo />,
  },
  align: {
    preview: <AlignDemo />,
  },
  justify: {
    preview: <JustifyDemo />,
  },
  order: {
    preview: <OrderDemo />,
  },
  margin: {
    preview: <MarginDemo />,
  },
  wrap: {
    preview: <WrapDemo />,
  },
}
