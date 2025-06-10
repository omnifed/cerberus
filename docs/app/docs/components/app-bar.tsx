import { VStack } from '@/styled-system/jsx'
import { ColorPalette, LogoReact, Rocket, TaskTools } from '@carbon/icons-react'
import { For } from '@cerberus-design/react'
import { LinkItem } from './link-item'
import { getDocsItems } from '../utils/helpers.server'

export function AppBar() {
  const navItems = getDocsItems()

  const icons = {
    '1': Rocket,
    '2': LogoReact,
    '3': TaskTools,
    '4': ColorPalette,
  }

  function getIcon(id: keyof typeof icons) {
    const IconComponent = icons[id]
    return IconComponent ? <IconComponent size={20} /> : null
  }

  return (
    <VStack
      bgColor="page.surface.100"
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
