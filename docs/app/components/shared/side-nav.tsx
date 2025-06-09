'use client'

import { getDocPageNavItems } from '@/app/docs/utils/helpers.server'
import { VStack } from '@/styled-system/jsx'
import { For, Show, Text } from '@cerberus-design/react'
import { SideNavLinkItem } from './link-item'
import { usePathname } from 'next/navigation'

export function SideNav() {
  const pathname = usePathname()
  const section = pathname.split('/')[2] || ''

  return (
    <VStack
      alignItems="flex-start"
      bgColor="page.surface.100"
      gap="md"
      h="full"
      minW="12.875rem"
      px="sm"
      py="lg"
      w="full"
    >
      <For each={getDocPageNavItems(section)}>
        {(item) => (
          <Show
            key={item.id}
            when={item.href}
            fallback={
              <Text px="sm" textStyle="heading-xs">
                {item.label}
              </Text>
            }
          >
            <SideNavLinkItem key={item.id} href={item.slug}>
              {item.label}
            </SideNavLinkItem>
          </Show>
        )}
      </For>
    </VStack>
  )
}
