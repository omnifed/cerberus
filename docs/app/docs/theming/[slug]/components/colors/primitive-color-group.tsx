'use client'

import tokens from '@/styled-system/specs/tokens.json'
import { Box, Grid, GridItem, VStack } from '@/styled-system/jsx'
import { For, Text, useThemeContext } from '@cerberus-design/react'

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
  const { theme } = useThemeContext()

  const colors = (tokens as unknown as TokensData).data.find(
    (group) => group.type === 'colors',
  ) as TokenGroup
  const colorPalettes = colors?.values?.filter((color) =>
    color.name.includes(theme),
  )

  function formatPaletteName(palette: string): string {
    return palette.charAt(0).toUpperCase() + palette.slice(1)
  }

  const colorGroups = [
    'brand',
    'neutral',
    'info',
    'success',
    'warning',
    'danger',
  ].reduce((acc, group) => {
    const groupColors = colorPalettes?.filter((color) =>
      color.name.includes(group),
    )
    if (groupColors) {
      acc.push({ type: group, values: groupColors })
    }
    return acc
  }, [] as TokenGroup[])

  return (
    <Box
      border="1px solid"
      borderColor="page.border.initial"
      p="lg"
      rounded="lg"
      w="full"
    >
      <VStack gap="xl">
        <For each={colorGroups}>
          {(group) => (
            <Box key={group.type} w="full">
              <Text
                as="h4"
                textStyle="heading-sm"
                mb="md"
                color="page.text.initial"
              >
                {formatPaletteName(group.type)}
              </Text>
              <Grid
                columns={{
                  base: 4,
                  md: 6,
                  lg: 8,
                }}
                gap="sm"
              >
                <For each={group.values}>
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
                        <Text
                          as="small"
                          textStyle="label-xs"
                          textAlign="center"
                        >
                          {name.split('.').pop()}
                        </Text>
                        <Text
                          as="small"
                          color="page.text.100"
                          textStyle="body-xs"
                          textAlign="center"
                        >
                          {value}
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
