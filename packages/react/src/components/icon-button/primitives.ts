import { iconButton, type IconButtonVariantProps } from 'styled-system/recipes'
import { cerberus } from '../../system/index'
import type { CerberusProps } from '../../system/types'

export type IconButtonRootProps = CerberusProps<'button'> & IconButtonVariantProps
export const IconButtonRoot = cerberus('button', iconButton, {
  defaultProps: {
    'data-scope': 'icon-button',
    'data-part': 'root',
  },
})
