import type { PropertyConfig } from '@pandacss/dev'
import { type GradientValue, getGradients } from '@cerberus/tokens'
// import { conditions } from '../conditions'
// import data from './gradient.data.json' with { type: 'json' }

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

const gradient: CustomUtilityConfig<'gradient'> = {
  gradient: {
    className: 'gradient',
    values: getGradients(),
    transform(value: GradientValue | 'progress' | 'complete') {
      // For some reason, we can only use dynamic token() argument values.
      // Creating dynamic objects for the return throws an error in NextJS.
      // const color = token(`colors.gradient.${value}.text.initial`)

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
        backgroundImage: `linear-gradient(to right, var(--cerberus-colors-${value}-start), var(--cerberus-colors-${value}-end))`,
        color: `var(--cerberus-colors-${value}-text)`,

        // // base
        // [conditions.lightMode]: {
        //   backgroundImage: token(`${data.lightToken}.${value}`),
        //   color,
        // },
        // [conditions.darkMode]: {
        //   backgroundImage: token(`${data.darkToken}.${value}`),
        //   color,
        // },
        // [conditions.systemMode]: {
        //   backgroundImage: token(`${data.darkToken}.${value}`),
        //   color,
        // },
        // // cerberus
        // [`[data-panda-theme=cerberus]${conditions.lightMode}`]: {
        //   backgroundImage: token(`${data.lightToken}.${value}`),
        //   color,
        // },
        // [`[data-panda-theme=cerberus]${conditions.darkMode}`]: {
        //   backgroundImage: token(`${data.darkToken}.${value}`),
        //   color,
        // },
        // [`[data-panda-theme=cerberus]${conditions.systemMode}`]: {
        //   backgroundImage: token(`${data.darkToken}.${value}`),
        //   color,
        // },
        // // acheron
        // [`[data-panda-theme=acheron]${conditions.lightMode}`]: {
        //   backgroundImage: token(`${data.acheronLightToken}.${value}`),
        //   color,
        // },
        // [`[data-panda-theme=acheron]${conditions.darkMode}`]: {
        //   backgroundImage: token(`${data.acheronDarkToken}.${value}`),
        //   color,
        // },
        // [`[data-panda-theme=acheron]${conditions.systemMode}`]: {
        //   backgroundImage: token(`${data.acheronDarkToken}.${value}`),
        //   color,
        // },
      }
    },
  },
}

const borderGradient: CustomUtilityConfig<'borderGradient'> = {
  borderGradient: {
    className: 'border-gradient',
    values: getGradients(),
    transform(value: GradientValue) {
      // For some reason, we can only use dynamic token() argument values.
      // Creating dynamic objects for the return throws an error in NextJS.
      const color = 'var(--cerberus-colors-page-text-initial)'
      const gradientBg =
        'conic-gradient(var(--cerberus-colors-page-surface-initial) 0 0),'

      return {
        backgroundImage:
          gradientBg +
          `var(--cerberus-colors-${value}-start), var(--cerberus-colors-${value}-end)`,
        color,

        // // base
        // [conditions.lightMode]: {
        //   backgroundImage: gradientBg + token(`${data.lightToken}.${value}`),
        //   color,
        // },
        // [conditions.darkMode]: {
        //   backgroundImage: gradientBg + token(`${data.darkToken}.${value}`),
        //   color,
        // },
        // [conditions.systemMode]: {
        //   backgroundImage: gradientBg + token(`${data.darkToken}.${value}`),
        //   color,
        // },

        // // cerberus
        // [`[data-panda-theme=cerberus]${conditions.lightMode}`]: {
        //   backgroundImage: gradientBg + token(`${data.lightToken}.${value}`),
        //   color,
        // },
        // [`[data-panda-theme=cerberus]${conditions.darkMode}`]: {
        //   backgroundImage: gradientBg + token(`${data.darkToken}.${value}`),
        //   color,
        // },
        // [`[data-panda-theme=cerberus]${conditions.systemMode}`]: {
        //   backgroundImage: gradientBg + token(`${data.darkToken}.${value}`),
        //   color,
        // },

        // // acheron
        // [`[data-panda-theme=acheron]${conditions.lightMode}`]: {
        //   backgroundImage:
        //     gradientBg + token(`${data.acheronLightToken}.${value}`),
        //   color,
        // },
        // [`[data-panda-theme=acheron]${conditions.darkMode}`]: {
        //   backgroundImage:
        //     gradientBg + token(`${data.acheronDarkToken}.${value}`),
        //   color,
        // },
        // [`[data-panda-theme=acheron]${conditions.systemMode}`]: {
        //   backgroundImage:
        //     gradientBg + token(`${data.acheronDarkToken}.${value}`),
        //   color,
        // },
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
  },
}
