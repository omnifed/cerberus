import { BasicDemo } from './basic.demo'
import { ShorthandDemo } from './shorthand.demo'
import { PsuedoDemo } from './pseudo.demo'
import { BorderDemo } from './border.demo'
import { ShadowDemo } from './shadow.demo'

export const DEMOS = {
  basic: {
    preview: <BasicDemo />,
  },
  shorthand: {
    preview: <ShorthandDemo />,
  },
  pseudo: {
    preview: <PsuedoDemo />,
  },
  border: {
    preview: <BorderDemo />,
  },
  shadow: {
    preview: <ShadowDemo />,
  },
}
