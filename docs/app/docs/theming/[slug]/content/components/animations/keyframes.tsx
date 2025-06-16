import { Box, HStack, VStack } from '@/styled-system/jsx'
import { keyframes } from '@cerberus-design/panda-preset'
import { For, Text } from '@cerberus-design/react'

export function Keyframes() {
  return (
    <Box
      border="1px solid"
      borderColor="page.border.initial"
      p="xl"
      rounded="md"
      w="full"
    >
      <HStack flexWrap="wrap" gap="2xl" justify="space-evenly" w="full">
        <For each={Object.keys(keyframes)}>
          {(keyframe) => (
            <VStack key={keyframe} justify="center">
              <Box
                animationDuration="1s"
                animationIterationCount="infinite"
                bgColor="page.bg.200"
                h="var(--height, 6.5rem)"
                w="var(--height, 6.5rem)"
                css={{
                  '--height': '6.5rem',
                  '--width': '6.5rem',
                }}
                style={{
                  animationName: keyframe,
                }}
              />
              <Text as="small" textStyle="label-sm">
                {keyframe}
              </Text>
            </VStack>
          )}
        </For>
      </HStack>
    </Box>
  )
}
