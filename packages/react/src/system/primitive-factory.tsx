import { css, cx } from 'styled-system/css'
import type { RecipeVariantRecord } from 'styled-system/types'
import {
  type ComponentType,
  type HTMLAttributes,
  type PropsWithChildren,
} from 'react'
import type { WithCss } from '../types'
import type {
  CerberusPrimitiveEl,
  CerberusPrimitiveRecipe,
  CerberusRecipe,
  CerberusSlotRecipe,
  WithRecipeOptions,
} from './types'

/**
 * This module contains a factory for creating Cerberus primitives.
 * @module @cerberus/core/system/factory
 */

export class CerberusPrimitive {
  recipe: CerberusPrimitiveRecipe | null

  constructor(recipe?: CerberusPrimitiveRecipe) {
    this.recipe = recipe ?? null
  }

  private validateComponent<P extends HTMLAttributes<unknown>>(
    Component: ComponentType<P>,
  ) {
    if (typeof Component !== 'function' && typeof Component !== 'object') {
      throw new Error('Expected a React component as the first argument.')
    }
  }

  /**
   * Creates a Cerberus component with bare features and no recipe.
   * @param Component - The React component to enhance with Cerberus features.
   * @returns A new React component that applies Cerberus features to the
   * original component.
   * @example
   * ```typescript
   * const { withNoRecipe } = createCerberusPrimitive(button)
   * const Button = withNoRecipe(RawButton)
   * ```
   */
  withNoRecipe = <P extends HTMLAttributes<unknown>>(
    Component: ComponentType<P>,
    options?: WithRecipeOptions,
  ): CerberusPrimitiveEl<P> => {
    const { defaultProps } = options || {}

    this.validateComponent(Component)

    const CerbComponent = (props: PropsWithChildren<P> & WithCss) => {
      const { css: customCss, className, ...nativeProps } = props
      return (
        <Component
          {...defaultProps}
          {...(nativeProps as P)}
          className={cx(className, css(customCss))}
        />
      )
    }

    CerbComponent.displayName = Component.displayName || Component.name
    return CerbComponent
  }

  /**
   * Creates a Cerberus component with the given recipe.
   * @param Component - The React component to enhance with the recipe.
   * @param options - Options for the recipe.
   * @returns A new React component that applies the recipe to the original
   * component.
   */
  withRecipe = <P extends HTMLAttributes<unknown>>(
    Component: ComponentType<P>,
    options?: WithRecipeOptions,
  ): CerberusPrimitiveEl<P & WithRecipeOptions['defaultProps']> => {
    const { defaultProps } = options || {}
    const recipe = this.recipe as CerberusRecipe

    this.validateComponent(Component)

    const CerbComponent = (internalProps: PropsWithChildren<P> & WithCss) => {
      const { css: customCss, className, ...nativeProps } = internalProps

      const [variantOptions] = recipe.splitVariantProps(nativeProps)
      const recipeStyles = recipe(variantOptions)

      return (
        <Component
          {...defaultProps}
          {...(nativeProps as P)}
          className={cx(className, recipeStyles, css(customCss))}
        />
      )
    }

    CerbComponent.displayName = Component.displayName || Component.name
    return CerbComponent
  }

  /**
   * Creates a Cerberus component with a slot recipe applied.
   * @param Component - The React component to enhance with Cerberus features.
   * @param recipe - The slot recipe to apply to the component.
   * @returns A new React component that applies Cerberus features and the
   * specified slot recipe to the original component.
   * @example
   * ```typescript
   * const { withSlotRecipe } = createCerberusPrimitive(field)
   * const Field = withSlotRecipe(RawField, field)
   * ```
   */
  withSlotRecipe = <P extends HTMLAttributes<unknown>>(
    Component: ComponentType<P>,
    slot: keyof RecipeVariantRecord,
    options?: WithRecipeOptions,
  ) => {
    const { defaultProps } = options || {}
    const recipe = this.recipe as CerberusSlotRecipe<typeof slot>

    this.validateComponent(Component)

    const CerbComponent = (internalProps: PropsWithChildren<P> & WithCss) => {
      const { css: customCss, className, ...nativeProps } = internalProps

      const [variantOptions] = recipe.splitVariantProps(nativeProps)
      const styles = recipe(variantOptions)
      const slotStyles = styles[slot as keyof typeof styles]

      return (
        <Component
          {...defaultProps}
          {...(nativeProps as P)}
          className={cx(className, slotStyles, css(customCss))}
        />
      )
    }

    CerbComponent.displayName = Component.displayName || Component.name
    return CerbComponent
  }
}
