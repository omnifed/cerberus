import type { FeatureOpenOption } from '../types'

export const meta: Record<MetaKey, MetaValue> = {
  filter: {
    h: 119,
    w: 800,
    title: 'Filter By Column',
    size: '50rem',
  },
  manage: {
    h: 300,
    w: 320,
    title: 'Manage Columns',
    size: '20rem',
  },
}

export function getMainAxis(key: MetaKey): number {
  let val: number = 320 // default popover.size
  if (key === 'filter') val = meta.filter.w
  if (key === 'manage') val = meta.manage.w
  return -val - 1
}

// types

export type MetaKey = NonNullable<FeatureOpenOption['key']>

export type MetaValue = {
  h: number
  w: number
  placement?: string
  title: string
  size: string // w in rem value
}
