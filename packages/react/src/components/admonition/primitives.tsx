import { admonition, type AdmonitionVariantProps } from 'styled-system/recipes'
import { type CerberusProps, createCerberusPrimitive } from '../../system/index'

/**
 * This module contains the primitives of the Admonition components.
 * @module 'admonition/primitives'
 */

const { withSlotRecipe, withNoRecipe } = createCerberusPrimitive(admonition)

/**
 * The `AdmonitionRoot` component is the container for the Admonition.
 */
export const AdmonitionRoot = withSlotRecipe('animateMotion', 'root', {
  defaultProps: {
    'data-scope': 'admonition',
    'data-part': 'root',
  },
})
export type AdmonitionRootProps = CerberusProps<'aside'> & AdmonitionVariantProps

/**
 * The `AdmonitionIndicator` component is the indicator for the Admonition.
 */
export const AdmonitionIndicator = withNoRecipe('span', {
  defaultProps: {
    'data-scope': 'admonition',
    'data-part': 'indicator',
  },
})
export type AdmonitionIndicatorProps = CerberusProps<'span'>

/**
 * The `AdmonitionContent` component is the content for the Admonition.
 */
export const AdmonitionContent = withNoRecipe('div', {
  defaultProps: {
    'data-scope': 'admonition',
    'data-part': 'content',
  },
})
export type AdmonitionContentProps = CerberusProps<'div'>

/**
 * The `AdmonitionHeading` component is the heading title for the Admonition.
 */
export const AdmonitionHeading = withSlotRecipe('p', 'heading', {
  defaultProps: {
    'data-scope': 'admonition',
    'data-part': 'heading',
  },
})
export type AdmonitionHeadingProps = CerberusProps<'p'> & AdmonitionVariantProps

/**
 * The `AdmonitionDescription` component is the description for the Admonition.
 */
export const AdmonitionDescription = withSlotRecipe('p', 'description', {
  defaultProps: {
    'data-scope': 'admonition',
    'data-part': 'description',
  },
})
export type AdmonitionDescriptionProps = CerberusProps<'p'> & AdmonitionVariantProps
