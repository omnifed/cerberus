import { ark } from '@ark-ui/react/factory'
import { HTMLAttributes } from 'react'
import { iconButton, type IconButtonVariantProps } from 'styled-system/recipes'
import {
  CerberusPrimitiveProps,
  createCerberusPrimitive,
} from '../../system/index'

/**
 * This module contains the IconButton component primitives.
 * @module @cerberus-design/react/components/icon-button/primitives
 */

const { withRecipe } = createCerberusPrimitive(iconButton)

export type IconButtonRootProps = CerberusPrimitiveProps<
  HTMLAttributes<HTMLButtonElement> & IconButtonVariantProps
>
export const IconButtonRoot = withRecipe(ark.button)
