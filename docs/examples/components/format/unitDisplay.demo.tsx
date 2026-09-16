'use client'

import { Format } from '@cerberus-design/react'

export function UnitDisplayDemo() {
  const value = 50345.53
  const unitDisplays = ['narrow', 'short', 'long'] as const

  return (
    <div>
      {unitDisplays.map((unitDisplay) => (
        <Format.Byte key={unitDisplay} value={value} unitDisplay={unitDisplay} />
      ))}
    </div>
  )
}
