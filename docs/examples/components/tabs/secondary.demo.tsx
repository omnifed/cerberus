import { Box } from '@/styled-system/jsx'
import { Tabs } from '@cerberus-design/react'

export function SecondaryDemo() {
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
