import { Button } from '@cerberus-design/react'

export function CustomDemo() {
  return (
    <Button
      bgColor="danger.bg.initial"
      color="danger.text.initial"
      rounded="md"
      transform="skew(-10deg)"
      _hover={{
        bgColor: 'black',
        color: 'yellow',
      }}
    >
      Cerberus Forever
    </Button>
  )
}
