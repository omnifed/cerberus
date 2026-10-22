import type { PropertyConfig, TokenFn } from '@pandacss/types'

/**
 * This module contains utility functions for creating focus ring styles.
 */

export function createFocusRing(selector: string): PropertyConfig {
  return {
    values: ['outside', 'inside', 'mixed', 'none'],
    transform(value: any, { token }: any) {
      const focusRingColor = token('colors.action.border.focus')
      const styles: Record<string, any> = {
        inside: {
          '--focus-ring-color': focusRingColor,
          [selector]: {
            outlineOffset: '0px',
            outlineWidth: 'var(--focus-ring-width, 1px)',
            outlineColor: 'var(--focus-ring-color)',
            outlineStyle: 'var(--focus-ring-style, solid)',
            borderColor: 'var(--focus-ring-color)',
          },
        },
        outside: {
          '--focus-ring-color': focusRingColor,
          [selector]: {
            outlineWidth: 'var(--focus-ring-width, 2px)',
            outlineOffset: 'var(--focus-ring-offset, 2px)',
            outlineStyle: 'var(--focus-ring-style, solid)',
            outlineColor: 'var(--focus-ring-color)',
          },
        },
        mixed: {
          '--focus-ring-color': focusRingColor,
          [selector]: {
            outlineWidth: 'var(--focus-ring-width, 3px)',
            outlineStyle: 'var(--focus-ring-style, solid)',
            outlineColor:
              'color-mix(in srgb, var(--focus-ring-color), transparent 60%)',
            borderColor: 'var(--focus-ring-color)',
          },
        },
        none: {
          '--focus-ring-color': focusRingColor,
          [selector]: {
            outline: 'none',
          },
        },
      }

      return styles[value] ?? {}
    },
  }
}

export function assignGradientVars(
  value: string,
  token: TokenFn,
): Record<string, string> {
  switch (value) {
    case 'progress':
      return {
        '--gradient-dir': 'to right',
        '--gradient-bg-start': token('colors.dataViz.progress.start'),
        '--gradient-bg-end': token('colors.dataViz.progress.end'),
      }
    case 'complete':
      return {
        '--gradient-dir': 'to right',
        '--gradient-bg-start': token('colors.dataViz.progress.complete'),
        '--gradient-bg-end': token('colors.dataViz.progress.complete'),
      }
    default:
      return {
        '--gradient-dir': 'to bottom left',
        '--gradient-bg-start': token(`colors.gradient.${value}.start`),
        '--gradient-bg-end': token(`colors.gradient.${value}.end`),
        '--gradient-fg': token(`colors.gradient.${value}.text`),
      }
  }
}
