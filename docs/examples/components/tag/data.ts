import { TagProps } from '@cerberus-design/react'
import data from 'styled-system/specs/design-system.json'

export const tagData = data.recipes.tag
export const tagVariants = tagData.variants

export const tagGradients = tagVariants.gradient.values as TagProps['gradient'][]
export const tagShapes = tagVariants.shape.values as TagProps['shape'][]
export const tagPalettes = tagVariants.palette.values as TagProps['palette'][]
export const tagUsages = tagVariants.usage.values as TagProps['usage'][]

interface VariantProps {
  usage: TagProps['usage']
  shape: TagProps['shape']
}

export const variants: VariantProps[] = [
  { usage: 'filled', shape: 'pill' },
  { usage: 'outlined', shape: 'pill' },
  { usage: 'filled', shape: 'square' },
  { usage: 'outlined', shape: 'square' },
]
