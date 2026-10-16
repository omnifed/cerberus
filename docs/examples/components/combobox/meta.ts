import { type ComboboxProps } from '@cerberus-design/react'
import data from 'styled-system/specs/design-system.json'

export const recipeMeta = data.slotRecipes.combobox

export const sizes = recipeMeta.variants.size.values as ComboboxProps<unknown>['size'][]
export const defaultSize = recipeMeta.defaultVariants
  .size as ComboboxProps<unknown>['size']
