'use client'

import { Box, Grid, GridItem, HStack, VStack } from '@/styled-system/jsx'
import themesMeta from '@/styled-system/specs/themes.json'
import { cerberus, For, Text, useThemeContext } from '@cerberus-design/react'
import { RawThemes } from '@cerberus/tokens'
import { RawTheme } from 'shiki'

export function PrimitiveColorGroup() {
  const { theme } = useThemeContext()

  const activeTheme = getTokensByTheme(theme)
  if (!activeTheme) return null

  const primitives = groupColorsByPrefix(activeTheme.tokens[0])

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
                <For each={Object.values(primitives[group])}>
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

function PrimitiveSwatch(props: TokenValue) {
  const { name, cssVar, values } = props
  const value = values[0]?.value // no conditions for primitives

  return (
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
        <Text as="small" color="page.text.100" textStyle="body-xs" textAlign="center">
          {value.includes('rgba') ? formatRgba(value) : value}
        </Text>
      </VStack>
    </GridItem>
  )
}

// Helpers

type ThemeGroup = {
  name: RawTheme
  tokens: Tokens[]
  semanticTokens: any[]
}

type Tokens = {
  type: 'colors'
  values: TokenValue[]
  tokenFunctionExamples: string[]
  functionExamples: string[]
  jsxExamples: string[]
}

type TokenValue = {
  name: string
  values: Values[]
  cssVar: string
}

type Values = {
  value: string
  condition: string
}

function getTokensByTheme(theme: RawThemes): ThemeGroup | null {
  const group = themesMeta.data.find(
    (group) => group.name === (theme as unknown as string),
  )
  if (!group) return null
  return group as unknown as ThemeGroup
}

function groupColorsByPrefix(data: Tokens): Record<string, TokenValue[]> {
  const values = data.values
  const grouped: Record<string, TokenValue[]> = {}

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

function formatPaletteName(palette: string): string {
  return (palette.charAt(0).toUpperCase() + palette.slice(1)).replace('-', ' ')
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
