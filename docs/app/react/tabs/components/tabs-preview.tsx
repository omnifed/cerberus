import { Tabs, Tab, TabPanel, TabsList } from '@cerberus-design/react'
import { css } from '@cerberus/styled-system/css'

const overrideStyles = css({
  w: '1/2',
})

export function BasicTabsPreview() {
  return (
    <div className={overrideStyles}>
      <Tabs defaultValue="overview">
        <TabsList>
          <Tab value="overview">Overview</Tab>
          <Tab value="features">Features</Tab>
          <Tab value="pricing">Pricing</Tab>
        </TabsList>
        <TabPanel value="overview">Overview content</TabPanel>
        <TabPanel value="features">Features content</TabPanel>
        <TabPanel value="pricing">Pricing content</TabPanel>
      </Tabs>
    </div>
  )
}

export function SecondaryTabsPreview() {
  return (
    <div className={overrideStyles}>
      <Tabs defaultValue="overview-1" palette="secondaryAction">
        <TabsList>
          <Tab value="overview-1">Overview</Tab>
          <Tab value="features-1">Features</Tab>
          <Tab value="pricing-1">Pricing</Tab>
        </TabsList>
        <TabPanel value="overview-1">Overview content</TabPanel>
        <TabPanel value="features-1">Features content</TabPanel>
        <TabPanel value="pricing-1">Pricing content</TabPanel>
      </Tabs>
    </div>
  )
}

export function CachedTabsPreview() {
  return (
    <div className={overrideStyles}>
      <Tabs cache defaultValue="features">
        <TabsList>
          <Tab value="overview">Overview</Tab>
          <Tab value="features">Features</Tab>
          <Tab value="pricing">Pricing</Tab>
        </TabsList>
        <TabPanel value="overview">Overview content</TabPanel>
        <TabPanel value="features">Features content</TabPanel>
        <TabPanel value="pricing">Pricing content</TabPanel>
      </Tabs>
    </div>
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
    <div className={overrideStyles}>
      <Tabs defaultValue="asphodel">
        <TabsList
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
            <Tab
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
            </Tab>
          ))}
        </TabsList>
        {tabData.map((tab) => (
          <TabPanel
            className={css({
              paddingBlock: 'md',
            })}
            key={tab.id}
            value={tab.value}
          >
            {tab.content}
          </TabPanel>
        ))}
      </Tabs>
    </div>
  )
}
