import {
  Button,
  ButtonParts,
  CircularProgress,
  IconButton,
  Menu,
  Spinner,
  Tag,
  Text,
} from '@cerberus-design/solid'
import { Title } from '@solidjs/meta'
import { Index } from 'solid-js'
import { Box, HStack, VStack } from 'styled-system/jsx'

export default function DocsPage() {
  return (
    <>
      <Title>Docs</Title>

      <VStack alignItems="flex-start" gap="lg" px="lg" py="10" w="full">
        <Text as="h2" textStyle="heading-md">
          Buttons
        </Text>
        <HStack gap="md" w="full">
          <Button>test</Button>
          <ButtonParts.Root pending>
            <ButtonParts.Icon />
            pending
          </ButtonParts.Root>
          <Button usage="outlined">outlined</Button>
          <Button shape="rounded">rounded</Button>
          <Button usage="ghost">ghost</Button>
          <Button size="sm">small</Button>
        </HStack>

        <Text as="h2" textStyle="heading-md">
          Icon Buttons
        </Text>
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

        <Text as="h2" textStyle="heading-md">
          Circular Progress
        </Text>
        <HStack w="full">
          <Index each={[0, 25, 50, 75, 100]}>
            {(value) => (
              <CircularProgress
                id={`progress-${value()}`}
                label="label"
                now={value()}
                title="Course completion"
                size="5rem"
              />
            )}
          </Index>
        </HStack>

        <Text as="h2" textStyle="heading-md">
          Spinner
        </Text>
        <HStack gap="md" w="full">
          <Box w="2rem">
            <Spinner />
          </Box>
        </HStack>

        <Text as="h2" textStyle="heading-md">
          Tag
        </Text>
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

        <Text as="h2" textStyle="heading-md">
          Menu
        </Text>
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
