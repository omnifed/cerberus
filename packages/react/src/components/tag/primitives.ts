import type { ComponentProps } from 'react'
import { closableTag, gradientTag, tag } from 'styled-system/recipes'
import { cerberus } from '../../system/index'

/**
 * This module contains the Tag component primitives. Each one is a `<span>`
 * styled by its own plain (non-slot) recipe; all render the same
 * `data-scope="tag"` / `data-part="root"` attributes.
 * @module @cerberus/react/components/tag/primitives
 */

const defaultProps = { 'data-scope': 'tag', 'data-part': 'root' }

// Root (filled) --------------------------------------------

export type TagRootProps = ComponentProps<typeof TagRoot>
export const TagRoot = cerberus('span', tag, { defaultProps })

// Gradient -------------------------------------------------

export type TagGradientProps = ComponentProps<typeof TagGradient>
export const TagGradient = cerberus('span', gradientTag, { defaultProps })

// ClosableRoot ---------------------------------------------

export type TagClosableRootProps = ComponentProps<typeof TagClosableRoot>
export const TagClosableRoot = cerberus('span', closableTag, { defaultProps })

// v1 names of the primitives
export const FilledTag = TagRoot
export const GradientTag = TagGradient
export const ClosableTagRoot = TagClosableRoot
