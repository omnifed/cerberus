import { extractParts } from '../../internal/extract-parts'
import { splitProps } from '../../utils/index'
import { Show } from '../show/index'
import {
  MarqueeContent,
  MarqueeEdge,
  MarqueeRoot,
  MarqueeViewport,
  type MarqueeRootProps,
} from './primitives'
import { getEndEdge, getStartEdge, shouldShowEdge } from './utils'

const PARTS = {
  viewport: MarqueeViewport,
  content: MarqueeContent,
  edge: MarqueeEdge,
}

export type MarqueeEdgeOption = 'both' | NonNullable<MarqueeRootProps['side']>

export type MarqueeProps = MarqueeRootProps & {
  /**
   * The edges to display over the marquee. `both` shows the start and end
   * edges for the current `side`.
   */
  edges?: MarqueeEdgeOption[]
}

/**
 * The marquee component displays horizontally or vertically scrolling content
 * with optional edges. Direct `Marquee.Viewport`, `Marquee.Content` and
 * `Marquee.Edge` children override the matching part; every other child is
 * rendered inside the content.
 * @description [Marquee Docs](https://cerberus.digitalu.design/docs/components/marquee)
 */
export function MarqueeEl(props: MarqueeProps) {
  const [localProps, rootProps] = splitProps(props, ['edges', 'children'])
  const { edges } = localProps

  const { parts, content } = extractParts(localProps.children, PARTS)

  const { children: _viewportChildren, ...viewportOverrideProps } =
    parts.viewport ?? {}
  const { children: contentChildren, ...contentOverrideProps } =
    parts.content ?? {}
  const { children: _edgeChildren, ...edgeOverrideProps } = parts.edge ?? {}

  return (
    <MarqueeRoot autoFill {...rootProps}>
      <Show when={shouldShowEdge(['start', 'top', 'both'], edges)}>
        {() => (
          <MarqueeEdge
            {...edgeOverrideProps}
            side={getStartEdge(edges, rootProps.side)}
          />
        )}
      </Show>

      <MarqueeViewport {...viewportOverrideProps}>
        <MarqueeContent {...contentOverrideProps}>
          {contentChildren ?? content}
        </MarqueeContent>
      </MarqueeViewport>

      <Show when={shouldShowEdge(['end', 'bottom', 'both'], edges)}>
        {() => (
          <MarqueeEdge
            {...edgeOverrideProps}
            side={getEndEdge(edges, rootProps.side)}
          />
        )}
      </Show>
    </MarqueeRoot>
  )
}
