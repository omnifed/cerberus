import { Text } from '@cerberus-design/react'
import {
  Box,
  Circle,
  Float,
  FloatProps,
  HStack,
  VStack,
} from 'styled-system/jsx'

export function PlacementsDemo() {
  const placements = [
    'bottom-end',
    'bottom-start',
    'top-end',
    'top-start',
    'bottom-center',
    'top-center',
    'middle-center',
    'middle-end',
    'middle-start',
  ] as const

  return (
    <HStack gap="14" flexWrap="wrap" px="md" pt="md" w="full">
      {placements.map((placement) => (
        <VStack key={placement} gap="sm" justify="center" pos="relative">
          <Box
            position="relative"
            width="80px"
            height="80px"
            bg="page.surface.100"
          >
            <MatchFloat placement={placement}>
              <Circle size="5" bg="red" color="white" textStyle="label-sm">
                3
              </Circle>
            </MatchFloat>
          </Box>
          <Text as="small" textStyle="label-sm">
            {placement}
          </Text>
        </VStack>
      ))}
    </HStack>
  )
}

function MatchFloat(props: FloatProps) {
  switch (props.placement) {
    case 'bottom-end':
      return <Float placement="bottom-end" {...props} />
    case 'bottom-start':
      return <Float placement="bottom-start" {...props} />
    case 'top-end':
      return <Float placement="top-end" {...props} />
    case 'top-start':
      return <Float placement="top-start" {...props} />
    case 'bottom-center':
      return <Float placement="bottom-center" {...props} />
    case 'top-center':
      return <Float placement="top-center" {...props} />
    case 'middle-center':
      return <Float placement="middle-center" {...props} />
    case 'middle-end':
      return <Float placement="middle-end" {...props} />
    case 'middle-start':
      return <Float placement="middle-start" {...props} />
    default:
      return null
  }
}
