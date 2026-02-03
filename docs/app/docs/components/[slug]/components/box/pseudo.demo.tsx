import { Box } from 'styled-system/jsx'

export function PsuedoDemo() {
  return (
    <Box bg="tomato" w="100%" p="4" color="white" _hover={{ bg: 'green' }}>
      A Box is not a Button
    </Box>
  )
}
