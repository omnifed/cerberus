'use client'

import { HStack } from 'styled-system/jsx'
import { columns } from './columns.demo'
import { generateData } from './data'

// Normally this would be from useQuery or a server-side API call
const data = generateData(1000)

export function BasicDemo() {
  console.log({ data, columns })
  return <HStack w="3/4">TODO: create DataGrid export</HStack>
}
