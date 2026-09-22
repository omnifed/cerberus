'use client'

import { Box, Grid, GridItem, VStack } from '@/styled-system/jsx'
import { For, Text, useThemeContext } from '@cerberus-design/react'
import type { Sentiment } from '@cerberus/tokens'
import { memo } from 'react'
import {
  getPaletteTokens,
  getConditionValue,
  getPrimitiveTokenReference,
  resolveHexValue,
} from './helpers'
import { HexValue } from './hex-value'
import { PrimitiveBinding } from './primitive-binding'

interface PaletteGroupProps {
  palette: Sentiment | string
}

function PaletteGroupEl(props: PaletteGroupProps) {
  const { palette } = props
  const { theme, mode } = useThemeContext()

  const tokens = getPaletteTokens(theme, palette)

  return (
    <Box
      border="1px solid"
      borderColor="page.border.initial"
      bgColor="page.surface.100/70"
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
        <For each={tokens}>
          {(token) => {
            // 2. Synchronously resolve the raw string (e.g. "{colors.neutral.80}") and actual Hex for this mode
            const rawValue = getConditionValue(token.values, theme, mode)
            const primitiveRef = getPrimitiveTokenReference(rawValue)
            const exactHex = resolveHexValue(theme, rawValue)

            return (
              <GridItem key={token.name}>
                <VStack justify="center" w="full">
                  <Box
                    border="1px solid"
                    borderColor="page.border.initial"
                    h="4rem"
                    rounded="lg"
                    w="full"
                    style={{
                      // 3. Fallback to native CSS browser evaluation for the visual swatch
                      backgroundColor: token.cssVar,
                    }}
                  />
                  <Text as="small" textStyle="label-sm">
                    {token.name}
                  </Text>
                  <PrimitiveBinding reference={primitiveRef} />
                  <HexValue value={exactHex} />
                </VStack>
              </GridItem>
            )
          }}
        </For>
      </Grid>
    </Box>
  )
}

export default memo(PaletteGroupEl)
