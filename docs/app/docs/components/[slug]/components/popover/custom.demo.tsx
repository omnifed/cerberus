import { PopoverParts } from '@cerberus-design/react'

export function CustomDemo() {
  return (
    <PopoverParts.Root size="lg">
      <PopoverParts.Trigger>Custom Trigger</PopoverParts.Trigger>

      <PopoverParts.Positioner>
        <PopoverParts.Content bgColor="page.bg.100" border="2px solid" rounded="none">
          <PopoverParts.Header pb="lg">This is a custom popover</PopoverParts.Header>
          <PopoverParts.Body bgColor="page.bg.200">
            That is fully built from scratch
          </PopoverParts.Body>
          <PopoverParts.Footer textStyle="heading-2xs">
            Footer sturf
          </PopoverParts.Footer>
        </PopoverParts.Content>
      </PopoverParts.Positioner>
    </PopoverParts.Root>
  )
}
