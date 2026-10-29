import {
  type FilledTagProps,
  type GradientTagProps,
  TagProps,
} from '@cerberus-design/react'
import { type StrictNonNullable } from '@cerberus/panda-preset'
import data from 'styled-system/specs/design-system.json'

const gradTag = data.recipes.gradientTag
export const gradTagVariants = gradTag.variants

export const gradTagGradients = gradTagVariants.gradient.values as StrictNonNullable<
  GradientTagProps['gradient']
>[]

export const tagData = data.recipes.tag
export const tagVariants = tagData.variants

export const tagShapes = tagVariants.shape.values as FilledTagProps['shape'][]
export const tagPalettes = tagVariants.palette.values as FilledTagProps['palette'][]
export const tagUsages = tagVariants.usage.values as TagProps['usage'][]

type VariantProps = {
  usage: FilledTagProps['usage']
  shape: FilledTagProps['shape']
}

export const variants: VariantProps[] = [
  { usage: 'filled', shape: 'pill' },
  { usage: 'outlined', shape: 'pill' },
  { usage: 'filled', shape: 'square' },
  { usage: 'outlined', shape: 'square' },
]

type GradVariantProps = {
  shape: GradientTagProps['shape']
  usage: GradientTagProps['usage']
}

export const gradVariants: GradVariantProps[] = [
  { usage: undefined, shape: 'pill' },
  { usage: 'outlined', shape: 'pill' },
  { usage: undefined, shape: 'square' },
  { usage: 'outlined', shape: 'square' },
]
