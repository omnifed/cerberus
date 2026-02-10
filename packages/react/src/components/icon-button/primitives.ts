import { ark, type HTMLArkProps } from '@ark-ui/react/factory'
import { iconButton, type IconButtonVariantProps } from 'styled-system/recipes'
import { CerberusProps, createCerberusPrimitive } from '../../system/index'

/**
 * This module contains the IconButton component primitives.
 * @module @cerberus-design/react/components/icon-button/primitives
 */

const { withRecipe } = createCerberusPrimitive(iconButton)

interface IconButtonBaseProps
  extends HTMLArkProps<'button'>, IconButtonVariantProps {}
export type IconButtonRootProps = CerberusProps<'button'> & IconButtonBaseProps

export const IconButtonRoot = withRecipe(ark.button)
