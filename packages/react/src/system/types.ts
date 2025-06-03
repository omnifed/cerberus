import type {
  RecipeVariantFn,
  RecipeVariantRecord,
  SlotRecipeVariantFn,
  SlotRecipeVariantRecord,
} from 'styled-system/types'
import type { WithCss } from '../types'
import type { ElementType, PropsWithChildren } from 'react'

// Method signatures for recipes

type RecipeBase = {
  splitVariantProps: (
    props: Record<string, unknown>,
  ) => [Record<string, unknown>, Record<string, unknown>]
}

export type CerberusRecipe = RecipeVariantFn<RecipeVariantRecord> & RecipeBase
export type CerberusSlotRecipe<T extends string> = SlotRecipeVariantFn<
  string,
  SlotRecipeVariantRecord<T>
> &
  RecipeBase

export type CerberusPrimitiveRecipe =
  | CerberusRecipe
  | CerberusSlotRecipe<string>

export type WithRecipeOptions = {
  defaultProps?: Record<string, unknown>
}

// Primitive Response

export type CerberusPrimitiveProps<T> = WithCss & PropsWithChildren<T>
export type CerberusPrimitiveEl<T> = ElementType<CerberusPrimitiveProps<T>>
