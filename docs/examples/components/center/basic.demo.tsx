import { DecorativeBox } from '@/app/components/decorative-box'
import { Center } from 'styled-system/jsx'

export function BasicDemo() {
  return (
    <Center h="100px" maxW="320px">
      <DecorativeBox p="sm">This is centered</DecorativeBox>
    </Center>
  )
}
