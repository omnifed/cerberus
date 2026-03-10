import type { Observer } from './types'
import { pushObserver, popObserver } from './scheduler'

export function createEffect(fn: () => void | (() => void)): () => void {
  let cleanupFn: (() => void) | void

  const effect: Observer = {
    dependencies: new Set(),
    execute() {
      if (typeof cleanupFn === 'function') cleanupFn()
      effect.cleanup()

      pushObserver(effect)
      cleanupFn = fn()
      popObserver()
    },
    cleanup() {
      for (const dep of effect.dependencies) {
        dep.observers.delete(effect)
      }
      effect.dependencies.clear()
    },
  }

  effect.execute()

  return () => {
    if (typeof cleanupFn === 'function') cleanupFn()
    effect.cleanup()
  }
}
