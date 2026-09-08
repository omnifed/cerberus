import { VStack } from '@/styled-system/jsx'
import { For } from '@cerberus-design/react'
import { LinkItem } from '../link-item'
import { APP_BAR_LINKS } from './links'

export function AppBar() {
  return (
    <VStack
      borderRight="1px solid"
      borderColor="page.border.initial"
      gap="xl"
      h="full"
      px="sm"
      py="lg"
      w="6.125rem"
    >
      <For each={APP_BAR_LINKS}>
        {({ Icon, ...item }) => (
          <LinkItem key={item.label} icon={<Icon size={20} />} {...item}>
            {item.label}
          </LinkItem>
        )}
      </For>
    </VStack>
  )
}
