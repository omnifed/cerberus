import { iconButton, type IconButtonVariantProps } from 'styled-system/recipes'
import { type CerberusProps, createCerberusPrimitive } from '../../system/index'

/**
 * This module contains the IconButton component primitives.
 * @module @cerberus-design/react/components/icon-button/primitives
 */

const { withRecipe } = createCerberusPrimitive(iconButton)

export type IconButtonRootProps = CerberusProps<'button'> & IconButtonVariantProps
export const IconButtonRoot = withRecipe('button', {
  defaultProps: {
    'data-scope': 'icon-button',
    'data-part': 'root',
  },
})
