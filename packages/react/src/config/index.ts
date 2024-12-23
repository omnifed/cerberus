import type { SystemConfig } from './types'

/**
 * Create a system configuration object to be used on the CerberusProvider.
 * @param options The system configuration options you want to customize.
 * @returns A CerberusProvider-compatible system configuration object.
 * @example
 * ```tsx
 * const icons = defineIcons({
 *  accordionIndicator: MyAccordionIndicatorIcon,
 *  ...
 * })
 * const config = makeSystemConfig({
 *   icons,
 * })
 *
 * // In your app
 * <CerberusProvider config={config}>
 *  <App />
 * </CerberusProvider>
 * ```
 */
export function makeSystemConfig(options: SystemConfig): SystemConfig {
  return options
}

export * from './defineIcons'
export * from './types'
