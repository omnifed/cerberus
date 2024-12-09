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
      <Tabs defaultValue="overview-1" id="secondary:tabs:preview">
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
      <Tabs value="tabs-cache-preview">
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
    { id: 'overview', value: 'overview', label: 'Wu' },
    { id: 'features', value: 'features', label: 'Tang' },
    { id: 'pricing', value: 'pricing', label: 'Forever' },
  ]

  return (
    <div className={overrideStyles}>
      <Tabs>
        <TabsList
          className={css({
            borderBottom: 'none',
            bgColor: 'black',
            justifyContent: 'space-evenly',
            mb: '4',
            rounded: 'full',
          })}
        >
          {tabData.map((tab) => (
            <Tab
              key={tab.id}
              className={css({
                borderTopLeftRadius: 'full',
                borderTopRightRadius: 'full',
                color: 'yellow',
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
                  bgColor: 'yellow',
                  color: 'black',
                },
                _selected: {
                  bgColor: 'yellow',
                  color: 'black',
                },
              })}
              value={tab.value}
            >
              {tab.label}
            </Tab>
          ))}
        </TabsList>
        {tabData.map((tab) => (
          <TabPanel key={tab.id} value={tab.value}>
            {tab.label} content
          </TabPanel>
        ))}
      </Tabs>
    </div>
  )
}
