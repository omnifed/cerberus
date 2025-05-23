import { Text } from '@cerberus-design/react'

export default function ShowPreview() {
  return (
    <>
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
      <Text>This is normal text</Text>
      <Text as="small" color="info.text.100" textStyle="body-sm">
        This is small text
      </Text>
    </>
  )
}
