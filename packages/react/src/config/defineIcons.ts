import { defaultIcons } from './icons/default'
import type { DefinedIcons, IconType } from './types'

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
  icons: DefinedIcons<T>,
): Required<DefinedIcons<T>> {
  return {
    ...defaultIcons,
    ...icons,
  } as Required<DefinedIcons<T>>
}
