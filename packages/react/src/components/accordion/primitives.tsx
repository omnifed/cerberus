'use client'

import { Accordion as ArkAccordion } from '@ark-ui/react/accordion'
import { ComponentProps, createSlotRecipeContext } from 'styled-system/jsx'
import { accordion } from 'styled-system/recipes'

const { withProvider, withContext } = createSlotRecipeContext(accordion)

// Root -----------------------------------------------------

export type AccordionRootProps = ComponentProps<typeof AccordionRoot>
export const AccordionRoot = withProvider(ArkAccordion.Root, 'root')

// Item -----------------------------------------------------

export type AccordionItemProps = ComponentProps<typeof AccordionItem>
export const AccordionItem = withContext(ArkAccordion.Item, 'item')

// ItemTrigger -----------------------------------------------

export type AccordionItemTriggerProps = ComponentProps<typeof AccordionItemTrigger>
export const AccordionItemTrigger = withContext(ArkAccordion.ItemTrigger, 'itemTrigger')

// ItemContent -----------------------------------------------

export type AccordionItemContentProps = ComponentProps<typeof AccordionItemContent>
export const AccordionItemContent = withContext(ArkAccordion.ItemContent, 'itemContent')

// ItemIndicator ---------------------------------------------

export type AccordionItemIndicatorProps = ComponentProps<typeof AccordionItemIndicator>
export const AccordionItemIndicator = withContext(
  ArkAccordion.ItemIndicator,
  'itemIndicator',
)
