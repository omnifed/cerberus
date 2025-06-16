import type { SemanticToken, Sentiment } from '@cerberus-design/panda-preset'
import { normalizeTokens, getTokenList } from '@/app/docs/utils/color-helpers'
import { Box, Grid, VStack } from '@/styled-system/jsx'
import { For, Text } from '@cerberus-design/react'
import { HexValue } from './hex-value'

interface PaletteGroupProps {
  palette: Sentiment
}

export function PaletteGroup(props: PaletteGroupProps) {
  const { palette } = props
  const tokens = normalizeTokens(getTokenList(palette), palette)

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
          base: 2,
          md: 4,
          lg: 5,
        }}
        flexWrap="wrap"
        gap="lg"
      >
        <For each={Object.entries(tokens)}>
          {([usage, token]) => (
            <VStack key={usage} justify="center">
              <Box
                border="1px solid"
                borderColor="page.border.initial"
                h="5rem"
                rounded="lg"
                w="7rem"
                style={{
                  backgroundColor: `var(--cerberus-colors-${toKebabCase(usage)})`,
                }}
              />
              <Text as="small" textStyle="label-sm">
                {toDotNotation(usage)}
              </Text>
              <HexValue value={(token as SemanticToken).value} />
            </VStack>
          )}
        </For>
      </Grid>
    </Box>
  )
}
