import type { SystemStyleObject } from '@pandacss/types'
import type { Sentiment } from '../../theme/semantic-tokens/types'
import { gradientValues, type GradientValue } from '../../utilities'

export type RecipePalette<K extends Sentiment[]> = K[]

/**
 * Creates a palette object for a slot recipe
 *
 * @param slots - Array of slot names
 * @param palettes - Array of palette names
 * @returns Object with the following shape:
 * {
 *  [palette]: {
 *   [slot]: {
 *   colorPalette: palette
 *  }
 * }
 */
export function getSlotRecipePalettes<
  const S extends string,
  const P extends Exclude<Sentiment, 'dataViz'>,
>(
  slots: S[],
  palettes: P[],
  initialValue?: Record<P, Record<S, Record<'colorPalette', Sentiment>>>,
): Record<P, Record<S, Record<'colorPalette', Sentiment>>> {
  return palettes.reduce(
    (acc, palette) => {
      acc[palette] = slots.reduce(
        (acc, slot) => {
          acc[slot] = {
            colorPalette: palette,
          }
          return acc
        },
        {} as Record<S, Record<'colorPalette', Sentiment>>,
      )
      return acc
    },
    initialValue ??
      ({} as Record<P, Record<S, Record<'colorPalette', Sentiment>>>),
  )
}

/**
 * A helper to create gradient palette variants
 * @returns An Object with the gradient name as key and the gradient value as
 * the value.
 * @example
 * ```tsx
 * {
 *  'amphiaraus-light': {
 *    gradient: 'amphiaraus-light',
 *  },
 * }
 * ```
 */
export function createGradientVariants(): Record<
  GradientValue,
  SystemStyleObject
> {
  return gradientValues.reduce((acc, value) => {
    return {
      ...acc,
      [value]: {
        gradient: value,
      },
    }
  }, {}) as Record<GradientValue, SystemStyleObject>
}

/**
 * A helper to create gradient palette variants
 * @returns An Object with the gradient name as key and the gradient value as
 * the value.
 * @example
 * ```tsx
 * {
 *  'amphiaraus-light': {
 *    root: {
 *     gradient: 'amphiaraus-light',
 *   },
 *  },
 * }
 * ```
 */
export function createSlotGradientVariants(): Record<
  GradientValue,
  Record<'root', SystemStyleObject>
> {
  return gradientValues.reduce((acc, value) => {
    return {
      ...acc,
      [value]: {
        root: {
          gradient: value,
        },
      },
    }
  }, {}) as Record<GradientValue, Record<'root', SystemStyleObject>>
}
