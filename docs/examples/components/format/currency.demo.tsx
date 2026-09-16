'use client'

import { Format } from '@cerberus-design/react'

export function CurrencyDemo() {
  return <Format.Number value={1234.45} style="currency" currency="USD" />
}
