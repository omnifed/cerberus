import { Box } from '@/styled-system/jsx'
import { Tabs } from '@cerberus-design/react'

export function VerticalDemo() {
  return (
    <Box w="full">
      <Tabs.Root
        defaultValue="overview"
        orientation="vertical"
        indicatorPlacement="start"
      >
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
