import type {
  CompositionStyleObject,
  LayerStyles,
  Recursive,
  TextStyles,
  Token,
} from '@pandacss/types'

export type { definePattern } from './patterns'

/**
 * Create a type object of key value pairs based on the argument provided.
 */
export type Simplify<T> = T extends unknown ? { [K in keyof T]: T[K] } : never

/**
 * Strips `undefined` from Unions where `NonNullable` fails to do so.
 */
export type StrictNonNullable<T> = T extends {} ? Exclude<T, null | undefined> : never

// Motion

export const defineAnimationStyles = (v: CompositionStyles['animationStyles']) => v

type AnimationStyleProperty =
  | 'animation'
  | 'animationComposition'
  | 'animationDelay'
  | 'animationDirection'
  | 'animationDuration'
  | 'animationFillMode'
  | 'animationIterationCount'
  | 'animationName'
  | 'animationPlayState'
  | 'animationTimingFunction'
  | 'animationRange'
  | 'animationRangeStart'
  | 'animationRangeEnd'
  | 'animationTimeline'
  | 'transformOrigin'

export type AnimationStyle = CompositionStyleObject<AnimationStyleProperty>

export type AnimationStyles = Recursive<Token<AnimationStyle>>

export interface CompositionStyles {
  textStyles: TextStyles
  layerStyles: LayerStyles
  animationStyles: AnimationStyles
}
