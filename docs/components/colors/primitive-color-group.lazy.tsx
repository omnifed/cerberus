'use client'

import { Box, Grid, GridItem, HStack, VStack } from '@/styled-system/jsx'
import { cerberus, For, Text, useThemeContext } from '@cerberus-design/react'
import { getThemeData, formatRgba, type SpecTokenValue } from './helpers'

export default function PrimitiveColorGroup() {
  const { theme } = useThemeContext()

  const activeTheme = getThemeData(theme)
  if (!activeTheme || !activeTheme.tokens?.length) return null

  // Group by prefix (e.g. "accent", "danger")
  const primitives = groupColorsByPrefix(activeTheme.tokens[0].values)

  return (
    <Box
      border="1px solid"
      borderColor="page.border.initial"
      bgColor="page.surface.100/70"
      p="lg"
      rounded="lg"
      w="full"
    >
      <VStack gap="2xl">
        <For each={Object.keys(primitives)}>
          {(group) => (
            <Box key={group} w="full">
              <HStack gap="none" justify="space-between" mb="md" w="full">
                <Text as="h4" textStyle="heading-sm" color="page.text.initial">
                  {formatPaletteName(group)}
                </Text>
                <pre>
                  <cerberus.code
                    color="page.text.100"
                    fontSize="xs"
                    textStyle="mono-xs"
                    textAlign="center"
                  >
                    {`var(--cerberus-colors-${group}-[level])`}
                  </cerberus.code>
                </pre>
              </HStack>

              <Grid
                columns={{
                  base: 4,
                  md: 5,
                }}
                gap="sm"
              >
                <For each={primitives[group]}>
                  {(value) => <PrimitiveSwatch key={value.name} {...value} />}
                </For>
              </Grid>
            </Box>
          )}
        </For>
      </VStack>
    </Box>
  )
}

function PrimitiveSwatch(props: SpecTokenValue) {
  const { name, cssVar, values } = props
  const value = values[0]?.value || '' // Primitives have no conditions

  return (
    <GridItem>
      <VStack justify="center" gap="xs">
        <Box
          border="1px solid"
          borderColor="page.border.initial"
          h="3rem"
          rounded="md"
          w="full"
          style={{
            backgroundColor: cssVar,
          }}
        />
        <Text as="small" textStyle="label-xs" textAlign="center">
          {name.includes('rgba') ? formatRgba(name) : name.split('.').pop()}
        </Text>
        <Text as="small" color="page.text.100" textStyle="body-xs" textAlign="center">
          {value.includes('rgba') ? formatRgba(value) : value}
        </Text>
      </VStack>
    </GridItem>
  )
}

// Local helper to group primitives
function groupColorsByPrefix(values: any[]): Record<string, SpecTokenValue[]> {
  const grouped: Record<string, SpecTokenValue[]> = {}

  for (const item of values) {
    const dotIndex = item.name.indexOf('.')
    const groupKey = dotIndex !== -1 ? item.name.slice(0, dotIndex) : item.name

    if (!grouped[groupKey]) {
      grouped[groupKey] = [item]
    } else {
      grouped[groupKey].push(item)
    }
  }

  return grouped
}

function formatPaletteName(palette: string): string {
  return (palette.charAt(0).toUpperCase() + palette.slice(1)).replace('-', ' ')
}
