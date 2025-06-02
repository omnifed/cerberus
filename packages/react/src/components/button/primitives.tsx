import { ark } from '@ark-ui/react/factory'
import { button, type ButtonRecipe } from 'styled-system/recipes'
import { createCerberusPrimitive } from '../../system/index'

/**
 * This module contains the Button component primitives.
 * @module @cerberus-design/react/components/button/primitives
 */

const { withRecipe } = createCerberusPrimitive<ButtonRecipe>(button)

/**
 * The root element of the Button component.
 */
export const ButtonRoot = withRecipe(ark.button)
