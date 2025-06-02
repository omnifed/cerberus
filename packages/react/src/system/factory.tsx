import type { RecipeConfig } from 'styled-system/types'
import { css, cx } from 'styled-system/css'
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

export type CerberusRecipe = (props?: unknown) => string | RecipeConfig

export type WithRecipeOptions = {
  defaultProps?: Record<string, unknown>
}

export type WithSlotRecipeProps = {
  component: ElementType
  slot: string
}

export type CerberusPrimitiveEl<T> = ElementType<WithCss & PropsWithChildren<T>>

// Factory

export class CerberusPrimitive {
  recipe: CerberusRecipe

  constructor(recipe: CerberusRecipe) {
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

    if (typeof Component !== 'function') {
      throw new Error(
        'withRecipe expects a React component as the first argument.',
      )
    }

    const CerbComponent = (internalProps: PropsWithChildren<P> & WithCss) => {
      const { css: customCss, className, ...nativeProps } = internalProps

      console.log(this.recipe)

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

  withSlotRecipe = (options: WithSlotRecipeProps) => {
    console.log('withSlotRecipe called with options:', options)
  }
}
