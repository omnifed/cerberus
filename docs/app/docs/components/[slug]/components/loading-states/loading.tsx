import { Tag, Text } from '@cerberus-design/react'
import { Box, Circle, HStack, VStack } from 'styled-system/jsx'
import { css } from 'styled-system/css'

export function OverviewPreview() {
  return (
    <HStack justify="space-between" w="3/4">
      <VStack alignItems="flex-start">
        <HStack justify="space-between" w="full">
          <Box aria-busy="true" rounded="sm">
            <Text>This is a description of something.</Text>
          </Box>
          <HStack>
            <Circle aria-busy="true" size="6" />
            <Circle aria-busy="true" size="6" />
            <Circle aria-busy="true" size="6" />
          </HStack>
        </HStack>
        <Box aria-busy="true" rounded="sm">
          <Text as="h2">Trash content</Text>
          <Text>
            Trash content is a place where you can find all the content that you
            have deleted. You can restore or permanently delete the content from
            here.
          </Text>
        </Box>
        <Tag
          className={css({
            alignSelf: 'center',
          })}
          shape="pill"
        >
          Skeleton
        </Tag>
      </VStack>
    </HStack>
  )
}
