import type { Machine } from './machine'

export interface Props {
  /**
   * The value of the expanded items.
   * Don't mutate it; it's owned by the machine.
   * @default []
   */
  value?: string[] | undefined
  /** Whether multiple items can be open. */
  multiple?: boolean | undefined
  /** It's a required id */
  id: string
}

export interface ItemProps {
  /** The item's value */
  value: string
  /** Whether the item is disabled */
  disabled?: boolean | undefined
}

export interface AccordionSchema {
  // a "props:" mention in a comment shouldn't confuse member lookup
  props: Props & { dir?: 'ltr' | 'rtl' }
  context: Machine
}

export type Mapped = { [K in 'a' | 'b']: string }
