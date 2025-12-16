'use client'

import { primitiveColorTokens } from '@cerberus/tokens'
import { Box, Grid, GridItem, VStack } from '@/styled-system/jsx'
import { For, Text } from '@cerberus-design/react'

interface PrimitiveColorGroupProps {
  theme?: 'cerberus' | 'acheron'
}

export function PrimitiveColorGroup(props: PrimitiveColorGroupProps) {
  const { theme = 'cerberus' } = props
  const themeColors = primitiveColorTokens[theme]

  // Get all color palettes except 'drop-shadow' as it's not a color palette
  const colorPalettes = Object.entries(themeColors).filter(
    ([key]) => key !== 'drop-shadow',
  )

  function formatPaletteName(palette: string): string {
    // Convert palette names to proper case
    return palette.charAt(0).toUpperCase() + palette.slice(1)
  }

  function getColorValue(color: any): string {
    return color?.$value || '#000000'
  }

  return (
    <Box
      border="1px solid"
      borderColor="page.border.initial"
      p="lg"
      rounded="lg"
      w="full"
    >
      <VStack gap="xl">
        <For each={colorPalettes}>
          {([paletteName, paletteColors]) => (
            <Box key={paletteName} w="full">
              <Text
                as="h4"
                textStyle="heading-sm"
                mb="md"
                color="page.text.initial"
              >
                {formatPaletteName(paletteName)}
              </Text>
              <Grid
                columns={{
                  base: 4,
                  md: 6,
                  lg: 8,
                }}
                gap="sm"
              >
                <For each={Object.entries(paletteColors)}>
                  {([colorKey, colorValue]) => (
                    <GridItem key={colorKey}>
                      <VStack justify="center" gap="xs">
                        <Box
                          border="1px solid"
                          borderColor="page.border.initial"
                          h="3rem"
                          rounded="md"
                          w="full"
                          style={{
                            backgroundColor: getColorValue(colorValue),
                          }}
                        />
                        <Text
                          as="small"
                          textStyle="label-xs"
                          textAlign="center"
                        >
                          {colorKey}
                        </Text>
                        <Text
                          as="small"
                          color="page.text.100"
                          textStyle="body-xs"
                          textAlign="center"
                        >
                          {getColorValue(colorValue)}
                        </Text>
                      </VStack>
                    </GridItem>
                  )}
                </For>
              </Grid>
            </Box>
          )}
        </For>
      </VStack>
    </Box>
  )
}
