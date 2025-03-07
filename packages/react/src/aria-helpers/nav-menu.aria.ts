export interface NavTriggerAriaValues {
  controls: string
  expanded?: boolean
}

interface NavTriggerAriaReturn {
  ['aria-controls']: string
  ['aria-expanded']: boolean
}

/**
 * @deprecated will be removed in a future release
 */
export function createNavTriggerProps(
  values: NavTriggerAriaValues,
): NavTriggerAriaReturn {
  return {
    ['aria-controls']: values.controls,
    ['aria-expanded']: values.expanded ?? false,
  }
}
