import { ark } from '@ark-ui/react/factory'
import { type ComponentProps } from 'react'
import { styled } from 'styled-system/jsx/factory'
import { closableTag, gradientTag, tag } from 'styled-system/recipes'
import { type IconButtonProps } from '../icon-button'

export const baseTagAttrs = {
  'data-scope': 'tag',
  'data-part': 'root',
}

// FilledTag -----------------------------------------------------

export type FilledTagProps = ComponentProps<typeof FilledTag> & {
  gradient?: never
  onClick?: never
}
export const FilledTag = styled(ark.span, tag)

// GraidentTag ---------------------------------------------------

export type GradientTagProps = ComponentProps<typeof GradientTag> & {
  palette?: never
  onClick?: never
}
export const GradientTag = styled(ark.span, gradientTag)

// ClosableTag ---------------------------------------------------

export type ClosableTagProps = Omit<
  ComponentProps<typeof ClosableTagRoot>,
  'onClick'
> & {
  pending?: boolean
  gradient?: never
  onClick?: IconButtonProps['onClick']
}
export const ClosableTagRoot = styled(ark.span, closableTag)
