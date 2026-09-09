import { Text } from '@cerberus-design/react'

export default function TextPreview() {
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

export function DangerouslySetDemo() {
  const rawHTML =
    '<p>This is a raw paragraph with a <strong>bold</strong> word and a <br /> line break.</p>'

  return (
    <Text
      dangerouslySetInnerHTML={{
        __html: rawHTML,
      }}
      textStyle="body-sm"
      whiteSpace="pre-wrap"
    />
  )
}
