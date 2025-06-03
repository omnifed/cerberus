import { CerberusPrimitive } from './factory'
import type { CerberusPrimitiveRecipe } from './types'

/**
 * This module contains the user interface for creating Cerberus primitives.
 * @module @cerberus/core/system/create-cerb-primitive
 */

/**
 * A factory function that creates a Cerberus primitive instance with the given
 * recipe.
 * @param recipe
 * @returns An object with three methods: `withNoRecipe`, `withRecipe`, and `withSlotRecipe` that
 * apply the recipes and special Cerberus helpers like `css`.
 *
 * @example
 * ```tsx
 * const { withRecipe } = createCerberusPrimitive(myCustomRecipe);
 * export const Button = withRecipe(MyCustomButton)
 * ```
 */
export function createCerberusPrimitive<T extends CerberusPrimitiveRecipe>(
  recipe: T,
): CerberusPrimitive {
  return new CerberusPrimitive(recipe)
}

export * from './types'
