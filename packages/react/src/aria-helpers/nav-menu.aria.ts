export interface NavTriggerAriaValues {
  controls: string
  expanded?: boolean
}

interface NavTriggerAriaReturn {
  ['aria-controls']: string
  ['aria-expanded']: boolean
}

export function createNavTriggerProps(
  values: NavTriggerAriaValues,
): NavTriggerAriaReturn {
  return {
    ['aria-controls']: values.controls,
    ['aria-expanded']: values.expanded ?? false,
  }
}
