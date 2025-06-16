import type {
  RecipeVariantFn,
  RecipeVariantRecord,
  SlotRecipeVariantFn,
  SlotRecipeVariantRecord,
} from 'styled-system/types'
import type { WithCss } from '../types'
import type { ElementType, PropsWithChildren } from 'react'
import type { ark } from '@ark-ui/react/factory'

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
export type CerberusPrimitiveEl<T = object> = ElementType<
  CerberusPrimitiveProps<T>
>

// Factory

export type ArkPropsWithRef<T extends keyof typeof ark> = {
  [K in keyof (typeof ark)[T]]: K extends 'asChild' ? never : (typeof ark)[T][K]
} & {
  asChild?: boolean
}

export type CerberusFactoryFn = <T extends Record<string, unknown>>(
  component: keyof typeof ark,
  defaultProps?: T,
) => CerberusPrimitiveEl

export type CerberusFactoryObject = {
  [K in keyof typeof ark]: CerberusPrimitiveEl
}

export type CerberusFactory = CerberusFactoryFn & CerberusFactoryObject
