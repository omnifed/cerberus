import { Box } from '@/styled-system/jsx'
import { Tabs } from '@cerberus-design/react'

export function SecondaryDemo() {
  return (
    <Box w="1/2">
      <Tabs.Root defaultValue="overview-1" palette="secondaryAction">
        <Tabs.ListGroup>
          <Tabs.Trigger value="overview-1">Overview</Tabs.Trigger>
          <Tabs.Trigger value="features-1">Features</Tabs.Trigger>
          <Tabs.Trigger value="pricing-1">Pricing</Tabs.Trigger>
        </Tabs.ListGroup>
        <Tabs.Content value="overview-1">Overview content</Tabs.Content>
        <Tabs.Content value="features-1">Features content</Tabs.Content>
        <Tabs.Content value="pricing-1">Pricing content</Tabs.Content>
      </Tabs.Root>
    </Box>
  )
}
