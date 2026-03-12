import { group, type GroupVariantProps } from 'styled-system/recipes'
import { type CerberusProps, createCerberusPrimitive } from '../../system/index'

const { withRecipe } = createCerberusPrimitive(group)

export type GroupProps = CerberusProps<'div'> & GroupVariantProps
export const Group = withRecipe('div')
