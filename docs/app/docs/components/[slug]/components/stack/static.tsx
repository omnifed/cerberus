import { BasicDemo } from './basic.demo'
import { HorizontalDemo } from './horizontal.demo'
import { HStackDemo } from './hstack.demo'
import { VStackDemo } from './vstack.demo'
import { ResponsiveStackDemo } from './responsive.demo'

export const DEMOS = {
  basic: {
    id: 'stack.basic',
    preview: <BasicDemo />,
  },
  horizontal: {
    id: 'stack.horizontal',
    preview: <HorizontalDemo />,
  },
  hstack: {
    id: 'stack.hstack',
    preview: <HStackDemo />,
  },
  vstack: {
    id: 'stack.vstack',
    preview: <VStackDemo />,
  },
  responsive: {
    id: 'stack.responsive',
    preview: <ResponsiveStackDemo />,
  },
  meta: `import { Stack, HStack, VStack } from "styled-system/jsx";`,
}
