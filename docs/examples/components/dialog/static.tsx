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
    id: 'dialog.basic',
    preview: <BasicDemo />,
  },
  sizes: {
    id: 'dialog.sizes',
    preview: <SizesDemo />,
  },
  controlled: {
    id: 'dialog.controlled',
    preview: <ControlledDemo />,
  },
  root: {
    id: 'dialog.root',
    preview: <RootProviderDemo />,
  },
  lazy: {
    id: 'dialog.lazy',
    preview: <LazyDemo />,
  },
  inside: {
    id: 'dialog.inside',
    preview: <InsideScrollDemo />,
  },
  outside: {
    id: 'dialog.outside',
    preview: <OutsideScrollDemo />,
  },
  focus: {
    id: 'dialog.focus',
    preview: <InitialFocusDemo />,
  },
  final: {
    id: 'dialog.final',
    preview: <FinalFocusDemo />,
  },
  context: {
    id: 'dialog.context',
    preview: <ContextDemo />,
  },
  menu: {
    id: 'dialog.menu',
    preview: <MenuDemo />,
  },
  nested: {
    id: 'dialog.nested',
    preview: <NestedDialog />,
  },
  confirmation: {
    id: 'dialog.confirmation',
    preview: <ConfirmationDialog />,
  },
  non: {
    id: 'dialog.non',
    preview: <NonModalDemo />,
  },
  behavior: {
    id: 'dialog.behavior',
  },
  dynamic: {
    id: 'dialog.dynamic',
  },
  meta: `import {
  Dialog,
  DialogTrigger,
  DialogHeading,
  DialogDescription,
  DialogCloseTrigger,
  DialogCloseIconTrigger,
} from '@cerberus-design/react'
`,
  nestedCss: `[data-part='content'][data-has-nested] {
  transform: scale(calc(1 - var(--nested-layer-count) * 0.05));
}`,
  zIndexCss: `[data-part='content'] {
  z-index: calc(var(--layer-index));
}`,
}
