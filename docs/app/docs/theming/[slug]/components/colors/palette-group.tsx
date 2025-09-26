'use client'

import type { SemanticToken, Sentiment } from '@cerberus-design/panda-preset'
import { normalizeTokens, getTokenList } from '@/app/docs/utils/color-helpers'
import { Box, Grid, GridItem, VStack } from '@/styled-system/jsx'
import { For, Text, useThemeContext } from '@cerberus-design/react'
import { HexValue } from './hex-value'
import { PrimitiveBinding } from './primitive-binding'

interface PaletteGroupProps {
  palette: Sentiment
}

export function PaletteGroup(props: PaletteGroupProps) {
  const { palette } = props
  const { theme } = useThemeContext()
  const tokens = normalizeTokens(getTokenList(palette, theme), palette)

  function toDotNotation(value: string) {
    return value.replace(/-/g, '.')
  }

  function toKebabCase(value: string) {
    // convert camelCase to kebab-case
    return value.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase()
  }

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
          lg: 2,
        }}
        flexWrap="wrap"
        gap="lg"
      >
        <For each={Object.entries(tokens)}>
          {([usage, token]) => (
            <GridItem key={usage}>
              <VStack justify="center" w="full">
                <Box
                  border="1px solid"
                  borderColor="page.border.initial"
                  h="4rem"
                  rounded="lg"
                  w="full"
                  style={{
                    backgroundColor: `var(--cerberus-colors-${toKebabCase(usage)})`,
                  }}
                />
                <Text as="small" textStyle="label-sm">
                  {toDotNotation(usage)}
                </Text>
                <PrimitiveBinding value={(token as SemanticToken).value} />
                <HexValue value={(token as SemanticToken).value} />
              </VStack>
            </GridItem>
          )}
        </For>
      </Grid>
    </Box>
  )
}
