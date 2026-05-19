import { Show } from '../show/show'
import {
  MarqueeContent,
  MarqueeEdge,
  MarqueeItem,
  MarqueeRoot,
  MarqueeViewport,
  type MarqueeRootProps,
} from './primitives'
import { shouldShowEdge } from './utils'

export type MarqueeEdgeOption = 'both' | 'start' | 'end'

export type MarqueeProps = MarqueeRootProps & {
  /**
   * When provided, the marquee will display edges listed in the array.
   */
  edges?: MarqueeEdgeOption[]
}

/**
 * The marquee component displays a horizontally scrolling content with optional edges.
 * @description [Marquee Docs](https://cerberus.digitalu.design/docs/components/marquee)
 */
export function Marquee(props: MarqueeProps) {
  const { children, edges, ...rootProps } = props

  return (
    <MarqueeRoot {...rootProps}>
      <Show when={shouldShowEdge('start', edges)}>
        {() => <MarqueeEdge side="start" />}
      </Show>

      <MarqueeViewport>
        <MarqueeContent>{children}</MarqueeContent>
      </MarqueeViewport>

      <Show when={shouldShowEdge('end', edges)}>
        {() => <MarqueeEdge side="end" />}
      </Show>
    </MarqueeRoot>
  )
}

Marquee.Root = MarqueeRoot
Marquee.Edge = MarqueeEdge
Marquee.Viewport = MarqueeViewport
Marquee.Content = MarqueeContent
Marquee.Item = MarqueeItem

Marquee.displayName = 'Cerberus.Marquee'
