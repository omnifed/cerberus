import { ark } from '@ark-ui/react/factory'
import {
  button,
  buttonGroup,
  type ButtonGroupVariantProps,
} from 'styled-system/recipes'
import {
  createCerberusPrimitive,
  type CerberusPrimitiveProps,
} from '../../system/index'

/**
 * This module contains the Button component primitives.
 * @module @cerberus-design/react/components/button/primitives
 */

const { withRecipe } = createCerberusPrimitive(button)
const { withRecipe: withGroupRecipe } = createCerberusPrimitive(buttonGroup)

/**
 * The root element of the Button component.
 */
export const ButtonRoot = withRecipe(ark.button)

/**
 * The ButtonGroup component is a wrapper that groups multiple Button
 * components together.
 */
export const ButtonGroup = withGroupRecipe(ark.div)
export type ButtonGroupProps = CerberusPrimitiveProps<HTMLDivElement> &
  ButtonGroupVariantProps
