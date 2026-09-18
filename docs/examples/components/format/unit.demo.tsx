'use client'

import { Format } from '@cerberus-design/react'

export function UnitDemo() {
  const value = 1450.45
  const unit = 'bit'

  return (
    <div>
      File size: <Format.Byte value={value} unit={unit} />
    </div>
  )
}
