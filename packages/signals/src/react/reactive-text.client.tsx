'use client'

import { memo } from 'react'
import type { Accessor } from '../core/types'
import { useRead } from './useRead.client'

export interface ReactiveTextProps {
  data: Accessor<string | number>
}

/**
 * ## Reactive Text
 * A component that renders with fine-grained updates.
 *
 * This means that whenever the value changes, only the text of the UI that
 * depend on the value will be re-rendered (**not the parent component or tree**).
 *
 * | Prop | Type | Required |
 * |------|------|----------|
 * | `data` | `Accessor<string or number>` | Yes |
 *
 * ## Resources
 * [Cerberus Signals Documentation](https://cerberus.dev/docs)
 */
export const ReactiveText = memo(({ data }: ReactiveTextProps) => {
  const value = useRead(data)
  return <>{value}</>
})
