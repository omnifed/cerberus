import { ark } from '@ark-ui/react/factory'
import type { ElementType } from 'react'
import { styled } from 'styled-system/jsx'
import { CerberusPrimitive } from './deprecated_factory'
import type { CerberusFactory, CerberusPrimitiveRecipe } from './deprecated_types'
import type { CerberusElements, CerberusOptions, CerberusRecipe } from './types'

/**
 * @deprecated - use {@link cerberus} instead
 */
export function createCerberusPrimitive<T extends CerberusPrimitiveRecipe>(recipe?: T) {
  return new CerberusPrimitive(recipe)
}

/**
 * The Cerberus factory: give any element or component Panda's style props,
 * `css`, an optional recipe, and Ark's `asChild`.
 *
 * Compound components (Accordion, Dialog, ...) do **not** use this module.
 * They use Panda's `createSlotRecipeContext` directly.
 *
 * @module @cerberus/react/system
 * @since 2.0.0
 */

type AnyFactory = (
  component: ElementType,
  recipe?: unknown,
  options?: unknown,
) => ElementType

function build(
  component: ElementType,
  recipe?: CerberusRecipe,
  options?: CerberusOptions,
): ElementType {
  const withAsChild = (ark as unknown as (c: ElementType) => ElementType)(component)
  return (styled as unknown as AnyFactory)(withAsChild, recipe, options)
}

const ELEMENT_NAME = /^[a-z][a-z0-9]*$/
// Keys a runtime may probe on any object. Answering them with a component
// would make `await cerberus` call the component as a thenable.
const RESERVED = new Set(['then'])
const cache = new Map<string, ElementType>()

function call(
  component: ElementType,
  recipe?: CerberusRecipe,
  options?: CerberusOptions,
) {
  return build(component, recipe, options)
}

/**
 * Give any element or component Panda's styling features plus `asChild`.
 *
 * `cerberus` is both a function and an object:
 *
 * - `cerberus.<el>` is a ready-made styled element,
 * - `cerberus(component, recipe?, options?)` wraps anything else.
 *
 * ## Examples
 *
 * Style an element with `css` and style props:
 *
 * ```tsx
 * <cerberus.div css={{ color: 'red' }} p="4" />
 * ```
 *
 * Render as another element with `asChild`. Classes and props are merged
 * onto the child:
 *
 * ```tsx
 * <cerberus.button asChild css={{ color: 'blue' }}>
 *   <a href="/docs">Docs</a>
 * </cerberus.button>
 * ```
 *
 * Wrap a third-party component:
 *
 * ```tsx
 * const Link = cerberus(NextLink, undefined, {
 *   defaultProps: { 'data-link': '' },
 * })
 * ```
 *
 * Attach a recipe. Its variants become typed props and are consumed before
 * reaching the DOM:
 *
 * ```tsx
 * const badge = cva({
 *   base: { px: '2' },
 *   variants: { tone: { info: { color: 'blue' }, danger: { color: 'red' } } },
 * })
 * const Badge = cerberus('span', badge)
 *
 * <Badge tone="danger">Failed</Badge>
 * ```
 *
 * ## Errors
 *
 * This function never throws. Mistakes are compile-time errors:
 * a misspelled prop, an unknown variant value, or a slot recipe passed as
 * `recipe`.
 *
 * ## Panics
 *
 * None. Unknown property keys (`cerberus.notAnElement`) evaluate to
 * `undefined`, as do `then` and symbols. This is deliberate, so bundlers,
 * devtools and `await` can probe the object safely.
 *
 * ## Pitfalls
 *
 * - **Call it at module scope.** `cerberus(C)` creates a new component on
 *   every call. Calling it during render remounts the subtree each time.
 * - **Slot recipes do not belong here.** Use `createSlotRecipeContext`.
 * - **`cerberus.<el>` is lowercase letters and digits only.** Anything else
 *   returns `undefined`.
 *
 * ## Notes
 *
 * `asChild` is provided by Ark. The wrapped component is passed through Ark's
 * factory before Panda's `styled()`.
 *
 * @see {@link CerberusOptions} for `defaultProps` and `forwardProps`
 * @see https://panda-css.com/docs/recipes/slot-recipe-context for compounds
 * @since 2.0.0
 */
export const cerberus = new Proxy(call as unknown as CerberusFactory, {
  get(target, prop, receiver) {
    // Real function members (`name`, `call`, `bind`, ...) resolve normally.
    if (Reflect.has(target, prop)) return Reflect.get(target, prop, receiver)

    if (typeof prop !== 'string' || RESERVED.has(prop) || !ELEMENT_NAME.test(prop)) {
      return undefined
    }

    let el = cache.get(prop)
    if (!el) {
      el = build(prop as ElementType)
      cache.set(prop, el)
    }
    return el
  },
}) as CerberusFactory & CerberusElements
