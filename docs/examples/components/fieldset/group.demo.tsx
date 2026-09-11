import { Box } from '@/styled-system/jsx'
import { Radio } from '@carbon/icons-react'
import { Fieldset, RadioGroup } from '@cerberus-design/react'

export function FieldsetGroupDemo() {
  return (
    <Box w="1/2">
      <Fieldset legend="Who is your favorite?">
        <RadioGroup name="favorite" defaultValue="cerberus">
          <Radio value="cerberus">Cerberus</Radio>
          <Radio value="hades">Hades</Radio>
          <Radio value="zeus">Zeus</Radio>
        </RadioGroup>
      </Fieldset>
    </Box>
  )
}
