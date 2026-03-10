import type { Observer } from './types'
import { pushObserver, popObserver } from './scheduler'

/**
 * ## Creating Effects
 *
 * A helper function that automatically tracks any signals read inside it and
 * re-runs synchronously when they change.
 *
 * Since these signal-based effects live outside of the React component lifecycle,
 * they are not triggered by component lifecycle events but run instantly before
 * the JSX is rendered.
 *
 * Likewise, effects can be created outside of the scope of a React component and
 * nested within other effects.
 *
 * | Parameters | Description |
 * |------------|-------------|
 * | `fn`       |  The effect function to run when signals change. |
 *
 * ## Resources
 * [Cerberus Signals Docs](https://cerberus.digitalu.design/docs/signals/overview)
 */
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
