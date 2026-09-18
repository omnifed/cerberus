import { CircularProgress, Text } from '@cerberus-design/react'

export function LabelDemo() {
  return (
    <CircularProgress
      defaultValue={60}
      label={
        <Text color="info.text.initial" textStyle="heading-sm">
          Loading
        </Text>
      }
      size="md"
    />
  )
}
