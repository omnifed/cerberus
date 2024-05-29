export interface NavTriggerAriaValues {
  controls: string
  expanded: boolean
}

export function createNavTriggerProps(values: NavTriggerAriaValues) {
  return {
    ['aria-controls']: values.controls,
    ['aria-expanded']: values.expanded,
  }
}
