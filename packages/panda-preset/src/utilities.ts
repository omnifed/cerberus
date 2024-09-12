import type { PropertyConfig } from '@pandacss/dev'

export type CustomUtilityConfig<K extends string> = {
  [key in K]: PropertyConfig
}

export type GradientValue =
  | 'light-purple'
  | 'dark-purple'
  | 'green'
  | 'light-blue'
  | 'red'
  | 'neutral'
  | 'yellow'
  | 'teal'
  | 'light-teal'

export const gradientValues: GradientValue[] = [
  'light-purple',
  'dark-purple',
  'green',
  'light-blue',
  'red',
  'neutral',
  'yellow',
  'teal',
  'light-teal',
]

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
    values: gradientValues,
    shorthand: 'cerbGradient',
    transform(value: GradientValue) {
      const color = '#21143B'
      switch (value) {
        case 'light-purple':
          return {
            color,
            backgroundImage:
              'linear-gradient(216deg, #EFE5F8 -4.93%, #BB93E1 116.78%)',
          }
        case 'dark-purple':
          return {
            backgroundImage:
              'linear-gradient(234deg, #5F00B5 -1.22%, #9F66D3 79.15%)',
          }
        case 'light-blue':
          return {
            color,
            backgroundImage:
              'linear-gradient(207deg, #E6F3FB 16.67%, #9ACFEE 100%)',
          }
        case 'green':
          return {
            color,
            backgroundImage:
              'linear-gradient(103deg, #71D192 -78.15%, #E8F8ED 129.96%)',
          }
        case 'red':
          return {
            backgroundImage:
              'linear-gradient(248deg, #FED7D5 -29.66%, #FC5E57 162.95%)',
          }
        case 'neutral':
          return {
            backgroundImage:
              'linear-gradient(220deg, #918EA7 -10.94%, #E4E3E9 108.06%)',
          }
        case 'yellow':
          return {
            backgroundImage:
              'linear-gradient(216deg, #FEFBE9 -4.93%, #F4DA49 116.78%)',
          }
        case 'teal':
          return {
            backgroundImage:
              'linear-gradient(216deg, #102D2D -4.93%, #3B8180 116.78%)',
          }
        case 'light-teal':
          return {
            backgroundImage:
              'linear-gradient(216deg, #D8F9F7 -4.93%, #72E9E7 116.78%)',
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
