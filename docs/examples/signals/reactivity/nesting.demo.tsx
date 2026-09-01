'use client'

import { Stack } from '@/styled-system/jsx'
import { Button, ButtonGroup } from '@cerberus-design/react'
import { useSignal } from '@cerberus-design/signals'

export function NestingDemo() {
  const [count, setCount] = useSignal<number>(0)
  const [data, setData] = useSignal({
    count,
    unique: 0,
  })
  const [final, setFinal] = useSignal({
    data,
    finalCount: 0,
  })

  return (
    <Stack gap="lg" w="3/4">
      <pre>
        <code>{JSON.stringify(final, null, 2)}</code>
      </pre>

      <ButtonGroup>
        <Button onClick={() => setCount(count + 1)}>Increment</Button>
        <Button
          onClick={() => setData((prev) => ({ ...prev, unique: prev.unique + 1 }))}
        >
          Increment Unique
        </Button>
        <Button
          onClick={() =>
            setFinal((prev) => ({ ...prev, finalCount: prev.finalCount + 1 }))
          }
        >
          Increment Final
        </Button>
      </ButtonGroup>
    </Stack>
  )
}
