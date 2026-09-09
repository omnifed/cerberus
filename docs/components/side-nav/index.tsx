'use client'

import { getDocPageNavItems } from '@/app/docs/utils/helpers.server'
import { OrderedNavTree } from '@/lib/docs-content'
import { cerberus, For, Show, Tag, Text } from '@cerberus-design/react'
import { usePathname } from 'next/navigation'
import { LinkItem } from './link-item'
import { NEW } from './tags'

export function SideNav() {
  const pathname = usePathname()
  const category = pathname.split('/')[2] || ''
  const items = getDocPageNavItems(category)
  return (
    <cerberus.nav minW="12.875rem" px="sm" py="lg" w="full">
      <NavList items={items as OrderedNavTree} />
    </cerberus.nav>
  )
}

type NavListProps = {
  items: OrderedNavTree
}

function NavList(props: NavListProps) {
  return (
    <For each={props.items}>
      {({ groupName, links }) => (
        <div key={groupName}>
          <Text color="page.text.100" px="sm" py="0.75rem" textStyle="heading-2xs">
            {groupName}
          </Text>
          <For each={links}>
            {(item) => (
              <LinkItem key={item.title} href={item.href}>
                {item.title.replace(/data grid/i, '')}
                <Show when={NEW.includes(item.href)}>
                  <Tag palette="page" usage="outlined" textStyle="label-sm">
                    Preview
                  </Tag>
                </Show>
              </LinkItem>
            )}
          </For>
        </div>
      )}
    </For>
  )
}
