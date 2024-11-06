'use client'

import { useLayoutEffect, useState } from 'react'
import { highlight } from './shared'

interface BuilderCodeBlockProps {
  code: string
}

export function BuilderCodeBlock(props: BuilderCodeBlockProps) {
  const { code } = props
  const [nodes, setNodes] = useState<JSX.Element>(
    code as unknown as JSX.Element,
  )

  useLayoutEffect(() => {
    void highlight(code).then(setNodes)
  }, [code])

  return nodes ?? <p>Loading...</p>
}
