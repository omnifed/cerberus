import type {
  CerberusComponent,
  HTMLCerberusProps,
  JsxStyleProps,
  RecipeVariantFn,
  RecipeVariantRecord,
  SlotRecipeVariantFn,
  SlotRecipeVariantRecord,
} from 'styled-system/types'
import type { ElementType, PropsWithChildren, CSSProperties } from 'react'
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

export interface BaseCerberusProps extends ArkFactoryProps, JsxStyleProps {
  /**
   * The CSS styles applied to the component. Supports CSS Properties
   * declarations and style objects.
   */
  style?: CSSProperties | Record<string, string>
}

// Primitive Response

export type CerberusPrimitiveProps<T> = PropsWithChildren<BaseCerberusProps & T>

export type CerberusPrimitiveEl<T extends ElementType = ElementType> =
  CerberusComponent<CerberusPrimitiveProps<T> & HTMLCerberusProps<T>>

// Factory

export interface ArkFactoryProps {
  /**
   * If true, the component will render as a child as the provided element
   * passing all the given props to the child.
   */
  asChild?: boolean
}

export type ArkPropsWithRef<T extends keyof typeof ark> = {
  [K in keyof (typeof ark)[T]]: K extends 'asChild' ? never : (typeof ark)[T][K]
} & ArkFactoryProps

export type CerberusFactoryFn = <T extends Record<string, unknown>>(
  component: keyof typeof ark,
  defaultProps?: T,
) => CerberusPrimitiveEl

export type CerberusFactoryObject = {
  [K in keyof typeof ark]: CerberusPrimitiveEl
}

export type CerberusFactory = CerberusFactoryFn & CerberusFactoryObject
