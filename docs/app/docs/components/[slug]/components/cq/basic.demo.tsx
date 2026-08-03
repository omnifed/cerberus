import { DecorativeBox } from '@/app/components/decorative-box'
import { Cq, VStack } from '@/styled-system/jsx'

export function BasicDemo() {
  return (
    <VStack gap="lg" mx="md" w="full">
      <Cq w="full">
        <ContainerBox />
      </Cq>

      <Cq mx="md" w="1/2">
        <ContainerBox />
      </Cq>

      <Cq mx="md" w="1/3">
        <ContainerBox />
      </Cq>
    </VStack>
  )
}

function ContainerBox() {
  return (
    <DecorativeBox
      bgColor={{
        base: 'tomato',
        '@/sm': 'indigo',
        '@/md': 'purple',
      }}
      h="200px"
      p="md"
      textAlign="center"
    >
      Responds to the container size change - resize the browser to see
    </DecorativeBox>
  )
}
