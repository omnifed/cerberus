import type { ark } from '@ark-ui/react/factory'
import type { ComponentType, ElementType, JSX } from 'react'
import type {
  Assign,
  ComponentProps,
  JsxHTMLProps,
  JsxStyleProps,
  UnstyledProps,
} from 'styled-system/types'

/**
 * @deprecated - these are the old types and will be removed in v2
 */
export * from './deprecated_types'

/**
 * Any non-slot Panda recipe, such as the return value of `cva()`.
 *
 * Slot recipes (`sva()`) are intentionally **not** accepted. Use
 * `createSlotRecipeContext` for those.
 *
 * Matched structurally so Cerberus does not depend on Panda's internal types.
 */
export type CerberusRecipe = ((props?: any) => string) & {
  splitVariantProps: (props: any) => [any, any]
}

/**
 * Options for {@link cerberus}.
 *
 * @since 2.0.0
 */
export interface CerberusOptions {
  /**
   * Static props merged under the caller's props.
   *
   * The caller always wins on conflict. Use this for attributes known ahead
   * of time, such as `data-*`.
   *
   * # Notes
   *
   * Do not put recipe variants here. A variant given as a default prop
   * is not guaranteed to reach the recipe. Use the recipe's `defaultVariants`.
   *
   * @example
   * ```tsx
   * const Link = cerberus(NextLink, undefined, {
   *   defaultProps: { 'data-link': '' },
   * })
   * ```
   */
  defaultProps?: Record<string, unknown>

  /**
   * Prop names that must reach the wrapped component even though Panda would
   * otherwise consume them as a style prop or recipe variant.
   *
   * Defaults to `[]`: nothing is forwarded.
   *
   * # Notes
   *
   * A forwarded name stops feeding the recipe. If a key must both select
   * styles *and* reach the component, you want a slot recipe and
   * `withProvider`, not this factory.
   *
   * @example
   * ```tsx
   * // `size` is a Panda style prop. Forward it so <input size={4}> works.
   * const Input = cerberus('input', undefined, { forwardProps: ['size'] })
   * ```
   */
  forwardProps?: string[]
}

/**
 * Props accepted by a component created with {@link cerberus}.
 *
 * `T`: the wrapped element or component.
 * `V`: the recipe's variant props. Defaults to none.
 *
 * Contains, in order of precedence:
 * - `T`'s own props, including `ref` (React 19 passes it as a normal prop),
 * - Panda style props and `css`,
 * - `unstyled`,
 * - `asChild`,
 * - `V`.
 *
 * @since 2.0.0
 */
export type CerberusProps<T extends ElementType, V = {}> = JsxHTMLProps<
  ComponentProps<T> & UnstyledProps & { asChild?: boolean },
  Assign<JsxStyleProps, V>
>

/**
 * A component produced by {@link cerberus}. `R` is the recipe, if any, and
 * its variants become typed props.
 *
 * @since 2.0.0
 */
export type CerberusComponent<
  T extends ElementType,
  R extends CerberusRecipe | undefined = undefined,
> = ComponentType<
  CerberusProps<T, R extends CerberusRecipe ? NonNullable<Parameters<R>[0]> : {}>
>

type ElementName = Extract<keyof typeof ark, keyof JSX.IntrinsicElements>

/**
 * The shape of {@link cerberus}: callable, and indexable by element name.
 *
 * @since 2.0.0
 */
export interface CerberusFactory {
  /**
   * Wrap an element name or any component.
   *
   * @param component - An element name (`'span'`) or a component reference.
   * @param recipe - An optional non-slot recipe, such as from `cva()`.
   * @param options - See {@link CerberusOptions}.
   */
  <T extends ElementType, R extends CerberusRecipe | undefined = undefined>(
    component: T,
    recipe?: R,
    options?: CerberusOptions,
  ): CerberusComponent<T, R>
}

export type CerberusElements = {
  [K in ElementName]: CerberusComponent<K>
}
