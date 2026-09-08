import { HStack, Stack } from '@/styled-system/jsx'
import { DialogCloseTrigger, For, Text } from '@cerberus-design/react'
import { APP_BAR_LINKS } from '../app-bar/links'
import { StyledLink } from './results'

export function FallbackLinks() {
  return (
    <Stack gap="md">
      <For each={APP_BAR_LINKS}>
        {(item) => (
          <DialogCloseTrigger key={item.label} asChild>
            <StyledLink
              href={item.href}
              px="md"
              py="sm"
              rounded="sm"
              transition="colors"
              _hover={{
                bgColor: 'page.bg.initial',
              }}
            >
              <HStack gap="sm" w="full">
                <item.Icon />
                <Text textStyle="label-md">{item.label}</Text>
              </HStack>
            </StyledLink>
          </DialogCloseTrigger>
        )}
      </For>
    </Stack>
  )
}
