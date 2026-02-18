import { HStack } from 'styled-system/jsx'
import { columns } from './columns.demo'
import { generateData } from './data'

export async function BasicDemo() {
  // Normally this would be from useQuery or a server-side API call
  const data = await generateData(1000)

  console.log({ data, columns })
  return <HStack w="3/4">TODO: create DataGrid export</HStack>
}
