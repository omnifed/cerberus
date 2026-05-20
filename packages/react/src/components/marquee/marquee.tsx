import { MarqueeContext } from '@ark-ui/react'
import { Show } from '../show/show'
import {
  MarqueeRootProvider,
  MarqueeContent,
  MarqueeEdge,
  MarqueeItem,
  MarqueeRoot,
  MarqueeViewport,
  type MarqueeRootProps,
} from './primitives'
import { getStartEdge, shouldShowEdge, getEndEdge } from './utils'

export type MarqueeEdgeOption = 'both' | MarqueeRootProps['side']

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
    <MarqueeRoot autoFill {...rootProps}>
      <Show when={shouldShowEdge(['start', 'top', 'both'], edges)}>
        {() => <MarqueeEdge side={getStartEdge(edges, rootProps.side)} />}
      </Show>

      <MarqueeViewport>
        <MarqueeContent>{children}</MarqueeContent>
      </MarqueeViewport>

      <Show when={shouldShowEdge(['end', 'bottom', 'both'], edges)}>
        {() => <MarqueeEdge side={getEndEdge(edges, rootProps.side)} />}
      </Show>
    </MarqueeRoot>
  )
}

Marquee.Context = MarqueeContext
Marquee.RootProvider = MarqueeRootProvider
Marquee.Root = MarqueeRoot
Marquee.Edge = MarqueeEdge
Marquee.Viewport = MarqueeViewport
Marquee.Content = MarqueeContent
Marquee.Item = MarqueeItem

Marquee.displayName = 'Cerberus.Marquee'
