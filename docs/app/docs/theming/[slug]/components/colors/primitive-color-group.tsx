'use client'

import { Box, Grid, GridItem, HStack, VStack } from '@/styled-system/jsx'
import tokens from '@/styled-system/specs/tokens.json'
import { cerberus, For, Text } from '@cerberus-design/react'

type ColorGroup = {
  name: string
  value: string
  cssVar: string
}

type TokenGroup = {
  type: string
  values: ColorGroup[]
}

type TokensData = {
  type: string
  data: TokenGroup[]
}

export function PrimitiveColorGroup() {
  function formatPaletteName(palette: string): string {
    return palette.charAt(0).toUpperCase() + palette.slice(1)
  }

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
        <For each={Object.keys(result)}>
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
                <For each={Object.values(result[group])}>
                  {({ name, cssVar, value }) => (
                    <GridItem key={name}>
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
                          {name.split('.').pop()}
                        </Text>
                        <Text
                          as="small"
                          color="page.text.100"
                          textStyle="body-xs"
                          textAlign="center"
                        >
                          {value.includes('rgba') ? formatRgba(value) : value}
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

const colorTokens = (tokens as unknown as TokensData).data.find(
  (group) => group.type === 'colors',
) as TokenGroup

const result = groupColorsByPrefix(colorTokens)

function groupColorsByPrefix(data: TokenGroup): Record<string, ColorGroup[]> {
  const values = data.values
  const grouped: Record<string, ColorGroup[]> = {}

  for (let i = 0; i < values.length; i++) {
    const item = values[i]
    const name = item.name

    const dotIndex = name.indexOf('.')
    const groupName = dotIndex !== -1 ? name.slice(0, dotIndex) : name
    const groupKey = groupName as keyof typeof grouped

    if (grouped[groupKey] === undefined) {
      grouped[groupKey] = [item]
    } else {
      grouped[groupKey].push(item)
    }
  }

  return grouped
}

function formatRgba(rgbaString: string): string {
  // Ignore anything that doesn't start with "rgba("
  if (!rgbaString.startsWith('rgba(')) {
    return rgbaString
  }

  // Find the content inside the parentheses
  const start = rgbaString.indexOf('(') + 1
  const end = rgbaString.indexOf(')')

  if (start === 0 || end === -1) return rgbaString

  // Split the values by comma
  const parts = rgbaString.substring(start, end).split(',')

  if (parts.length !== 4) return rgbaString

  // Parse and round the values
  const r = Math.round(parseFloat(parts[0]))
  const g = Math.round(parseFloat(parts[1]))
  const b = Math.round(parseFloat(parts[2]))

  // Round alpha to 2 decimal places (e.g., 0.34999... -> 0.35)
  // Math.round(val * 100) / 100 is significantly faster than .toFixed(2)
  const a = Math.round(parseFloat(parts[3]) * 100) / 100

  return `rgba(${r}, ${g}, ${b}, ${a})`
}
