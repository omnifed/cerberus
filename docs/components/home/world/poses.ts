import type { OrganismState } from './organism'

export type PoseName =
  | 'hero'
  | 'problem'
  | 'answer'
  | 'agents'
  | 'design'
  | 'tokens'
  | 'signals'
  | 'ship'
  | 'workspace'
  | 'install'
  | 'final'

/**
 * Where the organism is in each part of the story. The three streams start
 * braided (one workflow), come apart while the problem is told, braid again
 * as Cerberus answers it, and converge into one beam at the close.
 */
export const POSES: Record<PoseName, OrganismState> = {
  hero: { braid: 1, radius: 0.1, axis: -0.12, angle: -0.2, energy: 1.1 },
  problem: { braid: 0, radius: 0.07, axis: 0, angle: 0, energy: 0.95 },
  answer: { braid: 1, radius: 0.035, axis: 0, angle: 0, energy: 1.15 },
  agents: { braid: 1, radius: 0.05, axis: -0.34, angle: 0.06, energy: 0.75 },
  design: { braid: 1, radius: 0.09, axis: 0.34, angle: -0.08, energy: 0.7 },
  tokens: { braid: 1, radius: 0.06, axis: -0.36, angle: 0, energy: 0.8 },
  signals: { braid: 1, radius: 0.05, axis: 0.32, angle: 0.08, energy: 0.9 },
  ship: { braid: 1, radius: 0.04, axis: 0.38, angle: 0.1, energy: 0.65 },
  workspace: { braid: 1, radius: 0.12, axis: -0.3, angle: -0.22, energy: 0.9 },
  install: { braid: 1, radius: 0.03, axis: 0.4, angle: 0, energy: 0.4 },
  final: { braid: 1, radius: 0.006, axis: 0, angle: 0, energy: 1.8 },
}

export function mixPose(
  a: OrganismState,
  b: OrganismState,
  t: number,
): OrganismState {
  const m = (k: keyof OrganismState) => a[k] + (b[k] - a[k]) * t
  return {
    braid: m('braid'),
    radius: m('radius'),
    axis: m('axis'),
    angle: m('angle'),
    energy: m('energy'),
  }
}

export const smoothstep = (t: number) => {
  const c = Math.min(1, Math.max(0, t))
  return c * c * (3 - 2 * c)
}
