'use client'

import { Tag } from '@cerberus-design/react'
import type { TagPreviewProps } from './tag-preview'
import { useCallback } from 'react'

export function ClosableTagPreview(props: TagPreviewProps) {
  const handleClick = useCallback(() => {
    console.log('Clicked!')
  }, [])

  return (
    <Tag shape="pill" onClick={handleClick} usage="filled">
      Closable
    </Tag>
  )
}
