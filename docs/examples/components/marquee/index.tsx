import { BasicDemo } from './basic.demo'
import { SpacingDemo } from './spacing.demo'
import { ReverseDemo } from './reverse.demo'
import { SideDemo } from './side.demo'
import { SpeedDemo } from './speed.demo'
import { EdgesDemo } from './edges.demo'
import { PauseDemo } from './pause.demo'
import { StoreDemo } from './store.demo'
import { FiniteDemo } from './finite.demo'
import { VarsDemo } from './vars.demo'

export const DEMOS = {
  basic: {
    preview: <BasicDemo />,
  },
  spacing: {
    preview: <SpacingDemo />,
  },
  reverse: {
    preview: <ReverseDemo />,
  },
  side: {
    preview: <SideDemo />,
  },
  speed: {
    preview: <SpeedDemo />,
  },
  edges: {
    preview: <EdgesDemo />,
  },
  pause: {
    preview: <PauseDemo />,
  },
  store: {
    preview: <StoreDemo />,
  },
  finite: {
    preview: <FiniteDemo />,
  },
  vars: {
    preview: null,
  },
}
