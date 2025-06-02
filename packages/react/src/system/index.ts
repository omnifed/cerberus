import { CerberusPrimitive, type CerberusRecipe } from './factory'

/**
 * This module contains the user interface for creating Cerberus primitives.
 * @module @cerberus/core/system/create-cerb-primitive
 */

/**
 * A factory function that creates a Cerberus primitive instance with the given
 * recipe.
 * @param recipe
 * @returns An object with two methods: `withRecipe` and `withSlotRecipe` that
 * apply the recipes and special Cerberus helpers like `css`.
 *
 * @example
 * ```tsx
 * const { withRecipe } = createCerberusPrimitive(myCustomRecipe);
 * export const Button = withRecipe(MyCustomButton)
 * ```
 */
export function createCerberusPrimitive(
  recipe: CerberusRecipe,
): CerberusPrimitive {
  return new CerberusPrimitive(recipe)
}
