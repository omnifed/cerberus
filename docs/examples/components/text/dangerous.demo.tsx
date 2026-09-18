import { Text } from '@cerberus-design/react'

export function DangerousDemo() {
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
