import { tokens } from '@cerberus/panda-preset'
import { Box, HStack, VStack } from '@/styled-system/jsx'
import { For, Text } from '@cerberus-design/react'

type FontToken = {
  name: string
  description: string
  value: string
}

export function FontTokensGroup() {
  const fontTokens = tokens.fonts as Record<string, FontToken>

  return (
    <Box
      border="1px solid"
      borderColor="page.border.initial"
      mb="lg"
      px="lg"
      pb="md"
      rounded="lg"
      w="full"
    >
      <VStack alignItems="flex-start" gap="lg" w="full">
        <For each={Object.entries(fontTokens)}>
          {([name, token]) => (
            <Box
              key={name}
              borderTop="1px solid"
              borderTopColor="page.border.100"
              _firstOfType={{
                borderTop: 'initial',
              }}
              pt="md"
              w="full"
            >
              <VStack alignItems="flex-start" gap="sm" w="full">
                <Text
                  fontFamily={name as 'display' | 'sans' | 'mono'}
                  fontSize="xl"
                  fontWeight="600"
                >
                  This is example text
                </Text>

                <VStack alignItems="flex-start" gap="xs" w="full">
                  <HStack gap="2">
                    <Text as="small">Value: </Text>
                    <code>{name}</code>
                  </HStack>
                  <Text color="page.text.200" fontSize="xs" textStyle="body-sm">
                    {token.description}
                  </Text>
                  <Text color="page.text.300" fontFamily="mono" fontSize="xs">
                    {token.value}
                  </Text>
                </VStack>
              </VStack>
            </Box>
          )}
        </For>
      </VStack>
    </Box>
  )
}
