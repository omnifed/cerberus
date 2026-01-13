import { defineTextStyles, type TextStyles } from '@pandacss/dev'
import { createTextStyles } from '@cerberus/tokens'

export const textStyles: TextStyles = defineTextStyles({
  ...createTextStyles(),
  link: {
    description: 'Used for inline text links.',
    value: {
      textDecoration: 'underline',
    },
  },
})
