import { ark } from '@ark-ui/react/factory'
import { button } from 'styled-system/recipes'
import { createCerberusPrimitive } from '../../system/index'

/**
 * This module contains the Button component primitives.
 * @module @cerberus-design/react/components/button/primitives
 */

const { withRecipe } = createCerberusPrimitive(button)

/**
 * The root element of the Button component.
 */
export const ButtonRoot = withRecipe(ark.button)
