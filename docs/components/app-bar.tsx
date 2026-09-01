import { getDocsItems } from '@/app/docs/utils/helpers.server'
import { VStack } from '@/styled-system/jsx'
import { BeeBat, ColorPalette, IbmMq, LogoReact, Rocket } from '@carbon/icons-react'
import { For } from '@cerberus-design/react'
import { LinkItem } from './link-item'

export function AppBar() {
  const navItems = getDocsItems()

  const icons = {
    '1': Rocket,
    '2': LogoReact,
    '2.a': LogoReact,
    '2.b': IbmMq,
    '3': BeeBat,
    '4': ColorPalette,
  }

  function getIcon(id: keyof typeof icons) {
    const IconComponent = icons[id]
    return IconComponent ? <IconComponent size={20} /> : null
  }

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
      <For each={navItems}>
        {(item) => (
          <LinkItem
            key={item.id}
            icon={getIcon(item.id as keyof typeof icons)}
            {...item}
          >
            {item.label}
          </LinkItem>
        )}
      </For>
    </VStack>
  )
}
