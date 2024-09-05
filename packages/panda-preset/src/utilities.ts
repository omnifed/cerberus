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

const cerberusGradient: CustomUtilityConfig<'cerberusGradient'> = {
  cerberusGradient: {
    className: 'cerberus-gradient',
    values: ['green', 'blue', 'purple', 'purple-100'],
    shorthand: 'cerbGradient',
    transform(value: 'green' | 'blue' | 'purple' | 'purple-100') {
      const color = '#21143B'
      switch (value) {
        case 'purple':
          return {
            color,
            backgroundImage:
              'linear-gradient(to bottom left, #EFE5F8, #BB93E1)',
          }

        case 'purple-100':
          return {
            color,
            backgroundImage:
              'linear-gradient(234deg, #5F00B5 -1.22%, #9F66D3 79.15%)',
          }

        case 'blue':
          return {
            color,
            backgroundImage:
              'linear-gradient(to bottom left, #E6F3FB, #9ACFEE)',
          }

        case 'green':
          return {
            color,
            backgroundImage:
              'linear-gradient(to bottom left, #E8F8ED, #71D192)',
          }

        default:
          break
      }
    },
  },
}

export const utilities = {
  extend: {
    ...mxi,
    ...pxi,
    ...cerberusGradient,
  },
}
