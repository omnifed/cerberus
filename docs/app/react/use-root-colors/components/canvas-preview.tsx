'use client'

import { useRootColors } from '@cerberus-design/react'
import { VStack } from '@cerberus-design/styled-system/jsx'
import { useEffect, useRef } from 'react'

const colorList = ['dataViz.diverging.50', 'dataViz.diverging.200']

export default function CanvasPreview() {
  const colors = useRootColors(colorList)
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    if (!canvasRef.current) return
    if (Object.keys(colors).length !== colorList.length) return

    const ctx = canvasRef.current.getContext('2d')
    if (!ctx) return

    ctx.fillStyle = colors['dataViz.diverging.50']
    ctx.fillRect(0, 0, 100, 100)

    ctx.fillStyle = colors['dataViz.diverging.200']
    ctx.fillRect(100, 0, 100, 100)
  }, [colors])

  return (
    <VStack>
      <canvas
        width="200"
        height="100"
        ref={canvasRef}
        style={{ border: '1px solid black' }}
      />
      <small>This is adding data-viz colors to a canvas element.</small>
    </VStack>
  )
}
