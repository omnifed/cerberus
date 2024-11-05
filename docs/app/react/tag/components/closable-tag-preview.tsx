'use client'

import { Tag } from '@cerberus-design/react'
import { useCallback } from 'react'

export function ClosableTagPreview() {
  const handleClick = useCallback(() => {
    console.log('Clicked!')
  }, [])

  return <Tag onClick={handleClick}>Closable</Tag>
}
