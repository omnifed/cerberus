import type {
  CompositionStyleObject,
  LayerStyles,
  Recursive,
  TextStyles,
  Token,
} from '@pandacss/types'

export type { definePattern } from './patterns'

export type Simplify<T> = T extends unknown ? { [K in keyof T]: T[K] } : never

// Motion

export const defineAnimationStyles = (
  v: CompositionStyles['animationStyles'],
) => v

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

export type Headings = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
export type TextElements = 'p' | 'strong' | 'em' | 'small' | 'span'
