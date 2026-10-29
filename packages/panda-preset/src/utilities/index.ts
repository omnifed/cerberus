import { type GradientValue, getGradients } from '@cerberus/tokens'
import { defineUtility, type Config } from '@pandacss/dev'
import type { PropertyConfig } from '@pandacss/types'
import { assignGradientVars, createFocusRing } from './helpers'

/**
 * Note: Panda is very particular with utility configs. It doesn't like dynamic
 * utility configs or importing them from other files. Until this is resolved,
 * we'll have to define the utility config in the same file.
 */

export const size = defineUtility({
  className: 'size',
  values: 'sizing',
  transform(value: string) {
    return {
      height: value,
      width: value,
    }
  },
})

const gradient = defineUtility({
  className: 'gradient',
  shorthand: 'grad',
  values: [...getGradients(), 'none'],
  globalVars: {
    '--gradient-dir': { syntax: '*', inherits: false },
    '--gradient-bg-start': { syntax: '<color>', inherits: false },
    '--gradient-bg-end': { syntax: '<color>', inherits: false },
    '--graident-fg': { syntax: '<color>', inherits: false },
  },
  transform(value: GradientValue | 'progress' | 'complete' | 'none', { token }) {
    const vars = assignGradientVars(value, token)

    if (value === 'none') {
      return { backgroundImage: 'initial' }
    }

    return {
      ...vars,
      backgroundImage:
        'linear-gradient(var(--gradient-dir), var(--gradient-bg-start), var(--gradient-bg-end))',
      color: 'var(--gradient-fg)',
    }
  },
})

const borderGradient = defineUtility({
  className: 'border-gradient',
  shorthand: 'borderGrad',
  values: getGradients(),
  transform(value: GradientValue, { token }) {
    return {
      backgroundImage: `conic-gradient(${token('colors.page.surface.initial')} 0 0), linear-gradient(to right, ${token(`colors.gradient.${value}.start`)}, ${token(`colors.gradient.${value}.end`)})`,
      color: token(`colors.page.text.initial`),
    }
  },
})

export const utilities: Config['utilities'] = {
  extend: {
    size,
    gradient,
    borderGradient,

    focusVisibleRing: defineUtility(
      createFocusRing('&:is(:focus-visible, [data-focus-visible])'),
    ),
    focusRingColor: defineUtility({
      values: 'colors',
      transform(value: string, { utils }) {
        const prop = '--focus-ring-color'
        const mix = utils.colorMix(value)
        if (mix.invalid) return { [prop]: value }
        const cssVar = '--mix-' + prop
        return {
          [cssVar]: mix.value,
          [prop]: `var(${cssVar}, ${mix.color})`,
        }
      },
    }),
    focusRingOffset: defineUtility({
      values: 'spacing',
      transform: (v: string) => ({ '--focus-ring-offset': v }),
    }),
    focusRingWidth: defineUtility({
      values: 'borderWidths',
      property: 'outlineWidth',
      transform: (v: string) => ({ '--focus-ring-width': v }),
    }),
    focusRingStyle: defineUtility({
      values: 'borderStyles',
      property: 'outlineStyle',
      transform: (v: string) => ({ '--focus-ring-style': v }),
    }),
  },
}
