import { HStack, Stack } from '@/styled-system/jsx'
import { Dialog, For, Text } from '@cerberus-design/react'
import { APP_BAR_LINKS } from '../app-bar/links'
import { StyledLink } from './results'

export function FallbackLinks() {
  return (
    <Stack gap="md">
      <For each={APP_BAR_LINKS}>
        {(item) => (
          <Dialog.CloseTrigger key={item.label} asChild>
            <StyledLink data-search-item href={item.href}>
              <HStack gap="sm" w="full">
                <item.Icon />
                <Text textStyle="label-md">{item.label}</Text>
              </HStack>
            </StyledLink>
          </Dialog.CloseTrigger>
        )}
      </For>
    </Stack>
  )
}
