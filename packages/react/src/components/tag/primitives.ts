import { ark } from '@ark-ui/react/factory'
import { ComponentProps } from 'react'
import { cerberus } from 'styled-system/jsx/factory'
import { gradientTag, tag } from 'styled-system/recipes'

export const baseTagAttrs = {
  'data-scope': 'tag',
  'data-part': 'root',
}

export type FilledTagProps = ComponentProps<typeof FilledTag> & {
  gradient?: never
  onClick?: never
}
export const FilledTag = cerberus(ark.span, tag)

export type GradientTagProps = ComponentProps<typeof GradientTag> & {
  palette?: never
  onClick?: never
}
export const GradientTag = cerberus(ark.span, gradientTag)
