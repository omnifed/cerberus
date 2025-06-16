import { Box, HStack, VStack } from '@/styled-system/jsx'
import { For, Text } from '@cerberus-design/react'

export function Durations() {
  const options = ['slowest', 'slower', 'slow', 'fast', 'faster', 'fastest']

  return (
    <Box
      border="1px solid"
      borderColor="page.border.initial"
      mb="lg"
      p="xl"
      rounded="md"
      w="full"
    >
      <HStack flexWrap="wrap" gap="2xl" justify="space-evenly" w="full">
        <For each={options}>
          {(duration) => (
            <VStack key={duration} justify="center">
              <Box
                data-duration={duration}
                animationName="spin"
                animationIterationCount="infinite"
                bgColor="page.bg.200"
                h="6.5rem"
                w="2px"
                css={{
                  '&:is([data-duration="slowest"])': {
                    animationDuration: 'slowest',
                  },
                  '&:is([data-duration="slower"])': {
                    animationDuration: 'slower',
                  },
                  '&:is([data-duration="slow"])': {
                    animationDuration: 'slow',
                  },
                  '&:is([data-duration="fast"])': {
                    animationDuration: 'fast',
                  },
                  '&:is([data-duration="faster"])': {
                    animationDuration: 'faster',
                  },
                  '&:is([data-duration="fastest"])': {
                    animationDuration: 'fastest',
                  },
                }}
              />
              <Text as="small" textStyle="label-sm">
                {duration}
              </Text>
            </VStack>
          )}
        </For>
      </HStack>
    </Box>
  )
}
