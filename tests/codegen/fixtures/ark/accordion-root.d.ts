import type * as accordion from '../zag/index'
import type { Assign, Optional, PolymorphicProps } from './utils'
import type { Props as OtherProps } from '../other/index'

export interface UseAccordionProps extends Optional<
  Omit<accordion.Props, 'dir'>,
  'id'
> {}

export type AccordionRootBaseProps = Assign<
  UseAccordionProps,
  { lazyMount?: boolean }
> &
  PolymorphicProps

/** Legal TS, but the heritage regex stops at the first `{`. */
export interface HeritageWithObject extends Assign<
  UseAccordionProps,
  { lazyMount?: boolean }
> {}

export type AccordionRootProps = AccordionRootBaseProps

export type FromSchema = accordion.AccordionSchema['props']

export type Picked = Pick<accordion.Props, 'id' | 'multiple'>
export type AllRequired = Required<Partial<accordion.Props>>

export type Unrelated = OtherProps
