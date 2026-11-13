'use client'

import { ark } from '@ark-ui/react/factory'
import { createSlotRecipeContext, type ComponentProps } from 'styled-system/jsx'
import { admonition } from 'styled-system/recipes'

const { withProvider, withContext } = createSlotRecipeContext(admonition)

const getDefaultProps = (part: string) => ({
  'data-scope': 'admonition',
  'data-part': part,
})

// Root -----------------------------------------------------

export type AdmonitionRootProps = ComponentProps<typeof AdmonitionRoot>
export const AdmonitionRoot = withProvider(ark.div, 'root', {
  defaultProps: getDefaultProps('root'),
})

// Indicator ------------------------------------------------

export type AdmonitionIndicatorProps = ComponentProps<
  typeof AdmonitionIndicator
>
export const AdmonitionIndicator = withContext(ark.span, 'indicator', {
  defaultProps: getDefaultProps('indicator'),
})

// Content --------------------------------------------------

export type AdmonitionContentProps = ComponentProps<typeof AdmonitionContent>
export const AdmonitionContent = withContext(ark.div, 'content', {
  defaultProps: getDefaultProps('content'),
})

// Heading --------------------------------------------------

export type AdmonitionHeadingProps = ComponentProps<typeof AdmonitionHeading>
export const AdmonitionHeading = withContext(ark.p, 'heading', {
  defaultProps: getDefaultProps('heading'),
})

// Description ----------------------------------------------

export type AdmonitionDescriptionProps = ComponentProps<
  typeof AdmonitionDescription
>
export const AdmonitionDescription = withContext(ark.p, 'description', {
  defaultProps: getDefaultProps('description'),
})
