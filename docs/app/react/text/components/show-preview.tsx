import { Text } from '@cerberus-design/react'

export default function ShowPreview() {
  return (
    <Text
      as="h1"
      color="page.text.100"
      textStyle={{
        base: 'heading-md',
        md: 'heading-lg',
      }}
    >
      Hello, world!
    </Text>
  )
}
