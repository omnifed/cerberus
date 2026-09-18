import { Avatar, Text } from '@cerberus-design/react'
import { Box, Float, HStack } from 'styled-system/jsx'

export function AvatarDemo() {
  return (
    <HStack py="2xl">
      <Box position="relative">
        <Avatar
          alt="User Avatar"
          src="https://avatars.githubusercontent.com/u/12345678?v=4"
          size="xl"
        />
        <Float placement="bottom-center" offsetY="-4px">
          <HStack bgColor="page.bg.100" px="sm" py="sm" rounded="full">
            <Text as="small" textStyle="label-sm" textWrap="nowrap">
              Listening to...
            </Text>
          </HStack>
        </Float>
      </Box>
    </HStack>
  )
}
