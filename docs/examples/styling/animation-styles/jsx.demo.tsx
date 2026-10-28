'use client'

import { Box, EmphasizedSlideIn } from '@/styled-system/jsx'
import { Button, Show } from '@cerberus-design/react'
import { useSignal } from '@cerberus-design/signals'

export function JSXDemo() {
  const [isVisible, setIsVisible] = useSignal<boolean>(false)

  return (
    <>
      <Button size="sm" onClick={() => setIsVisible(!isVisible)}>
        <Show when={isVisible} fallback="Show Emphasized Slide In">
          Reset
        </Show>
      </Button>

      <Show when={isVisible}>
        <EmphasizedSlideIn>
          <Box>This content will slide in with emphasis</Box>
        </EmphasizedSlideIn>
      </Show>
    </>
  )
}
