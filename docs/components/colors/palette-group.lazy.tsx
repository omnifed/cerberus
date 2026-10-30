'use client'

import { getTokenNameFromPath, SemTokenResultVal } from '@/lib/design-system'
import { Box, Grid, GridItem, VStack } from '@/styled-system/jsx'
import { For, Text, useThemeContext } from '@cerberus-design/react'
import type { Sentiment } from '@cerberus/tokens'
import { memo } from 'react'
import { getPaletteTokens } from './helpers'
import { HexValue } from './hex-value'
import { PrimitiveBinding } from './primitive-binding'

interface PaletteGroupProps {
  palette: Sentiment | string
}

function PaletteGroupEl(props: PaletteGroupProps) {
  const { palette } = props
  const { theme } = useThemeContext()
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
        <For each={tokens}>{(token) => <Swatch key={token.key} token={token} />}</For>
      </Grid>
    </Box>
  )
}

type SwatchProps = {
  token: SemTokenResultVal
}

function Swatch(props: SwatchProps) {
  const { token } = props
  if (!token.key) return null
  return (
    <GridItem>
      <VStack justify="center" w="full">
        <Box
          border="1px solid"
          borderColor="page.border.initial"
          h="4rem"
          rounded="lg"
          w="full"
          style={{
            backgroundColor: `var(${token.cssVar})`,
          }}
        />
        <Text as="small" textStyle="label-sm">
          {getTokenNameFromPath(token.key!)}
        </Text>
        <PrimitiveBinding reference={token.originalValue} />
        <HexValue value={token.raw?.value ?? ''} />
      </VStack>
    </GridItem>
  )
}

export default memo(PaletteGroupEl)
