'use client'

import { Format } from '@cerberus-design/react'

export const ByteBasic = () => {
  return (
    <div>
      File size: <Format.Byte value={1450.45} />
    </div>
  )
}

export const NumberBasic = () => {
  return <Format.Number value={1450.45} />
}

export const RelativeTimeBasic = () => {
  return (
    <div>
      Edited <Format.RelativeTime value={new Date('2025-05-05')} />
    </div>
  )
}

export const RelativeTimeShort = () => {
  return (
    <div>
      Edited{' '}
      <Format.RelativeTime value={new Date('2025-05-05')} style="short" />
    </div>
  )
}
