import { BasicDemo } from './basic.demo'
import { DirectionDemo } from './direction.demo'
import { VisibiltyDemo } from './visibility.demo'

export const DEMOS = {
  basic: {
    id: 'scrollable.basic',
    preview: <BasicDemo />,
  },
  direction: {
    id: 'scrollable.direction',
    preview: <DirectionDemo />,
  },
  visibility: {
    id: 'scrollable.visibility',
    preview: <VisibiltyDemo />,
  },
  meta: `import { Scrollable } from "styled-system/jsx";`,
}
