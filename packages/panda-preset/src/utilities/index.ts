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
  },
}
