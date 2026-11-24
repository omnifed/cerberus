import { ChevronDown } from '@carbon/icons-react'
import { Button, IconButton } from '@cerberus-design/react'
import { HStack } from 'styled-system/jsx'

export function AttachedDemo() {
  return (
    <HStack justify="center" w="full">
      <Button.Group layout="attached">
        <Button>Main action</Button>
        <IconButton ariaLabel="View options" shape="square" usage="filled">
          <ChevronDown />
        </IconButton>
      </Button.Group>

      <Button.Group layout="attached">
        <Button usage="outlined">Main action</Button>
        <IconButton ariaLabel="View options" shape="square" usage="outlined">
          <ChevronDown />
        </IconButton>
      </Button.Group>
    </HStack>
  )
}
