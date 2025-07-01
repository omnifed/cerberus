import { css, cx } from 'styled-system/css'
import type { RecipeVariantRecord } from 'styled-system/types'
import {
  type ComponentType,
  type ElementType,
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

  private hasStyles(styles: string | undefined): Record<string, unknown> {
    if (styles) {
      return {
        className: styles,
      }
    }
    return {}
  }

  private validateComponent<P extends HTMLAttributes<unknown>>(
    Component: ComponentType<P> | string,
  ) {
    if (typeof Component !== 'function' && typeof Component !== 'object') {
      return false
    }
    return true
  }

  /**
   * Creates a Cerberus component with bare features and no recipe.
   * @param Component - The React component to enhance with Cerberus features.
   * Can be a string or a component reference.
   * @returns A new React component that applies Cerberus features to the
   * original component.
   *
   * @example
   * ```ts
   * const { withNoRecipe } = createCerberusPrimitive(buttonRecipe)
   * const Button = withNoRecipe('button')
   * ```
   */
  withNoRecipe = <P extends HTMLAttributes<unknown>>(
    Component: ComponentType<P> | string,
    options?: WithRecipeOptions,
  ): CerberusPrimitiveEl<P> => {
    const { defaultProps } = options || {}
    const El = Component as ComponentType<P> | ElementType

    const CerbComponent = (props: PropsWithChildren<P> & WithCss) => {
      const { css: customCss, className, ...nativeProps } = props
      const styles = this.hasStyles(cx(className, css(customCss)))
      return <El {...defaultProps} {...styles} {...(nativeProps as P)} />
    }

    if (this.validateComponent(El)) {
      const ElName = typeof El === 'string' ? El : El.displayName || El.name
      CerbComponent.displayName = ElName
    }

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
    Component: ComponentType<P> | string,
    options?: WithRecipeOptions,
  ): CerberusPrimitiveEl<P & WithRecipeOptions['defaultProps']> => {
    const { defaultProps } = options || {}
    const El = Component as ComponentType<P> | ElementType

    const recipe = this.recipe as CerberusRecipe

    const CerbComponent = (internalProps: PropsWithChildren<P> & WithCss) => {
      const {
        css: customCss,
        className,
        ...restOfInternalProps
      } = internalProps

      const [variantOptions, nativeProps] =
        recipe.splitVariantProps(restOfInternalProps)
      const recipeStyles = recipe(variantOptions)

      return (
        <Component
          {...defaultProps}
          {...(nativeProps as P)}
          className={cx(className, recipeStyles, css(customCss))}
        />
      )
    }

    if (this.validateComponent(El)) {
      const ElName = typeof El === 'string' ? El : El.displayName || El.name
      CerbComponent.displayName = ElName
    }

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
    Component: ComponentType<P> | string,
    slot: keyof RecipeVariantRecord,
    options?: WithRecipeOptions,
  ) => {
    const { defaultProps } = options || {}
    const El = Component as ComponentType<P> | ElementType

    const recipe = this.recipe as CerberusSlotRecipe<typeof slot>

    const CerbComponent = (internalProps: PropsWithChildren<P> & WithCss) => {
      const {
        css: customCss,
        className,
        ...restOfInternalProps
      } = internalProps

      const [variantOptions, nativeProps] =
        recipe.splitVariantProps(restOfInternalProps)
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

    if (this.validateComponent(El)) {
      const ElName = typeof El === 'string' ? El : El.displayName || El.name
      CerbComponent.displayName = ElName
    }

    return CerbComponent
  }
}
