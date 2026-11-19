import { Box } from '@/styled-system/jsx'
import { Tabs } from '@cerberus-design/react'

export function CachedDemo() {
  return (
    <Box w="1/2">
      <Tabs.Root defaultValue="features">
        <Tabs.ListGroup>
          <Tabs.Trigger value="overview">Overview</Tabs.Trigger>
          <Tabs.Trigger value="features">Features</Tabs.Trigger>
          <Tabs.Trigger value="pricing">Pricing</Tabs.Trigger>
        </Tabs.ListGroup>
        <Tabs.Content value="overview">Overview content</Tabs.Content>
        <Tabs.Content value="features">Features content</Tabs.Content>
        <Tabs.Content value="pricing">Pricing content</Tabs.Content>
      </Tabs.Root>
    </Box>
  )
}
