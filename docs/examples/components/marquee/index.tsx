import { BasicDemo } from './basic.demo'
import { EdgesDemo } from './edges.demo'
import { FiniteDemo } from './finite.demo'
import { PauseDemo } from './pause.demo'
import { ReverseDemo } from './reverse.demo'
import { SideDemo } from './side.demo'
import { SpacingDemo } from './spacing.demo'
import { SpeedDemo } from './speed.demo'
import { StoreDemo } from './store.demo'

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
