import type { UtilityConfig } from '@pandacss/types'

export function defineUtility<T extends UtilityConfig>(config: T) {
  return config
}

const mxi = defineUtility({
  mxi: {
    description:
      'x-axis margin shorthand - used to set inline margin at the start and end of an element',
    className: 'margin-inline-start-end',
    values: 'spacing',
    transform(value) {
      return {
        marginInlineStart: value,
        marginInlineEnd: value,
      }
    },
  },
})

const pxi = defineUtility({
  pxi: {
    description:
      'x-axis padding shorthand - used to set inline padding at the start and end of an element',
    className: 'padding-inline-start-end',
    values: 'spacing',
    transform(value) {
      return {
        paddingInlineStart: value,
        paddingInlineEnd: value,
      }
    },
  },
})

export const utilities = {
  extend: {
    ...mxi,
    ...pxi,
  },
}
