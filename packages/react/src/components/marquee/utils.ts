import { MarqueeEdgeOption, MarqueeProps } from './marquee'

enum Direction {
  start = 1,
  end = 1,
  top = 2,
  bottom = 2,
  both = 3,
}

const dir = {
  start: Direction.start,
  end: Direction.end,
  top: Direction.top,
  bottom: Direction.bottom,
  both: Direction.both,
  hor: Direction.start,
  vert: Direction.top,
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
): MarqueeEdgeOption {
  if (!edges) return 'start'
  const reliableSide = side ?? 'start'
  const direction = dir[reliableSide]
  if (direction === dir.hor) return 'start'
  if (direction === dir.vert) return 'top'
  return 'start'
}

export function getEndEdge(
  edges: MarqueeProps['edges'],
  side: MarqueeProps['side'],
): MarqueeEdgeOption {
  if (!edges) return 'end'
  const reliableSide = side ?? 'end'
  const direction = dir[reliableSide]
  if (direction === dir.hor) return 'end'
  if (direction === dir.vert) return 'bottom'
  return 'end'
}
