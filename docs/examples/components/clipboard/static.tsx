import { BasicDemo } from './basic.demo'
import { ButtonDemo } from './button.demo'
import { InputDemo } from './input.demo'
import { StoreDemo } from './store.demo'

export const DEMOS = {
  basic: {
    id: 'clipboard.basic',
    preview: <BasicDemo />,
  },
  button: {
    id: 'clipboard.button',
    preview: <ButtonDemo />,
  },
  input: {
    id: 'clipboard.input',
    preview: <InputDemo />,
  },
  store: {
    id: 'clipboard.store',
    preview: <StoreDemo />,
  },
  meta: `import { Clipboard } from '@cerberus/react'`,
}
