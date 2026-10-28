import { createTextStyles } from '@cerberus/tokens'
import { defineTextStyles } from '@pandacss/dev'
import type { TextStyles } from '@pandacss/types'

export const textStyles: TextStyles = defineTextStyles({
  ...createTextStyles(),
  link: {
    description: 'Used for inline text links.',
    value: {
      textDecoration: 'underline',
    },
  },
})
