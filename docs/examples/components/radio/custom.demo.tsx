import { RadioGroup } from '@cerberus-design/react'

export function CustomDemo() {
  return (
    <RadioGroup.Root defaultValue="cerberus">
      <RadioGroup.Item value="cerberus">
        <RadioGroup.ItemText textStyle="body-lg">Cerberus</RadioGroup.ItemText>
        <RadioGroup.ItemControl
          bgColor="info.bg.initial"
          h="8"
          w="8"
          transform="skew(-10deg)"
          _checked={{ bg: 'warning.bg.initial' }}
        />
        <RadioGroup.ItemHiddenInput />
      </RadioGroup.Item>
    </RadioGroup.Root>
  )
}
