import type { PropertyConfig } from '@pandacss/dev'

type CustomUtilityConfig<K extends string> = {
  [key in K]: PropertyConfig
}

const mxi: CustomUtilityConfig<'mxi'> = {
  mxi: {
    className: 'margin-inline-start-end',
    values: 'spacing',
    transform(value: string) {
      return {
        marginInlineStart: value,
        marginInlineEnd: value,
      }
    },
  },
}

const pxi: CustomUtilityConfig<'pxi'> = {
  pxi: {
    className: 'padding-inline-start-end',
    values: 'spacing',
    transform(value: string) {
      return {
        paddingInlineStart: value,
        paddingInlineEnd: value,
      }
    },
  },
}

export const utilities = {
  extend: {
    ...mxi,
    ...pxi,
  },
}
