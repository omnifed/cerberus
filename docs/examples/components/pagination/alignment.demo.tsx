import { VStack } from 'styled-system/jsx'
import { Pagination } from '@cerberus-design/react'
import { DecorativeBox } from '@/app/components/decorative-box'

export function AlignmentDemo() {
  return (
    <VStack alignItems="flex-end" w="3/4">
      <DecorativeBox h="200px" />
      <Pagination count={5} pageSize={2} />
    </VStack>
  )
}
