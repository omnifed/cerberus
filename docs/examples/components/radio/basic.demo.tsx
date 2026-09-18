import { Box } from '@/styled-system/jsx'
import { Radio, RadioGroup } from '@cerberus-design/react'

export function BasicDemo() {
  return (
    <Box w="1/2">
      <RadioGroup defaultValue="cerberus" justifyContent="center">
        <Radio value="cerberus">Cerberus</Radio>
        <Radio value="hades">Hades</Radio>
        <Radio value="zeus">Zeus</Radio>
      </RadioGroup>
    </Box>
  )
}
