import {
  Toggle,
  type ToggleIndicatorProps as ArkToggleIndicatorProps,
  type ToggleRootProps as ArkToggleRootProps,
} from '@ark-ui/react/toggle'
import {
  createCerberusPrimitive,
  type CerberusPrimitiveProps,
} from '../../system/index'

/**
 * This module provides the Toggle primitives.
 * @module 'react/toggle'
 */

const { withNoRecipe } = createCerberusPrimitive()

// Root

export type ToggleRootProps = CerberusPrimitiveProps<ArkToggleRootProps>
export const ToggleRoot = withNoRecipe<ToggleRootProps>(Toggle.Root)

// Indicator

export type ToggleIndicatorProps =
  CerberusPrimitiveProps<ArkToggleIndicatorProps>
export const ToggleIndicator = withNoRecipe<ToggleIndicatorProps>(
  Toggle.Indicator,
)
