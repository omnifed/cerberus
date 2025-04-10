import {
  Avatar,
  Button,
  ButtonParts,
  CircularProgress,
  IconButton,
  makeAvatarInitials,
  Menu,
  Rating,
  Spinner,
  Tabs,
  Tag,
  Text,
} from '@cerberus-design/solid'
import { Title } from '@solidjs/meta'
import { Index, Show } from 'solid-js'
import { Box, HStack, VStack } from 'styled-system/jsx'

export default function DocsPage() {
  return (
    <>
      <Title>Docs</Title>

      <VStack alignItems="flex-start" gap="lg" px="lg" py="10" w="full">
        <Text as="h2" textStyle="heading-md">
          Avatar
        </Text>
        <HStack gap="md" w="full">
          <Avatar
            alt="no img"
            fallback={makeAvatarInitials('no img')}
            src=""
            size="xs"
          />
          <Avatar
            alt="no img"
            fallback={makeAvatarInitials('no img')}
            src=""
            gradient="charon-dark"
            size="sm"
          />
          <Avatar
            alt="no img"
            fallback={makeAvatarInitials('no img')}
            src=""
            gradient="asphodel-light"
            size="md"
          />
          <Avatar
            alt="no img"
            fallback={makeAvatarInitials('no img')}
            src=""
            gradient="asphodel-dark"
            size="lg"
          />
          <Avatar
            alt="no img"
            fallback={makeAvatarInitials('no img')}
            src=""
            gradient="amphiaraus-light"
            size="xl"
          />
          <Avatar
            alt="no img"
            fallback={makeAvatarInitials('no img')}
            src="https://avatars.githubusercontent.com/u/1023103?v=4"
            gradient="amphiaraus-dark"
            size="2xl"
          />
          <Avatar
            alt="no img"
            fallback={makeAvatarInitials('no img')}
            src="https://avatars.githubusercontent.com/u/1023102?v=4"
            gradient="hades-light"
            size="3xl"
          />
          <Avatar
            alt="no img"
            fallback={makeAvatarInitials('no img')}
            src="https://avatars.githubusercontent.com/u/1023100?v=4"
            gradient="hades-dark"
            size="4xl"
          />
          <Avatar
            fallback={makeAvatarInitials('no img')}
            size="4xl"
            css={{
              bgColor: 'warning.bg.initial',
              color: 'warning.text.initial',
            }}
          />
        </HStack>

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
          <Button
            css={{
              bgColor: 'warning.bg.initial',
              color: 'warning.text.initial',
            }}
          >
            Custom
          </Button>
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
          <IconButton
            ariaLabel="icon button"
            css={{
              colorPalette: 'warning',
            }}
          >
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
                syntax={value() === 0 ? 'Not Started' : 'Done'}
                size="5rem"
              />
            )}
          </Index>
        </HStack>

        <Text as="h2" textStyle="heading-md">
          Rating
        </Text>
        <HStack gap="md" w="full">
          <Box w="2rem">
            <Rating defaultValue={3}>
              {(context) => (
                <Show when={context().highlighted} fallback={<>N</>}>
                  <>F</>
                </Show>
              )}
            </Rating>
          </Box>
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
          Tabs
        </Text>
        <VStack alignItems="flex-start" gap="md" w="full">
          <Tabs.Root defaultValue="tab-1">
            <Tabs.List>
              <Tabs.Tab value="tab-1">Tab 1</Tabs.Tab>
              <Tabs.Tab value="tab-2">Tab 2</Tabs.Tab>
              <Tabs.Tab value="tab-3">Tab 3</Tabs.Tab>
            </Tabs.List>
            <Tabs.Panel value="tab-1">
              <Text>Content for Tab 1</Text>
            </Tabs.Panel>
            <Tabs.Panel value="tab-2">
              <Text>Content for Tab 2</Text>
            </Tabs.Panel>
            <Tabs.Panel value="tab-3">
              <Text>Content for Tab 3</Text>
            </Tabs.Panel>
          </Tabs.Root>

          <Tabs.Root defaultValue="custom-tab-1">
            <Tabs.List
              css={{
                bgColor: 'page.surface.100',
                borderBottom: 'none',
                display: 'flex',
                justifyContent: 'center',
                mx: 'auto',
                rounded: 'full',
                w: '27.375rem',
                '& > [data-part="indicator"]': {
                  gradient: 'charon-dark',
                  h: 'full',
                  rounded: 'full',
                  w: '1/2',
                  zIndex: 'base',
                },
              }}
            >
              <Tabs.Tab
                css={{
                  w: '1/2',
                  zIndex: 'decorator',
                  _hover: {
                    _after: {
                      h: 'initial',
                    },
                  },
                }}
                value="custom-tab-1"
              >
                Tab 1
              </Tabs.Tab>
              <Tabs.Tab
                css={{
                  w: '1/2',
                  zIndex: 'decorator',
                  _hover: {
                    _after: {
                      h: 'initial',
                    },
                  },
                }}
                value="custom-tab-2"
              >
                Tab 2
              </Tabs.Tab>
            </Tabs.List>
            <Tabs.Panel value="custom-tab-1">
              <Text>Content for Tab 1</Text>
            </Tabs.Panel>
            <Tabs.Panel value="custom-tab-2">
              <Text>Content for Tab 2</Text>
            </Tabs.Panel>
          </Tabs.Root>
        </VStack>

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
