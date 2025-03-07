'use client'

import { type ElementType, useLayoutEffect, useState } from 'react'
import { highlight } from './shared'

interface BuilderCodeBlockProps {
  code: string
}

export function BuilderCodeBlock(props: BuilderCodeBlockProps) {
  const { code } = props
  const [nodes, setNodes] = useState<ElementType>(
    code as unknown as ElementType,
  )

  useLayoutEffect(() => {
    void highlight(code).then(setNodes)
  }, [code])

  return <>{nodes}</>
}
