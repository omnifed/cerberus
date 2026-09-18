'use client'

import { Format } from '@cerberus-design/react'

export function PercentageDemo() {
  return (
    <Format.Number
      value={0.145}
      style="percent"
      maximumFractionDigits={2}
      minimumFractionDigits={2}
    />
  )
}
