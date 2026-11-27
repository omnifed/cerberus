import type { WorldState } from './styx'

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
 * Where the world is in each part of the story. The seam burns low under the
 * hero, breaks into shards that don't line up while the problem is told,
 * seals into one line as Cerberus answers it, keeps low and out of the copy's
 * way through the chapters, and opens like a gate at the close.
 */
export const POSES: Record<PoseName, WorldState> = {
  hero: {
    unity: 1,
    spread: 1,
    horizon: -0.2,
    tilt: -0.1,
    heat: 1,
    gate: 0,
  },
  problem: {
    unity: 0,
    spread: 1.5,
    horizon: -0.04,
    tilt: 0.05,
    heat: 0.85,
    gate: 0,
  },
  answer: {
    unity: 1,
    spread: 0.75,
    horizon: -0.3,
    tilt: 0,
    heat: 1.2,
    gate: 0,
  },
  agents: {
    unity: 1,
    spread: 0.8,
    horizon: -0.36,
    tilt: 0.08,
    heat: 0.75,
    gate: 0,
  },
  design: {
    unity: 1,
    spread: 0.9,
    horizon: -0.4,
    tilt: -0.1,
    heat: 0.7,
    gate: 0,
  },
  tokens: {
    unity: 1,
    spread: 0.85,
    horizon: -0.38,
    tilt: 0.04,
    heat: 0.8,
    gate: 0,
  },
  signals: {
    unity: 1,
    spread: 0.9,
    horizon: -0.32,
    tilt: 0.1,
    heat: 0.9,
    gate: 0,
  },
  ship: {
    unity: 1,
    spread: 0.7,
    horizon: -0.42,
    tilt: 0.02,
    heat: 0.65,
    gate: 0,
  },
  workspace: {
    unity: 1,
    spread: 1.1,
    horizon: -0.3,
    tilt: -0.16,
    heat: 0.85,
    gate: 0,
  },
  install: {
    unity: 1,
    spread: 0.6,
    horizon: -0.45,
    tilt: 0,
    heat: 0.4,
    gate: 0,
  },
  final: {
    unity: 1,
    spread: 1.2,
    horizon: 0,
    tilt: 0,
    heat: 1.5,
    gate: 1,
  },
}

export function mixPose(a: WorldState, b: WorldState, t: number): WorldState {
  const m = (k: keyof WorldState) => a[k] + (b[k] - a[k]) * t
  return {
    unity: m('unity'),
    spread: m('spread'),
    horizon: m('horizon'),
    tilt: m('tilt'),
    heat: m('heat'),
    gate: m('gate'),
  }
}

export const smoothstep = (t: number) => {
  const c = Math.min(1, Math.max(0, t))
  return c * c * (3 - 2 * c)
}
