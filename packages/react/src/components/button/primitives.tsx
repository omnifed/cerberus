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
import type { HTMLAttributes } from 'react'

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

const ButtonGroupEl = withGroupRecipe(ark.div)
export type ButtonGroupProps = CerberusPrimitiveProps<
  HTMLAttributes<HTMLDivElement> & ButtonGroupVariantProps
>

/**
 * The ButtonGroup component is a wrapper that groups multiple Button
 * components together.
 */
export function ButtonGroup(props: ButtonGroupProps) {
  return <ButtonGroupEl {...props} />
}
