import {
  Collapsible,
  type CollapsibleRootProviderProps as ArkCollapsibleProviderProps,
  type CollapsibleRootProps as ArkCollapsibleRootProps,
  type CollapsibleTriggerProps as ArkCollapsibleTriggerProps,
  type CollapsibleIndicatorProps as ArkCollapsibleIndicatorProps,
  type CollapsibleContentProps as ArkCollapsibleContentProps,
} from '@ark-ui/react/collapsible'
import {
  collapsible,
  type CollapsibleVariantProps,
} from 'styled-system/recipes'
import {
  createCerberusPrimitive,
  type CerberusPrimitiveProps,
} from '../../system/index'

/**
 * This module contains all the primitives of the Collapsible component.
 * @module 'collapsible'
 */

const { withSlotRecipe, withNoRecipe } = createCerberusPrimitive(collapsible)

// Provider

export type CollapsibleProviderProps = ArkCollapsibleProviderProps
export const CollapsibleRootProvider = withNoRecipe(Collapsible.RootProvider)

// Root

export type CollapsibleRootProps =
  CerberusPrimitiveProps<ArkCollapsibleRootProps>
export const CollapsibleRoot = withNoRecipe(Collapsible.Root)

// Trigger

export type CollapsibleTriggerProps =
  CerberusPrimitiveProps<ArkCollapsibleTriggerProps>
export const CollapsibleTrigger = withNoRecipe(Collapsible.Trigger)

// Indicator

export type CollapsibleIndicatorProps =
  CerberusPrimitiveProps<ArkCollapsibleIndicatorProps>
export const CollapsibleIndicator = withNoRecipe(Collapsible.Indicator)

// Content

export type CollapsibleContentProps = CerberusPrimitiveProps<
  ArkCollapsibleContentProps & CollapsibleVariantProps
>
export const CollapsibleContent = withSlotRecipe(Collapsible.Content, 'content')
