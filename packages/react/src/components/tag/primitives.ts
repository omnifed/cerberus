import {
  createCerberusPrimitive,
  type CerberusPrimitiveProps,
} from '../../system/index'
import { tag, type TagVariantProps } from 'styled-system/recipes'
import type { HTMLAttributes } from 'react'

const { withRecipe } = createCerberusPrimitive(tag)

export type TagRootProps = CerberusPrimitiveProps<
  Omit<HTMLAttributes<HTMLSpanElement>, 'onClick'> & TagVariantProps
>

export const TagRoot = withRecipe('span', {
  defaultProps: {
    'data-scope': 'tag',
    'data-part': 'root',
  },
})
