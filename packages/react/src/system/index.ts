import { CerberusPrimitive } from './primitive-factory'
import type { CerberusFactory, CerberusPrimitiveRecipe } from './types'
import { cerberusFactoryProxy } from './factory'

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
  recipe?: T,
) {
  return new CerberusPrimitive(recipe)
}

/**
 * A utility function to access Cerberus components by their name.
 * @param component - The name of the Cerberus component to access.
 * @returns The Cerberus component corresponding to the provided name.
 * @throws An error if the component name is not valid.
 *
 * @example
 * ```tsx
 * import { cerberus } from '@cerberus/react'
 * const Button = cerberus('button')
 *
 * <Button css={{ color: 'blue' }} asChild>
 *  <Link href="/some-page">Click me</Link>
 * </Button>
 * ```
 */
export const cerberus = cerberusFactoryProxy as CerberusFactory

export * from './types'
