import {
  Fieldset,
  type FieldsetHelperTextProps as ArkFieldsetHelperText,
  type FieldsetLegendProps as ArkFieldsetLegendProps,
  type FieldsetRootProps as ArkFieldsetRootProps,
} from '@ark-ui/react/fieldset'
import { fieldset, type FieldsetVariantProps } from 'styled-system/recipes'
import {
  createCerberusPrimitive,
  type CerberusPrimitiveProps,
} from '../../system/index'

/**
 * This module contains all the primitives of the Fieldset component.
 * @module 'react/fieldset'
 */

const { withSlotRecipe } = createCerberusPrimitive(fieldset)

// Root

export const FieldsetRoot = withSlotRecipe<FieldsetRootProps>(
  Fieldset.Root,
  'root',
)
export type FieldsetRootProps = CerberusPrimitiveProps<
  ArkFieldsetRootProps & FieldsetVariantProps
>

// Legend

export type FieldsetLegendProps = CerberusPrimitiveProps<
  ArkFieldsetLegendProps & FieldsetVariantProps
>
export const FieldsetLegend = withSlotRecipe<FieldsetLegendProps>(
  Fieldset.Legend,
  'legend',
)

// Helper Text

export type FieldsetHelperTextProps = CerberusPrimitiveProps<
  ArkFieldsetHelperText & FieldsetVariantProps
>
export const FieldsetHelperText = withSlotRecipe<FieldsetHelperTextProps>(
  Fieldset.HelperText,
  'helperText',
)

// Error Text

export type FieldsetErrorTextProps =
  CerberusPrimitiveProps<ArkFieldsetHelperText>
export const FieldsetErrorText = withSlotRecipe<FieldsetErrorTextProps>(
  Fieldset.ErrorText,
  'errorText',
)
