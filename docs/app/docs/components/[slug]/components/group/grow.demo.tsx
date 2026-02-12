import { Button, Group } from '@cerberus-design/react'

export function GrowDemo() {
  return (
    <Group layout="grow" w="3/4">
      <Button usage="outlined">First</Button>
      <Button usage="outlined">Second</Button>
      <Button usage="outlined">Third</Button>
    </Group>
  )
}
