import { Highlight } from '@cerberus-design/react'

export function CaseDemo() {
  return (
    <Highlight
      text="The quick brown Fox jumps over the lazy Dog."
      query={['fox', 'dog']}
      ignoreCase
    />
  )
}
