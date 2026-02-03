import { BasicDemo } from './basic.demo'
import { SizesDemo } from './sizes.demo'

export const DEMOS = {
  basic: {
    id: 'container.basic',
    preview: <BasicDemo />,
  },
  sizes: {
    id: 'container.sizes',
    preview: <SizesDemo />,
  },
  meta: `import { Container } from "styled-system/jsx";`,
}
