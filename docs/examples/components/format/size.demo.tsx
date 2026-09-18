'use client'

import { Format } from '@cerberus-design/react'

export function SizeDemo() {
  const byteSizes = [50, 5000, 5000000, 5000000000]

  return (
    <div>
      {byteSizes.map((size, index) => (
        <div key={index}>
          <Format.Byte value={size} />
        </div>
      ))}
    </div>
  )
}
