'use client'

import { tokens } from '@cerberus-design/panda-preset'
import { Box, Grid, GridItem, VStack } from '@/styled-system/jsx'
import { For, Text } from '@cerberus-design/react'

export function FontTokensGroup() {
  const fontTokens = tokens.fonts

  return (
    <Box
      border="1px solid"
      borderColor="page.border.initial"
      p="lg"
      rounded="lg"
      w="full"
    >
      <Grid
        columns={{
          base: 1,
          md: 2,
          lg: 3,
        }}
        gap="lg"
      >
        <For each={Object.entries(fontTokens)}>
          {([name, token]) => (
            <GridItem key={name}>
              <VStack alignItems="flex-start" gap="sm" w="full">
                <Box
                  border="1px solid"
                  borderColor="page.border.initial"
                  p="md"
                  rounded="md"
                  w="full"
                >
                  <Text
                    fontFamily={name as 'display' | 'sans' | 'mono'}
                    fontSize="xl"
                    fontWeight="600"
                  >
                    The quick brown fox jumps
                  </Text>
                </Box>

                <VStack alignItems="flex-start" gap="xs" w="full">
                  <Text
                    fontFamily="mono"
                    fontSize="sm"
                    fontWeight="600"
                    textStyle="label-sm"
                  >
                    {name}
                  </Text>
                  <Text color="page.text.200" fontSize="xs" textStyle="body-sm">
                    {token.description}
                  </Text>
                  <Text color="page.text.300" fontFamily="mono" fontSize="xs">
                    {token.value}
                  </Text>
                </VStack>
              </VStack>
            </GridItem>
          )}
        </For>
      </Grid>
    </Box>
  )
}
