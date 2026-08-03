import { DecorativeBox } from '@/app/components/decorative-box'
import { Cq, VStack } from '@/styled-system/jsx'

export function TypeDemo() {
  return (
    <VStack gap="lg" mx="md" w="full">
      <Cq type="normal" w="full">
        <ContainerBox />
      </Cq>

      <Cq type="normal" mx="md" w="1/2">
        <ContainerBox />
      </Cq>

      <Cq type="normal" mx="md" w="1/3">
        <ContainerBox />
      </Cq>
    </VStack>
  )
}

function ContainerBox() {
  return (
    <DecorativeBox
      bgColor={{
        base: 'danger.bg.initial',
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
