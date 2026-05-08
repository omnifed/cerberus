import { ComboboxProps } from '@cerberus-design/react'
import recipeSpecs from 'styled-system/specs/recipes.json'

export const recipeMeta = recipeSpecs.data.find((item) => item.name === 'combobox')

export const sizes = (recipeMeta?.variants?.size ?? []) as ComboboxProps['size'][]
export const defaultSize = recipeMeta?.defaultVariants?.size as ComboboxProps['size']
