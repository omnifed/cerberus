import { Box } from '@/styled-system/jsx'
import { For, Tabs } from '@cerberus-design/react'

export function CustomDemo() {
  const tabData = [
    {
      id: 'asphodel',
      value: 'asphodel',
      label: 'Asphodel',
      content: 'A peaceful and quiet region of the underworld.',
    },
    {
      id: 'elysium',
      value: 'elysium',
      label: 'Elysium',
      content: 'A paradise for the souls of the heroic and the virtuous.',
    },
    {
      id: 'tartarus',
      value: 'tartarus',
      label: 'Tartarus',
      content: 'A deep abyss used as a dungeon of torment and suffering.',
    },
  ]

  return (
    <Box w="1/2">
      <Tabs.Root defaultValue="asphodel">
        <Tabs.List
          css={{
            bgColor: 'page.surface.200',
            borderBottom: 'none',
            rounded: 'md',
            '& > :is([data-part=indicator])': {
              bgColor: 'danger.surface.initial',
              h: 'var(--height)',
              rounded: 'md',
              zIndex: 'base',
            },
          }}
        >
          {tabData.map((tab) => (
            <Tabs.Tab
              css={{
                zIndex: 'decorator',
                _selected: {
                  color: 'danger.text.100',
                },
                _after: {
                  display: 'none',
                },
              }}
              key={tab.id}
              value={tab.value}
            >
              {tab.label}
            </Tabs.Tab>
          ))}
        </Tabs.List>

        <For each={tabData}>
          {(tab) => (
            <Tabs.Panel
              key={tab.id}
              value={tab.value}
              css={{
                paddingBlock: 'md',
              }}
            >
              {tab.content}
            </Tabs.Panel>
          )}
        </For>
      </Tabs.Root>
    </Box>
  )
}
