import { ark } from '@ark-ui/react/factory'
import { cerberus } from 'styled-system/jsx/factory'
import { css, cx, type Styles } from 'styled-system/css'
import type { RecipeVariantRecord } from 'styled-system/types'
import { forwardRef, type ElementType } from 'react'
import type {
  CerberusPrimitiveEl,
  CerberusPrimitiveProps,
  CerberusPrimitiveRecipe,
  CerberusRecipe,
  CerberusSlotRecipe,
  WithRecipeOptions,
} from './types'
import type { ExtractProps } from '../types'

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

  private setupStyledComponent<T extends ElementType>(
    component: T | CerberusPrimitiveEl<T>,
  ) {
    const arkComponent = ark[component as keyof typeof ark]

    if (typeof component !== 'string') {
      return cerberus(component)
    }

    if (arkComponent) {
      return cerberus(arkComponent)
    }

    throw new Error(`Unknown component: ${component}`)
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
  withNoRecipe = <T extends ElementType>(
    Component: T | CerberusPrimitiveEl<T>,
    options?: WithRecipeOptions,
  ) => {
    type Props = ExtractProps<T>
    const { defaultProps } = options || {}
    const El = this.setupStyledComponent<T>(Component)

    const CerbComponent = (props: CerberusPrimitiveProps<Props>) => {
      return <El {...defaultProps} {...props} />
    }

    const ElName = typeof El === 'string' ? El : El.displayName || El.name
    CerbComponent.displayName = `Cerberus.${ElName}`

    return CerbComponent
  }

  /**
   * Creates a Cerberus component with the given recipe.
   * @param Component - The React component to enhance with the recipe.
   * @param options - Options for the recipe.
   * @returns A new React component that applies the recipe to the original
   * component.
   */
  withRecipe = <T extends ElementType>(
    Component: T,
    options?: WithRecipeOptions,
  ) => {
    type Props = ExtractProps<T>
    const { defaultProps } = options || {}
    const El = this.setupStyledComponent<T>(Component)

    const recipe = this.recipe as CerberusRecipe

    const CerbComponent = forwardRef<unknown, CerberusPrimitiveProps<Props>>(
      (internalProps, ref) => {
        const { css: customCss, ...restOfInternalProps } = internalProps

        const [variantOptions, nativeProps] =
          recipe.splitVariantProps(restOfInternalProps)
        const recipeStyles = recipe(variantOptions)

        // Safely access className
        const className =
          typeof nativeProps.className === 'string'
            ? nativeProps.className
            : undefined

        return (
          <El
            {...defaultProps}
            {...(nativeProps as Props)}
            ref={ref}
            className={cx(className, recipeStyles, css(customCss as Styles))}
          />
        )
      },
    )

    const ElName = typeof El === 'string' ? El : El.displayName || El.name
    CerbComponent.displayName = ElName

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
  withSlotRecipe = <T extends ElementType>(
    Component: T,
    slot: keyof RecipeVariantRecord,
    options?: WithRecipeOptions,
  ) => {
    type Props = ExtractProps<T>
    const { defaultProps } = options || {}
    const El = this.setupStyledComponent<T>(Component)

    const recipe = this.recipe as CerberusSlotRecipe<typeof slot>

    const CerbComponent = forwardRef<unknown, CerberusPrimitiveProps<Props>>(
      (internalProps, ref) => {
        const { css: customCss, ...restOfInternalProps } = internalProps

        const [variantOptions, nativeProps] =
          recipe.splitVariantProps(restOfInternalProps)
        const styles = recipe(variantOptions)
        const slotStyles = styles[slot as keyof typeof styles]

        // Safely access className
        const className =
          typeof nativeProps.className === 'string'
            ? nativeProps.className
            : undefined

        return (
          <El
            {...defaultProps}
            {...(nativeProps as Props)}
            ref={ref}
            className={cx(className, slotStyles, css(customCss as Styles))}
          />
        )
      },
    )

    const ElName = typeof El === 'string' ? El : El.displayName || El.name
    CerbComponent.displayName = ElName

    return CerbComponent
  }
}
