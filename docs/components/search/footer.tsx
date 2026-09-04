import { HStack } from '@/styled-system/jsx'
import { cerberus, Text } from '@cerberus-design/react'
import { Kbd } from '../ui/kbd'

export function Footer() {
  return (
    <cerberus.footer
      bgColor="page.surface.100"
      bottom="0"
      borderTop="1px solid"
      borderTopColor="page.border.initial"
      left="0"
      p="md"
      pos="absolute"
      rounded="md"
      zIndex="sticky"
      w="full"
    >
      <HStack justify="space-between" w="full">
        <HStack gap="lg">
          <HStack gap="xs">
            <Kbd>↑</Kbd>
            <Kbd>↓</Kbd>
            <Text as="small" ps="xs" textStyle="body-sm">
              Navigate
            </Text>
          </HStack>
          <HStack gap="xs">
            <Kbd>↵</Kbd>
            <Text as="small" ps="xs" textStyle="body-sm">
              Select
            </Text>
          </HStack>
        </HStack>

        <HStack gap="xs">
          <Kbd>
            <Text as="small" textStyle="mono-xs" fontSize="0.7rem" pt="xs">
              Esc
            </Text>
          </Kbd>
          <Text as="small" ps="xs" textStyle="body-sm">
            Close
          </Text>
        </HStack>
      </HStack>
    </cerberus.footer>
  )
}
