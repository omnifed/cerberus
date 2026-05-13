import { TagProps } from '@cerberus-design/react'
import specData from 'styled-system/specs/recipes.json'

export const tagData = specData.data.find((item) => item.name === 'tag')
export const tagVariants = tagData?.variants as Record<string, string[]>

export const tagGradients = (tagVariants?.gradient ?? []) as TagProps['gradient'][]
export const tagShapes = (tagVariants?.shape ?? []) as TagProps['shape'][]
export const tagPalettes = (tagVariants?.palette ?? []) as TagProps['palette'][]
export const tagUsages = (tagVariants?.usage ?? []) as TagProps['usage'][]

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
