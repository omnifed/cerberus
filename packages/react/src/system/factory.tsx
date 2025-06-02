import { css, cx } from 'styled-system/css'
import type { RecipeVariantFn, RecipeVariantRecord } from 'styled-system/types'
import {
  type ElementType,
  type HTMLAttributes,
  type PropsWithChildren,
} from 'react'
import type { WithCss } from '../types'

/**
 * This module contains a factory for creating Cerberus primitives.
 * @module @cerberus/core/system/factory
 */

export type CerberusRecipe = RecipeVariantFn<RecipeVariantRecord> & {
  splitVariantProps: (
    props: Record<string, unknown>,
  ) => [Record<string, unknown>, Record<string, unknown>]
}

export type WithRecipeOptions = {
  defaultProps?: Record<string, unknown>
}

export type WithSlotRecipeProps = {
  component: ElementType
  slot: string
}

export type CerberusPrimitiveProps<T> = WithCss & PropsWithChildren<T>
export type CerberusPrimitiveEl<T> = ElementType<CerberusPrimitiveProps<T>>

// Factory
export class CerberusPrimitive<T extends CerberusRecipe> {
  recipe: T

  constructor(recipe: T) {
    this.recipe = recipe
  }

  /**
   * Creates a Cerberus component with the given recipe.
   * @param Component - The React component to enhance with the recipe.
   * @param options - Options for the recipe.
   * @returns A new React component that applies the recipe to the original component.
   */
  withRecipe = <P extends HTMLAttributes<unknown>>(
    Component: ElementType<P>,
    options?: WithRecipeOptions,
  ): CerberusPrimitiveEl<P> => {
    const { defaultProps } = options || {}
    const recipe = this.recipe

    if (typeof Component !== 'function' && typeof Component !== 'object') {
      throw new Error(
        'withRecipe expects a React component as the first argument.',
      )
    }

    const CerbComponent = (internalProps: PropsWithChildren<P> & WithCss) => {
      const { css: customCss, className, ...nativeProps } = internalProps

      const [variantOptions] = recipe.splitVariantProps(nativeProps)
      const styles = recipe(variantOptions)

      return (
        <Component
          {...defaultProps}
          {...(nativeProps as P)}
          className={cx(className, css(customCss), styles)}
        />
      )
    }

    CerbComponent.displayName = Component.displayName || Component.name
    return CerbComponent
  }

  withSlotRecipe = (options: WithSlotRecipeProps) => {
    console.log('withSlotRecipe called with options:', options)
  }
}
