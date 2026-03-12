import { Button, ButtonGroup, IconButton } from '@cerberus-design/react'
import { ChevronDown } from '@carbon/icons-react'
import { HStack } from 'styled-system/jsx'

export function AttachedDemo() {
  return (
    <HStack justify="center" w="full">
      <ButtonGroup layout="attached">
        <Button>Main action</Button>
        <IconButton ariaLabel="View options" shape="square" usage="filled">
          <ChevronDown />
        </IconButton>
      </ButtonGroup>

      <ButtonGroup layout="attached">
        <Button usage="outlined">Main action</Button>
        <IconButton ariaLabel="View options" shape="square" usage="outlined">
          <ChevronDown />
        </IconButton>
      </ButtonGroup>
    </HStack>
  )
}
