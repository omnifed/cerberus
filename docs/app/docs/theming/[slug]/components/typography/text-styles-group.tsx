'use client'

import { figmaTextStyles } from '@cerberus-design/panda-preset'
import { Box, Grid, GridItem, VStack } from '@/styled-system/jsx'
import { For, Text } from '@cerberus-design/react'

export function TextStylesGroup() {
  const { results } = figmaTextStyles

  // Group text styles by category
  const groupedStyles = Object.entries(results).reduce(
    (acc, [nodeId, data]) => {
      const styleName = data.name.replace('/', '-')
      const category = styleName.split('-')[0]

      if (!acc[category]) {
        acc[category] = []
      }

      acc[category].push({ nodeId, styleName, ...data })
      return acc
    },
    {} as Record<
      string,
      Array<{ nodeId: string; styleName: string } & (typeof results)[string]>
    >,
  )

  // Sort categories in a logical order
  const categoryOrder = [
    'display',
    'heading',
    'h1',
    'h2',
    'h3',
    'h4',
    'h5',
    'h6',
    'body',
    'label',
    'button',
    'mono',
  ]
  const sortedCategories = Object.keys(groupedStyles).sort((a, b) => {
    const aIndex = categoryOrder.indexOf(a)
    const bIndex = categoryOrder.indexOf(b)
    if (aIndex === -1 && bIndex === -1) return a.localeCompare(b)
    if (aIndex === -1) return 1
    if (bIndex === -1) return -1
    return aIndex - bIndex
  })

  return (
    <VStack gap="xl" w="full">
      <For each={sortedCategories}>
        {(category) => (
          <Box key={category} w="full">
            <Text
              as="h3"
              mb="md"
              textStyle="heading-sm"
              textTransform="capitalize"
            >
              {category} Styles
            </Text>

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
                  lg: 2,
                }}
                gap="lg"
              >
                <For each={groupedStyles[category]}>
                  {(style) => (
                    <GridItem key={style.nodeId}>
                      <VStack alignItems="flex-start" gap="sm" w="full">
                        <Box
                          border="1px solid"
                          borderColor="page.border.initial"
                          p="md"
                          rounded="md"
                          w="full"
                        >
                          <Text textStyle={style.styleName as any}>
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
                            {style.name}
                          </Text>
                          <Text
                            color="page.text.200"
                            fontSize="xs"
                            textStyle="body-sm"
                          >
                            {style.description}
                          </Text>
                          <VStack alignItems="flex-start" gap="2xs" w="full">
                            <Text
                              color="page.text.300"
                              fontFamily="mono"
                              fontSize="xs"
                            >
                              fontSize: {style.styles.fontSize / 16}rem
                            </Text>
                            <Text
                              color="page.text.300"
                              fontFamily="mono"
                              fontSize="xs"
                            >
                              fontWeight: {style.styles.fontWeight}
                            </Text>
                            <Text
                              color="page.text.300"
                              fontFamily="mono"
                              fontSize="xs"
                            >
                              lineHeight:{' '}
                              {Math.floor(
                                style.styles.lineHeightPercentFontSize,
                              )}
                              %
                            </Text>
                          </VStack>
                        </VStack>
                      </VStack>
                    </GridItem>
                  )}
                </For>
              </Grid>
            </Box>
          </Box>
        )}
      </For>
    </VStack>
  )
}
