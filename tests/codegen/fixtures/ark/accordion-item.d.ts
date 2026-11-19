import type { ItemProps } from '../zag/index'
import type { PolymorphicProps } from './utils'

export interface AccordionItemBaseProps extends ItemProps, PolymorphicProps {}
export interface AccordionItemProps
  extends HTMLProps<'div'>, AccordionItemBaseProps {}

/** Ark re-exports the zag name under its own; this must not resolve to itself. */
export type { AccordionItemProps as ItemProps }
