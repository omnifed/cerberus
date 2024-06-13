import { Tabs, TabList, Tab, TabPanel } from '@cerberus-design/react'
import { css } from '@cerberus/styled-system/css'

const overrideStyles = css({
  w: '1/2',
})

export function BasicTabsPreview() {
  return (
    <div className={overrideStyles}>
      <Tabs active="overview">
        <TabList description="Button detail pages">
          <Tab value="overview">Overview</Tab>
          <Tab value="features">Features</Tab>
          <Tab value="pricing">Pricing</Tab>
        </TabList>
        <TabPanel tab="overview">Overview content</TabPanel>
        <TabPanel tab="features">Features content</TabPanel>
        <TabPanel tab="pricing">Pricing content</TabPanel>
      </Tabs>
    </div>
  )
}

export function CachedTabsPreview() {
  return (
    <div className={overrideStyles}>
      <Tabs active="overview" cache>
        <TabList description="Button detail pages">
          <Tab value="overview">Overview</Tab>
          <Tab value="features">Features</Tab>
          <Tab value="pricing">Pricing</Tab>
        </TabList>
        <TabPanel tab="overview">Overview content</TabPanel>
        <TabPanel tab="features">Features content</TabPanel>
        <TabPanel tab="pricing">Pricing content</TabPanel>
      </Tabs>
    </div>
  )
}

export function CustomTabsPreview() {
  const tabData = [
    { id: 'overview', value: 'overview', label: 'Overview' },
    { id: 'features', value: 'features', label: 'Features' },
    { id: 'pricing', value: 'pricing', label: 'Pricing' },
  ]

  return (
    <div className={overrideStyles}>
      <Tabs active="overview">
        <TabList
          description="Custom tabs example"
          className={css({
            borderBottom: 'none',
            bgColor: 'neutral.surface.initial',
            justifyContent: 'space-evenly',
            mb: '4',
            rounded: 'full',
          })}
        >
          {tabData.map((tab) => (
            <Tab
              key={tab.id}
              className={css({
                h: '3.7rem',
                rounded: 'full',
                w: '1/3',
                _before: {
                  bgColor: 'initial',
                  bottom: 'initial',
                  content: '""',
                  h: 'initial',
                  position: 'initial',
                  left: 'initial',
                  right: 'initial',
                  transitionProperty: 'initial',
                  transitionDuration: 'initial',
                  transitionTimingFunction: 'initial',
                  w: 'initial',
                  willChange: 'initial',
                  zIndex: 'initial',
                },
                _after: {
                  borderTopLeftRadius: 'initial',
                  borderTopRightRadius: 'initial',
                  bottom: 'initial',
                  bgColor: 'initial',
                  content: '""',
                  left: 'initial',
                  position: 'initial',
                  right: 'initial',
                  h: 'initial',
                  transition: 'initial',
                  willChange: 'initial',
                  w: 'initial',
                  zIndex: 'initial',
                },
                _hover: {
                  bgColor: 'action.navigation.hover',
                  color: 'neutral.surface.initial',
                },
                _selected: {
                  bgColor: 'action.bg.initial',
                  color: 'action.text.initial',
                },
              })}
              value={tab.value}
            >
              {tab.label}
            </Tab>
          ))}
        </TabList>
        {tabData.map((tab) => (
          <TabPanel key={tab.id} tab={tab.value}>
            {tab.label} content
          </TabPanel>
        ))}
      </Tabs>
    </div>
  )
}
