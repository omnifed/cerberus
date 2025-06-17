import { ark, type HTMLArkProps } from '@ark-ui/react/factory'
import { iconButton, type IconButtonVariantProps } from 'styled-system/recipes'
import {
  createCerberusPrimitive,
  type CerberusPrimitiveProps,
} from '../../system/index'

/**
 * This module contains the IconButton component primitives.
 * @module @cerberus-design/react/components/icon-button/primitives
 */

const { withRecipe } = createCerberusPrimitive(iconButton)

/**
 * The root element of the Button component.
 */
export type IconButtonRootProps = CerberusPrimitiveProps<
  HTMLArkProps<'button'> & IconButtonVariantProps
>
export const IconButtonRoot = withRecipe(ark.button)
