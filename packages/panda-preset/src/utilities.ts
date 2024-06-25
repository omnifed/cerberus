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
    values: ['green', 'blue', 'purple'],
    shorthand: 'cerbGradient',
    transform(value: 'green' | 'blue' | 'purple') {
      switch (value) {
        case 'purple':
          return {
            bgGradient: 'to-tl',
            gradientFrom: '#EFE5F8',
            gradientTo: '#BB93E1',
          }

        case 'blue':
          return {
            bgGradient: 'to-tl',
            gradientFrom: '#E6F3FB',
            gradientTo: '#9ACFEE',
          }

        case 'green':
          return {
            bgGradient: 'to-tl',
            gradientFrom: '#71D192',
            gradientTo: '#E8F8ED',
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
