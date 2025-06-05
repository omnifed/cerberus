import {
  Menu as ArkMenu,
  type MenuRootProps as ArkMenuRootProps,
  type MenuTriggerProps as ArkMenuTriggerProps,
  type MenuTriggerItemProps as ArkMenuTriggerItemProps,
  type MenuIndicatorProps as ArkMenuIndicatorProps,
  type MenuPositionerProps as ArkMenuPositionerProps,
  type MenuContentProps as ArkMenuContentProps,
  type MenuItemProps as ArkMenuItemProps,
  type MenuItemGroupProps as ArkMenuItemGroupProps,
  type MenuItemGroupLabelProps as ArkMenuItemGroupLabelProps,
  type MenuSeparatorProps as ArkMenuSeparatorProps,
} from '@ark-ui/react'
import { menu } from 'styled-system/recipes'
import {
  createCerberusPrimitive,
  type CerberusPrimitiveProps,
} from '../../system/index'

/**
 * This module contains the Menu component primitives.
 * @module @cerberus-design/react/components/menu/primitives
 */

const { withSlotRecipe, withNoRecipe } = createCerberusPrimitive(menu)

// Root

export type MenuRootProps = CerberusPrimitiveProps<ArkMenuRootProps>
// @ts-expect-error this is a workaround for the type mismatch
export const MenuRoot = withSlotRecipe<MenuRootProps>(ArkMenu.Root, 'root')

// Trigger

export type MenuTriggerProps = CerberusPrimitiveProps<ArkMenuTriggerProps>
export const MenuTriggerEl = withNoRecipe<MenuTriggerProps>(ArkMenu.Trigger)

// TriggerItem

export type MenuTriggerItemProps =
  CerberusPrimitiveProps<ArkMenuTriggerItemProps>
export const MenuTriggerItem = withNoRecipe<MenuTriggerItemProps>(
  ArkMenu.TriggerItem,
)

// Indicator

export type MenuIndicatorProps = CerberusPrimitiveProps<ArkMenuIndicatorProps>
export const MenuIndicator = withNoRecipe<MenuIndicatorProps>(ArkMenu.Indicator)

// Positioner

export type MenuPositionerProps = CerberusPrimitiveProps<ArkMenuPositionerProps>
export const MenuPositioner = withNoRecipe<MenuPositionerProps>(
  ArkMenu.Positioner,
)

// Content

export type MenuContentProps = CerberusPrimitiveProps<ArkMenuContentProps>
export const MenuContentEl = withSlotRecipe<MenuContentProps>(
  ArkMenu.Content,
  'content',
)

// Item

export type MenuItemProps = CerberusPrimitiveProps<ArkMenuItemProps>
export const MenuItemEl = withSlotRecipe<MenuItemProps>(ArkMenu.Item, 'item')

// ItemGroup

export type MenuItemGroupProps = CerberusPrimitiveProps<ArkMenuItemGroupProps>
export const MenuItemGroupEl = withNoRecipe<MenuItemGroupProps>(
  ArkMenu.ItemGroup,
)

// ItemGroupLabel

export type MenuItemGroupLabelProps =
  CerberusPrimitiveProps<ArkMenuItemGroupLabelProps>
export const MenuItemGroupLabelEl = withSlotRecipe<MenuItemGroupLabelProps>(
  ArkMenu.ItemGroupLabel,
  'itemGroupLabel',
)

// Separator

export type MenuSeparatorProps = CerberusPrimitiveProps<ArkMenuSeparatorProps>
export const MenuSeparatorEl = withSlotRecipe<MenuSeparatorProps>(
  ArkMenu.Separator,
  'separator',
)
