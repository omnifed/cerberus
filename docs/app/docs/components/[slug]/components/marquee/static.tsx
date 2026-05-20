import { BasicDemo } from './basic.demo'
import { SpacingDemo } from './spacing.demo'
import { ReverseDemo } from './reverse.demo'
import { SideDemo } from './side.demo'
import { SpeedDemo } from './speed.demo'
import { EdgesDemo } from './edges.demo'
import { PauseDemo } from './pause.demo'
import { StoreDemo } from './store.demo'
import { FiniteDemo } from './finite.demo'

export const DEMOS = {
  basic: {
    id: 'marquee.basic',
    preview: <BasicDemo />,
  },
  spacing: {
    id: 'marquee.spacing',
    preview: <SpacingDemo />,
  },
  reverse: {
    id: 'marquee.reverse',
    preview: <ReverseDemo />,
  },
  side: {
    id: 'marquee.side',
    preview: <SideDemo />,
  },
  speed: {
    id: 'marquee.speed',
    preview: <SpeedDemo />,
  },
  edges: {
    id: 'marquee.edges',
    preview: <EdgesDemo />,
  },
  pause: {
    id: 'marquee.pause',
    preview: <PauseDemo />,
  },
  store: {
    id: 'marquee.store',
    preview: <StoreDemo />,
  },
  finite: {
    id: 'marquee.finite',
    preview: <FiniteDemo />,
  },
  meta: `import { Marquee } from "@cerberus/react"`,

  customMeta: `<Marquee
  css={{
    "--marquee-duration": "30s",
    "--marquee-delay": "0s",
    "--marquee-loop-count": "infinite",
    "--marquee-edge-color": "colors.bg",
    "--marquee-edge-size": "20%",
  }}
>
  {/* ... */}
</Marquee>`,
}
