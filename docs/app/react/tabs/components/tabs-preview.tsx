import { Tabs } from '@cerberus-design/react'
import { Box } from '@cerberus/styled-system/jsx'
import { css } from '@cerberus/styled-system/css'

export function BasicTabsPreview() {
  return (
    <Box w="1/2">
      <Tabs.Root defaultValue="overview">
        <Tabs.List>
          <Tabs.Tab value="overview">Overview</Tabs.Tab>
          <Tabs.Tab value="features">Features</Tabs.Tab>
          <Tabs.Tab value="pricing">Pricing</Tabs.Tab>
        </Tabs.List>
        <Tabs.Panel value="overview">Overview content</Tabs.Panel>
        <Tabs.Panel value="features">Features content</Tabs.Panel>
        <Tabs.Panel value="pricing">Pricing content</Tabs.Panel>
      </Tabs.Root>
    </Box>
  )
}

export function SecondaryTabsPreview() {
  return (
    <Box w="1/2">
      <Tabs.Root defaultValue="overview-1" palette="secondaryAction">
        <Tabs.List>
          <Tabs.Tab value="overview-1">Overview</Tabs.Tab>
          <Tabs.Tab value="features-1">Features</Tabs.Tab>
          <Tabs.Tab value="pricing-1">Pricing</Tabs.Tab>
        </Tabs.List>
        <Tabs.Panel value="overview-1">Overview content</Tabs.Panel>
        <Tabs.Panel value="features-1">Features content</Tabs.Panel>
        <Tabs.Panel value="pricing-1">Pricing content</Tabs.Panel>
      </Tabs.Root>
    </Box>
  )
}

export function CachedTabsPreview() {
  return (
    <Box w="1/2">
      <Tabs.Root defaultValue="features">
        <Tabs.List>
          <Tabs.Tab value="overview">Overview</Tabs.Tab>
          <Tabs.Tab value="features">Features</Tabs.Tab>
          <Tabs.Tab value="pricing">Pricing</Tabs.Tab>
        </Tabs.List>
        <Tabs.Panel value="overview">Overview content</Tabs.Panel>
        <Tabs.Panel value="features">Features content</Tabs.Panel>
        <Tabs.Panel value="pricing">Pricing content</Tabs.Panel>
      </Tabs.Root>
    </Box>
  )
}

export function CustomTabsPreview() {
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
          className={css({
            bgColor: 'page.surface.200',
            borderBottom: 'none',
            rounded: 'md',
            '& > :is([data-part=indicator])': {
              bgColor: 'danger.surface.initial',
              h: 'var(--height)',
              rounded: 'md',
              zIndex: 'base',
            },
          })}
        >
          {tabData.map((tab) => (
            <Tabs.Tab
              className={css({
                zIndex: 'decorator',
                _selected: {
                  color: 'danger.text.100',
                },
                _after: {
                  display: 'none',
                },
              })}
              key={tab.id}
              value={tab.value}
            >
              {tab.label}
            </Tabs.Tab>
          ))}
        </Tabs.List>
        {tabData.map((tab) => (
          <Tabs.Panel
            className={css({
              paddingBlock: 'md',
            })}
            key={tab.id}
            value={tab.value}
          >
            {tab.content}
          </Tabs.Panel>
        ))}
      </Tabs.Root>
    </Box>
  )
}
