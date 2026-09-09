import { BasicDemo } from './basic.demo'
import { ShorthandDemo } from './shorthand.demo'
import { PsuedoDemo } from './pseudo.demo'
import { BorderDemo } from './border.demo'
import { ShadowDemo } from './shadow.demo'

export const DEMOS = {
  basic: {
    id: 'box.basic',
    preview: <BasicDemo />,
  },
  shorthand: {
    id: 'box.shorthand',
    preview: <ShorthandDemo />,
  },
  pseudo: {
    id: 'box.pseudo',
    preview: <PsuedoDemo />,
  },
  border: {
    id: 'box.border',
    preview: <BorderDemo />,
  },
  shadow: {
    id: 'box.shadow',
    preview: <ShadowDemo />,
  },
  meta: `import { Box } from 'styled-system/jsx'`,
}
