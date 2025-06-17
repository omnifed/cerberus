import { SelectItemGroup, SelectItemGroupLabel } from './primitives'

/**
 * This module contains the named abstractions OptionGroup and OptionGroupLabel
 * components for API consistency with the Select component.
 * @module 'react/select/option-group'
 */

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
export const OptionGroup = SelectItemGroup

/**
 * The OptionGroupLabel component is the label of the OptionGroup.
 * @definition [Select docs](https://cerberus.digitalu.design/react/select)
 * @definition [ARK docs](https://ark-ui.com/react/docs/components/select)
 * @example
 * ```tsx
 * <OptionGroupLabel>Greek gods</OptionGroupLabel>
 * ```
 */
export const OptionGroupLabel = SelectItemGroupLabel
