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

export const size: CustomUtilityConfig<'size'> = {
  size: {
    className: 'size',
    values: 'sizing',
    transform(value: string) {
      return {
        height: value,
        width: value,
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
    transform(value: GradientValue | 'progress' | 'complete', { token }) {
      // For some reason, we can only use dynamic token() argument values.
      // Creating dynamic objects for the return throws an error in NextJS.
      const color = token(`colors.gradient.${value}.text.initial`)

      if (value === 'progress') {
        return {
          backgroundImage:
            'linear-gradient(to right, var(--cerberus-colors-data-viz-progress-start), var(--cerberus-colors-data-viz-progress-end))',
        }
      }

      if (value === 'complete') {
        return {
          backgroundImage:
            'linear-gradient(to right, var(--cerberus-colors-data-viz-progress-complete), var(--cerberus-colors-data-viz-progress-complete))',
        }
      }

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

const borderGradient: CustomUtilityConfig<'borderGradient'> = {
  borderGradient: {
    className: 'border-gradient',
    values: gradientValues,
    transform(value: GradientValue, { token }) {
      // For some reason, we can only use dynamic token() argument values.
      // Creating dynamic objects for the return throws an error in NextJS.
      const color = 'var(--cerberus-colors-page-text-initial)'
      const gradientBg =
        'conic-gradient(var(--cerberus-colors-page-surface-initial) 0 0),'

      return {
        // base
        [conditions.lightMode]: {
          backgroundImage: gradientBg + token(`${data.lightToken}.${value}`),
          color,
        },
        [conditions.darkMode]: {
          backgroundImage: gradientBg + token(`${data.darkToken}.${value}`),
          color,
        },
        [conditions.systemMode]: {
          backgroundImage: gradientBg + token(`${data.darkToken}.${value}`),
          color,
        },
        // cerberus
        [`[data-panda-theme=cerberus]${conditions.lightMode}`]: {
          backgroundImage: gradientBg + token(`${data.lightToken}.${value}`),
          color,
        },
        [`[data-panda-theme=cerberus]${conditions.darkMode}`]: {
          backgroundImage: gradientBg + token(`${data.darkToken}.${value}`),
          color,
        },
        [`[data-panda-theme=cerberus]${conditions.systemMode}`]: {
          backgroundImage: gradientBg + token(`${data.darkToken}.${value}`),
          color,
        },
        // acheron
        [`[data-panda-theme=acheron]${conditions.lightMode}`]: {
          backgroundImage:
            gradientBg + token(`${data.acheronLightToken}.${value}`),
          color,
        },
        [`[data-panda-theme=acheron]${conditions.darkMode}`]: {
          backgroundImage:
            gradientBg + token(`${data.acheronDarkToken}.${value}`),
          color,
        },
        [`[data-panda-theme=acheron]${conditions.systemMode}`]: {
          backgroundImage:
            gradientBg + token(`${data.acheronDarkToken}.${value}`),
          color,
        },
      }
    },
  },
}

const textGradient: CustomUtilityConfig<'textGradient'> = {
  textGradient: {
    className: 'text-gradient',
    values: gradientValues,
    transform(value: GradientValue, { token }) {
      // Text gradients use background-clip: text to show gradient through text
      const textGradientStyles = {
        backgroundClip: 'text',
        WebkitBackgroundClip: 'text',
        color: 'transparent',
      }

      return {
        // base
        [conditions.lightMode]: {
          backgroundImage: token(`${data.lightToken}.${value}`),
          ...textGradientStyles,
        },
        [conditions.darkMode]: {
          backgroundImage: token(`${data.darkToken}.${value}`),
          ...textGradientStyles,
        },
        [conditions.systemMode]: {
          backgroundImage: token(`${data.darkToken}.${value}`),
          ...textGradientStyles,
        },
        // cerberus
        [`[data-panda-theme=cerberus]${conditions.lightMode}`]: {
          backgroundImage: token(`${data.lightToken}.${value}`),
          ...textGradientStyles,
        },
        [`[data-panda-theme=cerberus]${conditions.darkMode}`]: {
          backgroundImage: token(`${data.darkToken}.${value}`),
          ...textGradientStyles,
        },
        [`[data-panda-theme=cerberus]${conditions.systemMode}`]: {
          backgroundImage: token(`${data.darkToken}.${value}`),
          ...textGradientStyles,
        },
        // acheron
        [`[data-panda-theme=acheron]${conditions.lightMode}`]: {
          backgroundImage: token(`${data.acheronLightToken}.${value}`),
          ...textGradientStyles,
        },
        [`[data-panda-theme=acheron]${conditions.darkMode}`]: {
          backgroundImage: token(`${data.acheronDarkToken}.${value}`),
          ...textGradientStyles,
        },
        [`[data-panda-theme=acheron]${conditions.systemMode}`]: {
          backgroundImage: token(`${data.acheronDarkToken}.${value}`),
          ...textGradientStyles,
        },
      }
    },
  },
}

export const utilities = {
  extend: {
    ...mxi,
    ...pxi,
    ...size,
    ...gradient,
    ...borderGradient,
    ...textGradient,
  },
}
