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

interface IconButtonBaseProps
  extends HTMLArkProps<'button'>,
    IconButtonVariantProps {}
export type IconButtonRootProps = CerberusPrimitiveProps<IconButtonBaseProps>

export const IconButtonRoot = withRecipe(ark.button)
