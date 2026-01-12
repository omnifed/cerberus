'use client'

import { getDocPageNavItems } from '@/app/docs/utils/helpers.server'
import { cerberus, For, Show, Text } from '@cerberus-design/react'
import { SideNavLinkItem } from './link-item'
import { usePathname } from 'next/navigation'

export function SideNav() {
  const pathname = usePathname()
  const section = pathname.split('/')[2] || ''

  return (
    <cerberus.nav
      css={{
        minW: '12.875rem',
        px: 'sm',
        py: 'lg',
        w: 'full',
      }}
    >
      <For each={getDocPageNavItems(section)}>
        {(item, idx) => (
          <Show
            key={`${idx}:${item.id}`}
            when={item.href}
            fallback={
              <Text
                color="page.text.100"
                px="sm"
                py="0.75rem"
                textStyle="heading-2xs"
              >
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
    </cerberus.nav>
  )
}
