import { RadioParts } from '@cerberus-design/react'

export function CustomDemo() {
  return (
    <RadioParts.Root>
      <RadioParts.Item>
        <RadioParts.ItemText textStyle="body-lg">Cerberus</RadioParts.ItemText>
        <RadioParts.ItemControl
          bgColor="info.bg.initial"
          h="8"
          w="8"
          transform="skew(-10deg)"
          _checked={{ bg: 'warning.bg.initial' }}
        />
        <RadioParts.ItemHiddenInput />
      </RadioParts.Item>
    </RadioParts.Root>
  )
}
