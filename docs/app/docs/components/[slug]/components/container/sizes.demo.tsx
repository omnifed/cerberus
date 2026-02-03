import { Container, VStack } from 'styled-system/jsx'
import { DecorativeBox } from '@/app/components/decorative-box'

function getText(size: string) {
  return `This is some text within a container of size ${size}.`
}

export function SizesDemo() {
  return (
    <VStack w="full">
      <Container maxW="1/4" px="2" w="full">
        <DecorativeBox px="md">{getText('1/4')}</DecorativeBox>
      </Container>

      <Container maxW="1/2" px="2" w="full">
        <DecorativeBox px="md">{getText('1/2')}</DecorativeBox>
      </Container>

      <Container maxW="3/4" px="2" w="full">
        <DecorativeBox px="md">{getText('3/4')}</DecorativeBox>
      </Container>

      <Container px="2" w="full">
        <DecorativeBox px="md">{getText('full')}</DecorativeBox>
      </Container>
    </VStack>
  )
}
