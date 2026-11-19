import type { ComponentProps } from 'styled-system/jsx'
import type { AccordionItemBaseProps } from './ark/index'

declare const AccordionItem: unknown

export type ItemGroupProps = ComponentProps<typeof AccordionItem> & {
  /** The heading shown in the trigger. Don't leave it empty. */
  heading: string
  /**
   * Where the indicator sits.
   * @default 'end'
   */
  indicatorPosition?:
    | 'start'
    | 'end'
}

export type Broken = MissingType

export type WithMapped = import('./zag/index').Mapped

export type UnionProps = AccordionItemBaseProps &
  ({ src: string; alt: string } | { fallback: string })
