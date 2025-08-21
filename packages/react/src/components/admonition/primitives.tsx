import { type HTMLArkProps } from '@ark-ui/react/factory'
import { admonition, type AdmonitionVariantProps } from 'styled-system/recipes'
import {
  cerberus,
  createCerberusPrimitive,
  type CerberusPrimitiveProps,
} from '../../system/index'

/**
 * This module contains the primitives of the Admonition components.
 * @module 'admonition/primitives'
 */

const { withSlotRecipe, withNoRecipe } = createCerberusPrimitive(admonition)

/**
 * The `AdmonitionRoot` component is the container for the Admonition.
 */
export const AdmonitionRoot = withSlotRecipe(cerberus.aside, 'root', {
  defaultProps: {
    'data-scope': 'admonition',
    'data-part': 'root',
  },
})
export type AdmonitionRootProps = CerberusPrimitiveProps<
  HTMLArkProps<'aside'> & AdmonitionVariantProps
>

/**
 * The `AdmonitionIndicator` component is the indicator for the Admonition.
 */
export const AdmonitionIndicator = withNoRecipe(cerberus.span, {
  defaultProps: {
    'data-scope': 'admonition',
    'data-part': 'indicator',
  },
})
export type AdmonitionIndicatorProps = CerberusPrimitiveProps<
  HTMLArkProps<'span'>
>

/**
 * The `AdmonitionContent` component is the content for the Admonition.
 */
export const AdmonitionContent = withNoRecipe(cerberus.div, {
  defaultProps: {
    'data-scope': 'admonition',
    'data-part': 'content',
  },
})
export type AdmonitionContentProps = CerberusPrimitiveProps<HTMLArkProps<'div'>>

/**
 * The `AdmonitionHeading` component is the heading title for the Admonition.
 */
export const AdmonitionHeading = withSlotRecipe(cerberus.p, 'heading', {
  defaultProps: {
    'data-scope': 'admonition',
    'data-part': 'heading',
  },
})
export type AdmonitionHeadingProps = CerberusPrimitiveProps<
  HTMLArkProps<'p'> & AdmonitionVariantProps
>

/**
 * The `AdmonitionDescription` component is the description for the Admonition.
 */
export const AdmonitionDescription = withSlotRecipe(cerberus.p, 'description', {
  defaultProps: {
    'data-scope': 'admonition',
    'data-part': 'description',
  },
})
export type AdmonitionDescriptionProps = CerberusPrimitiveProps<
  HTMLArkProps<'p'> & AdmonitionVariantProps
>
