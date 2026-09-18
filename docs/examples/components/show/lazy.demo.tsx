'use client'

import { Stack } from '@/styled-system/jsx'
import { Button, Show, Text } from '@cerberus-design/react'
import { useSignal } from '@cerberus-design/signals'

export function LazyDemo() {
  const [loaded, setLoaded] = useSignal<boolean>(false)

  function handleLoad() {
    setLoaded(true)
  }

  return (
    <Stack w="1/2">
      <Button type="button" onClick={handleLoad}>
        Load Content
      </Button>

      <Show when={loaded}>{() => <LazyComponent />}</Show>
    </Stack>
  )
}

function LazyComponent() {
  console.log('Lazy component executed')
  return <Text>This is a lazy loaded component!</Text>
}
