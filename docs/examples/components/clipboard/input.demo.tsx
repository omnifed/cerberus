'use client'

import { Button, Clipboard, Group } from '@cerberus-design/react'

export function InputDemo() {
  return (
    <Clipboard.Root maxW="300px" value="https://cerberus.digitalu.design/">
      <Clipboard.Control asChild>
        <Group layout="attached">
          <Clipboard.Input
            border="1px solid"
            borderColor="page.border.initial"
            px="md"
            rounded="sm"
            textStyle="label-sm"
            w="15rem"
          />
          <Clipboard.Trigger color="action.text.initial" asChild>
            <Button color="inherit" shape="default" size="md">
              <Clipboard.Indicator />
            </Button>
          </Clipboard.Trigger>
        </Group>
      </Clipboard.Control>
    </Clipboard.Root>
  )
}
