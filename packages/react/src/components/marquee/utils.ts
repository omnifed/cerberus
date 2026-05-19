import { MarqueeEdgeOption, MarqueeProps } from './marquee'

export function shouldShowEdge(
  edge: MarqueeEdgeOption,
  edges: MarqueeProps['edges'],
): boolean {
  if (!edges) return false
  return edges.includes('both') || edges.includes(edge)
}
