import type { ark } from '@ark-ui/react/factory'
import type { Dict, RecipeVariantFn, SlotRecipeVariantFn } from '@pandacss/types'
import type { CSSProperties, ElementType, PropsWithChildren } from 'react'
import type {
  AsProps,
  Assign,
  ComponentProps,
  JsxHTMLProps,
  JsxStyleProps,
  SlotRecipeVariantRecord,
  UnstyledProps,
} from 'styled-system/types'

// Method signatures for recipes

type RecipeBase = {
  splitVariantProps: (
    props: Record<string, unknown>,
  ) => [Record<string, unknown>, Record<string, unknown>]
}

export type CerberusRecipe = RecipeVariantFn<any> & RecipeBase
export type CerberusSlotRecipe<T extends string> = SlotRecipeVariantFn<
  string,
  SlotRecipeVariantRecord<T>
> &
  RecipeBase

export type CerberusPrimitiveRecipe = CerberusRecipe | CerberusSlotRecipe<string>

export type WithRecipeOptions = {
  /**
   * A set of static props to merge onto the component created
   */
  defaultProps?: Record<string, unknown>
  /**
   * Prop names to forward to the wrapped component even when they collide
   + with a Panda CSS property (for example Ark's `page`).
   */
  forwardProps?: string[]
}

export interface BaseCerberusProps
  extends ArkFactoryProps, JsxStyleProps, Dict, UnstyledProps, AsProps {
  /**
   * The CSS styles applied to the component. Supports CSS Properties
   * declarations and style objects.
   */
  style?: CSSProperties | Record<string, string>
}

export type CerberusProps<
  T extends ElementType,
  // eslint-disable-next-line @typescript-eslint/no-empty-object-type
  P extends Dict = {},
> = JsxHTMLProps<
  ComponentProps<T> & UnstyledProps & AsProps & ArkFactoryProps,
  Assign<JsxStyleProps, P>
>

// Primitive Response

export type CerberusPrimitiveProps<T> = PropsWithChildren<BaseCerberusProps> & T

export type CerberusPrimitiveEl<T extends ElementType = ElementType> = ElementType<
  CerberusProps<T>
>

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
