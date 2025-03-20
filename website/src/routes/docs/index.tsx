import {
  Button,
  CircularProgress,
  IconButton,
  Menu,
  Spinner,
  Tag,
} from '@cerberus/solid'
import { Title } from '@solidjs/meta'
import { Index } from 'solid-js'
import { Box, HStack, VStack } from 'styled-system/jsx'

export default function DocsPage() {
  return (
    <>
      <Title>Docs</Title>

      <VStack alignItems="flex-start" gap="lg" px="lg" py="10" w="full">
        <h2>Buttons</h2>
        <HStack gap="md" w="full">
          <Button>test</Button>
          <Button pending>pending</Button>
          <Button usage="outlined">outlined</Button>
          <Button shape="rounded">rounded</Button>
          <Button usage="ghost">ghost</Button>
          <Button size="sm">small</Button>
        </HStack>

        <h2>Icon Buttons</h2>
        <HStack gap="md" w="full">
          <IconButton ariaLabel="icon button">x</IconButton>
          <IconButton ariaLabel="icon button" usage="outlined">
            x
          </IconButton>
          <IconButton ariaLabel="icon button" usage="filled">
            x
          </IconButton>
          <IconButton ariaLabel="icon button" size="sm">
            x
          </IconButton>
        </HStack>

        <h2>Circular Progress</h2>
        <HStack gap="md" w="full">
          <Index each={[0, 25, 50, 75, 100]}>
            {(value) => (
              <Box w="4rem">
                <CircularProgress
                  id={`progress-${value()}`}
                  label="label"
                  now={value()}
                  title="Course completion"
                />
              </Box>
            )}
          </Index>
        </HStack>

        <h2>Spinner</h2>
        <HStack gap="md" w="full">
          <Box w="2rem">
            <Spinner />
          </Box>
        </HStack>

        <h2>Tag</h2>
        <HStack gap="md" w="full">
          <Tag>default</Tag>
          <Tag usage="outlined">outlined</Tag>
          <Tag shape="pill">pill</Tag>
          <Tag shape="square">square</Tag>
          <Tag gradient="nyx-dark">gradient</Tag>
          <Tag gradient="nyx-dark" usage="outlined">
            gradient
          </Tag>
        </HStack>

        <h2>Menu</h2>
        <HStack gap="md" w="full">
          <Menu.Root>
            <Menu.Trigger
              asChild={(props) => <Button {...props}>Trigger</Button>}
            />
            <Menu.Content>
              <Menu.Item value="item-1">Item 1</Menu.Item>
              <Menu.Item value="item-2">Item 2</Menu.Item>
              <Menu.Item value="item-3">Item 3</Menu.Item>
            </Menu.Content>
          </Menu.Root>
        </HStack>
      </VStack>
    </>
  )
}
