import { CheckmarkIcon, IndeterminateIcon } from './icons/checkbox.icons'
import { AnimatingUploadIcon } from '../components/AnimatingUploadIcon'
import { cerberusIcons } from '@cerberus/icons'
import type { DefinedIcons, IconType } from './types'

const defaultIcons: Pick<
  DefinedIcons,
  'checkbox' | 'fileUploader' | 'indeterminate'
> = {
  checkbox: CheckmarkIcon,
  fileUploader: AnimatingUploadIcon,
  indeterminate: IndeterminateIcon,
}

/**
 * Defines the icons that will be used in Cerberus React components via the
 * CerberusProvider.
 * @param icons The icons that will be used in Cerberus React components.
 * @returns Icons object compatible with the CerberusProvider SystemConfig.
 * @example
 * ```tsx
 * const icons = defineIcons({
 *  accordionIndicator: MyAccordionIndicatorIcon,
 *  ...
 * })
 * ```
 */
export function defineIcons<T extends IconType>(
  icons: DefinedIcons,
): Required<DefinedIcons<T>> {
  return {
    ...defaultIcons,
    ...icons,
  } as Required<DefinedIcons<T>>
}

/**
 * @deprecated use the CerberusProvider instead
 */
export const $cerberusIcons = {
  ...defaultIcons,
  ...cerberusIcons,
} as unknown as Required<DefinedIcons>
