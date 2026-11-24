import { Button } from '@cerberus-design/react'

export function StyledDemo() {
  return (
    <Button
      bgColor="info.ghost.hover/30"
      color="info.text.initial"
      _hover={{
        bgColor: 'info.ghost.hover',
        color: 'info.text.100',
      }}
    >
      Customized
    </Button>
  )
}
