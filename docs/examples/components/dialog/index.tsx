import { BasicDemo } from './basic.demo'
import { SizesDemo } from './sizes.demo'
import { ControlledDemo } from './controlled.demo'
import { RootProviderDemo } from './root.demo'
import { LazyDemo } from './lazy.demo'
import { InsideScrollDemo } from './inside.demo'
import { OutsideScrollDemo } from './outside.demo'
import { InitialFocusDemo } from './focus.demo'
import { FinalFocusDemo } from './final.demo'
import { ContextDemo } from './context.demo'
import { MenuDemo } from './menu.demo'
import { NestedDialog } from './nested.demo'
import { ConfirmationDialog } from './confirmation.demo'
import { NonModalDemo } from './non.demo'

export const DEMOS = {
  basic: {
    preview: <BasicDemo />,
  },
  sizes: {
    preview: <SizesDemo />,
  },
  controlled: {
    preview: <ControlledDemo />,
  },
  root: {
    preview: <RootProviderDemo />,
  },
  lazy: {
    preview: <LazyDemo />,
  },
  inside: {
    preview: <InsideScrollDemo />,
  },
  outside: {
    preview: <OutsideScrollDemo />,
  },
  focus: {
    preview: <InitialFocusDemo />,
  },
  final: {
    preview: <FinalFocusDemo />,
  },
  context: {
    preview: <ContextDemo />,
  },
  menu: {
    preview: <MenuDemo />,
  },
  nested: {
    preview: <NestedDialog />,
  },
  confirmation: {
    preview: <ConfirmationDialog />,
  },
  non: {
    preview: <NonModalDemo />,
  },
  behavior: {
    preview: null,
  },
  dynamic: {
    preview: null,
  },
}
