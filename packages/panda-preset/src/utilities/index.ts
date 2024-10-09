import type { PropertyConfig } from '@pandacss/dev'
import { conditions } from '../conditions'
import data from './gradient.data.json' with { type: 'json' }

/**
 * Note: Panda is very particular with utility configs. It doesn't like dynamic
 * utility configs or importing them from other files. Until this is resolved,
 * we'll have to define the utility config in the same file.
 */

export type CustomUtilityConfig<K extends string> = {
  [key in K]: PropertyConfig
}

export type DeprecatedGradientValue =
  | 'light-purple'
  | 'dark-purple'
  | 'green'
  | 'light-blue'
  | 'red'
  | 'neutral'
  | 'yellow'
  | 'teal'
  | 'light-teal'

export const gradientValues_deprecated: DeprecatedGradientValue[] = [
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

/**
 * @deprecated
 * Use `gradient` instead
 */
const cerberusGradient: CustomUtilityConfig<'cerberusGradient'> = {
  cerberusGradient: {
    className: 'cerberus-gradient',
    values: gradientValues_deprecated,
    shorthand: 'cerbGradient',
    transform(value: DeprecatedGradientValue) {
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

export const mxi: CustomUtilityConfig<'mxi'> = {
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

export const pxi: CustomUtilityConfig<'pxi'> = {
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

export type GradientValue =
  | 'charon-light'
  | 'charon-dark'
  | 'nyx-light'
  | 'nyx-dark'
  | 'amphiaraus-light'
  | 'amphiaraus-dark'
  | 'styx-light'
  | 'styx-dark'
  | 'thanatos-light'
  | 'thanatos-dark'
  | 'hades-light'
  | 'hades-dark'
  | 'asphodel-light'
  | 'asphodel-dark'

export const gradientValues: GradientValue[] = [
  'charon-light',
  'charon-dark',
  'nyx-light',
  'nyx-dark',
  'amphiaraus-light',
  'amphiaraus-dark',
  'styx-light',
  'styx-dark',
  'thanatos-light',
  'thanatos-dark',
  'hades-light',
  'hades-dark',
  'asphodel-light',
  'asphodel-dark',
]

const gradient: CustomUtilityConfig<'gradient'> = {
  gradient: {
    className: 'gradient',
    values: gradientValues,
    transform(value: GradientValue, { token }) {
      // For some reason, we can only use dynamic token() argument values.
      // Creating dynamic objects for the return throws an error in NextJS.
      const color = token(`colors.gradient.${value}.text.initial`)
      return {
        // base
        [conditions.lightMode]: {
          backgroundImage: token(`${data.lightToken}.${value}`),
          color,
        },
        [conditions.darkMode]: {
          backgroundImage: token(`${data.darkToken}.${value}`),
          color,
        },
        [conditions.systemMode]: {
          backgroundImage: token(`${data.darkToken}.${value}`),
          color,
        },
        // cerberus
        [`[data-panda-theme=cerberus]${conditions.lightMode}`]: {
          backgroundImage: token(`${data.lightToken}.${value}`),
          color,
        },
        [`[data-panda-theme=cerberus]${conditions.darkMode}`]: {
          backgroundImage: token(`${data.darkToken}.${value}`),
          color,
        },
        [`[data-panda-theme=cerberus]${conditions.systemMode}`]: {
          backgroundImage: token(`${data.darkToken}.${value}`),
          color,
        },
        // acheron
        [`[data-panda-theme=acheron]${conditions.lightMode}`]: {
          backgroundImage: token(`${data.acheronLightToken}.${value}`),
          color,
        },
        [`[data-panda-theme=acheron]${conditions.darkMode}`]: {
          backgroundImage: token(`${data.acheronDarkToken}.${value}`),
          color,
        },
        [`[data-panda-theme=acheron]${conditions.systemMode}`]: {
          backgroundImage: token(`${data.acheronDarkToken}.${value}`),
          color,
        },
      }
    },
  },
}

export const utilities = {
  extend: {
    ...mxi,
    ...pxi,
    ...gradient,
    ...cerberusGradient,
  },
}
