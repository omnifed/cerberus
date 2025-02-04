import type {
  SelectItemGroupLabelProps,
  SelectItemGroupProps,
} from '@ark-ui/react/select'
import { SelectItemGroup, SelectItemGroupLabel } from './primitives'

/**
 * The OptionGroup component is a group of options in the dropdown list.
 * @definition [Select docs](https://cerberus.digitalu.design/react/select)
 * @definition [ARK docs](https://ark-ui.com/react/docs/components/select)
 * @example
 * ```tsx
 * <OptionGroup>
 *  <OptionGroupLabel>Greek gods</OptionGroupLabel>
 *  ...
 * </OptionGroup>
 * ```
 */
export function OptionGroup(props: SelectItemGroupProps) {
  return <SelectItemGroup {...props} />
}

/**
 * The OptionGroupLabel component is the label of the OptionGroup.
 * @definition [Select docs](https://cerberus.digitalu.design/react/select)
 * @definition [ARK docs](https://ark-ui.com/react/docs/components/select)
 * @example
 * ```tsx
 * <OptionGroupLabel>Greek gods</OptionGroupLabel>
 * ```
 */
export function OptionGroupLabel(props: SelectItemGroupLabelProps) {
  return <SelectItemGroupLabel {...props} />
}
