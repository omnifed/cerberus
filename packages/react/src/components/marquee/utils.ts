import type { MarqueeEdgeOption, MarqueeProps } from './marquee'

type MarqueeSide = Exclude<MarqueeEdgeOption, 'both'>

enum Direction {
  horizontal = 1,
  vertical = 2,
}

const dir: Record<MarqueeSide, Direction> = {
  start: Direction.horizontal,
  end: Direction.horizontal,
  top: Direction.vertical,
  bottom: Direction.vertical,
}

export function shouldShowEdge(
  edge: MarqueeEdgeOption[],
  edges: MarqueeProps['edges'],
): boolean {
  if (!edges) return false
  return edge.some((e) => edges.includes(e))
}

export function getStartEdge(
  edges: MarqueeProps['edges'],
  side: MarqueeProps['side'],
): MarqueeSide {
  if (!edges) return 'start'
  return dir[side ?? 'start'] === Direction.vertical ? 'top' : 'start'
}

export function getEndEdge(
  edges: MarqueeProps['edges'],
  side: MarqueeProps['side'],
): MarqueeSide {
  if (!edges) return 'end'
  return dir[side ?? 'end'] === Direction.vertical ? 'bottom' : 'end'
}
