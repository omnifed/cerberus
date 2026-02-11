'use client'

import { getDocPageNavItems } from '@/app/docs/utils/helpers.server'
import { cerberus, For, Show, Tag, Text } from '@cerberus-design/react'
import { SideNavLinkItem } from './link-item'
import { usePathname } from 'next/navigation'
import { NEW } from './side-nav/tags'

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
              <Show when={NEW.includes(item.label)}>
                <Tag
                  gradient="asphodel-dark"
                  usage="outlined"
                  textStyle="label-sm"
                >
                  New
                </Tag>
              </Show>
            </SideNavLinkItem>
          </Show>
        )}
      </For>
    </cerberus.nav>
  )
}
