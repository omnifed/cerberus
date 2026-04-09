import { type FilterOperator } from '@cerberus-design/data-grid'

export const OPERATORS: Record<FilterOperator, FilterOperator> = {
  contains: 'contains',
  equals: 'equals',
  starts_with: 'starts_with',
  ends_with: 'ends_with',
  greater_than: 'greater_than',
  less_than: 'less_than',
  between: 'between',
  includes_some: 'includes_some',
}
