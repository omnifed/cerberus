import { type ComponentProps } from 'react'
import { closableTag, gradientTag, tag } from 'styled-system/recipes'
import { cerberus } from '../../system'
import { type IconButtonProps } from '../icon-button'

export const defaultProps = {
  'data-scope': 'tag',
  'data-part': 'root',
}

// FilledTag -----------------------------------------------------

export type FilledTagProps = ComponentProps<typeof FilledTag> & {
  gradient?: never
  onClick?: never
}
export const FilledTag = cerberus('span', tag, { defaultProps })

// GraidentTag ---------------------------------------------------

export type GradientTagProps = ComponentProps<typeof GradientTag> & {
  palette?: never
  onClick?: never
}
export const GradientTag = cerberus('span', gradientTag, { defaultProps })

// ClosableTag ---------------------------------------------------

export type ClosableTagProps = Omit<
  ComponentProps<typeof ClosableTagRoot>,
  'onClick'
> & {
  pending?: boolean
  gradient?: never
  onClick?: IconButtonProps['onClick']
}
export const ClosableTagRoot = cerberus('span', closableTag, { defaultProps })
