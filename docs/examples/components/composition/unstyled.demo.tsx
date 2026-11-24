import { Button } from '@cerberus-design/react'

export function UnstyledDemo() {
  return (
    <Button.Group>
      <Button unstyled>Unstyled</Button>
      <Button
        unstyled
        _hover={{ bgColor: 'info.ghost.hover', color: 'info.text.100' }}
      >
        Unstyled
      </Button>
    </Button.Group>
  )
}
