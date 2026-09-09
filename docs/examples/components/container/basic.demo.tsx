import { DecorativeBox } from '@/app/components/decorative-box'
import { Container } from 'styled-system/jsx'

export function BasicDemo() {
  return (
    <Container bgColor="page.surface.100">
      <DecorativeBox p="md">Content in a Container</DecorativeBox>
    </Container>
  )
}
