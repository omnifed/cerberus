import type { PropertyConfig } from '@pandacss/dev'
import { type GradientValue, getGradients } from '@cerberus/tokens'

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
    shorthand: 'grad',
    values: getGradients(),
    transform(value: GradientValue | 'progress' | 'complete', { token }) {
      // For some reason, token() doesn't work in condition blocks?
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
        backgroundImage: `linear-gradient(to bottom left, ${token(`colors.gradient.${value}.start`)}, ${token(`colors.gradient.${value}.end`)})`,
        color: token(`colors.gradient.${value}.text`),
      }
    },
  },
}

const borderGradient: CustomUtilityConfig<'borderGradient'> = {
  borderGradient: {
    className: 'border-gradient',
    shorthand: 'borderGrad',
    values: getGradients(),
    transform(value: GradientValue, { token }) {
      return {
        backgroundImage: `conic-gradient(${token('colors.page.surface.initial')} 0 0), linear-gradient(to right, ${token(`colors.gradient.${value}.start`)}, ${token(`colors.gradient.${value}.end`)})`,
        color: token(`colors.page.text.initial`),
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
